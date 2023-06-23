import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class StudentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    studentId: 1,
                    studentName: 'Vien',
                    age: 22,
                    address: 'Hue'
                },
                {
                    studentId: 2,
                    studentName: 'Dinh',
                    age: 21,
                    address: 'Quang Nam'
                },
                {
                    studentId: 3,
                    studentName: 'Thang',
                    age: 22,
                    address: 'Da Nang'
                }
            ]

        }
    }
    render() {
        return (
            <>
            <div className='container'>
            <h1 className='text-center'>Student Magener</h1>
                <table className='table table-hover '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>

                    {this.state.studentList.map((student)=> (
                        <tr key={student.studentId}>
                            <td >{student.studentId}</td>
                            <td >{student.studentName}</td>
                            <td >{student.age}</td>
                            <td >{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </>
        )
    }

}
export default StudentComponent;