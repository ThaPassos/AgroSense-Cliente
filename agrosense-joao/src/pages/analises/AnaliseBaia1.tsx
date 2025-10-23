import NavBar from "../../components/NavBar";
import grupoDeElementos from "../../assets/elementos.png";
import logoRedonda from "../../assets/logoRedonda.png";
import MocoNaPlantacao from "../../assets/MoçoNaPlantação.png";

import { GraficoUmidadeAr } from "../../components/GraficoUmidadeAr";
import { GraficoUmidadeSolo } from "../../components/GraficoUmidadeSolo";
import { GraficoTemperatura } from "../../components/GraficoTemperatura";


export default function AnaliseBaia1() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden font-novicento h-full">
      <div className="lg:block hidden">
        <NavBar />
      </div>

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

      {/* <div className="relative flex justify-center items-center lg:w-[2500px] lg:h-[380px]">
        <img
          src={MocoNaPlantacao}
          alt=""
          className="lg:w-[400px] object-cover rounded-lg w-[]"
        />
      </div> */}

      {/* <div className="absolute top-[520px] left-[900px]">
          <ModelViewer3D 
          modelPath="/pimenta.glb"
          scale={0.18}
          position={[0, -1, 0]}
          className=""
        />
        </div> */}

        <h2 className="text-gray-900 opacity-80 lg:text-[75px] text-[45px] font-bold font-novicento flex justify-center lg:h-[210px] h-[500px] items-center lg:w-[1250px]">
          Análise das baias
        </h2>
        <div className="flex justify-end lg:w-[1200px]">
            <p className="text-gray-900 opacity-80 lg:text-[23px] text-[17px] font-bold font-novicento lg:w-[900px] w-[270px] lg:h-[250px] ">
          Ter uma análise completa de uma plantação, com o auxílio de gráficos e
          dados precisos, é essencial para garantir uma produção eficiente,
          sustentável e equilibrada com o meio ambiente. Monitorar fatores como
          temperatura, umidade do ar e do solo, luminosidade e quantidade de
          chuva permite compreender melhor o comportamento da lavoura e
          antecipar possíveis problemas, como estresse hídrico, excesso de calor
          ou falta de luz. Com essas informações, é possível ajustar práticas de
          irrigação, adubação e manejo de forma inteligente, otimizando a
          produtividade e reduzindo desperdícios. 
        </p>
        </div>
    
        <div>
            <h3 className="text-gray-900 opacity-80 lg:text-[50px] text-[45px] font-bold font-novicento flex justify-center lg:h-[210px] h-[500px] items-center lg:w-[840px]">Gráficos</h3>
            <div className="flex justify-end lg:w-[1200px] lg:h-[200px]">
            <p className="text-gray-900 opacity-80 lg:text-[23px] text-[17px] font-bold font-novicento lg:w-[900px] w-[270px] lg:h-[220px] ">
            Acomanhe os dados da sua baia durante uma semana, quize dias e um mês, observando cada dado indivuldualmente, ou seja, a umidade do ar e do solo, a variação da temperatura, quantidade de chuva recebidade e luminosidade que chega na sua plantação.
            </p>
            </div>
        </div>

        <div className="flex justify-end lg:w-[1300px]">
            <div className="lg:w-[850px]">
            <GraficoUmidadeAr />
            </div>
        </div>

        <div className="flex justify-end lg:w-[1300px]">
            <div className="lg:w-[850px]">
            <GraficoUmidadeSolo />
            </div>
        </div>

        <div className="flex justify-end lg:w-[1300px]">
            <div className="lg:w-[850px]">
            <GraficoTemperatura />
            </div>
        </div>
        

    </div>
  );
}
