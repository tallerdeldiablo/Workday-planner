var onlyhour = moment().format("H"); // comparing the id with 24 hour to chance the class
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


var todos = [''];



//---------save localStorage 9 am

 function save9() {
   let inputSave = document.getElementById('9');  
  
   const key = inputSave.value;
 
   localStorage.setItem('Input9', key)
  
  
  
 
}

//save localStorage 10 am

 function save10() {
   let inputSave2 = document.getElementById('10')      

   const key = inputSave2.value; 
   localStorage.setItem('Input10', key)
   localStorage.getItem(key);
   inputSave2.value = key;
}

function save11() {
   let inputSave2 = document.getElementById('11')      

   const key = inputSave2.value; 
   localStorage.setItem('Input11', key)
   localStorage.getItem(key);
   inputSave2.value = key;
}
function save12() {
   let inputSave2 = document.getElementById('12')      

   const key = inputSave2.value; 
   localStorage.setItem('Input12', key)
  
   localStorage.getItem(key);
   inputSave2.value = key;
}
function save13() {
   let inputSave2 = document.getElementById('13')      

   const key = inputSave2.value; 
   localStorage.setItem('Input13', key)

   localStorage.getItem(key);
   inputSave2.value = key;
}
function save13() {
   let inputSave2 = document.getElementById('13')      

   const key = inputSave2.value; 
   localStorage.setItem('Input13', key)
  
   localStorage.getItem(key);
   inputSave2.value = key;
}
function save14() {
   let inputSave2 = document.getElementById('14')      

   const key = inputSave2.value; 
   localStorage.setItem('Input14', key)
  
   localStorage.getItem(key);
   inputSave2.value = key;
}

function save15() {
   let inputSave2 = document.getElementById('15')      

   const key = inputSave2.value; 
   localStorage.setItem('Input15', key)

   localStorage.getItem(key);
   inputSave2.value = key;
}

function save16() {
   let inputSave2 = document.getElementById('16')      

   const key = inputSave2.value; 
   localStorage.setItem('Input16', key)
  
   localStorage.getItem(key);
   inputSave2.value = key;
}
function save17() {
   let inputSave2 = document.getElementById('17')      

   const key = inputSave2.value; 
   localStorage.setItem('Input17', key)

   localStorage.getItem(key);
   inputSave2.value = key;
}
function localset() {
   var inEl = $('.form-control');
   for (var i = 0; i < inEl.length; i++) {
      var dataStorage = 'Input' +9;
      var dataStorage = 'Input' +i;
       
       inEl[i].value = localStorage.getItem(dataStorage);
   }
} 
localset(); 
