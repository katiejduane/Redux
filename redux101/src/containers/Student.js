import React, {Component} from 'react';

// we would like to inform this  component from redux.
// to do that, we need some glue! this  container neers 
// to know about the store, so it can use its state and 
// update if needed. to accomplish this, we use the 
// CONNECT method from react-redux. THIS is our glue.
import { connect } from 'react-redux';

// we need bindActionCreators from Redux, so that we can
// get the actions to dispatch to the reducers.
import { bindActionCreators } from 'redux';

import addStudent from '../actions/addStudent';

class Student extends Component{

    addNewStudent = ()=>{
        const name = document.getElementById('student-name').value;
        this.props.addStudent(name)
    }

    render(){
        console.log(this.props)
        const students = this.props.rightSideOfRoom.map((student, i)=>{
            return(<li key={i}>{student}</li>)
        })
        return(
            <div>
                <h1>Estudiantes!</h1>
                <input type="text" id="student-name" placeholder="Student Name" />
                <button onClick={this.addNewStudent}>Agregar Estudiantes</button>
                {students}
            </div>
            
        )
    }
}

// we need a function to map the redux state to this
// component's props. Redux state will always come in
// as PROPS. 
// console.log(connect);
function mapStateToProps(state){
// the state parameter in mapSTateToProps IS THE ROOT REDUCER
// this function returns an object, property will be props
// in this component, value will be the piece of state in the reducer.
    return {
        rightSideOfRoom: state.students
    }
}

function mapDispatchToProps(dispatch){
    // bindActionCreators takes an object as first param:
    // property is the local prop name (this.props.aaaaa)
    // value is the callback (the action file.js)
    // 2nd param is teh dispatcher
    return bindActionCreators(
        {
            addStudent: addStudent,

        }, dispatch
    )
}


// export default Student;
export default connect(mapStateToProps, mapDispatchToProps)(Student);