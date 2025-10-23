import { Droplets, Cloud, Sun, CloudRain, Thermometer } from "lucide-react";

// Dados mockados - substitua pela chamada axios quando tiver dados reais
interface SensorData {
  temperature: number;
  soilHumidity: number;
  airHumidity: number;
  luminosity: number;
  rainfall: number;
  lastUpdate?: string;
}

// Dados mockados para demonstração
const mockData: SensorData = {
  temperature: 22,
  soilHumidity: 75,
  airHumidity: 65,
  luminosity: 850,
  rainfall: 2.6,
  lastUpdate: new Date().toLocaleTimeString('pt-BR'),
};

/* 
INTEGRAÇÃO COM AXIOS - Substitua o mockData por:

import axios from 'axios';
import { useEffect, useState } from 'react';

// Dentro do componente:
const [sensorData, setSensorData] = useState<SensorData | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://sua-api-spring/api/sensors');
      setSensorData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  fetchData();
  
  // Para dados em tempo real, use um intervalo:
  const interval = setInterval(fetchData, 5000); // Atualiza a cada 5 segundos
  
  return () => clearInterval(interval);
}, []);

// Use sensorData || mockData para ter fallback
*/

const IoTPanel = () => {
  // Quando integrar com axios, descomente e use:
  // const [sensorData, setSensorData] = useState<SensorData>(mockData);
  
  const data = mockData; // Substitua por: sensorData

  return (
    <div className="min-h-screen flex items-center justify-center p-6  from-[hsl(165_45%_96%)] via-[hsl(175_65%_88%/0.35)] to-[hsl(165_45%_96%)] font-novicento">
      <div className="max-w-md bg-gradient-to-b bg-[#627931] rounded-lg shadow-[0_20px_60px_-15px_hsl(165_50%_25%/0.4)] overflow-hidden lg:w-[400px] w-[250px]">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex justify-between mb-8 h-[80px] ">
            <div className="lg:w-[200px] w-[150px] flex justify-center lg:h-[50px] h-[45px] items-end">
              <h2 className="text-white lg:text-xl text-[17px] font-semibold tracking-wide">
              Área Agrícola 
            </h2>
            </div>
            
            <div className="w-[70px] h-[70px] rounded-full backdrop-blur-sm flex items-center justify-center">
              <Sun className="w-5 h-5 text-[hsl(50_100%_65%)]" />
            </div>
          </div>

          {/* Temperatura - Destaque Central */}
          <div className="relative flex items-center justify-center mb-8 lg:h-[300px] h-[150px]">
            {/* Círculos decorativos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="lg:w-48 lg:h-48 w-30 h-30 rounded-full bg-gradient-to-br from-[#445816] to-[#445816] opacity-20 animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="lg:w-36 lg:h-36 w-18 h-18 rounded-full bg-white/5 backdrop-blur-sm" />
            </div>
            
            {/* Valor da Temperatura */}
            <div className="relative z-10 text-center bg-white rounded-full lg:w-32 lg:h-32 w-23 h-23 flex flex-col items-center justify-center shadow-[0_0_30px_hsl(175_65%_50%/0.3)] transition-all duration-300 ease-out hover:scale-105">
              <div className="flex items-start">
                <span className="lg:text-5xl text-[30px] font-bold text-[hsl(165_45%_28%)]">
                  {data.temperature}
                </span>
                <span className="text-2xl font-semibold text-[hsl(165_65%_40%)] mt-1">
                  °C
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-t-3xl lg:h-[280px] h-[250px]">
          <div className="grid grid-cols-2 gap-4">
            {/* Umidade do Solo */}
            <div className="flex justify-end items-end lg:w-[150px] lg:h-[100px]">
              <div className="flex flex-col items-center p-4 rounded-2xl">
              <Droplets className="lg:w-8 lg:h-8 w-6 h-6 text-[hsl(165_65%_40%)] mb-2" />
              <span className="lg:text-3xl font-bold text-[hsl(165_45%_28%)]">
                {data.soilHumidity}%
              </span>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">
                Umidade Solo
              </p>
            </div>

            </div>

            {/* Umidade do Ar */}
            <div className="flex justify-end items-end lg:w-[120px] lg:h-[100px] h-[90px] w-[80px]">
              <div className="flex flex-col items-center p-4 rounded-2xl">
              <Cloud className="lg:w-8 lg:h-8 w-6 h-6 text-[hsl(175_65%_50%)] mb-2" />
              <span className="lg:text-3xl font-bold text-[hsl(165_45%_28%)]">
                {data.airHumidity}%
              </span>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">
                Umidade Ar
              </p>
            </div>
            </div>
            

            {/* Luminosidade */}
            <div className="flex justify-end items-end lg:w-[150px] lg:h-[100px] h-[75px]">
              <div className="flex flex-col items-center p-4 rounded-2xl">
              <Sun className="lg:w-8 lg:h-8 w-6 h-6 text-[hsl(50_100%_65%)] mb-2" />
              <span className="lg:text-3xl font-bold text-[hsl(165_45%_28%)]">
                {data.luminosity}
              </span>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">
                Luminosidade
              </p>
            </div>
            </div>
            

            {/* Chuva */}
            <div className="flex justify-end items-end lg:w-[120px] lg:h-[100px] h-[75px] w-[80px]">
              <div className="flex flex-col items-center p-4 rounded-2xl from-[hsl(165_45%_96%)] to-[hsl(165_45%_92%)] transition-all duration-300 ease-out hover:shadow-lg">
              <CloudRain className="lg:w-8 lg:h-8 w-6 h-6 text-[hsl(165_65%_40%)] mb-2" />
              <span className="lg:text-3xl font-bold text-[hsl(165_45%_28%)]">
                {data.rainfall}
              </span>
              <p className="text-xs text-muted-foreground font-medium mt-1 text-center">
                Chuva (mm)
              </p>
            </div>
            </div>
          </div>

          {data.lastUpdate && (
            <div className="mt-4 text-center flex justify-center items-end h-[45px]">
              <p className="text-xs text-muted-foreground">
                Última atualização: {data.lastUpdate}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IoTPanel;
