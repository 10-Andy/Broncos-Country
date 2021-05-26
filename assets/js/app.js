$(document).on('click', function () {
    $('.collapse').collapse('hide');
})

$('#contact-form').submit(function (e) {
    e.preventDefault();
    $('#submitModal').modal('show');
});