(function () {
    'use strict';

    angular.module('exportApp')
        .factory('studentService', studentService);

    studentService.$inject = ['$http'];

    function studentService($http) {
        return {
            getStudents: getStudents
        };

        function getStudents() {
            return $http.get('http://localhost:3000/Students')
                .then(getStudentsComplete)
                .catch(getStudentsFailed);

            function getStudentsComplete(response) {
                return response.data;
            }

            function getStudentsFailed(error) {
                logger.error('XHR Failed for getStudents.' + error.data);
            }
        }
    }

}());