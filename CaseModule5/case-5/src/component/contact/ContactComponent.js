import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

export function ContactList() {
    const [contract, setContract] = useState([])
    const [customer, setCustomer] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [contractsPerPage, setContractsPerPage] = useState(5);

    const getAllCus = async () => {
        try {
            const result = await axios.get('http://localhost:8080/customer')
            setCustomer(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/contract')
            setContract(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getAllCus()
        fetchApi()
    }, [])

    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    const currentContracts = contract.slice(indexOfFirstContract, indexOfLastContract);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (!customer) {
        return null
    }

    return (
        <>
            <div className="body-content container-fluid" style={{ marginTop: "2%" }}>
                <h1 className="text text-1 text-center">Contract List</h1>
                <NavLink
                    to="/createContact"
                    className="btn btn-info"
                    style={{ float: "right", marginRight: "2%" }}
                >
                    Add New Contract
                </NavLink>
                <table className="table  table-hover text-center">
                    <thead className="table-light">
                        <tr>
                            <th>Contract Code</th>
                            <th>Customer Name</th>
                            <th>Day start</th>
                            <th>Day end</th>
                            <th>Advance deposit amount(VND)</th>
                            <th>Total payment amount(VND)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentContracts.map((contract) => (
                                <tr key={contract.id}>
                                    <td>HD-{contract.id}</td>
                                    <td>{customer.find((cus) => cus.id == contract.customerId).name}</td>
                                    {/* <td>{contract.customerId}</td> */}
                                    <td>{contract.dayStart}</td>
                                    <td>{contract.endDay}</td>
                                    <td>{contract.deposit}</td>
                                    <td>{contract.totalMoney}</td>
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
                                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                    <a className="page-link" href="#" data-abc="true" onClick={() => paginate(currentPage - 1)}>
                                                        <i className="fa fa-angle-left" />Back
                                                    </a>
                                                </li>
                                                {Array.from({ length: Math.ceil(contract.length / contractsPerPage) }, (item, index) => (
                                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                        <a className="page-link" href="#" data-abc="true" onClick={() => paginate(index + 1)}>{index + 1}</a>
                                                    </li>
                                                ))}
                                                <li className={`page-item ${currentPage === Math.ceil(contract.length / contractsPerPage) ? 'disabled' : ''}`}>
                                                    <a className="page-link" href="#" data-abc="true" onClick={() => paginate(currentPage + 1)}>
                                                        <i className="fa fa-angle-right" />Next
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
