import axios from "axios";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CovidList({covids}){
    return(
        <>
        <div className="table-responsive container">
                <h3 style={{ textAlign: "center" }}>Covid List</h3>
                
                <table className="table app-table-hover mb-0 text-center">
                    <thead>
                        <tr className="flex-sm-fill ">
                            <th style={{width:"20%"}} >Date</th>
                            <th style={{width:"20%"}}>Confirmed</th>
                            <th style={{width:"20%"}}>Active</th>
                            <th style={{width:"20%"}}>Recovered</th>
                            <th style={{width:"20%"}}>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            covids.map((covid,index) => (
                                <tr  key={index} >
                                    <td>{covid.Date}</td>
                                    <td>{covid.Confirmed}</td>
                                    <td>{covid.Active}</td>
                                    <td>{covid.Recovered}</td>
                                    <td>{covid.Deaths}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
    

}
export const getStaticProps = async () => {
    const rs= await axios.get('http://localhost:8080/covid')
    return {
        props: {
            covids: rs.data
        }
    }
}
