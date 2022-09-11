
import Step1 from "../page/step1";
import Step2 from "../page/step2";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  function goBack() {
    setStep(step - 1);
  }
  function changeNextStep() {
    setStep(step + 1);
  }
  function Hello() {
    if (step === 1) {
      return <Step1 next={changeNextStep} />;
    } else {
      return <Step2 next={changeNextStep} back={goBack} />;
    }
  }

  return <>{Hello()}</>;
}

{/* <div class={styles.container}>
    <ul class={styles.progressbar}>
        <li class={styles.active}>1 step</li>
        <li >2 step</li>
        <li >3 step</li>
    </ul>
   
</div> */}
