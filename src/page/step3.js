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
            <h1>Step 3</h1>
            <form>
              <input type="number" id="number" /> number
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
