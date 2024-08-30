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
      <table className='mainTable'>
        <thead>
          <tr>
            <th className="heading">Day</th>
            <th className="heading">Subject</th>
            <th className="heading">Time</th>
          </tr>
          </thead>
          <tbody>
            {
            tableData.map((val, i) => 
              <tr key={i}>
                <td className="data">{val.day}</td>
                <td className="data">{val.subject}</td>
                <td className="data">{val.time}</td>
              </tr>
            )
            }
          </tbody>
      </table>
    </div>
  );
};

export default App;

