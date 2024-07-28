import React, { useEffect, useRef, useState } from 'react'

const RenderCalendar = (props) => {
    const d=props.currentdate;
    const day=new Date(d.getFullYear(),d.getMonth(),1).getDay();
    console.log(day);
    const lastdatemonth=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
    const data_array=[];
    const data=[];
for (let i = 0; i <day; i++) {
data_array.push('');
}
for (let i = 0; i < lastdatemonth; i++) {
    data_array.push(i+1);
}
for (let i = 0; data_array.length < 42; i++) {
    data_array.push('');
}
for (let i = 0; i < data_array.length; i=i+7) {
data.push(data_array.slice(i,i+7));
}
console.log(data_array,data);
   
  return (
    <div>
         <div id="display">
       <table>
        <thead>
          <tr>
            {props.week.map((item,i)=><td key={'week'+i}>{item}</td>)}
          </tr>
        </thead>
        <tbody>
          {
          data.map((item,i)=><tr key={'a'+i}>
            {item.map((elem,j)=>
              <td key={'b'+j}>{elem}</td>
            )} 
           </tr>)
          }
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default RenderCalendar