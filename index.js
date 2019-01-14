
$(document).ready(function () {
  $("div.flip-wrapper").click(function() {
    $(this).toggleClass("flip");
    console.log('clicked')
  })

  function showEgg(){
    var egg = document.getElementsByClassName('egg')[0];
    if(egg){
      egg.className = '';
    }
  }
  var code = "";
  window.addEventListener("keydown", trackKeys);

  function trackKeys(e){
    code += e.key;
    console.log(code);
    if (code == 'totoro') {
      $('#myModal').modal()
      showEgg();
      code = '';
    }
    else if (code.length > 6 && code.substring(code.length-6) == 'totoro'){
      $('#myModal').modal()
      showEgg();
      code = '';
    }
  }

});
