import React from 'react'
import styles from '../Styles/SlideNav.module.css'
export default function Step2(props) {
  return (
    <>
    <div class={styles.box2}>
    <h1> Step2</h1>
    </div>
  
      <button onClick={props.next}>Next</button>
      <button onClick={props.back}>Go Back</button>
    </>
  );
}
