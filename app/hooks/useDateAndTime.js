import {useState,} from 'react';

export default useDateAndTime = () => {

    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('Time');
    const [date, setDate] = useState(new Date(Date.now()));
  
  
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
          setMode(currentMode);
          setShow(true);
          console.log("set to ",currentMode)
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
      const showTimepicker = () => {
        showMode('time');
        console.log(date)
      };
    
      const getDate = () => {
        showDatepicker()
      };
      const getTime = () => {
        showTimepicker()
        console.log(date)
      };



  return { onChange,getTime,getDate,show,date,mode };
};
