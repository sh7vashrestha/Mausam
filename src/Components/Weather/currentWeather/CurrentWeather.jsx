import "./style.scss"

function CurrentWeather({ store }) {
  const data = store.current;
  return (
    <>
      {store.current && (
        <div className="current-weather">
            <div className="current-header">
              <p>Current Weather</p>
            </div>
          <div className="top">
            <div>
              <p className="city">{store.city}</p>
              <p className="weather-description">
                {data.weather[0].description}
              </p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
          </div>
          <div className="bottom">
            <p className="temperature">{Math.round(data.main.temp)}{store.tempSymbol}</p>
            <div className="details">
              <div className="parameter-row">
                <span className="parameter-label-heading">Details</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">
                  {Math.round(data.main.feels_like)}{store.tempSymbol}
                </span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">{data.wind.speed} {store.distance}</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">{data.main.humidity}%</span>
              </div>
              <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">
                  {data.main.pressure} hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeather;
