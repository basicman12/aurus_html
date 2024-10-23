$(document).ready(function(){
    $('header nav .parent > a').bind('click', function(){
        var $this = $(this);
        var $subMenu = $this.parent().find('.sub-menu');
        if($subMenu.is(':visible')){
            $subMenu.addClass('g-hide');
            $this.removeClass('active');
        } else {
            $subMenu.removeClass('g-hide');
            $this.addClass('active');
        }
        return false;
    });
    $('header nav .parent .sub-menu .in_body').bind('mouseleave',function(){
        $(this).parent().parent().find('a').trigger('click');
    });
    $('#conTabButton').bind('click', function(){
        $('#conTab01').addClass('g-hide');
        $('#conTab02').removeClass('g-hide');
        return false;
    });
    $('a.sendForm').bind('click', function(){
        var $form = $(this).closest('form');
//        $form.trigger('submit');
        $('#conTab02').addClass('g-hide');
        $('#conTab03').removeClass('g-hide');
        return false;
    });;
});