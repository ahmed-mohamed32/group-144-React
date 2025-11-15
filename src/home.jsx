import { useNavigate } from "react-router-dom"

export function Home(){
    const navigate = useNavigate();
    function goToFooter(){
        navigate('/footer');
    }
    function goToHeader(){
        navigate('/header');
    }
    return(
        <div>
        <h1>This is my home page</h1>
         <button onClick={goToFooter}>Go To Footer</button>
         <button onClick={goToHeader}>Go To Header</button>
        </div>
    )
}