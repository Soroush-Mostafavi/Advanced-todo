import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUserClock } from 'react-icons/fa';
export const DateTime = () => {
  var [date,setDate] = useState(new Date());
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  });
    return (
        <div className="App " style={{fontSize:"20px" , fontWeight:"bold"}}>
            <p>
            <FaCalendarAlt />   {date.toLocaleDateString()}
            </p>
            <p>
            <FaUserClock/>   {date.toLocaleTimeString()}
            </p>
        </div>
    );
}
export default DateTime ;