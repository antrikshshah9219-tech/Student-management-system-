let students = [];
let editIndex = -1;


// Add Student
function addStudent() {

    let rollNo = document.getElementById("rollNo").value;
    let name = document.getElementById("studentName").value;
    let course = document.getElementById("course").value;

    if (rollNo === "" || name === "" || course === "") {
        alert("Please fill all fields");
        return;
    }


    // Edit existing student
    if (editIndex !== -1) {

        students[editIndex] = {
            rollNo: rollNo,
            name: name,
            course: course
        };

        editIndex = -1;

        document.getElementById("cancelBtn").style.display = "none";

    }

    // Add new student
    else {

        students.push({
            rollNo: rollNo,
            name: name,
            course: course
        });

    }


    clearForm();

    displayStudents();
}


// Display Students
function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";


    students.forEach(function(student, index) {

        let row = `
            <tr>

                <td>${student.rollNo}</td>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>

                    <button 
                        class="edit"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button 
                        class="delete"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

        table.innerHTML += row;

    });
}


// Edit Student
function editStudent(index) {

    let student = students[index];

    document.getElementById("rollNo").value = student.rollNo;

    document.getElementById("studentName").value = student.name;

    document.getElementById("course").value = student.course;

    editIndex = index;

    document.getElementById("cancelBtn").style.display = "inline-block";
}


// Delete Student
function deleteStudent(index) {

    if (confirm("Are you sure you want to delete this student?")) {

        students.splice(index, 1);

        displayStudents();

    }
}


// Clear Form
function clearForm() {

    document.getElementById("rollNo").value = "";

    document.getElementById("studentName").value = "";

    document.getElementById("course").value = "";

}


// Cancel Edit
function cancelEdit() {

    editIndex = -1;

    clearForm();

    document.getElementById("cancelBtn").style.display = "none";

}


// Initially hide Cancel button
document.getElementById("cancelBtn").style.display = "none";
