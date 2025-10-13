import { useState, useEffect } from 'react';
import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = 'dee3f902ad71b3766cf02cf4cf4b85f2';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
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
              setError('Permissão de localização negada.');
              break;
            case err.POSITION_UNAVAILABLE:
              setError('Localização indisponível.');
              break;
            case err.TIMEOUT:
              setError('Tempo esgotado ao obter localização.');
              break;
            default:
              setError('Erro desconhecido.');
          }
          setLoading(false);
        }
      );
    };

    getLocation();
  }, []);

  return { currentWeather, forecast, loading, error };
};
