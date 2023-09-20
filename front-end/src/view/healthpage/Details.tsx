import { useOutletContext } from 'react-router-dom';

type Facility = {
  facility: {
    name: string;
    details: string;
    // Add other fields as needed
  }[];

}
const Details = () => {
  // Define or import the FacilityData type
  const { facility } = useOutletContext<Facility>();
  // Access the 'details' property inside the first element of 'facility' array
  // const firstFacility = facility[0]; // Assuming you want the details of the first facility
  return (
    <div>
      <p>name: {facility?.name}</p>
      <p>Details: {facility?.details} </p>
      </div>
  )
}

export default Details; 