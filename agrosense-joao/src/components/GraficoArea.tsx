import { ComposedChart, Line, Area, Bar, XAxis, YAxis, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';
import { useSensorHistorico } from '../hooks/useSensorHistorico';

const GraficoArea = () => {
  const { dadosProcessados, loading, error } = useSensorHistorico("last5hours");

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <p className="text-muted-foreground">Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  if (dadosProcessados.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <p className="text-muted-foreground">Nenhum dado disponível</p>
      </div>
    );
  }

  const dadosGrafico = dadosProcessados.map((d) => ({
    name: d.name,
    Luminosidade: d.Luminosidade,
    UmidadeSolo: d.UmidadeSolo,
    UmidadeAr: d.UmidadeAr,
    Temperatura: d.Temperatura,
    Chuva: d.Chuva,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={dadosGrafico}
        margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="UmidadeAr" 
          fill="#82b64c" 
          stroke="#77a744" 
          name="Umidade Ar (%)"
          style={{
          }}
        />
        <Bar 
          dataKey="UmidadeSolo" 
          barSize={20} 
          fill="#3c7b35" 
          name="Umidade Solo (%)"
        />
        <Line 
          type="monotone" 
          dataKey="Luminosidade" 
          stroke="#ff7300" 
          name="Luminosidade (%)"
        />
        <Line 
          type="monotone" 
          dataKey="Chuva" 
          stroke="#c0ac26" 
          name="Chuva (%)"
        />
        <Scatter 
          dataKey="Temperatura" 
          fill="red" 
          name="Temperatura (°C)"
        />

          
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default GraficoArea;
