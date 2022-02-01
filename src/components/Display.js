import React from 'react';
import Loading from './Loading';

function Display(props){
    // console.log(props.courseDetails);

    // Conditional Rendering
    let itemList = props.courseDetails.length ? props.courseDetails.map((item, index) => {
        return(
            <div key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.duration}</h3>
                <p>{item.description}</p>
                <button onClick={() => {props.deleteCourse(item.id)}}>Delete Course</button>
            </div>
        )}) : (<Loading></Loading>)

    return(
        itemList
    )
}

export default Display;