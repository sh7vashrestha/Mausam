import { create } from "zustand";
import axios from "axios";

const searchStore = create((set) => ({
  options: [],
  query: "",
  searching: false,

  setQuery: (e) => {
    set({ query: e });
    // searchStore.getState().searchCity();
  },

  // searchCity: debounce(async () => {
  //   const { query } = searchStore.getState();
  //   if (query.length > 2) {
  //     set({ searching: true });
  //     const geoApiOptions = {
  //       method: "GET",
  //       url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  //       params: {
  //         minPopulation: "50000",
  //         sort: "-population",
  //         namePrefix: query,
  //       },
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "e4c80c9ae7mshef4cea1301536c9p181c1djsn9b6073a6f29f",
  //         "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //       },
  //     };
  //     try {
  //       const res = await axios.request(geoApiOptions);
  //       const city = res.data.data.map((data) => {
  //         return {
  //           // value: `${data.latitude} ${data.longitude}`,
  //           // label: `${data.name}`,
  //           name: data.name,
  //           long: data.longitude,
  //           lat: data.latitude,
  //           population: data.population,
  //         };
  //       });
  //       set({ city });
  //     } catch (error) {
  //       console.error(error);
  //       set({ searching: false });
  //     }
  //   } else {
  //     set({ city: [], searching: false });
  //   }
  // }, 600),
  searchCity: async () => {
    const { query } = searchStore.getState();
    const geoApiOptions = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      params: {
        minPopulation: "50000",
        sort: "-population",
        namePrefix: query,
      },
      headers: {
        "X-RapidAPI-Key": "e4c80c9ae7mshef4cea1301536c9p181c1djsn9b6073a6f29f",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    try {
      const res = await axios.request(geoApiOptions);
      return {
        options: res.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      console.log(err);
      return {
        options: {},
      };
    }
  },
  // handelOnChange: (data)=>{
  //   console.log(data)
  // }
}));

export default searchStore;
