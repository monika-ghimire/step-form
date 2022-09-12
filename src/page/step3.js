import React from "react";
import styles from "../Styles/SlideNav.module.css";
import ProgressBar from "../Components/ProgressBar";
export default function page3(props) {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <ProgressBar />
        </div>
        <div class="col-12">
          <div class={styles.box3}>
            <h1> User Income</h1>
            <form>
            Month_Income: <input type="number" id="number" /> 
            </form>
          </div>
          <button
            onClick={(event) =>
              props.saved(event, document.getElementById("number").value)
            }
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
