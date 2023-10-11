import Errorimg from '../assets/image/error.png';

const ErrorPage = ({error, resetErrorBoundary}) =>{
    console.log("error log", error)
    return (
        <div>
            <img src={Errorimg} alt='somthing went wrong'/>
            <p> somthing went wrong, Try clinkg the refresh Button </p>
            <button onClick={resetErrorBoundary}>Refresh page</button>
        </div>
    )
}

export default ErrorPage;

//error and resetEroorBoundary props on this componet is been sent from the error boundery package that is been used to wrap the app component on the main.tsx file 