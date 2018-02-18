'use strict';
export default function(app) {
    app.factory('ajaxService', service);

    function service($http, configUrl, $q, pubSubService, pubSubEvents) {

        var serverUrl = configUrl.serverUrl;
        var service = {
            post: postData,
            put: putData,
            delete: deleteData,
            get: getData,
            postFormData: postFormData,
            startLoader: startLoader,
            toastDisplay: toastDisplay
        };

        return service;

        /////////////////////////

        function postData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url: serverUrl + endpoint,
                    data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res.data);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function postFormData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url: serverUrl + endpoint,
                    data: data,
                    headers: { 'Content-Type': undefined },
                    //prevents serializing payload.  don't do it.
                    transformRequest: angular.identity,
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res.data);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function putData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'PUT',
                    url: serverUrl + endpoint,
                    data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res.data);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function deleteData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'DELETE',
                    url: serverUrl + endpoint,
                    // data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res.data);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function getData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http
                    .get(serverUrl + endpoint, {
                        params: data
                    }, {
                        headers: {
                            'Cache-Control': 'no-cache',
                        }
                    }).then(function(res) {
                        if (!service.toastDisplay(res)) {
                            reject(res);
                            return;
                        }
                        resolve(res.data);
                    }, function(d) {
                        errorCall(d, reject);
                    });
            });
        }

        function startLoader(isDialog) {
            if (isDialog) {
                pubSubService.publish(pubSubEvents.message._SHOW_DIALOG_LOADING_SPINNER_, []);
            } else {
                pubSubService.publish(pubSubEvents.message._SHOW_LOADING_SPINNER_, []);
            }
        }

        function toastDisplay(res) {
            pubSubService.publish(pubSubEvents.message._HIDE_LOADING_SPINNER_, []);
            pubSubService.publish(pubSubEvents.message._HIDE_DIALOG_LOADING_SPINNER_, []);

            var statusCode = res.status;

            if (statusCode < 200 || statusCode > 299) {
                pubSubService.publish(pubSubEvents.message._ADD_ERROR_MESSAGE_, [{
                    message: obj.message,
                    type: 'toast'
                }]);
                return false;
            }
            return true;
        }

        function errorCall(d, reject) {
            pubSubService.publish(pubSubEvents.message._HIDE_LOADING_SPINNER_, []);
            pubSubService.publish(pubSubEvents.message._HIDE_DIALOG_LOADING_SPINNER_, []);

            var obj = d.data;
            if (obj) {
                pubSubService.publish(pubSubEvents.message._ADD_ERROR_MESSAGE_, [{
                    message: obj.message ? obj.message : 'please contact administrator for more information.',
                    type: 'toast',
                    status: d.status
                }]);
            }
            reject(d);
        }
    }
}