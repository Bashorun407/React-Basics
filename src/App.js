import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';
import MC, { FirstComponent as FC, SecondComponent } from './components/myComponents';
import Hello, { CallMe, Goodie } from './components/hello';
import HelloWorld, { HelloTitle } from './HelloWorld';
import Student from './components/student';
import Soldier from './components/soldier';
import Skills from './components/skills';
import Students from './components/student_des';



function App() {

  const student = {
    firstName: "Bunmi",
    lastName: "Jagun",
    email: "bumsjag@gmail.com"
  }

  const skills = ['HTM', 'CSS', 'Java', '.NET'];

  const soldier = {
    country: "Nigeria",
    amunition: "AK-47",
    speciality: "reconnaissance"
  }
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
      {/* <Student
        firstName="Rosa"
        lastName="Ogunmodede"
        email="rosoguns@gmail.com"
      /> */}
      <Student
        student_detail={student}
      />
      <Soldier
        soldier_info={soldier}
      />
      <Skills
        skill_up={skills}
      />
      <Students
        firstName="Ade"
        lastName="Ishola" />
    </div>

  );
}

export default App;
