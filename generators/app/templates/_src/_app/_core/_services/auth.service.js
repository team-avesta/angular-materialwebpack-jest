/**
 * author - Chirag
 * created on - 28-06-2017
 * The service has methods that compares logged In user's policies with the policies that are
 * required to access the state. If the user has atleast one of the policy from the policies to
 * access the state, user can view the state.
 * Example usage: Include following where routes are defined:
 * $stateProvider
 *
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            requiresAuthentication: true,
            policies: ['programmes.all', 'programmes.read']
        })

    Here ['programmes.all', 'programmes.read'] are required policies to access the state home. If
    user has any one of the above policy, he/she can access the state home.
 */
'use strict';
export default function(app) {
    app
        .factory('authService', service);

    function service($rootScope) {
        let x_auth_token = '';
        const service = {
            getAuthToken: getAuthToken,
            setAuthToken: setAuthToken,
            checkPoliciesForView: checkPoliciesForView,
            userHasPoliciesForView: userHasPoliciesForView,
            userHasPolicy: userHasPolicy
        };

        return service;

        /**
         * Functions implementation below
         */

        function getAuthToken() {
            return service.x_auth_token;
        }

        function setAuthToken(x_auth_token) {
            service.x_auth_token = x_auth_token;
        }

        function checkPoliciesForView(view) {
            if (!view.requiresAuthentication) {
                return true;
            }

            return userHasPoliciesForView(view);
        }

        function userHasPoliciesForView(view) {
            if (!view.policies || !view.policies.length) {
                return true;
            }

            return auth.userHasPolicy(view.policies);
        }

        function userHasPolicy(policies) {
            var found = false;
            var data = {
                user_policies: ['programmes.all', 'programmes.read']
            };

            // replace above with API call to /auth/policies

            angular.forEach(policies, function(policy, index) {
                if (data.user_policies.indexOf(policy) >= 0) {
                    found = true;
                }
            });

            return found;
        }
    }

}