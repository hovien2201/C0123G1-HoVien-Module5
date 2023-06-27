import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export function UpdateLibrary() {
    const navigate = useNavigate();
    const param = useParams();

    const [libary, setLibrary] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await axios.get('http://localhost:8080/libary/' + param.id)
                setLibrary(result.data)
            } catch (e) {
            }
        }
        fetchApi()

    }, [])
    return (
        <>

            <NavLink to="/" className="btn-secondary btn mt-2 m-4">Quay Lại</NavLink>
            <Formik initialValues={{
                title: libary.title,
                quantity: libary.quantity
            }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Không được để trống'),
                    quantity: Yup.number().required('Không được để trống')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    const edit = async () => {
                        setSubmitting(false)
                        await axios.patch('http://localhost:8080/libary/' + param.id, values)
                        console.log(values)
                        toast.success("Update successfully!!!")
                        navigate("/")
                    }
                    edit()
                }}
            >
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{ zIndex: -1 }}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{ textAlign: "center" }}>
                                    <h2 style={{ color: "black" }}>Update book </h2>
                                </div>
                                <Form>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                        // value={libary.title}

                                        />
                                        <ErrorMessage name="title" component="span" className="error-mess" />
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"

                                            name="quantity"
                                            // value={libary.quantity}
                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage name="quantity" component="span" className="error-mess" />
                                    </div>
                                    <div className="text-center m-auto mt-2">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">Save</b>
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}