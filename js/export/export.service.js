(function () {
    'use strict';

    angular.module('exportApp')
        .service('ExporTo', exporTo);

    function exporTo() {
        this.file = function (options) {

            var style = {
                sheetid: options.sheetid,
                headers: options.headers,
                columns: options.columnNames
            };

            var recordsToExport = ((options.requiredrecords == null || (options.requiredrecords.length == 0)) ? '*' : options.requiredrecords.join(','));
            //console.log('Header :: ' + recordsToExport);

            try {
                if (options.type === "xls") {
                    console.warn('Export with warning');
                    exportum('SELECT ' + recordsToExport + 'INTO XLS("' + options.filename + '.xls",?) FROM ?', [style, options.data]);
                }
                else if (options.type === "xlsx") {
                    exportum('SELECT ' + recordsToExport + ' INTO XLSX("' + options.filename + '.xlsx",?) FROM ?', [style, options.data]);
                }
                else if (options.type === "csv") {
                    exportum('SELECT ' + recordsToExport + ' INTO CSV("' + options.filename + '.csv",{separator:","},?) FROM ?', [style, options.data]);
                }
            } catch (error) {
                console.error('Error in Exporting :: ' + error);
            }
        };
    }


}());