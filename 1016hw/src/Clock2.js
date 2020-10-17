import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Clock2 ({ clock }) {

   let [ count,setCount ] = useState(0);
   let [ isStart,setIsStart ] = useState(false);

   const countRef = useRef(count);
   const stepRef = useRef(Number(clock.step));
   const timeRef = useRef(Number(clock.time));

   useEffect(() => {
      countRef.current = count;
   }, [ count ]);

   useEffect(() => {
      if(clock.id === '2'){
         stepRef.current = Number(clock.step);
         timeRef.current = Number(clock.time);
      }
   }, [ clock.flag ]);

   useEffect(()=>{
      let timer;
      if(isStart){
         timer = setInterval(()=>{
            setCount(countRef.current + stepRef.current);
         },timeRef.current);
      }
      return ()=>{
         if(timer){
            clearInterval(timer);
         }
      };
   },[ isStart,clock.flag ]);

   return (
      <div>
            定时器2: { count }
         <div>
            <button onClick={
               ()=>{
                  setIsStart(!isStart);
               }
            }>{isStart ? 'stop' : 'start' }
            </button>

         </div>

      </div>
   );
}

Clock2.propTypes = {
   clock: PropTypes.object
};