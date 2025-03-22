let students = [];

function Student(name, dob, degree, course, university) {
    this.name = name;
    this.dob = dob;
    this.degree = degree;
    this.course = course;
    this.university = university;
    this.description = function () {
        return `I am ${this.name}, born on ${this.dob}, currently pursuing 
        ${this.degree} in the course of ${this.course} at the university of ${this.university}.`;
    };
}

function Insert() {
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let degree = document.getElementById("degree").value;
    let course = document.getElementById("course").value;
    let university = document.getElementById("university").value;

    if (name && dob && degree && course && university) {
        let newStudent = new Student(name, dob, degree, course, university);
        students.push(newStudent);
        alert("Student information inserted successfully!");
        clearInputs();
    } else {
        alert("Please fill all fields before inserting!");
    }
}

function student_info() {
    if (students.length === 0) {
        document.getElementById("demo_div").innerHTML = "<p>No students added yet.</p>";
        return;
    }

    let info = "<h3>List of Students:</h3>";
    students.forEach((student, index) => {
        info += `<p><strong>Name:</strong> ${student.name}<br>
                 <strong>Date of Birth:</strong> ${student.dob}<br>
                 <strong>Degree:</strong> ${student.degree}<br>
                 <strong>Course:</strong> ${student.course}<br>
                 <strong>University:</strong> ${student.university}</p>`;
    });

    document.getElementById("demo_div").innerHTML = info;
}

function clearInputs() {
    document.getElementById("name").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("degree").value = '';
    document.getElementById("course").value = '';
    document.getElementById("university").value = '';
}

function clearDisplay() {
    document.getElementById("demo_div").innerHTML = '';
}

function searchStudent() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchQuery)
    );

    let info = "<h3>Search Results:</h3>";
    if (filteredStudents.length > 0) {
        filteredStudents.forEach(student => {
            info += `<p><strong>Name:</strong> ${student.name}<br>
                     <strong>Date of Birth:</strong> ${student.dob}<br>
                     <strong>Degree:</strong> ${student.degree}<br>
                     <strong>Course:</strong> ${student.course}<br>
                     <strong>University:</strong> ${student.university}</p>`;
        });
    } else {
        info += "<p>No matching student found.</p>";
    }

    document.getElementById("demo_div").innerHTML = info;
}
