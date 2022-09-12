import React from "react";
import styles from "../Styles/SlideNav.module.css";
import ProgressBar from "../Components/ProgressBar";
export default function Step1(props) {
  function getAllUserPersonalData() {
    let name = document.getElementById("userName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    let userdata = {
      name: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
    };
    return userdata;
  }

  return (
    <>
      <div class="row">
        <div class="col-12">
          <ProgressBar />
        </div>
        <div class="col-12">
          <div className={styles.box1}>
            <h2 class="mb-4">personal details</h2>
            <form>
              Name: <input type="text" id="userName" class="mb-4" />
              <br />
              Last_Name: <input type="text" id="lastName" class="mb-4" />
              <br />
              Phone_number: <input type="text" id="phoneNumber" class="mb-4" />
              <br />
            </form>
          </div>

          <button
            class="btn btn-primary"
            onClick={(event) => props.next(event, getAllUserPersonalData())}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
