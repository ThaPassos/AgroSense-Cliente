import type { WeatherData, ForecastData } from "../types/weather";

interface WeatherCardProps {
  currentWeather: WeatherData;
  forecast: ForecastData;
}

const WeatherCard = ({ currentWeather, forecast }: WeatherCardProps) => {
  const dailyForecasts = forecast.list
    .filter((_, index) => index % 8 === 0)
    .slice(0, 4);

  const precipitation =
    currentWeather.rain?.["1h"] || currentWeather.rain?.["3h"] || 0;

  const dateObj = new Date(currentWeather.dt * 1000);
  const dayName = dateObj.toLocaleDateString("pt-BR", { weekday: "long" });
  const dateStr = dateObj.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });

  const windSpeed = Math.round(currentWeather.wind.speed * 2.237);

  return (
    <div className="w-full flex justify-center items-end p-4 font-novicento font-normal ">
      <div className="flex flex-row max-w-3xl w-full overflow-hidden h-[380px]">
        <div className="w-[49.5%] rounded-l-lg p-6 text-[#ebe7d6] flex flex-col justify-between relative z-10 translate-x-16">
          <div className="rounded-lg w-full h-[380px] bg-[#445816] absolute tr"></div>

          <div className="relative z-10">
            <h2 className="font-bold text-[30px] leading-none pb-1 capitalize absolute top-[120%] left-[10%]">
              {dayName}
            </h2>
            <h3 className="text-[18px] leading-none pb-3 opacity-90 absolute top-[350%] left-[10%]">
              {dateStr}
            </h3>
            <h3 className="text-[18px] leading-none pb-3 opacity-90 absolute top-[500%] left-[10%]">
              {currentWeather.name}
            </h3>
            <p className="flex items-center text-sm opacity-0 ">,</p>
          </div>

          <div className="relative z-10">
            <svg
              className="w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 129 129"
              enableBackground="new 0 0 129 129"
            ></svg>
            <strong className="leading-none text-7xl block font-bold absolute top-[-180%] left-[10%]">
              {Math.round(currentWeather.main.temp)}°C
            </strong>
            <b className="text-xl block font-semibold capitalize absolute top-[-40%] left-[10%]">
              {currentWeather.weather[0].description}
            </b>
          </div>
        </div>

        <div className=" text-[#ebe7d6] p-6 rounded-r-lg flex flex-col justify-between ">
          <div className="absolute top-[59%] right-[20%] rounded-lg w-[28%] h-[360px] bg-[#445816b6] z-[-4]"></div>
          <div className="space-y-3">
            <div className="absolute top-[65%] right-[34%]">
              <div className="font-bold uppercase text-[16px] tracking-wide">
                Precipitação
              </div>
              <div className="text-[17px]">
                {precipitation > 0 ? `${precipitation.toFixed(1)} mm` : "10 %"}
              </div>
            </div>
            <div className="absolute top-[72%] right-[37%]">
              <div className="font-bold uppercase text-[16px] tracking-wide">
                Umidade
              </div>
              <div className="text-[17px]">
                {currentWeather.main.humidity} %
              </div>
            </div>
            <div className="absolute top-[80%] right-[29%]">
              <div className="font-bold uppercase text-[16px] tracking-wide">
                Velocidade do vento
              </div>
              <div className="text-[17px]">{windSpeed} Mph</div>
            </div>
          </div>

          <div className="flex justify-end items-center w-full absolute top-[90%] right-[24%]">
            <div className="flex flex-row gap-2">
              {dailyForecasts.map((day, index) => {
                const dayDate = new Date(day.dt * 1000);
                const dayShort = dayDate.toLocaleDateString("pt-BR", {
                  weekday: "short",
                });
                const isSunny = day.weather[0].main === "Clear";

                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center rounded-lg py-3 px-Y  ${
                      index === 0
                        ? " bg-[#ebe7d6] text-black"
                        : "bg-[#445816] text-[#ebe7d6]"
                    }`}
                    style={{
                      minWidth: "60px",
                      height: "110px",
                      marginBottom: "45px",
                    }}
                  >
                    <div className="mb-2">
                      {isSunny ? (
                        <svg
                          className="w-8 h-8 flex"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 129 129"
                          enableBackground="new 0 0 129 129"
                        >
                          <g>
                            <path
                              d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                            <path
                              d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                              fill={index === 0 ? "#000000" : "#ebe7d6"}
                            />
                          </g>
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 33.062 33.062"
                        >
                          <path
                            d="M25.615,26.608H6.442C2.89,26.608,0,23.719,0,20.168c0-3.502,2.81-6.361,6.294-6.439c1.241-4.304,5.161-7.275,9.67-7.275c3.736,0,7.101,2.023,8.866,5.306c0.26-0.026,0.522-0.04,0.784-0.04c4.106,0,7.446,3.339,7.446,7.443C33.062,23.268,29.721,26.608,25.615,26.608z M6.527,14.732C3.437,14.732,1,17.17,1,20.168c0,2.999,2.441,5.439,5.442,5.439h19.173c3.555,0,6.446-2.892,6.446-6.445c0-3.553-2.892-6.443-6.446-6.443c-0.314,0-0.63,0.022-0.939,0.066c-0.229,0.063-0.469-0.046-0.574-0.259c-1.545-3.13-4.663-5.073-8.137-5.073c-4.183,0-7.803,2.839-8.804,6.904c-0.056,0.228-0.278,0.372-0.498,0.381l-0.127-0.007C6.533,14.732,6.53,14.732,6.527,14.732z"
                            fill={index === 0 ? "#000000" : "#ebe7d6"}
                          />
                        </svg>
                      )}
                    </div>
                    <div className="text-center">
                      <b className="font-normal text-xs capitalize block mb-1">
                        {dayShort}
                      </b>
                      <strong className="text-lg font-bold">
                        {Math.round(day.main.temp)}°C
                      </strong>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
