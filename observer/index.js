class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    // Filter out the observer to remove.
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  update(data = null) {
    // Call each observer with the new data.
    this.observers.forEach((observer) => {
      observer(data);
    });
  }
}

class WeatherApp {
  constructor({ temp, wind, uv }) {
    this.temp = temp;
    this.wind = wind;
    this.uv = uv;
    // Create a new instance of a Subject.
    this.subject = new Subject();
  }

  // Subscribe an observer to be called whenever the weather 
  // data change when using the class method 'updateWeather'.
  // This method will also return a function to unsubscribe the observer.
  onWeatherDataChange(fn) {
    this.subject.subscribe(fn);
    return () => this.subject.unsubscribe(fn);
  }

  // Changes the weather data and notify all the observers
  // subscribed with the class method 'onWeatherDataChange'.
  updateWeather({ temp, wind, uv }) {
    this.temp = temp;
    this.wind = wind;
    this.uv = uv;
    // Notify observers with the new data.
    this.subject.update({ temp: this.temp, wind: this.wind, uv: this.uv });
  }
}

const newWeatherApp = new WeatherApp({ temp: 32, wind: 8, uv: "High" });

const reportWeatherCondition = ({ temp, wind, uv }) => {
  return console.log(`
    @ Weather Display Type 1

    Temperature: ${temp}
    Wind: ${wind} km/h
    UV: ${uv}
  `);
}

const anotherReportForWeatherCondition = ({ temp, wind, uv }) => {
  return console.log(`
    @ Weather Display Type 2

    Wind: ${wind} km/h
    UV: ${uv}
    Temperature: ${temp}
  `);
}

/*

  Usage examples --->
  
*/

newWeatherApp.onWeatherDataChange(reportWeatherCondition);
newWeatherApp.onWeatherDataChange(anotherReportForWeatherCondition);

newWeatherApp.updateWeather({ temp: 37, wind: 6, uv: "Very High" });
