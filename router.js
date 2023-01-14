'use strict';

// Add loading the content in router.js:

this.goToRoute = function(htmlName) {
    var url = htmlName,
        xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Add this:
            // Put content received from the server into container <main>:
            document.querySelector('main').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', url + '?t=' + Date.now(), true);
    xhttp.send();
};

function Router(routes) {
    this.routes = routes;
    const that = this;
    this.rootElem = document.getElementById('content');
    this.hasChanged = function() {
        var r = this.routes;
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    this.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.default) {
                    this.goToRoute(route.htmlName);
                }
            }
        }
    }
    this.goToRoute = function(htmlName) {
        var url = htmlName,
            xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {}
        };
        xhttp.open('GET', url + '?t=' + Date.now(), true);
        xhttp.send();
    };

    this.addRoutes = function(newRoutes) {
        newRoutes.forEach(function(newRoute, idx) {
            let found = false;
            that.routes.forEach(function(route) {
                if (route.htmlName == newRoute.htmlName) found = true;
            });
            if (!found) that.routes.push(newRoute);
        });
    };

    window.addEventListener('hashchange', function(e) {
        that.hasChanged();
    });
    that.hasChanged();
};