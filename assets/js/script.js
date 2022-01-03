$(document).ready(function () {

    function heightHeader () {
        $(window).on('resize', function () {
            $('.header__blue').css('height', $('.header__blue figure svg').height());
        })
        $('.header__blue').css('height', $('.header__blue figure svg').height());
        
        if($(window).width() < 1025) {
            var userAgent = navigator.userAgent.toLowerCase(); 
            if (userAgent .indexOf('safari')!=-1){ 
               if(userAgent .indexOf('chrome')  > -1){
                 //browser is chrome
               }else if((userAgent .indexOf('opera')  > -1)||(userAgent .indexOf('opr')  > -1)){
                 //browser is opera 
               }else{
                    $('.header__blue svg').css('top', '9.5rem');
               }
            }
        }
        
    }
    heightHeader();

    
    $(window).scroll(function(){
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

        if ((scrollHeight - scrollPosition) / scrollHeight > 0) {
            if(document.querySelector('.hero ~ .mapa')) {
                document.querySelector('.hero ~ .mapa').style.marginTop = -window.pageYOffset + "px";
            }
        }
    });

    function headerMenu () {
        $('.header__icon').on('click', function () {
            $('.header__mobile').toggleClass('header__mobile--open');
        })
    }
    headerMenu();
    
    function mapa (){
        $('.mapa__figure path').on('click', function() {
            let municipio = $(this).data('name');
            $('.info__item').removeClass('show');
            $('.info__item[data-name="'+municipio+'"]').addClass('show');
            $('.info__item a').attr('href', '/municipios/'+municipio.replaceAll(' ', '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
            if($(window).width() > 1024 ) {
                let positionY = $(this).position().top - $(this).parents().position().top;
                let positionX = $(this).offset().left - $(this).parents().position().left;
                $('.info__item.show').css({'top': positionY, 'left': positionX});
            }
        });
    }
    mapa();

    function accordion () {
        $('.informacoes__select select').on('change', function() {
            let bairro = $('.informacoes__select select option:selected').val();

            var $current = $('.accordion[data-bairro="'+bairro+'"]').css('display', 'flex');

            $('.accordion').not($current).hide();
            $('h3').hide();
            $current.siblings('h3').show();

            if(bairro == 'Todos') {
                $('.accordion').css('display', 'flex');
                $('h3').show();
            }
        });

        $('.accordion').on('click', function () {
            $('.accordion').removeClass('accordion--open');
            $(this).addClass('accordion--open');
            let porcentagem = $(this).find('.single-chart span').text().replace('%', '');
            $(this).find('.single-chart .circle').attr('stroke-dasharray', porcentagem+', 100');
        });
    }
    accordion();

    function filtro () {
        $('.selecione__filtro span').on('click', function () {
            let obra = $('.selecione__obra select option:selected').val()
            let municipio = $('.selecione__municipio select option:selected').val().replaceAll(' ', '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            window.location.href =  '/municipios/'+municipio+'/'+obra+'.html';
            console.log('/municipios/'+municipio+'/'+obra+'.html');
        })

        $('.selecione__obra select').on('change', function () {
            if($('.selecione__obra select option:selected').val() == 'esgoto') {
                $('.selecione__municipio select option').remove()
                $('.selecione__municipio select').append('<option value="#" selected>Selecione o município</option><option value="Rio de Janeiro">Rio de Janeiro</option>')
            }else {
                $('.selecione__municipio select').append(`<option value="#" selected>Selecione o município</option>
                    <option value="Aperibé">Aperibé</option>
                    <option value="Belford Roxo">Belford Roxo</option>
                    <option value="Cachoeiras de Macacu">Cachoeiras de Macacu</option>
                    <option value="Cambuci">Cambuci</option>
                    <option value="Cantagalo">Cantagalo</option>
                    <option value="Casimiro de Abreu">Casimiro de Abreu</option>
                    <option value="Cordeiro">Cordeiro</option>
                    <option value="Duas Barras">Duas Barras</option>
                    <option value="Duque de Caxias">Duque de Caxias</option>
                    <option value="Itaboraí">Itaboraí</option>
                    <option value="Itaocara">Itaocara</option>
                    <option value="Japeri">Japeri</option>
                    <option value="Magé">Magé</option>
                    <option value="Maricá">Maricá</option>
                    <option value="Mesquita">Mesquita</option>
                    <option value="Miracema">Miracema</option>
                    <option value="Nilópolis">Nilópolis</option>
                    <option value="Nova Iguaçu">Nova Iguaçu</option>
                    <option value="Paquetá">Paquetá</option>
                    <option value="Queimados">Queimados</option>
                    <option value="Rio Bonito">Rio Bonito</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="São Francisco de Itabapoana">São Francisco de Itabapoana</option>
                    <option value="São Gonçalo">São Gonçalo</option>
                    <option value="São João de Meriti">São João de Meriti</option>
                    <option value="Saquarema">Saquarema</option>
                    <option value="Tanguá">Tanguá</option>`)
            }
        })
        

        if($('.template__municipio a').length = 1) {
            $('.template__municipio a').css('transform', 'none')
        }
    }
    filtro();

    function redirecionamento () {
        $('.template__municipio--interna-esgoto a:last-of-type').attr('href', './agua.html')
        $('.template__municipio--interna-agua a:last-of-type').attr('href', './esgoto.html')
    }
    redirecionamento();
})