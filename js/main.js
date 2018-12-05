$(document).ready(function(){
  var headerHeight =$('header').height();
  $('.banner').css({'padding-top':headerHeight});
  $('.share-links li a').mouseenter(function(){
    $(this).animate({
      left:'0'
    })
  });
  $('.share-links li a').mouseleave(function(){
    $(this).animate({
      left:'-35'
    })
  });
});
