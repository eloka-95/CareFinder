import React from 'react'
import { useOutletContext } from 'react-router-dom';

type Facillity= {
  facility:{
    phone_number: string;
    email: string;
  }[]

}
const Contact = () => {
const {facility} = useOutletContext<Facillity>();

  return (
    <div>
      <p>Phone: {facility?.phone_number}</p>
      <p>Email: {facility?.email}</p>
    </div>
  )
}

export default Contact;