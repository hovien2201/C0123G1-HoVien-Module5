import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
import style from './contact.css';

export function CreateContact() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    contractCode: '',
                    dayStart: '',
                    endDay: '',
                    deposit: '',
                    totalMoney: ''
                }}
                validationSchema={Yup.object({
                    contractCode: Yup.string()
                        .required('Không được để trống').matches(/^HD-[0-9]{1,3}$/),
                    dayStart: Yup.string().required('Không được để trống'),
                    endDay: Yup.string().required('Không được để trống'),
                    deposit: Yup.number().required('Không được để trống').min(0),
                    totalMoney: Yup.number().required('Không được để trống').min(0)
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    const create = async () => {
                        setSubmitting(false)
                        await axios.post('http://localhost:8080/contract', values);
                        navigate("/contact")
                        toast.success("Add successfully!!!")
                        
                    }
                    create()
                }}
            >
                <div className="container1">
                    <div className="text">Add new Contact</div>
                    <Form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <Field type="text" name="contractCode" />
                                <div className="underline" />
                                <label htmlFor="">Contract Code</label>
                                <ErrorMessage name="contractCode" component="span" className="error-mess" />

                            </div>
                            <div className="input-data">
                                <Field type="date" name="dayStart" />
                                <div className="underline" />
                                <label htmlFor="">Day start</label>
                                <ErrorMessage name="dayStart" component="span" className="error-mess" />

                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <Field type="date"  name="endDay" />
                                    <div class="underline"></div>
                                    <label for="">Day end</label>
                                <ErrorMessage name="endDay" component="span" className="error-mess" />

                            </div>
                            <div class="input-data">
                                <Field type="number"  name="deposit"/>
                                    <div class="underline"></div>
                                    <label for="">Advance deposit amount(VND)</label>
                                <ErrorMessage name="deposit" component="span" className="error-mess" />

                            </div>
                        </div>
                        {/* <div className="form-row">
                            <div className="input-data">
                                <input type="number" required="" />
                                <div className="underline" />
                                <label htmlFor="">Advance deposit amount(VND)</label>
                            </div>
                            <div className="input-data">
                                <input type="number" required="" />
                                <div className="underline" />
                                <label htmlFor="">Total payment amount(VND)</label>
                            </div>
                        </div> */}
                        <div className="form-row">
                            <div className="input-data textarea">
                                <Field type="number" name="totalMoney" />
                                <br />
                                <div className="underline" />
                                <label htmlFor="">Total payment amount(VND)</label>
                                <ErrorMessage name="totalMoney" component="span" className="error-mess" />

                                <br />
                                <button className="button" type="submit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </Form>
                    <NavLink to="/contact"><button type="button" className="button" style={{ marginLeft: "70%", color: "grey" }}
                    >Back</button></NavLink>
                </div>
            </Formik>
        </>
    )
}