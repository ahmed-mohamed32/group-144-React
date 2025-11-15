import { useNavigate } from "react-router-dom"

export function Footer(){
    const navigate = useNavigate();
    function goToHome(){
        navigate('/');
    }
    function goToHeader(){
        navigate('/header');
    }
    return(
        <div>
        <h1>This is Footer page</h1>
        <button onClick={goToHome}>Go To Home</button>
        <button onClick={goToHeader}>Go To Header</button>
        </div>
    )
}