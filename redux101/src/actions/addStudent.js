// An action, like a reducer, exports a function
// That function, must itself, resturn an object
// That object must have a prop of 'type'

function addStudent(studentName){
    console.log("Add student action was called...")
    return {
        type: "ADD_STUDENT",
        payload: studentName
    }
}

export default addStudent;