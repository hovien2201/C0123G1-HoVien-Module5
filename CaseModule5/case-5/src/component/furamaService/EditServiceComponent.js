import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { findById } from "../../service/furamaService";


export function EditServiceComponent() {
    const navigate = useNavigate();
    const param=useParams();
    const [type, setType] = useState('Villa');
    const [service,setService] = useState()
    useEffect( () => {

        const findService = async () => {
        const res = await findById(param.id) ;
        setService(res)
        setType(res.type)
        }
        findService()
    
    },[param.id])
    if(!service){
        return null;
    }

    return (
        <>
  
            <Formik initialValues={{
                id:service?.id,
                type:service?.type,
                name:service?.name,
                area:service?.area,
                rentalCost:service?.rentalCost,
                maxPeople:service?.maxPeople,
                rentalType:service?.rentalType,
                descriptionOtherUtilities:service?.descriptionOtherUtilities,
                roomStandard: service?.roomStandard,
                numberFloors:service?.numberFloors,
                poolArea: service?.poolArea,
                freeServiceIncluded: service?.freeServiceIncluded,
                img: service?.img
            }}
                validationSchema={Yup.object({
                    type: Yup.string()
                        .required('Không được để trống'),
                    name: Yup.string()
                        .required('Không được để trống'),
                    area: Yup.number()
                        .required('Không được để trống')
                        .min(0, 'Lớn hơn 0'),
                    rentalCost: Yup.number()
                        .required('Không được để trống'),
                    maxPeople: Yup.number()
                        .required('Không được để trống')
                        .min(0, 'Lớn hơn 0'),
                    rentalType: Yup.string()
                        .required('Không được để trống'),
                    // descriptionOtherUtilities: Yup.string()
                    //     .required('Không được để trống'),
                    // roomStandard: Yup.string()
                    //     .required('Không được để trống'),
                    // numberFloors: Yup.number()
                    //     .required('Không được để trống')
                    //     .min(0, 'Lớn hơn 0'),
                    // poolArea: Yup.number()
                    //     .required('Không được để trống')
                    //     .min(0, 'Lớn hơn 0'),
                    img: Yup.string()
                        .required('Không được để trống')

                })}
                onSubmit={(values, { setSubmitting }) => {
                    const update = async () => {
                        setSubmitting(false)
                        await axios.put('http://localhost:8080/service/'+values.id, values)
                        Swal.fire({
                            icon: "success",
                            title: "Chỉnh sửa thành công",
                            timer: "3000"
                        })
                        
                        navigate("/")
                    }
                    update();
                }}
            >


                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"

                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{ textAlign: "center" }}>
                                    <h2 style={{ color: "black" }}>Edit Service</h2>
                                </div>
                                <Form>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            onClick={(event) => setType(event.target.value)}
                                            as="select"
                                            name="type"
                                            className="form-control"
                                            
                                        >                                         
                                            <option value="Villa">Villa</option>
                                            <option value="House">House</option>
                                            <option value="Room">Room</option>
                                        </Field>
                                        <ErrorMessage name="type" component="span" className="error-r" />
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Tên dịch vụ"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r" />

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="number"
                                            className="form-control"
                                            min="0"
                                            name="area"
                                            placeholder="Diện tích sử dụng"
                                        />
                                        <ErrorMessage name="area" component="span" className="error-r" />
                                    </div>

                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="text"
                                                name="rentalCost"
                                                className="form-control"
                                                placeholder="Chi phí thuê"
                                            />
                                            <ErrorMessage name="rentalCost" component="span" className="error-r" />

                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="maxPeople"
                                                placeholder="Số người tối đa"
                                            />
                                            <ErrorMessage name="maxPeople" component="span" className="error-r" />

                                        </div>
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            name="rentalType"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option value="" >
                                                --Loại hình cho thuê--
                                            </option>
                                            <option value="Year">Year</option>
                                            <option value="Month" >Month</option>
                                            <option value="Day">Day</option>
                                            <option value="Hour">Hour</option>
                                        </Field>
                                        <ErrorMessage name="rentalType" component="span" className="error-r" />

                                    </div>
                                    {type !== 'Room' ?
                                        <div className="mt-4 ">
                                            <Field
                                                type="text"
                                                className="form-control"

                                                name="descriptionOtherUtilities"
                                                placeholder="Mô tả các tiện ích khác(Villa,House)"
                                            />
                                            <ErrorMessage name="descriptionOtherUtilities" component="span" className="error-r" />
                                        </div>
                                        : ''
                                    }
                                    <div className="row mt-4 ">
                                        {type !== 'Room' ?
                                            <div className="col-md-6 form-group">
                                                <Field
                                                    type="text"
                                                    name="roomStandard"
                                                    className="form-control"
                                                    placeholder="Tiêu chuẩn phòng(Villa,House)"
                                                />
                                                <ErrorMessage name="roomStandard" component="span" className="error-r" />
                                            </div>
                                            : ''
                                        }
                                        {type !== 'Room' ?
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <Field
                                                    type="number"
                                                    className="form-control"
                                                    name="numberFloors"
                                                    placeholder="Số tầng(Villa,House)"
                                                />
                                                <ErrorMessage name="numberFloors" component="span" className="error-r" />

                                            </div>
                                            : ''
                                        }
                                    </div>
                                    <div className="row mt-2">
                                        {type === 'Villa' ?
                                            <div className="col-md-12 form-group">
                                                <Field
                                                    type="text"
                                                    name="poolArea"
                                                    className="form-control"
                                                    placeholder="Diện tích hồ bơi"
                                                />
                                                <ErrorMessage name="poolArea" component="span" className="error-r" />

                                            </div>
                                            : ''
                                        }
                                        {type === 'Room' ?
                                            <div className="col-md-12 form-group mt-2 mt-md-0">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="freeServiceIncluded"
                                                    placeholder="Dịch vụ miễn phí đi kèm"
                                                />
                                                <ErrorMessage name="freeServiceIncluded" component="span" className="error-r" />
                                            </div>
                                            : ''
                                        }

                                    </div>
                                    <div className=" mt-2 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="img"
                                            placeholder="Link Hình ảnh"
                                        />
                                        <ErrorMessage name="img" component="span" className="error-r" />

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