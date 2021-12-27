$(document).ready(function () {

    function heightHeader () {
        $(window).on('resize', function () {
            $('.header__blue').css('height', $('.header__blue figure svg').height());
        })
        $('.header__blue').css('height', $('.header__blue figure svg').height());
    }
    heightHeader();

    function mapa (){
        $('.mapa__figure path').on('click', function() {
            let municipio = $(this).data('name');
            $('.info__item').removeClass('show')
            $('.info__item[data-name="'+municipio+'"]').addClass('show')
        })
    }
    mapa();
})