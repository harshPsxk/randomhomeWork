import React, { Component } from 'react';

class AddCourse extends Component{
    
    state = {
        name: '',
        duration: '',
        description: ''
    }

    handleChange = (event) => {
        console.log('Target Element =>', event.target.id)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.addCourse(this.state)
        this.setState({ name: '', duration: '', description: '' });
        event.preventDefault();
    }


    render(){
        // console.log(this.state);
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Course Name</label><br />
                <input type='text' id='name' value={this.state.name} onChange={this.handleChange}></input> <br />
                <label>Duration</label><br />
                <input type='text' id='duration'  value={this.state.duration} onChange={this.handleChange}></input> <br />
                <label>Description</label><br />
                <input type='text' id ='description' value={this.state.description} onChange={this.handleChange}></input> <br /> <br />
                <input type='submit' value='Add Course'></input>
            </form>
        )
    }
}

export default AddCourse;


// let obj = {
//     name: 'John',
//     age: 14
// }
// obj.name = obj['name']
// obj.age = obj['age']

 // handleName = (e) =>{
    //     console.log(e);
    //     console.log(e.target.value)
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleDuration = (e) =>{
    //     console.log('Duration')
    //     this.setState({
    //         duration: e.target.value
    //     })
    
    // }
    // handleDescription = (e) =>{
    //     console.log('Description')
    //     this.setState({
    //         description: e.target.value
    //     })
    // }