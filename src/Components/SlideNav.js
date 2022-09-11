
import Step1 from "../page/step1";
import Step2 from "../page/step2";
import Step3 from "../page/step3";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  function goBack() {
    setStep(step - 1);
  }
  function changeNextStep() {
    setStep(step + 1);
  }
  function changeNextthirdStep() {
    setStep(step + 1);
  }
  function Hello() {
    if (step === 1) {
      return <Step1 next={changeNextStep} />;
    } 
    else if (step===2)
    {
      return <Step2 next={changeNextthirdStep} back={goBack} />;
    }
    else {
   
      return <Step3 />
    }
  }

  return <>{Hello()}</>;
}


