import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate"
export function CustomerList({itemsPerPage}) {
    const [customers, setCustomer] = useState([])
    const fetchApi = async (pageCount) => {
        try {
            const result = await axios.get(`http://localhost:8080/customer`)
            setCustomer(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {

        fetchApi()
    }, [])

    




    
    const deleteCus = async (id) => {
        await axios.delete('http://localhost:8080/customer/' + id)
        Swal.fire({
            icon: "success",
            title: "Delete success",
            timer: "3000"
        })
        fetchApi()
    }
    const deleteClick = async (id, name) => {
        Swal.fire({
            icon: "warning",
            title: `Do you want to delete customer <span >${name}</span>?`,
            showCancelButton: true,
            confirmButtonText: "Oke"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    deleteCus(id)
                }
            })
    }
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
                                            onClick={() => deleteClick(cus.id, cus.name)}
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
{/*                 
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={itemsPerPage}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                /> */}
            </div>
            <ToastContainer />
        </>
    )
}
