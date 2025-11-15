import { useParams } from "react-router-dom"

export function Details(){
    const {id} = useParams();
    return(
        <>
        <h1>post Details Page</h1>
        <h3>Post id : {id}</h3>
        </>
    )
}