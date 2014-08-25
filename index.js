'use strict';
document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://xkcd.com/info.0.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var xkcd = JSON.parse(xhr.responseText);
            var title = document.getElementById("info");
            loadImage("img",xkcd.img);
            document.getElementById("img").src = xkcd.img;
            title.innerText = xkcd.alt;
        }
    }
    xhr.send();

   var loadImage = function(id,uri) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function() {
            document.getElementById(id).src
                = window.URL.createObjectURL(xhr.response);
        }
        xhr.open('GET', uri, true);
        xhr.send();
    }
}, false);
