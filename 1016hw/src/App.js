import React,{ useState } from 'react';
import Clock1 from './Clock1';
import Clock2 from './Clock2';

function App () {
   let [ clock,setClock ] = useState({
      id:'1',
      step:'1',
      time:'1000',
      flag:false,
   });

   return (
      <div>
         控制器：
         <div>

            <select value={ clock.id } onChange={
               (e)=>{
                  setClock({ ...clock, id:e.target.value });
               }
            }>
               <option value="1">定时器1</option>
               <option value="2">定时器2</option>
            </select>

            <div>
               step:
               <input type="text" value={ clock.step || '' } onChange={
                  (e)=>{
                     setClock({ ...clock, step:e.target.value });
                  }
               }/>
            </div>

            <div>
               time:
               <input type="text" value={ clock.time || '' } onChange={
                  (e)=>{
                     setClock({ ...clock, time:e.target.value });
                  }
               }/>
            </div>

            <div>
               <button onClick={
                  ()=>{
                     setClock({ ...clock, flag:!clock.flag });
                  }
               }>修改</button>
            </div>
         </div>
         <Clock1 clock={ clock } ></Clock1>
         <Clock2 clock={ clock } ></Clock2>

      </div>
   );
}

export default App;
