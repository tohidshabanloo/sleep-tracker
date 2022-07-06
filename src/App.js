import logo from "./logo.svg";
import "./App.css";
import From from "./components/Form";
import ChartContainer from "./components/ChartContainer";


function App() {
  return (
    <div className="mainPage">
      <ChartContainer />
      <From />
    </div>
  );
}

export default App;
