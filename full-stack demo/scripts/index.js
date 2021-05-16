(function() {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', sendForm);

    /**
     * Get the logout button
     */
     var logoutBtn = document.getElementById('logout');
     /**
      * Listen for click event on the logout button
      */
     logoutBtn.addEventListener('click', logout);

    // TODO: Send request for getting all students' marks
    sendRequest('src/index.php/students', {method: 'GET'}, loadStudents, console.log);
})();

function sendForm(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var fn = document.getElementById('fn').value;
    var mark = document.getElementById('mark').value;

    var data = {
        firstName,
        lastName,
        fn,
        mark
    };

    sendRequest('src/index.php/addStudent', 'POST', `data=${JSON.stringify(data)}`, addStudentMark, handleErrors);
}

function addStudentMark(studentData) {
    var studentTable = document.getElementById('marks');
    var tr = document.createElement('tr');

    Object.values(studentData).forEach(function(data) {
        var td = document.createElement('td');
        td.innerHTML = data;
        tr.appendChild(td);
    });

    studentTable.appendChild(tr);
}

function loadStudents(studentsData) {
    if (studentsData['success']) {
        studentsData['data'].forEach(function (student) {
            addStudentMark(student);
        });
    } else {
        console.log(studentsData['data']);
        window.location = 'login.html';
    }
}

function handleErrors(errors) {
    var errorsLabel = document.getElementById('errors');

    errorsLabel.innerHTML = '';
    errorsLabel.style.display = 'block';
    errorsLabel.style.color = 'red';

    errors.forEach(function(error) { 
        errorsLabel.innerHTML += error;
    });
}

/**
 * Handle the click event by sending an asynchronous request to the server
 * @param {*} event
 */
 function logout(event) {
    /**
     * Prevent the default behavior of the clicking the form submit button
     */
    event.preventDefault();

    /**
     * Send GET request to api.php/logout to logout the user
     */
    sendRequest('src/logout.php', {method: 'GET'}, redirect, console.log);

}

function redirect() {
    window.location = 'login.html';
}