import { useNavigate } from "react-router-dom"

export function Header(){
    const navigate = useNavigate()
     function gotToHome(){
        navigate('/');
     }
     function goToFooter(){
        navigate('/footer');
     }
    return(
        <div>
        <h1>This is header page</h1>
        <button onClick={gotToHome}>Go To Home</button>
        <button onClick={goToFooter}>Go To Footer</button>
        </div>
    )
}