var dayHour = moment().format("h ");
//var onlyhour = moment().format("h");
var lahora = 12;
var days = moment().endOf('day').fromNow();   

setInterval (function (){  
    
var reformatDate = moment().format("dddd, MMMM Do YYYY, h: a");
    $("#lead").text(reformatDate);
},1000)
   
$("#firsHour").text(dayHour);
$("#arrayhours").text(dayHour);

var toCheck= $("form-control")
var container = $("#container");
console.log(toCheck);

var mainEL = $("main");

$('.form-control').each(function() {
  console.log($(this).text());
   var compa = ($(this).attr('id'))
   console.log(compa);
    var formi = $('.form-control')
    if ( compa < lahora) {
      $(this).addClass("form-control  bg-secondary")
    }else if  (compa ==  lahora)    {
      $(this).addClass("form-control  bg-danger")
    }
    else  
    $(this).addClass("form-control  bg-success")
   
   });

