import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { FallingLines, FidgetSpinner, ThreeDots } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import style from './cus.css';

export function EditCustomer() {
    return (
        <>

            <div className="container1">
                <div className="text">Edit Customer</div>
                <form action="#">
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required="" />
                            <div className="underline" />
                            <label htmlFor="">Name</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required="" />
                            <div className="underline" />
                            <label htmlFor="">Day Birth</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="text" required="" />
                            <div className="underline" />
                            <label htmlFor="">Gender</label>
                        </div>
                        <div className="input-data">
                            <input type="number" required="" />
                            <div className="underline" />
                            <label htmlFor="">CMND number</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data">
                            <input type="number" required="" />
                            <div className="underline" />
                            <label htmlFor="">Phone number</label>
                        </div>
                        <div className="input-data">
                            <input type="text" required="" />
                            <div className="underline" />
                            <label htmlFor="">Email</label>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-data textarea">
                            <textarea rows={8} cols={80} required="" defaultValue={""} />
                            <br />
                            <div className="underline" />
                            <label htmlFor="">Customer Type</label>
                            <br />
                            <button className="button" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}