import Step1 from "../page/step1";
import Step2 from "../page/step2";
import Step3 from "../page/step3";
import { useState } from "react";
import Saved from "../page/Saved";

export default function App() {
  const [UserInput, setUserInputStep] = useState({
    name: null,
    lastName: null,
    phoneNumber: null,
    Country: null,
    Place: null,
    Month_Income: null,
  });

  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(1);

  function goBack() {
    setStep(step - 1);
  }
  function changeNextStep(event, data) {
    setName(data);

    setUserInputStep((prevState) => ({
      ...prevState,
      name: data.name,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    }));
    setStep(step + 1);
  }

  function changeNextthirdStep(event, value) {
    setLastName(value);

    setUserInputStep((prevState) => ({
      ...prevState,
      Country: value.Country,
      Place: value.Place,
    }));
    setStep(step + 1);
  }

  function saveAll(event, value) {
    setNumber(value);
    setUserInputStep((prevState) => ({
      ...prevState,
      Month_Income: value,
    }));
    setStep(step + 1);
  }

  function showAllUserData(event, value) {
    setNumber(value);
    let obj =UserInput;
    setUserInputStep((prevState) => ({
      ...prevState,
      number: value,
    }));
    console.log(UserInput);
    let show = document.getElementById("preview");
    show.innerHTML =
     ` 
    <p> name :${obj.name}</p>
    <p> lastName :${obj.lastName}</p>
    <p> phoneNumber :${obj.phoneNumber}</p>
    <p> Country :${obj.Country}</p>
    <p> Place :${obj.Place}</p>
     <p> Month_Income :${obj.Month_Income}</p>
     `
    setStep(step + 1);
  }

  function Hello() {
    if (step === 1) {
      return <Step1 next={changeNextStep} />;
    } else if (step === 2) {
      return <Step2 next={changeNextthirdStep} back={goBack} />;
    } else if (step === 3) {
      return <Step3 saved={saveAll} />;
    } else {
      return <Saved data={showAllUserData} />;
    }
  }

  return <>{Hello()}</>;
}
