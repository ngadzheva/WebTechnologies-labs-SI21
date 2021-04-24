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

    sendRequest('index.php', 'POST', `data=${JSON.stringify(data)}`);
}

function sendRequest(url, method, data) { 
    var request = new XMLHttpRequest();

    request.addEventListener('load', function() { 
        var response = JSON.parse(request.responseText);

        if (request.status === 200) {
            addStudentMark(response);
        } else {
            handleErrors(response);
        }
    });

    request.open(method, url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
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


    /**
     * Send GET request to api.php/logout to logout the user
     */


    /**
     * Redirect to home page
     */

}