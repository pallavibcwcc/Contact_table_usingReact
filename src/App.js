// import React from 'react';
import {useState} from 'react'
 import './App.css';

function App () {
  const [search,setSearch] = useState('')
  console.log(search);
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
      <input  className="inputbtn" placeholder="search day" onChange= {(e) => setSearch(e.target.value)}/>
      <table className='mainTable'>
        <thead>
          <tr>
            <th className="heading">Day</th>
            <th className="heading">Subject</th>
            <th className="heading">Time</th>
          </tr>
          </thead>
          <tbody>
            {tableData
            .filter ((item) => {
              return search.toLowerCase() === ''
              ?item
              :item.day.toLowerCase().includes(search);
            })
            .map((val, i) => 
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

