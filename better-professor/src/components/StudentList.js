import React, { useState } from 'react'
import { Route } from 'react-browser-router'

import StudentProfile from './StudentProfile'

export default function StudentList(listOfStudents) {
    const [Students, setStudents] = useState([])
    useEffect(() => {
      const getStudents = () => {
        let config = {
            headers: {
              'Authorization': token
            }
          }
        axios
          .get('https://better-prof-app.herokuapp.com/api/students', bodyParameters, config)
          .then(response => {
            setStudents(response);
            console.log(Students);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }

      getStudents();
    }, []);


    return (
        <>
        <div className="studentListContainer">
            {listOfStudents.map(student => {
                <div className="studentListCard">
                    <input type="checkbox"></input>
                    <h2>{student.name}</h2>
                </div>
            })}
        </div>
        <Route path="/:studentid/profile" render={props => <StudentProfile {...props}/>} />
        </>
    )
}