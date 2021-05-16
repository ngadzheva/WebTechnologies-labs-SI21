function sendRequest(url, options, successCallback, errorCallback) { 
    var request = new XMLHttpRequest();

    request.addEventListener('load', function() { 
        var response = JSON.parse(request.responseText);

        if (request.status === 200) {
            successCallback(response);
        } else {
            errorCallback(response);
        }
    });

    request.open(options.method, url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(options.data);
}