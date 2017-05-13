(function () {
    'use strict';

    /*Controller for export App Sample Application */
    angular.module('exportApp')
        .controller('exportCtrl', exportCtrl);

    function exportCtrl($scope, studentService, ExporTo) {
        var vm = $scope;
        vm.title = "Export to XLSX";
        vm.filename = "Students";

        activate();

        function activate() {
            return getStudent().then(function () {
                console.log('Activated Students View');
            });
        }

        vm.exportData = function () {
            var options = {
                type: 'csv',
                data: vm.items,
                filename: vm.filename,
                sheetid: vm.filename,
                headers: true,
                columnNames: [
                    { columnid: 'name', title: 'Name' },
                    { columnid: 'email', title: 'Email' },
                    { columnid: 'dob', title: 'Birthday' }
                ]
            };

            ExporTo.file(options);
        };


        function getStudent() {
            return studentService.getStudents()
                .then(function (data) {
                    vm.items = data;
                    return vm.items;
                });
        }


    }

}());


// $scope.exportData = function () {
        //     var options = {
        //         type: 'xlsx',
        //         data: $scope.items,
        //         filename: $scope.filename,
        //         sheetid: $scope.filename,
        //         headers: true,
        //         requiredrecords: ['name', 'email'],
        //         columnNames: [
        //             {columnid: 'name', title: 'Name'},
        //             {columnid: 'email', title: 'Email'},
        //             {columnid: 'dob', title: 'Birthday'}
        //         ]
        //     };
        //     ExporTo.file(options);
        // };
        // $scope.items = [{
        //     name: "Akash Mitra",
        //     email: "Akash.Mitra@wexinc.com",
        //     dob: "1988-12-17"
        // }, {
        //     name: "Moulika Mukherjee",
        //     email: "Moulika.Mukherjee@wexinc.com",
        //     dob: "1992-10-25"
        // }, {
        //     name: "Abhishek Ghosh",
        //     email: "Abhishek.Ghosh@wexinc.com",
        //     dob: "1992-06-07"
        // }];
