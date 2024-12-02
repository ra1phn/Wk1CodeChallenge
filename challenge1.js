// Declaration of variable that holds student marks. 
let studentMarks;

// Function that takes studentMarks and calulates the corresponding grade.
function studentGrades(studentMarks){
    if (studentMarks > 79){
        return "Student Grade is A";
    } else if (studentMarks >= 60){
        return "Student Grade is B"
    } else if (studentMarks >= 50){
        return "Student Grade is C"
    } else if (studentMarks >= 40){
        return "Student Grade is D"
    } else {
        return "Student Grade is E"
    }
    }

    studentMarks = 102;
    
    // Making sure user input is within range
    if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
    } else {
        // Call the function and display the grade.
        console.log(studentGrades(studentMarks));
    }