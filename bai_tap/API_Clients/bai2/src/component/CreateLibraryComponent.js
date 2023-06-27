import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
export function CreateLibrary() {
    const navigate = useNavigate();

    return (
        <>

            <NavLink to="/" className="btn-secondary btn mt-2 m-4">Quay Lại</NavLink>
            <Formik initialValues={{
                title: '',
                quantity:''
            }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Không được để trống'),
                            quantity: Yup.number().required('Không được để trống')
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await axios.post('http://localhost:8080/libary',values);
                            toast.success("Add successfully!!!")
                            navigate("/")
                        }
                        create()
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
                                    <h2 style={{ color: "black" }}>CREATE BOOK </h2>
                                </div>
                                <Form>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Title"
                                        />
                                        <ErrorMessage name="title" component="span" className="error-mess" />
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="quantity"
                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage name="quantity" component="span" className="error-mess" />

                                    </div>

                                    <div className="text-center m-auto mt-2">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">CREATE</b>
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