import "./App.css";

import GetWeather from "./components/GetWeather";

function App() {
  return (
    <div className="container">
      <div className="container-fluid header py-2">
        <p className="text-center head">Rushikeh karale's Weather App</p>
      </div>
      <GetWeather />
    </div>
  );
}

export default App;
