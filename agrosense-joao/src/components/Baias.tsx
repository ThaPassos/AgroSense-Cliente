import { useState } from "react";
import iconePlanta from "../assets/elementoPlanta.png"

type Baia = {
  id: number;
  nome: string;
  status: "Ativa" | "Desativada";
};

export default function Baias() {
  const [baias, setBaias] = useState<Baia[]>([
    { id: 1, nome: "Baia 1", status: "Ativa" },
    { id: 2, nome: "Baia 2", status: "Desativada" },
    { id: 3, nome: "Baia 3", status: "Ativa" },
    { id: 4, nome: "Baia 4", status: "Ativa" },
    { id: 5, nome: "Baia 5", status: "Ativa" },
    { id: 6, nome: "Baia 6", status: "Desativada" },
  ]);

  const toggleStatus = (id: number) => {
    setBaias((prev) =>
      prev.map((baia) =>
        baia.id === id
          ? {
              ...baia,
              status: baia.status === "Ativa" ? "Desativada" : "Ativa",
            }
          : baia
      )
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-[600px] h-[600px]">
      {baias.map((baia) => (
        <div
          key={baia.id}
          className="flex items-center justify-between bg-white rounded-3xl p-4 shadow-md"
        >
          <div className="flex gap-3">
            <h3 className="text-gray-900 font-bold text-lg">{baia.nome}</h3> 
            <div>
                <img
              src={iconePlanta}
              alt="Ícone"
              className="w-[100px] h-[100px] text-[rgb(98,121,49)] flex justify-center "
            />
            </div>
            
          

          <button
            onClick={() => toggleStatus(baia.id)}
            className={`px-4 py-2 rounded-[35%] font-semibold h-[30px] w-[100px] ${
              baia.status === "Ativa"
                ? "bg-[#7a9536b6] text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            {baia.status}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}
