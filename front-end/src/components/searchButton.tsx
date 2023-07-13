import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './com.style1.css';
const Infobutton = () => {
  return (
    <div className='info-button'>
      <Link to="/health" className='btn btn-primary'>Hospitals</Link>
      <Link to="" className='btn btn-primary'>Clinics</Link>
      <Link to="" className='btn btn-primary'>Eye Care</Link>
      <Link to="" className='btn btn-primary'>Dental</Link>
      <Link to="" className='btn btn-primary'>Therapist</Link>
      <Link to="" className='btn btn-primary'>Pharmacy</Link>
    </div>
  )
}

export default Infobutton;
