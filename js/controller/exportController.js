(function () {
    'use strict';

    /*Controller for export App Sample Application*/
    angular.module('exportApp', [])
        .controller('exportCtrl', exportCtrl)
        .service('ExporTo', exporTo);


    function exportCtrl($scope, ExporTo) {
        $scope.title = "Export to XLSX";

        $scope.exportData = function () {
            var options = {
                type: 'xlsx',
                data: $scope.items,
                filename: $scope.filename,
                sheetid: $scope.filename,
                headers: true,
                columns: [
                    {columnid: 'name', title: 'Name'},
                    {columnid: 'email', title: 'Email'},
                    {columnid: 'dob', title: 'Birthday'}
                ]
            }
            ExporTo.file(options);
        };

        $scope.filename = "Students";

        $scope.items = [{
            name: "Akash Mitra",
            email: "Akash.Mitra@wexinc.com",
            dob: "1988-12-17"
        }, {
            name: "Moulika Mukherjee",
            email: "Moulika.Mukherjee@wexinc.com",
            dob: "1992-10-25"
        }, {
            name: "Abhishek Ghosh",
            email: "Abhishek.Ghosh@wexinc.com",
            dob: "1992-06-07"
        }];

    }


    /**
     * Service for Export
     */
    function exporTo() {
        this.file = function (options) {
            var style = {
                sheetid: options.sheetid,
                headers: options.headers,
                columns: options.columns
            };
            try {
                if (options.type == "xls") {
                    console.warn('Export with warning');
                    exportum('SELECT * INTO XLS("' + options.filename + '.xls",?) FROM ?', [style, options.data]);
                }
                else if (options.type == "xlsx") {
                    exportum('SELECT * INTO XLSX("' + options.filename + '.xlsx",?) FROM ?', [style, options.data]);
                }
                else if (options.type == "csv") {
                    exportum('SELECT * INTO CSV("' + options.filename + '.csv",?) FROM ?', [style, options.data]);
                }
            } catch (error) {
                console.error('Error in Exporting :: ' + error);
            }
        };
    }


}());