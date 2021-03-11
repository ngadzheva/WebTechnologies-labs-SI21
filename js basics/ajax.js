function ajax(url, settings) {
    var xhr = new XMLHttpRequest();
    
    xhr.open(settings.method || 'GET', url, true);
    xhr.send(settings.data || null);
    
    xhr.onload = function() {
        if (xhr.status == 200) {
            settings.success(xhr.responseText);
        } else {
            settings.error(xhr.responseText);
        }
    };
}
var url = 'http://jsonplaceholder.typicode.com/users'
var settings = {
    success: function(data) { console.log(data); },
    error: function(error) { console.error(error); }
};
ajax(url, settings);