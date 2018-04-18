'use strict';

var _ = require("lodash");

module.exports = function (AngularWebpackES6Generator) {

    // Install optional dependencies
    AngularWebpackES6Generator.prototype.installDependencies = function installDependencies() {

        var deps = [
            "angular",
            "@uirouter/angularjs"
        ];

        if (this.props.eslint) {
            deps.push('eslint', 'eslint-loader');
        }

        if (this.props.angularMaterial) {
            deps.push('angular-material');
        }

        deps = _.concat(deps, this.installList);

        this.npmInstall(deps, { 'save': true });
    };

    // Install dependencies from package.json
    AngularWebpackES6Generator.prototype.install = function install() {
        this.npmInstall();
    };

};