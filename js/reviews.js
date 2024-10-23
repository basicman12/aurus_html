$(document).ready(function(){
    var $mainSlider = $('#reviews');
    var sliderWidth = $mainSlider.width();
    var $sliderItems = $mainSlider.find('.items');
    var $ul = $mainSlider.find('ul');
    var $li = $mainSlider.find('li');
    var liLehgth = $li.length;
    var position = 0;
    var padding = parseInt($li.eq(0).css('margin-right'));
    var animateSpeed = 10000;
    var slideWidth = $li.eq(0).width();
    var imageWidth = slideWidth  + padding;
    var imgcount = ((sliderWidth - (sliderWidth % imageWidth)) / imageWidth) + 2;
    var contwidth = imgcount * imageWidth;
    var currentSlide = 0;
    var i = 0;

    $mainSlider.data('current',currentSlide);
    $ul.width((imgcount+liLehgth) * imageWidth);

    for(i = 0; i < imgcount; i++){
       $ul.append($li.eq(i).clone());
    }
    function nextSlide(){
        var i = 0;
        var currentSlide=parseInt($mainSlider.data('current'));
        currentSlide++;
        if(currentSlide >= liLehgth+1){
                $ul.css('left',-(currentSlide-liLehgth-1) * imageWidth);
                for(i = 0; i < liLehgth; i++){

                    $ul.append($li.eq(i).clone());
                }
                for(i = 0; i < liLehgth; i++){

                    $ul.find('li').eq(0).remove();
                }

            currentSlide -= liLehgth;

        }
        $ul.animate({left: -currentSlide*imageWidth},animateSpeed,'linear',function(){
             nextSlide();
        });
        $mainSlider.data('current',currentSlide);
    }
    nextSlide();

});
