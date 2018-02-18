'use strict';

export default function(app) {
    app.provider('resolver', resolverProvider);

    function resolverProvider() {
        <% if (props.ocLazyLoad) { %>
        this.asyncPagePrealoading = asyncPagePrealoading;
        <% } %>
        this.$get = function() {
            return this;
        };
    }

    <% if (props.ocLazyLoad) { %>
    function asyncPagePrealoading($q, $ocLazyLoad) {
        "ngInject";

        const deferred = $q.defer();
        require.ensure([], (require) => {
            const asyncModule = require('../../modules/async-page-example/async.module');
            $ocLazyLoad.load({
                name: asyncModule.default.name,
            });
            deferred.resolve(asyncModule.default.controller);
        });
        return deferred.promise;
    }
    <% } %>
}