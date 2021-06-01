import React from 'react';
import StudentData from '../data/professor.json'
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
          <h1>Professor Information</h1>
          <p>Name: {val.Name} </p>
          <p>Mail id: {val.ClgMail} </p>
          <p>Branch: {val.Branch} </p>
          <p>Courses teach: {val.Courses}</p>
          <p>Educational Degrees: {val.Educational_Degrees} </p>
          <p>Available time: {val.Available_time}</p>
          <p>Languages know: {val.Languages_know}</p>
          </div>
        );
        })}
      </div>
    );
}


export default SName;
