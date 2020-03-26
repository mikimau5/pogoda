import React from "react";

const MobileResult = props => {
  const { err, city } = props.weather;

  let content = null;

  if (!err && city) {
    content = (
      <>
        <h3>
          Wyniki wyszukiwania dla <em> {city} </em>{" "}
        </h3>{" "}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="icon">
                {" "}
                <img
                  src={`http://openweathermap.org/img/wn/${props.weather.forecast[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <h4>
                {" "}
                <i className="fas fa-calendar-day" />
                <p> Data: </p>{" "}
                <strong> {props.weather.forecast[0].date} </strong>{" "}
              </h4>{" "}
              <h4>
                {" "}
                <i className="fas fa-thermometer-half" />
                <p> Temperatura powietrza: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[0].temp)} &#176;C
                </strong>
              </h4>
              <h4>
                <i className="fas fa-cloud" />
                <p> Ciśnienie atmosferyczne: </p>{" "}
                <strong> {props.weather.forecast[0].pressure} hPa </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-tint" />
                <p> Wilgotność powietrza: </p>{" "}
                <strong> {props.weather.forecast[0].humidity} % </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-wind" />
                <p> Siła wiatru: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[0].wind)} km/h{" "}
                </strong>{" "}
              </h4>{" "}
            </div>

            <div className="carousel-item">
              <div className="icon">
                {" "}
                <img
                  src={`http://openweathermap.org/img/wn/${props.weather.forecast[1].icon}@2x.png`}
                  alt=""
                />
              </div>
              <h4>
                {" "}
                <i className="fas fa-calendar-day" />
                <p> Data: </p>{" "}
                <strong> {props.weather.forecast[1].date} </strong>{" "}
              </h4>{" "}
              <h4>
                {" "}
                <i className="fas fa-thermometer-half" />
                <p> Temperatura powietrza: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[1].temp)} &#176;C
                </strong>
              </h4>
              <h4>
                <i className="fas fa-cloud" />
                <p> Ciśnienie atmosferyczne: </p>{" "}
                <strong> {props.weather.forecast[1].pressure} hPa </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-tint" />
                <p> Wilgotność powietrza: </p>{" "}
                <strong> {props.weather.forecast[1].humidity} % </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-wind" />
                <p> Siła wiatru: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[1].wind)} km/h{" "}
                </strong>{" "}
              </h4>{" "}
            </div>
            <div className="carousel-item">
              <div className="icon">
                {" "}
                <img
                  src={`http://openweathermap.org/img/wn/${props.weather.forecast[2].icon}@2x.png`}
                  alt=""
                />
              </div>
              <h4>
                {" "}
                <i className="fas fa-calendar-day" />
                <p> Data: </p>{" "}
                <strong> {props.weather.forecast[2].date} </strong>{" "}
              </h4>{" "}
              <h4>
                {" "}
                <i className="fas fa-thermometer-half" />
                <p> Temperatura powietrza: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[2].temp)} &#176;C
                </strong>
              </h4>
              <h4>
                <i className="fas fa-cloud" />
                <p> Ciśnienie atmosferyczne: </p>{" "}
                <strong> {props.weather.forecast[2].pressure} hPa </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-tint" />
                <p> Wilgotność powietrza: </p>{" "}
                <strong> {props.weather.forecast[2].humidity} % </strong>{" "}
              </h4>{" "}
              <h4>
                <i className="fas fa-wind" />
                <p> Siła wiatru: </p>{" "}
                <strong>
                  {" "}
                  {Math.round(props.weather.forecast[2].wind)} km/h{" "}
                </strong>{" "}
              </h4>{" "}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <i className="fas fa-chevron-circle-left"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <i className="fas fa-chevron-circle-right"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
  return (
    <div className="mobileResult">
      {err ? `Nie mamy w bazie ${city}, spróbuj bez polskich znaków` : content}{" "}
    </div>
  );
};

export default MobileResult;
