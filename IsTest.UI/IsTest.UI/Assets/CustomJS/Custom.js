//Toastr Fonksiyonları Başlangıç
function errorMes(message, errorTitle) {
    toastr.error(message, errorTitle, toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    })
};

function sucMes(message, sucTitle) {

    toastr.success(message, sucTitle, toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "700",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    })
};

function warningMes(message, warTitle) {
    toastr.warning(message, warTitle, toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    })
};

//Toastr Fonksiyonları Bitiş

//Müşteri Ekleme Başlangıç
function customerInsert() {
        var data = {
        FirstName: $("#FirstName").val(),
        LastName: $("#LastName").val(),
        Email: $("#Email").val(),
        Address: $("#Address").val(),
    };
    $.ajax({
        url: "/Home/CustomerInsert",
        type: "post",
        data: data,
        success: function (e) {
            if (e != false) {
                sucMes("Müşteri Ekleme Başarılı", "Başarılı");
                setInterval(function () {
                    window.location.replace("/Home/CustomerList");
                }, 1000);
            }
            else {
                errorMes("Müşteri Ekleme Başarısız", "Başarısız");
            }
        }

    });
};

//Müşteri Ekleme Başlangıç
