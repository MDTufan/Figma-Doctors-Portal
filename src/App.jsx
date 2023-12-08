
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Components/Router/Router';
import "react-datepicker/dist/react-datepicker.css";
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
 

  return (
    <>
      <Router />
      <Toaster />
    </>
  )
}

export default App
