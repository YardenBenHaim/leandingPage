$(document).ready(function () {
    $('input[type=submit]').on('click', function () {
        $('#FirstName, #LastName, #cellphone, #email').val("");
    });
});