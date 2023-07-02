var minDate, maxDate;
 
// Custom filtering function which will search data in column four between two values
$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = minDate.val();
        var max = maxDate.val();
        var date = new Date( data[4] );
 
        if (
            ( min === null && max === null ) ||
            ( min === null && date <= max ) ||
            ( min <= date   && max === null ) ||
            ( min <= date   && date <= max )
        ) {
            return true;
        }
        return false;
    }
);
 
// Create date inputs-received-table
minDate = new DateTime($('#min-received-table'), {
    format: 'MMMM Do YYYY'
});
maxDate = new DateTime($('#max-received-table'), {
    format: 'MMMM Do YYYY'
});

// received-table initialisation
const receivedTable = $('#received-table').DataTable();

// Refilter the received-table
$('#min-received-table, #max-received-table').on('change', function () {
    receivedTable.draw();
});

//----------------------------
// Create date inputs-received-table
// minDate = new DateTime($('#min-received-table'), {
//     format: 'MMMM Do YYYY'
// });
// maxDate = new DateTime($('#max-received-table'), {
//     format: 'MMMM Do YYYY'
// });

// // received-table initialisation
// const receivedTable = $('#received-table').DataTable();

// // Refilter the received-table
// $('#min-received-table, #max-received-table').on('change', function () {
//     receivedTable.draw();
// });

//______Select2 
$('.select2').select2({
    minimumResultsForSearch: Infinity
});