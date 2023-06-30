import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";

export function CreateContact() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([])
    const [service, setService] = useState([])
    const [serviceId, setServiceId] = useState()
    const getAllCus = async () => {
        const rs = await axios.get('http://localhost:8080/customer')
        setCustomer(rs.data)
    }
    const getAllCService = async () => {
        const rs = await axios.get('http://localhost:8080/service')
        setService(rs.data)
    }
    useEffect(() => {
        getAllCService()
        getAllCus()
    }, [])
    if (!customer || !service) {
        return null
    }
    return (
        <>
            <Formik
                initialValues={{
                    // contractCode: '',
                    dayStart: '',
                    endDay: '',
                    deposit: '',
                    totalMoney: 0,
                    customerId: 0,
                    serviceId: serviceId
                }}
                validationSchema={Yup.object({
                    // contractCode: Yup.string()
                    //     .required('Không được để trống').matches(/^HD-[0-9]{1,3}$/),
                    dayStart: Yup.string().required('Không được để trống'),
                    endDay: Yup.string().required('Không được để trống'),
                    deposit: Yup.number().required('Không được để trống').min(0),
                    // totalMoney: Yup.number().required('Không được để trống').min(1),
                    customerId: Yup.number().required('Không được để trống').min(1, 'Vui lòng chọn khách hàng'),
                    serviceId: Yup.number().required('Không được để trống').min(1, 'Vui lòng chọn Dịch vụ')

                })}
                onSubmit={async (values, { setSubmitting }) => {
                    const create = async () => {
                        values = {
                            ...values,
                            totalMoney: service.find((ser) => ser.id == serviceId)?.rentalCost
                        }
                        setSubmitting(false)
                        await axios.post('http://localhost:8080/contract', values);
                        Swal.fire({
                            icon: "success",
                            title: "Thêm mới thành công",
                            timer: "3000"
                        })
                        navigate("/contact")

                    }
                    create()
                }}
            >
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"

                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{ textAlign: "center" }}>
                                    <h2 style={{ color: "black" }}>Add new Contract</h2>
                                </div>
                                <Form>
                                    {/* <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="contractCode"
                                            placeholder="Mã hợp đồng (HD-X)"
                                        />
                                        <ErrorMessage name="contractCode" component="span" className="error-r" />

                                    </div> */}
                                    <div className=" mt-4 inputs">
                                        <Field
                                            as="select"
                                            name="customerId"
                                            className="form-control"
                                        >
                                            <option value={0}>Khách hàng</option>
                                            {
                                                customer.map((cus, index) => (
                                                    <option value={cus.id} key={index}>{cus.name}</option>
                                                ))
                                            }

                                        </Field>
                                        <ErrorMessage name="customerId" component="span" className="error-r" />
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            onClick={(event) => setServiceId(event.target.value)}

                                            as="select"
                                            name="serviceId"
                                            className="form-control"
                                        >
                                            <option value={0}>Dịch vụ</option>
                                            {
                                                service.map((ser, index) => (
                                                    <option value={ser.id} key={index}>{ser.name}</option>
                                                ))
                                            }

                                        </Field>
                                        <ErrorMessage name="serviceId" component="span" className="error-r" />
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="date"
                                            className="form-control"
                                            name="dayStart"
                                            placeholder="Ngày bắt đầu hợp đồng"
                                        />
                                        <ErrorMessage name="dayStart" component="span" className="error-r" />
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            type="date"
                                            className="form-control"
                                            name="endDay"
                                            placeholder="Ngày kết thúc hợp đồng"
                                        />
                                        <ErrorMessage name="endDay" component="span" className="error-r" />
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            type="number"
                                            className="form-control"
                                            name="deposit"
                                            placeholder="Số tiền đặt cọc trước(VND)"
                                        />
                                        <ErrorMessage name="deposit" component="span" className="error-r" />
                                    </div>
                                    <div className="row mt-4 ">
                                        <div className="col-md-3 form-group mt-3 mt-md-0">
                                            <label>Tổng tiền:</label>
                                        </div>
                                        <div className="col-md-9 form-group mt-3 mt-md-0">
                                            <Field type="number" disabled
                                                name="totalMoney" value={service.find((ser) => ser.id == serviceId)?.rentalCost}></Field>
                                        </div>
                                    </div>
                                    <div className="text-center m-auto mt-4">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">Add new</b>
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