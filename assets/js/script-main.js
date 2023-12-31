/***********************************/
/*
برنامج المتميز المحوسب لخدمات الخيول
By :: Mohamed Alnawjha
Github :: https://github.com/m9nawjha
02  /  06  /   2023
v 1.1
*/
/***********************************/

/***********************************/
/*
general js 
*/
/***********************************/

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// Tooltip
$(document).ready(function () {
  $('div.table-responsive>div.dataTables_wrapper>div.row>div[class="col-sm-12 col-md-6"]:first-child').append('  <div class="d-flex justify-content-end"><button type="submit" class="btn btn-icon btn-outline-info mx-2 " data-bs-placement="left" data-bs-toggle="tooltip" title="" data-bs-original-title="طباعة"><i class="bi bi-printer-fill"></i> طباعة</button><button type="submit" class="btn btn-icon btn-outline-success mx-2 " data-bs-placement="left" data-bs-toggle="tooltip" title="" data-bs-original-title="تصدير"><i class="bi bi-cloud-download-fill"></i> تصدير</button><button type="submit" class="btn btn-icon btn-outline-danger mx-2 " data-bs-placement="left" data-bs-toggle="tooltip" title="" data-bs-original-title="إستيراد"><i class="bi bi-cloud-upload-fill"></i> إستيراد</button></div>');
});
/***********************************/
/*
index js 
*/
/***********************************/
$(document).ready(function () {
//clients_stats
        const ctx = document.getElementById('clients_stats');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
            datasets: [
                {
              label: 'مالك اسطبل',
              data: [5, 10, 19, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#38bb94"
            },
            {
              label: 'مدربين',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#0069a5"
            },
            {
              label: 'عميل فردي',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#ffa030"
            },
            {
              label: 'عميل إيواء',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#f13d47"
            }
        ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

//laboratory_analyzes
        const ctx1 = document.getElementById('laboratory_analyzes');
      
        new Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
            datasets: [
                {
              label: 'عينات جديدة',
              data: [5, 10, 19, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#38bb94"
            },
            {
              label: 'نتائج التحليل',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              backgroundColor: "#ffa030"
            }
        ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
});

/***********************************/
/*
pos js 
*/
/***********************************/
$(document).ready(function () {
  
/**اختيار عميل مدرج في النظام**/
$('#client_name').show();
$('#client_tel').hide();
$('#client_no').hide();
$('#horse_no').hide();
$('#chlint_access').hide();

$('#select-clients-pos').change(function() {
  if ($(this).val() === '1') {
    $('#client_name').show();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '2') {
    $('#client_name').hide();
    $('#client_tel').show();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '3') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').show();
    $('#horse_no').hide();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '4') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').show();
    $('#chlint_access').hide();
  };
});
$('#select-clients-pos').change(function() {
  if ($(this).val() === '5') {
    $('#client_name').hide();
    $('#client_tel').hide();
    $('#client_no').hide();
    $('#horse_no').hide();
    $('#chlint_access').show();
  };
});




/** */
$('#discounts-list').show();
$('#discounts-perc').hide();
$('#discounts-SAR').hide();

$('#select-discounts').change(function() {
  if ($(this).val() === '1') {
    $('#discounts-list').show();
    $('#discounts-perc').hide();
    $('#discounts-SAR').hide();
  };
});

$('#select-discounts').change(function() {
  if ($(this).val() === '2') {
    $('#discounts-list').hide();
    $('#discounts-perc').show();
    $('#discounts-SAR').hide();
  };
});

$('#select-discounts').change(function() {
  if ($(this).val() === '3') {
    $('#discounts-list').hide();
    $('#discounts-perc').hide();
    $('#discounts-SAR').show();
  };
});

//
$('.cash-box').hide();
$('.network-box').hide();
$('.bank-transfer-box').hide();

$('.cash').click(function(){
  $('.cash-box').show();
  $('.network-box').hide();
  $('.bank-transfer-box').hide();
});
$('.network').click(function(){
  $('.cash-box').hide();
  $('.network-box').show();
  $('.bank-transfer-box').hide();
});
$('.bank-transfer').click(function(){
  $('.cash-box').hide();
  $('.network-box').hide();
  $('.bank-transfer-box').show();
});
$('.postpaid').click(function(){
  $('.cash-box').hide();
  $('.network-box').hide();
  $('.bank-transfer-box').hide();
});



});











