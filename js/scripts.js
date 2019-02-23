$(document).ready(function(){
  
  $("form,#input").submit(function(event){
    var qst1 = parseInt($("input:radio[name=question1]:checked").val());
    var qst2 = parseInt($("input:radio[name=question2]:checked").val());
    var qst3 = parseInt($("input:radio[name=question3]:checked").val());
    var qst4 = parseInt($("input:radio[name=question4]:checked").val());

    var total = qst1 + qst2 + qst3 + qst4;
    $("#result").text("You scored " + total + " %");

     event.preventDefault()
      });
});