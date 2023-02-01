'use strict';

function Route(name, linkTitle, htmlName, defaultRoute) {
    try {
        if (!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, linkTitle, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function(name, linkTitle, htmlName, defaultRoute) {
        this.name = name;
        this.linkTitle = linkTitle;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    isActiveRoute: function(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}