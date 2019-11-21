
//get modal element
var modal = document.getElementById('movieModal');
var poster = document.getElementById('poster1');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var contBtn = document.getElementById('contBtn');
var timeSelect1 = document.getElementById('130Btn');
var timeSelect2 = document.getElementById('345Btn');
var timeSelect3 = document.getElementById('630Btn');
var timeSelect4 = document.getElementById('900Btn');
var thePoster = document.getElementById('modalPoster');
var selectedTime = "-1";
//listen for open click
poster.addEventListener('click', openModal);

//listen for close
var contBtn = document.getElementById('contBtn');

//listen for outside window click
window.addEventListener('click',clickOutside);

timeSelect1.addEventListener('click', selected1);
timeSelect2.addEventListener('click', selected2);
timeSelect3.addEventListener('click', selected3);
timeSelect4.addEventListener('click', selected4);

contBtn.addEventListener('click',continueClick);
closeBtn.addEventListener('click', closeModal);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function clickOutside(e){
  if ( e.target == modal ){
    modal.style.display = 'none';
  } 
}

function continueClick(){
  modal.style.display = 'none';
}

function selected1(){
  timeSelect1.style.border = 'black 2px solid';
  //for dynamic popup
  //modalPoster.src='./img/brPoster.jpg';
  //document.getElementById('modalTitle').innerText = "Blade Runner";
  selectedTime = "1:30";
  timeSelect2.style.border = 'none';
  timeSelect3.style.border = 'none';
  timeSelect4.style.border = 'none';
  console.log("selected time is"+selectedTime);
}

function selected2(){
  timeSelect2.style.border = 'black 2px solid';
  selectedTime = "3:45";
  timeSelect1.style.border = 'none';
  timeSelect3.style.border = 'none';
  timeSelect4.style.border = 'none';
  console.log("selected time is"+selectedTime);
}

function selected3(){
  timeSelect3.style.border = 'black 2px solid';
  selectedTime = "6:30";
  timeSelect2.style.border = 'none';
  timeSelect1.style.border = 'none';
  timeSelect4.style.border = 'none';
  console.log("selected time is"+selectedTime);
}

function selected4(){
  timeSelect4.style.border = 'black 2px solid';
  selectedTime = "9:00";
  timeSelect2.style.border = 'none';
  timeSelect3.style.border = 'none';
  timeSelect1.style.border = 'none';
  console.log("selected time is"+selectedTime);
}
