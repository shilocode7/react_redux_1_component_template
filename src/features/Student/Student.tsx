import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectStudents, getStudentAsync, addStudentAsync, delStudentAsync, updStudentAsync } from './studentSlice';


export function Student() {
  const student = useAppSelector(selectStudents)
  const dispach = useAppDispatch()
  useEffect(() => {
    //console.table(student)
    dispach(getStudentAsync())
  }, [student.length])

  const [sname, setsname] = useState("")
  const [age, setage] = useState(0)
  return (
    <div >
      name: <input onChange={(e) => setsname(e.target.value)} />&nbsp;
      age: <input onChange={(e) => setage(+e.target.value)} /> &nbsp;
      <button style={{ backgroundColor: '#77fa98' }} onClick={() => dispach(addStudentAsync({ sname, age }))}>Add student</button><br /> <br />
      {/* <button onClick={()=>dispach(getStudentAsync())}>get all student</button> */}
      list length: {student.length} <br /> <br />
      <div style={{ width: '500px', padding: '10px', border: '5px solid gray', margin: '0', }}>
        {student.map((student, i) => <div key={i}>
          name: {student.sname}&nbsp;
          age: {student.age}&nbsp;
          id: {student.id}&nbsp;
          <button style={{ backgroundColor: '#fd8e86' }} onClick={() => dispach(delStudentAsync(student.id || -1))}>delete student</button>&nbsp;
          <button style={{ backgroundColor: '#a7ffa4' }} onClick={() => dispach(updStudentAsync({ age, sname, id: student.id }))}>update student</button>
        </div>)}
      </div>
    </div>
  );
}
