
'use strict';


//pop up login
$("#login").click(function() {
	$("#list-builder, #popup-box").show();
	// localStorage.setItem("list-builder", (new Date()).getTime());
});

 $("#popup-close").click(function() {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
        });



 // navigation




    $('.menu-toggle').click( function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-toggle_active');
        $('.navigationx').toggleClass('responsive');

    });


$(".search-text").focusin(function() {
            $("#star").css("opacity","0.01");
            $(".search-2").css("box-shadow", "none");
            $("#star").css("box-shadow", "none");
});
$(".search-text").focusout(function() {
            
            $("#star").css("opacity","0.99");
            $(".search-2").css("box-shadow", "1px 0 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(0, 0, 0, 0.2)");
            $("#star").css("box-shadow", "1px 0 0 rgba(0, 0, 0, 0.2), inset 1px 0 0 rgba(0, 0, 0, 0.2)");

});

$('#search').focusin(function(){
  $( "#myDropdown" ).toggleClass("show");
});
$('#search').focusout(function(){
  $( "#myDropdown" ).toggleClass("show");
});



