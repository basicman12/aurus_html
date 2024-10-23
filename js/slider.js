$(document).ready(function(){
   var $mainSlider = $('#main-slider');
   var sliderWidth = $mainSlider.width();
   var $sliderItems = $mainSlider.find('.items');
   var $ul = $mainSlider.find('ul');
   var $li = $mainSlider.find('li');
   var liLehgth = $li.length;
   var position = 0;
   var padding = 28;
   var animateSpeed = 800;
   var textShift = 30;

   function shift(shift,$this){
       var left = parseInt($ul.css('left'));
       var $title = $this.find('.title-wrap');
       shift *= -1;
//       $ul.css('left', shift+'px');
       $ul.animate({
           left: shift+'px'
       },animateSpeed);

   }

   $li.each(function(i){
       var $this = $(this);
       var $title = $this.find('.title-wrap');
       var width = $this.width();
       var circleClass = 'circle-o';
       var circleActiveClass = 'circle';
       var cClass = circleClass;
       if(i === 0){
           $this.addClass('active');
       }
       $this.css('left',position+'px');
       position += width;
       position += padding;
       $title.bind('click',function(){
           if($this.hasClass('active')){
               return false;
           }
           var left = parseInt($this.css('left'));
           var paddingLeft = Math.round((sliderWidth - width) / 2);
           var $icon = $sliderItems.find('.icon').eq(i);
           if(i === 0){
               paddingLeft = 0;
           } else if((i+1) === liLehgth){
               paddingLeft = sliderWidth - width;
           }
           shift(left-paddingLeft,$this);
           $li.removeClass('active');
           $this.addClass('active');

           if($icon.hasClass(circleClass)){
                $sliderItems.find('.icon').removeClass(circleActiveClass).addClass(circleClass);
                $icon.removeClass(circleClass).addClass(circleActiveClass);
           }
           return false;
       });
       if(i === 0){
           cClass = circleActiveClass;
       }
       $('<span />').addClass('icon').addClass(cClass).appendTo($sliderItems).bind('click',function(){
            $title.trigger('click');
            return false;
       });
       $title.find('.title').css('left','-' + textShift + 'px');
       $title.find('.lt').css('left',textShift + 'px').css('width', textShift + 'px').removeClass('g-hide');
       $title.find('.gt').css('left','-' + textShift + 'px').css('width', textShift + 'px').removeClass('g-hide');

   });
   $('<span />').addClass('g-clr').appendTo($sliderItems);
   $ul.width(position);
   var itmesWidth = $sliderItems.find('.icon').eq(0).width();
   var itmesMarginRight = parseInt($sliderItems.find('.icon').eq(0).css('margin-right'));
   var $sliderItems = $sliderItems.css('width',((itmesWidth + itmesMarginRight) * liLehgth) + 'px');
});
