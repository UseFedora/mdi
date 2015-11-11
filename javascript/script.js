$(document).ready(function(){


	console.log("3");

//Push in Source Attribute
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }


	var source = getUrlVars()["source"];


	if(source){
          //Do Nothing;
     } else{
        
        var source = "Summit Page";

     }

     setTimeout(function(){
     	$('input[name*="source"]').val(source).change();
     }, 2000);


  //SCROLL
  $('.navbar-item').click(function(){
  	var scrollTo = $(this).attr('id');
  	var scrollToPosition = $('#scroll-' + scrollTo).offset().top;
  	$('html,body').animate({scrollTop: scrollToPosition}, 1000);;

  });



//OPEN MODAL
$('.open-modal').click(function(){
    $('.modal-window-parent').addClass('modal-window-parent-select');
});

$('.modal-window-close').click(function(){
    $('.modal-window-parent').removeClass('modal-window-parent-select');
});



});