import React from 'react'
import styles from '../Styles/SlideNav.module.css'
import ProgressBar from '../Components/ProgressBar'
export default function Step1(props) {
  return (
 <>
   <div class='row'>
    <div class='col-12'><ProgressBar/></div>
    <div class='col-12'>
    <div className={styles.box1}><h1>Step 1</h1> </div>
    <button onClick={props.next}>Next</button>
    </div>
   </div>
 </>
  );
}