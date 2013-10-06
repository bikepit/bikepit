$(document).ready(function(){
  $heart = null

 $('.icon-heart').on("mouseover mouseout", function(e){
    e.preventDefault();
    e.stopPropagation();
  });


  $('.header').on("mouseover", ".heart", function(e){
    if($heart === null){
      $heart = heart();

      var $link = $('.header .heart');

      $('body').append($heart);

      positionToCenter($link, $heart);

      $heart.animate({
        opacity: 1.0
      }, 75, "swing")
    }
  });

  $('.header').on("mouseout", ".heart", function(e){
    $heart.animate({
      opacity: 0.0
    }, 75, "swing", function(){
      $heart.remove();
      $heart = null;
    });
  })
});

function heart(){
  return $('<span></span>')
    .addClass("icon-heart")
    .css("opacity", 0);
}

function positionToCenter($existing, $element){
  $element.offset({
    top: $existing.offset().top - $existing.outerHeight() * 0.75,
    left: $existing.offset().left + $existing.outerWidth() / 2 - $element.outerWidth() / 2
  });
}
