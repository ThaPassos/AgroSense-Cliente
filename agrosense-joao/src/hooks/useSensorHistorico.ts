import { useEffect, useState } from "react";
import { api } from "../api/api";

export interface SensorData {
  id: number;
  temperatura: number;
  umidadeAr: number;
  soloPct: number;
  chuvaPct: number;
  luzPct: number;
  dataRegistro: string;
}

export interface HourlyAverage {
  name: string;
  Luminosidade: number;
  UmidadeSolo: number;
  UmidadeAr: number;
  Temperatura: number;
  Chuva: number;
}

export interface DailyAverage {
  date: string;
  temperatura: number;
  umidadeAr: number;
  soloPct: number;
  chuvaPct: number;
  luzPct: number;
}

export function useSensorHistorico(period: "weekly" | "biweekly" | "monthly" | "last6hours") {
  const [dados, setDados] = useState<SensorData[]>([]);
  const [dadosProcessados, setDadosProcessados] = useState<HourlyAverage[]>([]);
  const [dadosDiarios, setDadosDiarios] = useState<DailyAverage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHistorico() {
      try {
        setLoading(true);
        setError(null);
        
        let endpoint = "/sensores/semana";
        if (period === "biweekly") endpoint = "/sensores/quinzena";
        if (period === "monthly") endpoint = "/sensores/mes";
        if (period === "last6hours") endpoint = "/sensores/ultimas6h";

        console.log("Buscando dados do endpoint:", endpoint);
        const response = await api.get<SensorData[]>(endpoint);
        console.log("Dados recebidos:", response.data);
        console.log("Quantidade de registros:", response.data.length);
        
        if (response.data.length === 0) {
          console.warn("Nenhum dado retornado da API");
        }

        setDados(response.data);

        if (period === "last6hours") {
          const horas = period === "last6hours" ? 6 : 5;
          const processados = calcularMediasPorHora(response.data, horas);
          console.log("Dados processados por hora:", processados);
          setDadosProcessados(processados);
        } else {
          const diarios = calcularMediasPorDia(response.data);
          console.log("Dados diários processados:", diarios);
          setDadosDiarios(diarios);
        }
      } catch (error: any) {
        console.error("Erro ao buscar histórico:", error);
        console.error("Detalhes do erro:", error.response?.data);
        console.error("Status:", error.response?.status);
        const errorMessage = error.response?.data?.message || "Erro ao carregar dados do sensor";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchHistorico();

    if (period === "last6hours") {
      const interval = setInterval(fetchHistorico, 180000); 
      return () => clearInterval(interval);
    }
  }, [period]);

  return { dados, dadosProcessados, dadosDiarios, loading, error };
}

function calcularMediasPorHora(dados: SensorData[], numHoras: number): HourlyAverage[] {
  if (dados.length === 0) {
    console.warn("Nenhum dado para calcular médias por hora");
    return [];
  }

  const agora = new Date();
  const resultado: HourlyAverage[] = [];

  console.log(`Calculando médias para ${numHoras} horas`);

  for (let i = numHoras - 1; i >= 0; i--) {
    const horaFim = new Date(agora);
    horaFim.setHours(horaFim.getHours() - i);
    horaFim.setMinutes(0, 0, 0);

    const horaInicio = new Date(horaFim);
    horaInicio.setHours(horaInicio.getHours() - 1);

    const dadosHora = dados.filter((d) => {
      try {
        const dataRegistro = new Date(d.dataRegistro);
        return dataRegistro >= horaInicio && dataRegistro < horaFim;
      } catch (error) {
        console.error("Erro ao processar data:", d.dataRegistro);
        return false;
      }
    });

    console.log(`Hora ${i}: ${horaInicio.toLocaleString()} - ${horaFim.toLocaleString()}: ${dadosHora.length} registros`);

    if (dadosHora.length > 0) {
      const soma = dadosHora.reduce(
        (acc, d) => ({
          temperatura: acc.temperatura + (d.temperatura || 0),
          umidadeAr: acc.umidadeAr + (d.umidadeAr || 0),
          soloPct: acc.soloPct + (d.soloPct || 0),
          chuvaPct: acc.chuvaPct + (d.chuvaPct || 0),
          luzPct: acc.luzPct + (d.luzPct || 0),
        }),
        { temperatura: 0, umidadeAr: 0, soloPct: 0, chuvaPct: 0, luzPct: 0 }
      );

      const count = dadosHora.length;
      const nomeHora = i === 0 ? "Última hora" : `Há ${i}h`;

      const media = {
        name: nomeHora,
        Luminosidade: Math.round(soma.luzPct / count),
        UmidadeSolo: Math.round(soma.soloPct / count),
        UmidadeAr: Math.round(soma.umidadeAr / count),
        Temperatura: Math.round((soma.temperatura / count) * 10) / 10,
        Chuva: Math.round(soma.chuvaPct / count),
      };

      console.log(`Médias para ${nomeHora}:`, media);
      resultado.push(media);
    } else {
      
      const nomeHora = i === 0 ? "Última hora" : `Há ${i}h`;
      console.log(`Sem dados para ${nomeHora}`);
      resultado.push({
        name: nomeHora,
        Luminosidade: 0,
        UmidadeSolo: 0,
        UmidadeAr: 0,
        Temperatura: 0,
        Chuva: 0,
      });
    }
  }

  return resultado;
}

function calcularMediasPorDia(dados: SensorData[]): DailyAverage[] {
  if (dados.length === 0) {
    console.warn("Nenhum dado para calcular médias por dia");
    return [];
  }

  const dadosPorDia = dados.reduce((acc, dado) => {
    try {
      const date = new Date(dado.dataRegistro);
      const dia = date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });

      if (!acc[dia]) {
        acc[dia] = [];
      }
      acc[dia].push(dado);
      return acc;
    } catch (error) {
      console.error("Erro ao processar data para agrupamento:", dado.dataRegistro);
      return acc;
    }
  }, {} as Record<string, SensorData[]>);

  console.log("Dados agrupados por dia:", dadosPorDia);

  const mediasDiarias = Object.entries(dadosPorDia).map(([dia, registros]) => {
    const soma = registros.reduce(
      (acc, r) => ({
        temperatura: acc.temperatura + (r.temperatura || 0),
        umidadeAr: acc.umidadeAr + (r.umidadeAr || 0),
        soloPct: acc.soloPct + (r.soloPct || 0),
        chuvaPct: acc.chuvaPct + (r.chuvaPct || 0),
        luzPct: acc.luzPct + (r.luzPct || 0),
      }),
      { temperatura: 0, umidadeAr: 0, soloPct: 0, chuvaPct: 0, luzPct: 0 }
    );

    const count = registros.length;

    return {
      date: dia,
      temperatura: soma.temperatura / count,
      umidadeAr: soma.umidadeAr / count,
      soloPct: soma.soloPct / count,
      chuvaPct: soma.chuvaPct / count,
      luzPct: soma.luzPct / count,
    };
  });

  return mediasDiarias.sort((a, b) => {
    const [diaA, mesA] = a.date.split("/").map(Number);
    const [diaB, mesB] = b.date.split("/").map(Number);
    return mesA - mesB || diaA - diaB;
  });
}