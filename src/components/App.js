/*import React, {Component, useState} from "react";
import '../styles/App.css'
import moment from 'moment'

export default function App() {
  let[selectedDate,setSelectedDate] = useState(moment());
  let[showYearInput,setShowYearInput] = useState(true);
  const daysInMonth = () => selectedDate.daysInMonth();
  const selectedCurrentDate = () => selectedDate.get("date");
  const gapsToBeLeft = () => moment(selectedDate).startOf('month').format('d');

  let completeTable = [];
  let oneRow = [];
  let totalCells = [];
  let cellNumber = 1;

  for(let i = 0;i<gapsToBeLeft() ; i++)
  {
    const id = "cell" + cellNumber;
    totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{""}</td>) , cellNumber++;
  }
  for(let i = 1;i<=daysInMonth(); i++)
  {
    const id = "cell" + cellNumber;
    if(i===selectedCurrentDate())
    totalCells.push(<td className = "border border-secondary bg-info" key={cellNumber} id ={"today"}>{i}</td>);
    else
    totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{i}</td>);
    cellNumber++;
  }

  for(let i = Number(gapsToBeLeft())+Number(daysInMonth());i%7!==0;i++)
    {
      const id = "cell" + cellNumber;
      totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{""}</td>) , cellNumber++;
    }

  totalCells.forEach((cell, i)=>{
    if(i%7 !== 0)
    {
      oneRow.push(cell);
    }
    else
    {
      let currRow = oneRow.slice();
      completeTable.push(<tr className = "border border-secondary"key = {i*109+2}>{currRow}</tr>);
      oneRow = [];
      oneRow.push(cell);
    }
    if(i === totalCells.length - 1)
    {
      let currRow = oneRow.slice();
      completeTable.push(<tr key = {i*109+2}>{currRow}</tr>);
    }
  })

  const alterYear = (year) => {
    let dateContext = Object.assign({}, selectedDate);
    dateContext = moment(dateContext).set("year",year);
    setSelectedDate(dateContext);
  }

  const setMonth = (month) => {
        let dateContext = Object.assign({}, selectedDate);
        dateContext = moment(dateContext).set("month", month);
        setSelectedDate(dateContext);
      }
      
  return (
    <div id="main">
    <div className = "container">
    <div className = "mx-auto">
      <h1 id = "heading">Calendar</h1>
    <div className = "d-flex justify-content-around">
      <select id = "month" value = {selectedDate.format("MMMM")} onChange={(e)=> {setMonth(moment.months().indexOf(e.target.value))}}>
        {
          moment.months().map((data)=>{
            return(
              <option id = {data} key={data}>
                  {data}
              </option>
            )
          })
        }
      </select>
      {
        showYearInput ?
        <span id = "year" onDoubleClick={(e)=>{setShowYearInput(false)}}>  
        {selectedDate.format("Y")}          
        </span>
        :
        <input id = "year-text-box" defaultValue = {selectedDate.format("Y")}
          onKeyUp = {(e)=>{
            if(e.which===13) 
            {setShowYearInput(true)}
          }}
          onChange = {(e)=>{alterYear(e.target.value)}}
        >
        </input>
      }
    </div>
    <hr className = "w-75">
    </hr>
    <table className="mx-auto w-75">
      <tbody >
        <tr className="bg-dark text-light">
          {moment.weekdaysShort().map((day)=>{
            cellNumber++;
            const id = "month"+cellNumber;
            return (
              <td className = "border border-secondary" key={cellNumber} id={id}>{day}</td>
            )
          })}
        </tr>
        {completeTable}
      </tbody>
    </table>
    <hr className = "w-75"></hr>
    <div className = "w-75 mx-auto">
      <button className = "w-25" id = "previous-year" onClick = {() => alterYear(Number(selectedDate.format("Y"))-1)}>{"<<"}</button>
      <button className = "w-25" id = "previous-month" onClick = {() => setMonth(Number(selectedDate.format("M"))-2)}>{"<"}</button>
      <button className = "w-25" id = "next-month" onClick = {() => setMonth(Number(selectedDate.format("M")))}>{">"}</button>
      <button className = "w-25" id = "next-year" onClick = {() => alterYear(Number(selectedDate.format("Y"))+1)}>{">>"}</button>
    </div>
    </div>
  </div>
  </div>
    )
}
*/
import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';
import RenderCalendar from "./RenderCalendar";

