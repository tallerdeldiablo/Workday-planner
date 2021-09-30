var dayHour = moment().format("h a");
//var onlyhour = moment().format("h");
var lahora = moment().format("h");
var days = moment().endOf('day').fromNow();

setInterval (function (){

var reformatDate = moment().format("dddd, MMMM Do YYYY, h: a");
    $("#currentDay").text(reformatDate);
},1000)

var toCheck= $("form-control")
var container = $("#container");
console.log(toCheck);

var mainEL = $("main");
//change the class
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
