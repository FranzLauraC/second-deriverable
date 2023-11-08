import { useState } from "react"
import './styles/WeatherCard.css'
const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemp = () => {
        setIsCelsius(!isCelsius)
    }
    return (
        <articlec className="weather">
            <h1 className="weather__title">Weather App</h1>
            <h2 className="weather__location">{weather?.name}, {weather?.sys.country}</h2>
            <section className="weather__body">
                <header className="img-container">
                    <img className="weather__img" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className="weather__info">
                    <h3 className="weather__condition">"{weather?.weather[0].description}"</h3>
                    <ul className="weather__list">
                        <li className="weather__item"><span className="weather__label">wind speed</span><span className="weather__value">{weather?.wind.speed}m/s</span></li>
                        <li className="weather__item"><span className="weather__label">clouds</span><span className="weather__value">{weather?.clouds.all}%</span></li>
                        <li className="weather__item"><span className="weather__label">pressure</span><span className="weather__value">{weather?.main.pressure}pHa</span></li>
                    </ul>
                </article>
            </section>
            <h2 className="weather__temp">{isCelsius ? `${temp?.celsius}ºC` : `${temp?.fahrenheit}ºF`}</h2>
            <button className="weather__btn" onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
        </articlec>

    )
}

export default WeatherCard