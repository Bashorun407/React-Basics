import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import GoodBye from './components/goodbye';
import Greeting from './components/greeting';
import MC, { FirstComponent as FC, SecondComponent } from './components/myComponents';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Bashorun" />
      <GoodBye name="Aladdin" /> */}
      <Greeting name="Adunni" />
      <Greeting name="Ajala" />
      <FC />
      <SecondComponent />
      <MC />
    </div>

  );
}

export default App;
