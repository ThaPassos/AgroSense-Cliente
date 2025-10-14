import grupoDeElementos from "../assets/elementos.png";
import logoRedonda from "../assets/logoRedonda.png";
import Baias from "../components/Baias";
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

      <div className="grid grid-cols-[200px_100px_50px] grid-rows-2">
        <h2 className="text-gray-900 opacity-80 text-[75px] font-bold font-novicento flex justify-center h-[210px] items-center w-[900px] col-start-1">Resumo:</h2>
        <p className="text-gray-900 opacity-80 text-[23px] font-bold font-novicento col-start-3 row-start-2 w-[900px] flex justify-center">
          Na última semana, as cinco baias de tomates foram monitoradas por sensores de temperatura e umidade. As condições se mantiveram estáveis, com média de 24–25 °C e 70% de umidade. A produção totalizou 210 kg de tomates, com destaque para a Baia 3, que registrou o maior rendimento (46 kg). O sistema automatizado garantiu bom controle do microclima, favorecendo a qualidade dos frutos.
        </p>
      </div>

      <div>
        < Baias />
      </div>


      </div>
  );
}
