// import React from 'react';
 import './App.css';

function App () {
  const tableData = [
    {
      day: "Monday",
      subject: "Maths",
      time: "9:am",
    },
    {
      day: "Tuesday",
      subject: "Hindi",
      time: "10:am",
    },
    {
      day: "Wednesday",
      subject: "English",
      time: "11:am",
    },
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
          </thead>
          <tbody>
            {
            tableData.map((val, i) => 
              <tr key={i}>
                <td>{val.day}</td>
                <td>{val.subject}</td>
                <td>{val.time}</td>
              </tr>
            )
            }
          </tbody>
      </table>
    </div>
  );
};

export default App;

