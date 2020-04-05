jQuery(document).ready(function(){
  "use script";
  /*burger button script */
  var burgerBTn = $("#burgerBtn");
  burgerBTn.on("click", function(event){
    event.preventDefault();
    $(this).find("span").toggleClass("open");
  });
});