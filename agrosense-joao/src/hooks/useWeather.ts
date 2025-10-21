import { useState, useEffect } from 'react';
import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = 'dee3f902ad71b3766cf02cf4cf4b85f2';

// Dados genéricos de Brasília como fallback
const DEFAULT_WEATHER: WeatherData = {
  coord: { lon: -47.9292, lat: -15.7801 },
  weather: [{ id: 800, main: 'Clear', description: 'céu limpo', icon: '01d' }],
  main: {
    temp: 24,
    feels_like: 24,
    temp_min: 22,
    temp_max: 26,
    pressure: 1013,
    humidity: 65
  },
  wind: { speed: 3.5, deg: 90 },
  clouds: { all: 10 },
  sys: { country: 'BR' },
  name: 'Brasília',
  dt: Date.now() / 1000
};

const DEFAULT_FORECAST: ForecastData = {
  list: Array.from({ length: 32 }, (_, i) => ({
    dt: (Date.now() / 1000) + (i * 10800),
    main: { temp: 24 + (Math.random() * 4 - 2), humidity: 65 },
    weather: [{ id: 800, main: 'Clear', description: 'céu limpo', icon: '01d' }],
    clouds: { all: 10 },
    wind: { speed: 3.5 }
  })),
  city: { name: 'Brasília', country: 'BR' }
};

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData>(DEFAULT_WEATHER);
  const [forecast, setForecast] = useState<ForecastData>(DEFAULT_FORECAST);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      try {
        setLoading(true);
        setError(null);

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        if (!weatherResponse.ok) {
          throw new Error('Erro ao buscar dados do clima');
        }

        const weatherData: WeatherData = await weatherResponse.json();
        setCurrentWeather(weatherData);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        if (!forecastResponse.ok) {
          throw new Error('Erro ao buscar previsão do tempo');
        }

        const forecastData: ForecastData = await forecastResponse.json();
        setForecast(forecastData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        // Mantém os dados default em caso de erro
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocalização não é suportada pelo seu navegador');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err: GeolocationPositionError) => {
          switch (err.code) {
            case err.PERMISSION_DENIED:
              setError('Permissão de localização negada');
              break;
            case err.POSITION_UNAVAILABLE:
              setError('Localização indisponível');
              break;
            case err.TIMEOUT:
              setError('Tempo esgotado ao obter localização');
              break;
            default:
              setError('Erro desconhecido');
          }
          setLoading(false);
        }
      );
    };

    getLocation();
  }, []);

  return { currentWeather, forecast, loading, error };
};