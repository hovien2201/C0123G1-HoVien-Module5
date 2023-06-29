import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

export function CustomerList() {
    const [customers, setCustomer] = useState([])
    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/customer')
            setCustomer(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {

        fetchApi()
    }, [])

    return (
        <>
            <div className="body-content container-fluid" style={{ marginTop: "2%" }}>
                <h1 className="text text-1 text-center">Customer List</h1>
                <NavLink
                    to="/createCustomer"
                    className="btn btn-info"
                    style={{ float: "right", marginRight: "2%" }}
                >
                    Add New Customer
                </NavLink>
                <table className="table  table-hover text-center">
                    <thead className="table-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Day Birth</th>
                            <th>Gender</th>
                            <th>CMND number</th>
                            <th>Phone number</th>
                            <th>Email</th>
                            <th>Customer Type </th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((cus) => (
                                <tr>
                                    <td>{cus.id}</td>
                                    <td>{cus.name}</td>
                                    <td>{cus.dayOfBirth}</td>
                                    <td>{cus.gender}</td>
                                    <td>{cus.identityCard}</td>
                                    <td>{cus.phoneNumber}</td>
                                    <td>{cus.email}</td>
                                    <td>{cus.type}</td>
                                    <td>
                                        <NavLink to={`/editCustomer/${cus.id}`} className="btn btn-info">
                                            Edit
                                        </NavLink>
                                        <a
                                            href=""
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Flat Pagination Round</h4>
                                        <p className="card-description">
                                            Flat pagination round Example
                                        </p>
                                        <nav>
                                            <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        <i className="fa fa-angle-left" />
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        4
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" data-abc="true">
                                                        <i className="fa fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}