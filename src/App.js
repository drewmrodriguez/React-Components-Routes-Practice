import React, { useEffect, useState } from "react";
import "./App.css";

// Import dependencies
import axios from "axios";
import { format } from "date-fns";

// Import componenets
import PhotoFrame from "./components/PhotoFrame";

function App() {
  // Get the state that will save the data
  const [photoData, setPhotoData] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get the data once the app renders only once
  useEffect(() => {
    const APIDate = format(selectedDate, "yyyy-MM-dd");
    const APIUrl = `https://api.nasa.gov/planetary/apod?api_key=zhQ2aecf3ic59s13oQ4NzidxBzcpxvTXKQiNP2RC&date=${APIDate}`;
    const getData = axios.get(APIUrl);

    getData.then((res) => {
      console.log(res);
      setPhotoData(res.data);
    });
  }, [selectedDate]);

  function changeDate(date) {
    setSelectedDate(date);
  }

  return (
    <div className="App">
      <PhotoFrame photoData={photoData} selectedDate={selectedDate} changeDate={changeDate} />
    </div>
  );
}

export default App;