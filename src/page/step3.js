import React from 'react'
import styles from '../Styles/SlideNav.module.css'
import ProgressBar from '../Components/ProgressBar';
export default function page3() {
  return (
   <> 
      <div class='row'>
    <div class='col-12'><ProgressBar/></div>
    <div class='col-12'>
     <div class={styles.box3}><h1>Step 3</h1></div>
     <button>Save</button>
     </div>
     </div>
   </>
  )
}
