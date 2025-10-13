import grupoDeElementos from "../assets/elementos.png";
import logoRedonda from "../assets/logoRedonda.png";
import WeatherCard from "../components/Card";
import { useWeather } from '../hooks/useWeather';

export default function Home() {
  const { currentWeather, forecast, loading, error } = useWeather();

  const data = new Date().toLocaleDateString("pt-BR",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-xl">Carregando dados do clima...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-xl text-red-500">{error}</p>
          <p className="mt-4 text-sm">Por favor, permita o acesso à sua localização para ver o clima.</p>
        </div>
      </div>
    );
  }

  if (!currentWeather || !forecast) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-xl">Não foi possível carregar os dados do clima.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="relative w-full h-80 grid grid-cols-[68.5%_31.5%]">
        <div className="bg-[rgb(98,121,49)] relative">
          <p className="text-[95px] leading-[1] text-left font-[Arial,Helvetica,sans-serif] font-bold text-[#ebe7d6] absolute left-65 top-15">
            Agro
            <br />
            Sense
          </p>
        </div>

        <div className="bg-[#ebe7d6] relative">
          <p className="text-[28px] text-left font-novicento font-normal text-[rgb(98,121,49)] absolute top-60 left-10 flex items-center gap-3">
            <img src={logoRedonda} alt="" className="w-[65px]" />
            Produção Rural
          </p>
        </div>

        <img
          src={grupoDeElementos}
          alt="Elementos decorativos"
          className="absolute top-1/2 transform -translate-y-1/2 w-100 left-210"
        />
      </div>

      <div className="text-black font-novicento flex gap-10 justify-end text-[17.8px] h-[100px] items-center w-[1250px]">
        <div className="">
          <p><b>Empresa:</b> Agrosense</p>
        </div>

        <div>
          <p><b>Responsável: </b> João Batista</p>
        </div>

        <div className="bg-[rgba(98,121,49,0.27)] rounded-[20px] w-[270px]">
          <p className="flex justify-center"><b>Data:</b> {data}</p>
        </div>
      </div>

      <div>
        <WeatherCard currentWeather={currentWeather} forecast={forecast} />
      </div>
    </div>
  );
}
