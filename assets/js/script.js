var onlyhour = moment().format("H"); // comparing the id with 24 hour to chance the class
var days = moment().endOf('day').fromNow();
var days = moment().endOf('day').fromNow();

setInterval (function (){
var reformatDate = moment().format("dddd, MMMM Do YYYY, h:hh a");
    $("#currentDay").text(reformatDate);
},1000)

//change the class
$('.form-control').each(function() { //compare each id that is iqual to each hour 

   var compa = ($(this).attr('id'))  // get the id
  compa *= 1;  // it fixed the problem with the first id

     if ( compa < onlyhour) {                                  //this is past
       $(this).addClass("form-control  bg-secondary")          // add color grey
     }else if  (compa ==  onlyhour)    {                        //this is the same time
          $(this).addClass("form-control  bg-danger")           
       }
       else
           $(this).addClass("form-control  bg-success")
   });
