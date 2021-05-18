$(document).on('click', function () {
    $('.collapse').collapse('hide');
})

$("#contact-form").submit(e => {
    e.preventDefault();
    $('#Modal').modal('show')
});