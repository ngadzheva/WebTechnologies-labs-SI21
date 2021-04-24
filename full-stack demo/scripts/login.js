(function () {
    /**
     * Get the login button
     */
    var login = document.getElementById('login');

    /**
     * Listen for click event on the login button
     */
    login.addEventListener('click', sendForm);
})();

/**
 * Handle the click event by sending an asynchronous request to the server
 * @param {*} event
 */
function sendForm(event) {
    /**
     * Prevent the default behavior of the clicking the form submit button
     */
    event.preventDefault();

    /**
     * Get the values of the input fields
     */
    var userName = document.getElementById('user-name').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('remember-me').value;

    /**
     * Create an object with the user's data
     */
    var user = {
        userName,
        password,
        remember: rememberMe
    };

    /**
     * Send POST request with user's data to api.php/login
     */
    ajax('src/login.php', { method: 'POST', data: `data=${JSON.stringify(user)}` });
}

/**
 * Handle the post request
 * @param {*} url
 * @param {*} settings
 */
function ajax(url, settings) {
    var request = new XMLHttpRequest();

    request.onload = function () {
        if (request.status === 200) {
            /**
             * Parse the received response from the server to an object
             * and call method load(), which handles the received response
             */
            console.log(request.responseText);
            load(JSON.parse(request.responseText));
        } else {
            console.log(request.responseText);
        }
    }

    /**
     * Open the connection to the server
     */
    request.open(settings.method, url, true);
    /**
     * Set Content-type header for sending form data
     */
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    /**
     * Send the data
     */
    request.send(settings.data);
}

/**
 * Handle the received response from the server
 * If there were no errors found on validation, the index.html is loaded.
 * Else the errors are displayed to the user.
 * @param {*} response
 */
function load(response) {
    console.log(response)
    if (response.success) {
        window.location = 'index.html';
    } else {
        var errors = document.getElementById('errors');
        errors.innerHTML = response.data;
    }
}