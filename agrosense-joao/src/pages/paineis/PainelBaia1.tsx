import NavBar from "../../components/NavBar";
import grupoDeElementos from "../../assets/elementos.png";
import logoRedonda from "../../assets/logoRedonda.png";
import MocoNaPlantacao from "../../assets/MoçoNaPlantação.png";
import IoTPanel from "../../components/PainelResumo.tsx";
import GraficoArea from "../../components/GraficoArea.tsx";

export default function PainelBaia1() {
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

      <div className="lg:relative lg:flex lg:justify-center lg:items-center lg:w-[2450px] lg:h-[380px] ">
        <img
          src={MocoNaPlantacao}
          alt=""
          className="lg:w-[400px] lg:object-cover lg:rounded-lg hidden lg:block"
        />
      </div>


        <div className="lg:absolute lg:top-[350px] lg:left-[350px]">
          < IoTPanel />
        </div>
       
       <div>
        <div className="flex justify-center lg:w-[2200px] items-end lg:h-[70px]">
          <h2 className="font-novicento text-black lg:text-[28px]">Últimas 6 Horas:</h2>
        </div>
        <div className="lg:absolute lg:top-[800px] lg:left-[960px] lg:w-[500px]">
            <GraficoArea/>
        </div>

       </div>

       <footer className="lg:h-[450px] h-[100px]">
       </footer>

        
       
    </div>
  );
}
