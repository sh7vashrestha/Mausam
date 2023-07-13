import React from "react";
import Footer from "../Components/footer";
import SearchBar from "../Components/Weather/searchBar/searchBar";
import CurrentWeather from "../Components/Weather/currentWeather/CurrentWeather";
import weatherStore from "../Stores/weatherDataFetch";
import Forecast from "../Components/Weather/forecast/Forecast";
import './style.scss'
function Home() {
  const store = weatherStore();
  React.useEffect(() => {
    store.fetchWeather();
  }, []);

  return (
    <>
      <div className="container">
        <SearchBar weatherStore={store} />
        <CurrentWeather store={store} />
        <Forecast store={store}/>
        {store.current && <Footer />}
      </div>
    </>
  );
}

export default Home;
