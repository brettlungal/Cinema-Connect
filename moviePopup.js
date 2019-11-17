  /*
function popup() {
    Swal.fire({
        title: "Select Showtime",
        text: "please select desired showtime",
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        imageHeight: 800,
        button: "confirm"
      });
}
*/

//get modal element
var modal = document.getElementById('movieModal');
var poster = document.getElementById('poster1');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var timeSelect1 = document.getElementById('130Btn');
var timeSelect2 = document.getElementById('345Btn');
var timeSelect3 = document.getElementById('630Btn');
var timeSelect4 = document.getElementById('900Btn');

var selectedTime = "-1";

//listen for open click
poster.addEventListener('click', openModal);

//listen for close
closeBtn.addEventListener('click', closeModal);

//listen for outside window click
window.addEventListener('click',clickOutside);

timeSelect1.addEventListener('click', selected1);
timeSelect2.addEventListener('click', selected2);
timeSelect3.addEventListener('click', selected3);
timeSelect4.addEventListener('click', selected4);

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

function selected1(){
  timeSelect1.style.border = 'black 2px solid';
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