import { useEffect } from "react";
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux"
import { deleteUsers, getAllUser } from "./REDUX/action/users";
import { Button } from "bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function UsersList() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const getUser = async () => {
        dispatch(getAllUser())

    }

    useEffect(() => {
        // getUser()
    }, [])
    const deleteUser = async (id) => {
        await dispatch(deleteUsers(id))
        Swal.fire({
            icon: "success",
            title: "Delete success",
            timer: "2000"
        })
        getUser()
    }
    const deleteClick = async (id, name) => {
        Swal.fire({
            icon: "warning",
            title: `Do you want to delete user <span>${name}</span>?`,
            showCancelButton: true,
            confirmButtonText: "Oke"
        })
            .then((rs) => {
                if (rs.isConfirmed) {
                    deleteUser(id)
                }
            })
    }
    return (
        <>
            <div className="table-responsive container">
                <h3 style={{ textAlign: "center" }}>Users List</h3>
                <button onClick={() => getUser()} className="btn btn-primary text-capitalize " style={{ marginLeft: "3%" }} >
                    Get Users
                </button>
                <table className="table app-table-hover mb-0 text-center">
                    <thead>
                        <tr className="flex-sm-fill ">
                            <th style={{ width: "10%" }} >Id</th>
                            <th style={{ width: "30%" }} >Name</th>
                            <th style={{ width: "20%" }}>Email</th>
                            <th style={{ width: "20%" }}>Website</th>
                            <th style={{ width: "20%" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr  >
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <th>
                                        <button
                                            onClick={() => deleteClick(user.id, user.name)}
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