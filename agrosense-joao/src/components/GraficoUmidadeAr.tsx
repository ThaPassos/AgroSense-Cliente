import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Droplets } from "lucide-react";

type Period = "weekly" | "biweekly" | "monthly";

const generateMockData = (period: Period) => {
  const dataPoints = period === "weekly" ? 7 : period === "biweekly" ? 14 : 30;
  return Array.from({ length: dataPoints }, (_, i) => ({
    date: `Dia ${i + 1}`,
    value: Math.floor(Math.random() * 30) + 50,
  }));
};

export const GraficoUmidadeAr = () => {
  const [period, setPeriod] = useState<Period>("weekly");
  const data = generateMockData(period);

  return (
    <div className="bg-card rounded-xl overflow-hidden">
      <div className="p-6 ">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Droplets className="h-6 w-6 text-[#678c93]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#678c93]">Umidade do Ar</h2>
              <p className="text-sm text-[#678c93]">Monitoramento da umidade atmosférica</p>
            </div>
          </div>
          <div className="flex gap-5 p-1 rounded-lg">
            <button
              onClick={() => setPeriod("weekly")}
              className={`px-6 py-2 rounded-md text-sm font-medium ${
                period === "weekly"
                  ? "bg-background text-[#678c93]"
                  : "text-[#678c93] "
              }`}
            >
              Semanal
            </button>
            <button
              onClick={() => setPeriod("biweekly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                period === "biweekly"
                  ? "bg-background text-[#678c93]"
                  : "text-[#678c93]"
              }`}
            >
              Quinzenal
            </button>
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                period === "monthly"
                  ? "bg-background text-[#678c93]"
                  : "text-[#678c93]"
              }`}
            >
              Mensal
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#678c93" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#678c93" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" className="text-sm text-[#678c93]" />
            <YAxis className="text-sm" domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
              labelStyle={{
            color: "#678c93", 
            fontWeight: 600,
         }}
              formatter={(value: number) => [`${value}%`, "Umidade"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#678c93"
              fill="url(#humidityGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}; 