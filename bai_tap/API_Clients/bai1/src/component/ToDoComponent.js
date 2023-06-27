import { useState, useEffect } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
export function ToDoList() {
    const [todos, setTodo] = useState([])
    const fectApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/title')
            setTodo(result.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {

        fectApi()
    }, [])

    return (
        <>
            <div className='div'>
                <h1>Todo list</h1>
                <Formik
                    initialValues={{
                        title: ''
                    }}
                    validationSchema={Yup.object(
                        {
                            title: Yup.string()
                                .required('Không được để trống')
                        }
                    )}
                    onSubmit={(values, { setSubmitting }) => {
                        // setTimeout(() => {
                        //     setSubmitting(false)
                        //     toast('Add Todo successfully!!!');
                        // }, 1000)
                        const create = async () => {
                            setSubmitting(false)
                            console.log(values)
                            await axios.post('http://localhost:8080/title', values)

                            toast(`Add Todo ${values.title} successfully!!!`);
                            // setTodo({
                            //     title: ''
                            // })
                            fectApi()
                        }
                        create()

                    }}
                >
                    {
                        ({ isSubmitting }) => (
                            <div className="container ">
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Title: </label>
                                        <Field type="text" className="form-control"
                                            name="title"
                                        />
                                        <ErrorMessage name="title" component='span' className="error-mess" />
                                    </div>
                                    {
                                        isSubmitting ?
                                            <ThreeDots visible={true} />
                                            :
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                    }

                                </Form>
                            </div>
                        )
                    }
                </Formik>
                {
                    todos.map((todo) => (
                        <ul key={todo.id}>
                            <li>{todo.title}</li>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </>
    )
}