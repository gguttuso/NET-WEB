$(function () {

    ////////////////////////////////////////////////////////////////////////////////////////

    // randomize the attention seeker to the h1 "happy birthday"
    var attentionSeekersArray =
        ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'];

    var randomNumber = Math.floor(Math.random() * attentionSeekersArray.length);

    $('#happyBirthday').addClass(attentionSeekersArray[randomNumber]);

    ////////////////////////////////////////////////////////////////////////////////////////

    // CHECK OR UNCHECK ALL BALLOON CHECK BOXES


    $("#toggleAll").change(function () {
        // uncheck all checkboxes (FireFox)
        $('.form-check-input').each(function () {
            //console.log($(this).attr('id'));
            $(this).prop('checked', !($(this).prop('checked')));
            // animate balloon in/out based on checkbox
            var id = '#' + $(this).attr('id') + 'Img';
            $(id).css('visibility', 'visible')
            $(this).prop('checked') ?
                $(id).removeClass().addClass('animated bounceInDown') :
                $(id).addClass('animated bounceOutUp');
        });
    });

    ////////////////////////////////////////////////////////////////////////////////////////

    // show the toast when the submit button is clicked and only if there are no balloons seleted
    $('#submit').on('click', function (e) {
        var submit = $('#submit');
        var submit = true;

        if (submit && !$('#blue').is(':checked') && !$('#red').is(':checked') && !$('#green').is(':checked')) {

            $('.toast').toast('show');
        }

    });

    ////////////////////////////////////////////////////////////////////////////////////////

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    ////////////////////////////////////////////////////////////////////////////////////////

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });

    $('.form-check-label').on('mouseover', function () {
        console.log($(this).data('color'));
        $("#happyBirthday").css('color', $(this).data("color"));

    });

});
