import {ErrorMessage, Field, Form, Formik} from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import {FallingLines, FidgetSpinner, ThreeDots} from "react-loader-spinner";

export function ContactComponent() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object(
                    {
                        name: Yup.string()
                            .required('Không được để trống'),
                        email: Yup.string()
                            .required('Không được để trống').matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,'Sai định dạng email!'),
                        phone: Yup.number()
                            .required('Không được để trống')
                    }
                )}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast('Add contact successfully!!!');
                    }, 1000)
                }}
            >
                {
                    ({isSubmitting}) =>(
                    <div className="container ">
                        <h1 className="text-center">Contact form</h1>
                        <Form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <Field type="text" className="form-control"
                                    name="name"
                                />
                                <ErrorMessage name="name" component='span' className="error-mess" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Field type="text" className="form-control"
                                    name="email"
                                />
                                <ErrorMessage name="email" component='span' className="error-mess" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <Field type="number" className="form-control"
                                    name="phone"
                                />
                                <ErrorMessage name="phone" component='span' className="error-mess" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Message</label>
                                <Field type="text" className="form-control" as="textarea"
                                    name="message"
                                />
                            </div>
                        {
                            isSubmitting ?
                            <ThreeDots visible={true}/>
                            :
                            <button type="submit" className="btn btn-primary">Submit</button>
                        }
                            
                        </Form>
                    </div>
                    )
                }
            </Formik>
            <ToastContainer />
        </>

    );
}