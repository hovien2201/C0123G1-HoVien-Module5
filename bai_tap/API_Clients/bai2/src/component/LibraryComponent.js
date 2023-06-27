import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

export function LibraryList() {
    const [library, setLibrary] = useState([])
    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/libary')
            setLibrary(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        
        fetchApi()
    }, [])
    const deleteApi = async (id) => {
        try {
            await axios.delete('http://localhost:8080/libary/'+id)
            toast("Delete successfully!!!")
        } catch (e) {
            console.log(e)
        }
        fetchApi()
    }
    return (
        <>
            <div className="table-responsive container">
                <h3 style={{ textAlign: "center" }}>Library List</h3>
                <NavLink to="/create" className="btn btn-primary text-capitalize " style={{marginLeft:"85%"}} >
                                                Add new library
                                            </NavLink>
                <table className="table app-table-hover mb-0 text-center">
                    <thead>
                        <tr className="flex-sm-fill ">
                            <th style={{width:"60%"}} >Title</th>
                            <th style={{width:"20%"}}>Quantity</th>
                            <th style={{width:"20%"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            library.map((library) => (
                                <tr  key={library.id} >
                                    <td>{library.title}</td>
                                    <td>{library.quantity}</td>
                                    <th>
                                        <NavLink to={`/update/${library.id}`} className="btn btn-warning text-capitalize" style={{marginRight:"2%"}} >
                                                Update
                                            </NavLink>
                                        <button onClick={() => deleteApi(`${library.id}`)}
                                            type="button"
                                            className="  btn btn-danger text-capitalize"
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </>
    )
}