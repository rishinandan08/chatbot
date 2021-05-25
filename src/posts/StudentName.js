import React from 'react';
import StudentData from '../data/student.json'
import {useState} from 'react'
import '../App.css'

function SName() {
  const [searchTerm, setSearchTerm] = useState('');
    return (
      <div className="PostList">
      <input
        type="text"
        placeholder="Search.."
        onChange={(event) =>{
          setSearchTerm(event.target.value)
        }}
      />
        {StudentData.filter((val) => {
          if (searchTerm === ""){
            return null
          } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
          return null
        }).map( (val, key )=>{
          return (
          <div className="student" key={key}>
          <h1>Student Information</h1>
          <p>USN: {val.USN} </p>
          <p>Name: {val.Name} </p>
          <p>DOB: {val.DOB} </p>
          <p>Mail id: {val.Mail} </p>
          <p>Department: {val.Department} </p>
          <p>Batch: {val.Batch} </p>
          <p>Clubname: {val.Clubname} </p>
          <p>Sports: {val.Sports} </p>
          </div>
        );
        })}
      </div>
    );
}


export default SName;
