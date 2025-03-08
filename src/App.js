import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import MC, { FirstComponent as FC, SecondComponent } from './components/myComponents';
import Hello, { CallMe, Goodie } from './components/hello';


function App() {
  return (
    <div className="App">
      {/* <Greeting name="Adunni" />
      <Greeting name="Ajala" />
      <FC />
      <SecondComponent />
      <MC /> */}
      <Hello name="Jubrillah!!" />
      <CallMe name="Heimdel" />
      <Goodie name="Jagaban" />

    </div>

  );
}

export default App;
