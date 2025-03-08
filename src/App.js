import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import MC, { FirstComponent as FC, SecondComponent } from './components/myComponents';
import Hello, { CallMe, Goodie } from './components/hello';
import HelloWorld, { HelloTitle } from './HelloWorld';
import Student from './components/student';


function App() {
  return (
    <div className="App">
      {/* <Greeting name="Adunni" />
      <Greeting name="Ajala" />
      <FC />
      <SecondComponent />
      <MC /> */}
      {/* <Hello name="Jubrillah!!" />
      <CallMe name="Heimdel" />
      <Goodie name="Jagaban" /> */}
      {/* <HelloWorld name="Bashorun Akin" />
      <HelloTitle name="Olu" /> */}
      <Student
        firstName="Balogun"
        lastName="Ajagun"
        email="balgun@gmail.com"
      />
      <Student
        firstName="Rosa"
        lastName="Ogunmodede"
        email="rosoguns@gmail.com"
      />
    </div>

  );
}

export default App;
