import React from "react";
import searchStore from "../../../Stores/search";
import { AsyncPaginate } from "react-select-async-paginate";
import './searchStyle.scss'
function SearchBar(props) {
  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '2px',
        backgroundColor:'trasparent',
        color:'#ddd',
        border: '1px solid #888',
        boxShadow: state.isFocused ? '0 1px 1px 2px #222' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#222' : null,
        color: state.isFocused ? '#ddd' : null,
    }),
}
  const store = searchStore();
  const weatherStore = props.weatherStore;
  return (
    <>
      <div className="search-bar">
        {/* <input type="text" placeholder="Enter the City Name" value={store.query} onChange={store.setQuery} />
        {store.searching &&
          store.city.map((city) => {
            return (
              <>
                <Link to={`/lat=${city.lat}&long=${city.long}`}>
                  <span>{city.name}</span>
                </Link>
              </>
            );
          })} */}
          <AsyncPaginate className="input-field"
          placeholder = "Enter the City name"
          debounceTimeout={600}
          value={store.query}
          onInputChange={store.setQuery}
          loadOptions={store.searchCity}
          onChange={weatherStore.handelOnChange}
          styles={customStyles}
          />
          <button className="symbol-button" value={weatherStore.symbol} onClick={weatherStore.changeUnits}>{weatherStore.symbol}</button>
      </div>
    </>
  );
}

export default SearchBar;
