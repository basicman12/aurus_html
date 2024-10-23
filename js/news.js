var NEWS_TIMER;
$(document).ready(function(){
    var animateSpeed = 1000;
    var speed = 4000;
    var $mainNews = $('#main-news');
    var $ul = $mainNews.find('ul');
    var $li = $ul.find('li');
    var length = $li.length;
    $li.each(function(i){
        var $this = $(this);
        $this.addClass('absolute');
        if(i === 0){
            $this.addClass('active');
        }

    });
    function newsStep(){
        var $active = $ul.find('li.active');
        var $next = $active.next();
        clearTimeout(NEWS_TIMER);
        if($next.length === 0){
            $next = $active.parent().find('li:first');;
        }
        $active.fadeOut(animateSpeed, function(){
            $next.fadeIn(animateSpeed, function(){
                $active.removeClass('active');
                $next.addClass('active');
                NEWS_TIMER = setTimeout(function(){
                   newsStep();
                },speed);
            });
        });

    }
    if(length > 0){
        NEWS_TIMER = setTimeout(function(){
           newsStep();
        },speed);
    }

});