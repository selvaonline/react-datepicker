import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MaskedInput from "react-text-mask";
import createAutoCorrectedDatePipe from "text-mask-addons/dist/createAutoCorrectedDatePipe";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const autoCorrectedDatePipe = createAutoCorrectedDatePipe("mm/dd/yyyy");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          customInput={
            <MaskedInput
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              pipe={autoCorrectedDatePipe}
              keepCharPositions={true}
              guide={true}
            />
          }
        />
      </header>
    </div>
  );
}

export default App;
