import React from "react";
import styles from '../Styles/SlideNav.module.css'

export default function progressBar() {
  return (
    <>
      <div class={styles.container}>
        <ul class={styles.progressbar}>
          <li class={styles.active}>1 step</li>
          <li>2 step</li>
          <li>3 step</li>
        </ul>
      </div>
    </>
  );
}