const App = () => {
  const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const [currentdate,setcurrentdate]=useState(new Date());
  const [year,setyear]=useState(new Date().getFullYear());
  const [month,setmonth]=useState(new Date().getMonth());
  const [monthword,setmonthword]=useState(()=>{
   let val=new Date().getMonth();
   return val==0?val='January':(val==1?val='February':(val==2?val='March':(val==3?val='April':(val==4?val='May':(val==5?val='June':(val==6?val='July':(val=='7'?val='August':(val==8?val='September':(val==9?val='October':(val==10?val='November':val='December'))))))))))
  });
  console.log(currentdate,'in app');
const handleyear=(e)=>{
  const val=parseInt(e.target.value);
  setyear(val);
  setcurrentdate(new Date(val,month,1));
}
const handleselect=(e)=>{
let val=e.target.value;
setmonthword(val);
switch (val) {
  case 'January':val=0;
  break;
  case 'February':val=1;
  break;
  case 'March':val=2;
  break;
  case 'April':val=3;
  break;
  case 'May':val=4;
  break;
  case 'June':val=5;
  break;
  case 'July':val=6;
  break;
  case 'August':val=7;
  break;
  case 'September':val=8;
  break;
  case 'October':val=9;
  break;
  case 'November':val=10;
  break;
  case 'December':val=11;
  break;
}
setmonth(val);
setcurrentdate(new Date(year,val,1));
}
const handlebtn=(e)=>{
if (e.target.value=='year-') {
  setyear(year=>year-1);
  const val=year-1;
setcurrentdate(new Date(val,month,1));
}else if (e.target.value=='year+') {
  setyear(year+1);
  const val=year+1;
setcurrentdate(new Date(val,month,1));
}else if (e.target.value=='month-') {
  (month==0)?setmonth(11):setmonth(month-1);
  let val1=month;
  (val1==0)?val1=11:val1=val1-1;
  val1==0?val1='January':(val1==1?val1='February':(val1==2?val1='March':(val1==3?val1='April':(val1==4?val1='May':(val1==5?val1='June':(val1==6?val1='July':(val1=='7'?val1='August':(val1==8?val1='September':(val1==9?val1='October':(val1==10?val1='November':val1='December'))))))))))
  setmonthword(val1);
  let val;
  month==0?val=11:val=month-1;
  setcurrentdate(new Date(year,val,1));

}else if (e.target.value=='month+') {
(month==11)?setmonth(0):setmonth(month+1); 
let val1=month;
  (val1==11)?val1=0:val1=val1+1;
  val1==0?val1='January':(val1==1?val1='February':(val1==2?val1='March':(val1==3?val1='April':(val1==4?val1='May':(val1==5?val1='June':(val1==6?val1='July':(val1=='7'?val1='August':(val1==8?val1='September':(val1==9?val1='October':(val1==10?val1='November':val1='December'))))))))))
  setmonthword(val1); 
let val;
month==11?val=0:val=month+1;
setcurrentdate(new Date(year,val,1));
}
}
const [click,setclick]=useState(true);
const handleclick=()=>{
  setclick(false)
}
  return (
    <div id="main">
      <h1 id="heading">Calendar</h1>
    
      <select id="month" value={monthword} onChange={handleselect}>
        <option value='January'>January</option>
        <option value='February'>February</option>
        <option value='March'>March</option>
        <option value='April'>April</option>
        <option value='May'>May</option>
        <option value='June'>June</option>
        <option value='July'>July</option>
        <option value='August'>August</option>
        <option value='September'>September</option>
        <option value='October'>October</option>
        <option value='November'>November</option>
        <option value='December'>December</option>
      </select>
     
      
    {click && <span id="year" onDoubleClick={handleclick}>{year}</span>}  
    {!click && <input id="year-text-box" onChange={handleyear} type="number" value={year} />}
    {!click && <span id="year"></span>}
    <hr/>
     <RenderCalendar week={week} currentdate={currentdate} />
      <hr/>
      <div id="btns">
        <button id="previous-year" onClick={handlebtn} value='year-'>{'<<'}</button>
        <button id="previous-month" onClick={handlebtn} value={'month-'}>{'<'}</button>
        <button id="next-month" onClick={handlebtn} value={'month+'}>{'>'}</button>
        <button id="next-year" onClick={handlebtn} value={'year+'}>{'>>'}</button>
      </div>
    </div>
  )
}


export default App;