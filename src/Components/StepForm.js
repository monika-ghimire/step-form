import Step1 from "../page/step1";
import Step2 from "../page/step2";
import Step3 from "../page/step3";
import { useState } from "react";
import Saved from "../page/Saved";

export default function App() {
  const [UserInput, setUserInputStep] = useState({
    name: null,
    last_name: null,
    number: null,
  });
  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(1);
  function goBack() {
    setStep(step - 1);
  }
  function changeNextStep(event, value) {
    console.log("helo" + value);
    setName(value);
    let obj = { name: name, last_name: lastName, number: number };
    setUserInputStep((prevState) => ({
      ...prevState,
      name: value,
    }));
    console.log(UserInput);
    setStep(step + 1);
  }

  function changeNextthirdStep(event, value) {
    console.log("helo" + value);
    setLastName(value);
    let obj = { name: name, last_name: lastName, number: number };
    setUserInputStep((prevState) => ({
      ...prevState,
      last_name: value,
    }));
    console.log(UserInput);
    setStep(step + 1);
  }

  function saveAll(event, value) {
    setStep(step + 1);
    console.log("helo" + value);
    setNumber(value);
    let obj = { name: name, last_name: lastName, number: number };
    setUserInputStep((prevState) => ({
      ...prevState,
      number: value,
    }));
    console.log(UserInput);
  }

  function Hello() {
    if (step === 1) {
      return <Step1 next={changeNextStep} />;
    } else if (step === 2) {
      return <Step2 next={changeNextthirdStep} back={goBack} />;
    } else if (step === 3) {
      return <Step3 saved={saveAll} />;
    } else {
      return <Saved />;
    }
  }

  return <>{Hello()}</>;
}
