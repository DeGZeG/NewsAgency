$(function(){
    $('#menu').on('click', function(){
        //меняем значок меню
        let menu = $(this);
        if (menu.hasClass('menu-closed')){
            menu.removeClass('menu-closed').addClass('menu-opened');
        }
        else menu.removeClass('menu-opened').addClass('menu-closed');

        //скрываем #date-time-weather
        let props = $('#date-time-weather');
        props.toggle();

        //убираем тень с #central-container
        let central_container = $('#central-container');
        if (central_container.css('background-repeat') === 'no-repeat'){
            central_container.css({'background-repeat': 'repeat-x'});
        }
        else central_container.css({'background-repeat': 'no-repeat'});

        //показываем меню
        let opened_menu = $('#opened-menu');
        if (opened_menu.css('display') === 'flex'){
            opened_menu.css({'display': 'none'});
        }
        else opened_menu.css({'display': 'flex'});
    });
});