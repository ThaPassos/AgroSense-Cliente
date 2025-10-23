import { ComposedChart, Line, Area, Bar, XAxis, YAxis, Tooltip, Legend, Scatter } from 'recharts';

const data = [
  {
    name: 'Há 6 horas',
    Luminosidade: 590,
    UmidadeSolo: 800,
    UmidadeAr: 1400,
    Temperatura: 490,
    Chuva: 90,
  },
  {
    name: '5 horas',
    Luminosidade: 868,
    UmidadeSolo: 967,
    UmidadeAr: 1506,
    Temperatura: 590,
    Chuva: 50,
  },
  {
    name: '4 horas',
    Luminosidade: 1397,
    UmidadeSolo: 1098,
    UmidadeAr: 989,
    Temperatura: 350,
    Chuva: 40,
  },
  {
    name: '3 horas',
    Luminosidade: 1480,
    UmidadeSolo: 1200,
    UmidadeAr: 1228,
    Temperatura: 480,
    Chuva: 80
  },
  {
    name: '2 horas',
    Luminosidade: 1520,
    UmidadeSolo: 1108,
    UmidadeAr: 1100,
    Temperatura: 460,
    Chuva: 100
  },
  {
    name: 'Há 1 hora',
    Luminosidade: 1400,
    UmidadeSolo: 680,
    UmidadeAr: 1700,
    Temperatura: 380,
    Chuva: 200
  },
];

const GraficoArea = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <XAxis dataKey="name" scale="band" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="UmidadeAr" fill="#82b64c" stroke="#77a744" />
      <Bar dataKey="UmidadeSolo" barSize={20} fill="#3c7b35" />
      <Line type="monotone" dataKey="Luminosidade" stroke="#ff7300" />
      <Line type="monotone" dataKey="Chuva" stroke="#c0ac26" />
      <Scatter dataKey="Temperatura" fill="red" />
    </ComposedChart>
  );
};

export default GraficoArea;