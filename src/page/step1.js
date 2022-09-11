import React from "react";
import styles from "../Styles/SlideNav.module.css";
import ProgressBar from "../Components/ProgressBar";
export default function Step1(props) {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <ProgressBar />
        </div>
        <div class="col-12">
          <div className={styles.box1}>
            <h1>Step 1</h1>
            <form>
              Name: <input type="text" id="userName" />
            </form>
          </div>

          <button
            class="btn btn-primary"
            onClick={(event) =>
              props.next(event, document.getElementById("userName").value)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
