import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css'
import Swal from "sweetalert2"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export function ContentComponent() {
    const [services, setService] = useState([])
    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/service')
            setService(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {

        fetchApi()
    }, [])
    const deleteUser = async (id) => {
        await axios.delete('http://localhost:8080/service/'+id)
        Swal.fire({
            icon:"success",
            title:"Delete success",
            timer: "2000"
        })
       fetchApi()
    }
    const deleteClick = async (id,name) => {
        Swal.fire({
            icon:"warning",
            title: `Do you want to delete service <span className='hh'>${name}</span>?`,
            showCancelButton: true,
            confirmButtonText:"Oke"
        })
        .then((rs) => {
            if(rs.isConfirmed){
                deleteUser(id)
            }
        })
    }
    return (
        <>
            <div className="container bg-white">
                <div className="row">
                    {services.map((list) => (
                        <div
                            className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                            <div className="product card">
                                <img className="img-fluid " src={list.img} style={{width:"400px",height:"250px"}}/>
                                <div className="text-center" >
                                    <div className="">
                                        <h5
                                            style={{ fontWeight: "bold", fontFamily: "Serif", marginTop: "-4%", color: "black",width:"350px",height:"75px", marginLeft:"5%" }}
                                            className="title pt-4 pb-1">{list.name} </h5>
                                    </div>
                                    <p className=""
                                        style={{ marginLeft: "5%", marginTop: "-2%" }}
                                    >Diện tích phòng: {list.area} m <sup>2</sup></p>
                                </div>
                                <div className="d-flex justify-content-center"
                                    style={{ marginTop: "1%", marginBottom: "2%", borderRadius: "30px" }}>
                                    <NavLink to={`/editService/${list.id}`} className="btn"
                                        style={{
                                            backgroundColor: "#0099FF",
                                            borderTop: "#046056",
                                            color: "white",
                                            marginLeft: "-5%",
                                            width: "100px"
                                        }}>Sửa</NavLink>
                                    <button  className="btn btn-danger" onClick={() => deleteClick(list.id,list.name)}
                                        style={{ marginLeft: "5%", width: "100px" }}
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            
        </>

    )
}