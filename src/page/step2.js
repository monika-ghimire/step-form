import React from "react";
import styles from "../Styles/SlideNav.module.css";
import ProgressBar from "../Components/ProgressBar";
export default function Step2(props) {
  function showUserAddress() {
    let Country = document.getElementById("country").value;
    let Place = document.getElementById("place").value;

    let userAddressObj = {
      Country: Country,
      Place: Place,
    };
    return userAddressObj;
  }
  return (
    <>
      <div class="row">
        <div class="col-12">
          <ProgressBar />
        </div>
        <div class="col-12">
          <div class={styles.box2}>
            <h1>Address</h1>
            <form>
              Country: <input type="text" id="country" class="mb-4" />
              Place: <input type="text" id="place" class="mb-4" />
            </form>
          </div>

          <button onClick={(event) => props.next(event, showUserAddress())}>
            Next
          </button>
          <button onClick={props.back}>Go Back</button>
        </div>
      </div>
    </>
  );
}
