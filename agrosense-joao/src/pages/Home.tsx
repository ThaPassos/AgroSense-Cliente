import grupoDeElementos from "../assets/elementos.png"
import logoRedonda from "../assets/logoRedonda.png"

export default function Home() {
  return (
    <div className="relative w-full h-80 grid grid-cols-[68.5%_31.5%]">

      <div className="bg-[rgb(98,121,49)] relative">
        <p className="text-[95px] leading-[1] text-left font-[Arial,Helvetica,sans-serif] font-bold text-[#ebe7d6] absolute left-65 top-15">
          Agro<br />Sense
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
  );
}