import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function EditCustomer() {
    const param =useParams()
    const navigate = useNavigate();
    const [customer,setCustomer] = useState()
    useEffect( () => {

        const findService = async () => {
        const res = await axios.get('http://localhost:8080/customer/'+param.id) ;
        setCustomer(res.data)
        }
        findService()
    
    },[param.id])
    if(!customer){
        return null;
    }
    return (
        <>

            <Formik initialValues={{
                id:customer.id,
                name: customer.name,
                type: customer.type,
                dayOfBirth: customer.dayOfBirth,
                gender: customer.gender,
                identityCard: customer.identityCard,
                phoneNumber: customer.phoneNumber,
                email: customer.email,
                address: customer.address
            }}
                validationSchema={Yup.object({
                    type: Yup.string()
                        .required('Không được để trống'),
                    name: Yup.string()
                        .required('Không được để trống')
                        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, 'Tên chưa đúng định dạng'),
                    dayOfBirth: Yup.string()
                        .required('Không được để trống')
                    ,
                    email: Yup.string()
                        .required('Không được để trống'),
                    identityCard: Yup.number()
                        .required('Không được để trống')
                        .min(0, 'Lớn hơn 0'),
                    phoneNumber: Yup.number()
                        .required('Không được để trống')
                        .min(0, 'Lớn hơn 0'),
                    address: Yup.string()
                        .required('Không được để trống')

                })}
                onSubmit={(values, { setSubmitting }) => {
                    const create = async () => {
                        setSubmitting(false)
                        await axios.put('http://localhost:8080/customer/'+values.id, values)
                        Swal.fire({
                            icon: "success",
                            title: "Chỉnh sửa thành công",
                            timer: "3000"
                        })
                        console.log(values)
                        navigate("/customer")
                    }
                    create();
                }}
            >


                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"

                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{ textAlign: "center" }}>
                                    <h2 style={{ color: "black" }}>Add new Customer</h2>
                                </div>
                                <Form>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Tên Khách hàng"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r" />

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            as="select"
                                            name="type"
                                            className="form-control"
                                        >

                                            <option value="Diamond">Diamond</option>
                                            <option value="Platinum">Platinum</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                        </Field>
                                        <ErrorMessage name="type" component="span" className="error-r" />
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="date"
                                            className="form-control"
                                            min="0"
                                            name="dayOfBirth"
                                            placeholder="Ngày sinh"
                                        />
                                        <ErrorMessage name="dayOfBirth" component="span" className="error-r" />
                                    </div>

                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                as="select"
                                                name="gender"
                                                className="form-control"
                                            >
                                                <option value="Nam">Nam</option>
                                                <option value="Nữ">Nữ</option>
                                                <option value="Khác">Khác</option>
                                            </Field>
                                            <ErrorMessage name="gender" component="span" className="error-r" />

                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="number"
                                                className="form-control"
                                                name="identityCard"
                                                placeholder="Số CMND"
                                            />
                                            <ErrorMessage name="identityCard" component="span" className="error-r" />

                                        </div>
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            type="number"
                                            className="form-control"
                                            name="phoneNumber"
                                            placeholder="Số điện thoại"
                                        />
                                        <ErrorMessage name="phoneNumber" component="span" className="error-r" />
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage name="email" component="span" className="error-r" />
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Địa chỉ"
                                        />
                                        <ErrorMessage name="address" component="span" className="error-r" />
                                    </div>
                                    <div className="text-center m-auto mt-4">
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