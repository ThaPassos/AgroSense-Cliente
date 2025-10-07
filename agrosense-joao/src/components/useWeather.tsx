import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  feelsLike: number;
  location: string;
  icon: string;
  aqi: number;
}

interface UseWeatherResult {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const useWeather = (latitude: number | null, longitude: number | null): UseWeatherResult => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        // Usando OpenWeatherMap API gratuita
        const API_KEY = 'dee3f902ad71b3766cf02cf4cf4b85f2'; 
        
        // Buscar dados meteorológicos reais
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        
        // Buscar dados de qualidade do ar
        const aqiResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );

        if (!weatherResponse.ok || !aqiResponse.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const weatherData = await weatherResponse.json();
        const aqiData = await aqiResponse.json();

        // Buscar nome da cidade via geocoding reverso
        const locationResponse = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
        );
        
        let locationName = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
        if (locationResponse.ok) {
          const locationData = await locationResponse.json();
          if (locationData.length > 0) {
            const city = locationData[0].name;
            const country = locationData[0].country;
            locationName = `${city}, ${country}`;
          }
        }

        const realWeatherData: WeatherData = {
          temperature: Math.round(weatherData.main.temp),
          description: weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1),
          humidity: weatherData.main.humidity,
          windSpeed: Math.round(weatherData.wind.speed * 3.6), // converter m/s para km/h
          pressure: weatherData.main.pressure,
          feelsLike: Math.round(weatherData.main.feels_like),
          location: locationName,
          icon: weatherData.weather[0].icon,
          aqi: aqiData.list[0].main.aqi * 20, // converter escala AQI para 0-100
        };

        setWeather(realWeatherData);
      } catch (err) {
        // Fallback para dados simulados em caso de erro
        const mockWeatherData: WeatherData = {
          temperature: Math.round(15 + Math.random() * 20),
          description: ['Ensolarado', 'Parcialmente nublado', 'Nublado', 'Chuva leve'][Math.floor(Math.random() * 4)],
          humidity: Math.round(40 + Math.random() * 40),
          windSpeed: Math.round(5 + Math.random() * 15),
          pressure: Math.round(1010 + Math.random() * 20),
          feelsLike: Math.round(15 + Math.random() * 20),
          location: `Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`,
          icon: 'sunny',
          aqi: Math.round(20 + Math.random() * 60),
        };
        setWeather(mockWeatherData);
        setError('Usando dados simulados - configure uma chave de API válida');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude]);

  return { weather, loading, error };
};