import React from "react";

// Import assets
import "react-datepicker/dist/react-datepicker.css";

// Import dependencies
import DatePicker from "react-datepicker";

// Component for the input to change date
const ChangeDateComp = (props) => (
  <button className="change-img" onClick={props.onClick}>
    Choose Different Image
  </button>
);

export default function PhotoTitle(props) {
  return (
    <div className="frame-bottom">
      <div className="author">
        {props.photoData.copyright !== undefined && <p>By: {props.photoData.copyright}</p>}
      </div>

      <div className="photo-title">
        <h3>Photo of the day</h3>
        <h1>{props.photoData.title}</h1>
        <DatePicker
          selected={props.selectedDate}
          onChange={(date) => props.changeDate(date)}
          customInput={<ChangeDateComp />}
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />
      </div>

      <div className="date">
        <p>{props.photoData.date}</p>
      </div>
    </div>
  );
}