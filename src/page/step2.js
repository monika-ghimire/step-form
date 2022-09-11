import React from 'react'
import styles from '../Styles/SlideNav.module.css'
import ProgressBar from '../Components/ProgressBar';
export default function Step2(props) {
  return (
    <>
     <div class='row'>
    <div class='col-12'><ProgressBar/></div>
    <div class='col-12'>
    <div class={styles.box2}>
    <h1> Step2</h1>
    </div>
 
      <button onClick={props.next}>Next</button>
      <button onClick={props.back}>Go Back</button>
      </div>
      </div>
    </>
  );
}
