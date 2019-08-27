import React from 'react'

export default function StudentProfile(student) {
    return (
        <div className="studentProfileContainer">
            <div className="studentProfileHeaderContainer">
                <h2>{student.name}</h2>
                <img src={student.img} />
            </div>
            <div className="studentProfileProjectsContainer">
                {student.project.map( student => {
                    <div>
                        <h3>{student.project.name}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}