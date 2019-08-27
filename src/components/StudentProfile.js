import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import { axiosWithAuth } from '../utilities/axiosWithAuth'

export default function StudentProfile(props) {
    const StudentProfileContainer = styled(Segment)`
    `

    const [student, setStudent] = useState([])
    useEffect(() => {
      const getStudent = () => {
        axiosWithAuth()
          .get(`https://better-prof-app.herokuapp.com/api/students/${props.match.params.id}`)
          .then(response => {
            console.log(response)
            setStudent(response.data);
          })
          .catch(error => {
            console.error('Server Error', error)
          })
      }

      getStudent();
    }, [props.match.params.id]);
 
    return (
        <StudentProfileContainer className="studentProfileContainer">
            <Segment className="studentProfileHeaderContainer">
                <h2>{student.name}</h2>
                <span>Program: {student.grad_program}</span>
                <br />
                <img src={student.img} alt='portrait of student' />
            </Segment>
            <h2>Projects</h2>
            <Segment className="studentProfileProjectsContainer">
                {student.projects && student.projects.map( project => {
                    return (
                        <Segment>
                            <NavLink to={`/students/${student.id}/project/${project.project_id}`}>
                                <h3>{project.name}</h3>
                            </NavLink>
                        </Segment>
                    )
                })}
            </Segment>
        </StudentProfileContainer>
    )
}