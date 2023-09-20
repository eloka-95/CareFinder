import React from 'react'
import { useOutletContext } from 'react-router-dom';

type Facility = {
  facility: {
    state: string;
    location: string;
    // Add other fields as needed
  }[];

}

const Location = () => {
  const { facility } = useOutletContext<Facility>();

  return (
    <div>
      <div>
        <p>State: {facility?.state}</p>
        <p> Location: {facility?.location}</p>
        </div>
    </div>
  )
}

export default Location;
