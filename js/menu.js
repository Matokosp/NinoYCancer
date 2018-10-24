document.getElementById('menuicon').onclick = function() {
    document.getElementById('menuicon').classList.toggle('rotated');
}
$(document).ready(function(){
  $('#menuicon').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });


});

