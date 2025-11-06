import { useEffect, useState } from "react";
import { api } from "../api/api";

export interface SensorData {
  id: number;
  temperatura: number;
  umidadeAr: number;
  chuvaPct: number;
  soloPct: number;
  luzPct: number;
  dataRegistro: string;
}

export function useSensorTempoReal() {
  const [sensor, setSensor] = useState<SensorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTempoReal() {
      try {
        const response = await api.get<SensorData>("/sensores/tempo-real"); // ← CORREÇÃO AQUI
        setSensor(response.data);
      } catch (error) {
        console.error("Erro ao buscar dado em tempo real:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTempoReal();

    const interval = setInterval(fetchTempoReal, 180000); // 3 minutos = 180000 ms
    return () => clearInterval(interval);
  }, []);

  return { sensor, loading };
}