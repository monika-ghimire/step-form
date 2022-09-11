import React from 'react'
import styles from '../Styles/SlideNav.module.css'
export default function Step1(props) {
  return (
    <>
    <div class={styles.box1}><h1>Step 1</h1></div>
      
      <button onClick={props.next}>Next</button>
    </>
  );
}