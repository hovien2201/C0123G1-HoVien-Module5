import axios from "axios"

export const findById=async(id)=>{
    const result=await axios.get(`http://localhost:8080/service/${id}`)
    return result.data
}