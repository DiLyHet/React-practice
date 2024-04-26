import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather/weather.actions';

const Weather = ({ cities, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, [getWeatherData]);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

const mapStateToProps = state => ({
  cities: state.weather.cities
});

export default connect(mapStateToProps, { getWeatherData })(Weather);
