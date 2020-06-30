// buttonSet1
$(function () {

    $('#buttonHeader').click(function () {
        $('h1').text('Have a nice day!');
    });

    $('#buttonArticle').click(function () {
        $('article').css({
            'color': '#ffffff',
            'background-color': '#2a559a'
        });
    });

    $('#buttonFooter').click(function () {
        $('footer').html('<p><a href="https://github.com/Airis-site/">Airis-site</a></p>');
        $('footer a').css('color', '#fbff8a');
    });

    $('#buttonOriginal').click(function () {
        $('nav').css('background-color', '#364b37');
        $('nav ul li a').css('color', '#fbff8a');
    });
});

// buttonSet2
$(function () {

    $('#buttonNormal').click(function () {
        $('main').css('flex-direction', 'row');
    });

    $('#buttonReverse').click(function () {
        $('main').css('flex-direction', 'row-reverse');
    });


    $('#buttonVertical').click(function () {
        $('main').css('flex-direction', 'column');
    });

    $('#buttonReverse2').click(function () {
        $('main').css('flex-direction', 'column-reverse');
    });


});
