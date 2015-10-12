$(document).ready(function() {
    $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("nav-opened nav-closed");
    });
});