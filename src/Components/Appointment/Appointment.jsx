import React, {  useState } from 'react';
import Mainappinment from './Mainappinment/Mainappinment';
import Dateappiment from './DateAppioment/Dateappiment';


const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  const [appointment, setAppointment] = useState([]);
  const [trethment, settrethment] = useState([]);
 
 
  return (
    <div>
      <Mainappinment selected={selected} setSelected={setSelected}/>
      <Dateappiment selected={selected} trethment={trethment} settrethment={settrethment} appointment={appointment}  setAppointment={setAppointment} />
      
    </div>
  );
}

export default Appointment;
