import styled from "styled-components"
import {useParams} from "react-router-dom";

const SingleProduct=()=>{
    const{id}=useParams();
    console.log(id)
    return <h1>single page</h1>;
}
export default SingleProduct;