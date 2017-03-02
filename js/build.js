const fs = require('fs');
const page = require('webpage').create();

setInterval(function() {
    page.open(encodeURI('http://localhost:8080'), function (status) {
        if (status === 'success') {
            var html = page.evaluate(function () {
                return document.documentElement.outerHTML;
            });
            html = '<!DOCTYPE html>' + html;
            console.log('Building page...');
            fs.write('index.html', html, 'w');
            console.log('Done');
        }
        phantom.exit();
    });
}, 5000);
