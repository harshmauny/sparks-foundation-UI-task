$(".sidenav a").click(function() {
    $('.sidenav a.selected').not(this).removeClass('selected');
    $(this).toggleClass('selected');
})