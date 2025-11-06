import grupoDeElementos from "../assets/elementos.png";
import logoRedonda from "../assets/logoRedonda.png";
import WeatherCard from "../components/Card";
import NavBar from "../components/NavBar";
import { useWeather } from "../hooks/useWeather";
import elementoPlanta from "../assets/elementoPlanta.png"

export default function Home() {
  const { currentWeather, forecast, loading, error } = useWeather();

  const data = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="overflow-x-hidden overflow-y-hidden ">
      <NavBar />

      <div className="relative w-full lg:h-80 h-35 grid lg:grid-cols-[68.5%_31.5%] grid-cols-[55.5%_44.5%]">
        <div className="bg-[rgb(98,121,49)] relative">
          <p className="lg:text-[95px] text-[33px] leading-[1] text-left font-[Arial,Helvetica,sans-serif] font-bold text-[#ebe7d6] absolute lg:left-65 lg:top-15 top-9 left-3">
            Agro
            <br />
            Sense
          </p>
        </div>

        <div className="bg-[#ebe7d6] lg:relative">
          <p className="lg:text-[28px]  text-[15px] lg:text-left font-novicento font-normal text-[rgb(98,121,49)] absolute lg:top-60 top-23 left-46 lg:left-10 flex items-center lg:gap-3 gap-3 leading-[1] ">
            <img src={logoRedonda} alt="" className="lg:w-[65px] w-[40px]" />
            Produção Rural
          </p>
        </div>

        <img
          src={grupoDeElementos}
          alt="Elementos decorativos"
          className="absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-100 lg:left-210 w-36 top-[45px] left-32"
        />
      </div>

      <div className="text-black font-novicento flex lg:gap-10 gap-4 justify-end lg:text-[17.8px] text-[13px] lg:h-[100px] items-center lg:w-[1250px] h-[60px] w-[310px]">
        <div className="">
          <p>
            <b>Empresa:</b> Agrosense
          </p>
        </div>

        <div>
          <p>
            <b>Responsável: </b> João Batista
          </p>
        </div>

        <div className="bg-[rgba(98,121,49,0.27)] rounded-[20px] lg:w-[270px] lg:block hidden">
          <p className="flex justify-center">
            <b>Data:</b> {data}
          </p>
        </div>
      </div>

      <div>
        <WeatherCard 
          currentWeather={currentWeather} 
          forecast={forecast} 
          error={error}
          loading={loading}
        />
      </div>

      <h2 className="text-gray-900 opacity-80 lg:text-[75px] text-[45px] font-bold font-novicento flex justify-center lg:h-[210px] h-[300px] items-end lg:w-[900px] w-[250px]">
          Resumo:
        </h2>
        <div className="flex justify-end lg:w-[1200px]">
            <p className="text-gray-900 opacity-80 lg:text-[23px] text-[17px] font-bold font-novicento lg:w-[900px] w-[280px] lg:h-[200px] h-[450px]">
          Na última semana, as cinco baias de tomates foram monitoradas por
          sensores de temperatura e umidade. As condições se mantiveram
          estáveis, com média de 24–25 °C e 70% de umidade. A produção totalizou
          210 kg de tomates, com destaque para a Baia 3, que registrou o maior
          rendimento (46 kg). O sistema automatizado garantiu bom controle do
          microclima, favorecendo a qualidade dos frutos.
        </p>
        </div>

      <div className="lg:hidden flex h-[50px]">
        <h2 className="text-gray-900 opacity-80 lg:text-[75px] text-[27px] font-bold font-novicento flex justify-end lg:h-[210px] h-[18px] items-end lg:w-[1030px] w-[280px]">
          Controle das baias
        </h2>
      </div>

      <h2 className="lg:flex hidden text-gray-900 opacity-80 lg:text-[75px] text-[27px] font-bold font-novicento justify-end lg:h-[260px] h-[50px] items-end lg:w-[1030px] w-[280px]">
          Controle das baias
        </h2>
      
      <div className="flex justify-center lg:w-[1650px] font-novicento">
        <div className="grid grid-cols-2 grid-rows-3 lg:w-[700px] justify-center lg:gap-x-20 lg:gap-y-9 gap-y-8 gap-x-2">

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 1</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-[rgba(98,121,49,0.27)] rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[65px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Ativada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 2</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-gray-100 rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[80px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Desativada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 3</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-gray-100 rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[80px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Desativada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 4</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-gray-100 rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[80px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Desativada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 5</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-gray-100 rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[80px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Desativada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center lg:w-[330px] lg:h-[180px] h-[100px] w-[150px]">
            <h3 className="lg:text-[35px] font-semibold text-gray-900 font-novicento lg:w-[260px]">Baia 6</h3>
            <div className="flex items-start lg:w-[310px]">
              <img src={elementoPlanta} className="w-[65px] lg:w-[150px]"/>
              <div className=" lg:w-[300px] flex justify-center items-center h-[60px] content-center">
                <div className="bg-gray-100 rounded-2xl flex h-[35px] justify-between items-center">
                  <p className="lg:w-[120px] w-[80px] lg:h-[40px] lg:text-[20px] text-[14px] flex items-center justify-center">Desativada</p>
                </div>
              </div>
            </div>
          </div>

          <footer>
            
          </footer>

        </div>
      </div>
    </div>
  );
}