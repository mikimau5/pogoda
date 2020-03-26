import React, { Component } from "react";
import "../css/style.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "1ff56f837117e1da62c539a6d5f623f7";

class App extends Component {
  state = {
    forecast: [
      {
        date: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        icon: ""
      },
      {
        date: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        icon: ""
      },
      {
        date: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        icon: ""
      },
      {
        date: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        icon: ""
      },
      {
        date: "",
        sunrise: "",
        sunset: "",
        temp: "",
        pressure: "",
        wind: "",
        icon: ""
      }
    ],
    option: "",
    value: "",
    city: "",
    err: false
  };

  handleOptionChange = e => {
    this.setState({
      option: e.target.value
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    if (!this.state.option) {
      alert("Wybierz jedną z opcji");
      return;
    }
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then(response => response.json())
      .then(data => {
        if (this.state.option === "oneDay") {
          this.setState({
            value: "",
            forecast: [
              {
                date: new Date(data.list[0].dt * 1000).toLocaleString(),
                temp: data.list[0].main.temp,
                pressure: data.list[0].main.pressure,
                humidity: data.list[0].main.humidity,
                wind: data.list[0].wind.speed,
                icon: data.list[0].weather[0].icon
              },
              {
                date: new Date(data.list[4].dt * 1000).toLocaleString(),
                temp: data.list[4].main.temp,
                pressure: data.list[4].main.pressure,
                humidity: data.list[4].main.humidity,
                wind: data.list[4].wind.speed,
                icon: data.list[4].weather[0].icon
              },
              {
                date: new Date(data.list[8].dt * 1000).toLocaleString(),
                temp: data.list[8].main.temp,
                pressure: data.list[8].main.pressure,
                humidity: data.list[8].main.humidity,
                wind: data.list[8].wind.speed,
                icon: data.list[8].weather[0].icon
              }
            ],
            city: data.city.name,
            err: false
          });
        } else {
          this.setState({
            value: "",
            forecast: [
              {
                date: new Date(data.list[0].dt * 1000).toLocaleString(),
                temp: data.list[0].main.temp,
                pressure: data.list[0].main.pressure,
                humidity: data.list[0].main.humidity,
                wind: data.list[0].wind.speed,
                icon: data.list[0].weather[0].icon
              },
              {
                date: new Date(data.list[8].dt * 1000).toLocaleString(),
                temp: data.list[8].main.temp,
                pressure: data.list[8].main.pressure,
                humidity: data.list[8].main.humidity,
                wind: data.list[8].wind.speed,
                icon: data.list[8].weather[0].icon
              },
              {
                date: new Date(data.list[16].dt * 1000).toLocaleString(),
                temp: data.list[16].main.temp,
                pressure: data.list[16].main.pressure,
                humidity: data.list[16].main.humidity,
                wind: data.list[16].wind.speed,
                icon: data.list[16].weather[0].icon
              }
            ],
            city: data.city.name,
            err: false
          });
        }
      })
      .catch(err => {
        this.setState({
          err: true,
          city: this.state.value
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
          choose={this.handleOptionChange}
        />{" "}
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
