import { create } from "zustand";
import axios from "axios";
import weatherApi from "../helper/api";

const weatherStore = create((set) => ({
  weatherApi: "98426c9cc6de58d0bf9ac752b8df3c9d",
  lon: "83.99",
  lat: "28.21",
  city: "Pokhara",
  countryCode: "NP",
  units: "metric",
  current: null,
  forecast: null,
  symbol: "°F",
  tempSymbol: "°C",
  distance: "m/s",

  handelOnChange: (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const [city, countryCode] = searchData.label.split(",");
    set({ lon, lat, city, countryCode });
    weatherStore.getState().fetchWeather();
  },

  fetchWeather: async () => {
    const { lon, lat, weatherApi, units } = weatherStore.getState();

    const [currentRes, forecastRes] = await Promise.all([
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}&units=${units}`
      ),
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApi}&units=${units}`
      ),
    ]);
    const current = currentRes.data;
    const forecast = forecastRes.data;
    set({ current, forecast });
  },

  changeUnits: (d) => {
    if (d.target.value === "°F") {
      set({
        units: "imperial",
        symbol: "°C",
        tempSymbol: "°F",
        distance: "miles/hr",
        current: null
      });
    } else {
      set({ units: "metric", symbol: "°F", tempSymbol: "°C", distance: "m/s", current: null });
    }
    weatherStore.getState().fetchWeather();
  },
}));

export default weatherStore;
