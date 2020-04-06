jQuery(document).ready(function(){
  "use script";
  /*burger button script & open mobile menu*/
  var burgerBTn = $("#burgerBtn");
  var menu = $(".mobile__row");
  burgerBTn.on("click", function(event){
    event.preventDefault();
    $(this).find("span").toggleClass("open");
    menu.toggleClass("mobile__row--open");

  });
});