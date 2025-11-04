import { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Sprout } from "lucide-react";
import { useSensorHistorico } from "../hooks/useSensorHistorico";

type Period = "weekly" | "biweekly" | "monthly";

export const GraficoUmidadeSolo = () => {
  const [period, setPeriod] = useState<Period>("weekly");
  const { dadosDiarios, loading } = useSensorHistorico(period);

  if (loading) return <p>Carregando dados...</p>;

  const dadosSolo = dadosDiarios.map((d) => ({
    date: d.date,
    value: Number(d.soloPct) || 0,
  }));

  return (
    <div className="bg-card rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sprout className="h-6 w-6 text-[#528a38]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#528a38]">
                Umidade do Solo
              </h2>
              <p className="text-sm text-[#528a38]">
                Monitoramento da umidade terrestre
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-1 rounded-lg">
            {["weekly", "biweekly", "monthly"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p as Period)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  period === p
                    ? "bg-background text-[#528a38]"
                    : "text-[#528a38]"
                }`}
              >
                {p === "weekly" ? "Semanal" : p === "biweekly" ? "Quinzenal" : "Mensal"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={dadosSolo}>
            <defs>
              <linearGradient id="soilGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#528a38" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#528a38" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{
                color: "#528a38",
                fontWeight: 600,
              }}
              formatter={(value: number) => {
                const formattedValue = typeof value === 'number' ? value.toFixed(1) : '0';
                return [`${formattedValue}%`, "Umidade"];
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#528a38"
              fill="url(#soilGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
