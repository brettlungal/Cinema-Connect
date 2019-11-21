
var orderSpan = document.getElementById('order-items');
var currOrder = orderSpan.innerText;

var lrg = document.getElementById('addLrg');
var med = document.getElementById('addMed');
var sml = document.getElementById('addSml');



lrg.addEventListener('click', function(){
  if ( currOrder == "" ){
    currOrder= currOrder+"Large Popcorn x"+largeQty;
  }else{
    currOrder= currOrder+", Large Popcorn x"+largeQty;
  }
  orderSpan.innerText = currOrder;
  largeQty = 0;
  document.getElementById('lrgQty').innerText = largeQty;
});

med.addEventListener('click', function(){
  if ( currOrder == "" ){
    currOrder= currOrder+"Medium Popcorn x"+mediumQty;
  }else{
    currOrder= currOrder+", Medium Popcorn x"+mediumQty;
  }
  orderSpan.innerText = currOrder;
  mediumQty = 0;
  document.getElementById('medQty').innerText = mediumQty;
});

sml.addEventListener('click', function(){
  if ( currOrder == "" ){
    currOrder= currOrder+"Small Popcorn x"+smallQty;
  }else{
    currOrder= currOrder+", Small Popcorn x"+smallQty;
  }
  orderSpan.innerText = currOrder;
  smallQty = 0;
  document.getElementById('smlQty').innerText = smallQty;
});

document.getElementById('defaultOpen').click();
var largeQty = document.getElementById('lrgQty').innerText;
document.getElementById('lrgUp').addEventListener('click', function(){
    largeQty++;
    document.getElementById('lrgQty').innerText = largeQty;
});
document.getElementById('lrgDwn').addEventListener('click',function(){
  if ( largeQty!= 0 ){
    largeQty--;
  }
  document.getElementById('lrgQty').innerText = largeQty;
});

var mediumQty = document.getElementById('medQty').innerText;
document.getElementById('medUp').addEventListener('click', function(){
    mediumQty++;
    document.getElementById('medQty').innerText = mediumQty;
});
document.getElementById('medDwn').addEventListener('click',function(){
  if ( mediumQty!= 0 ){
    mediumQty--;
  }
  document.getElementById('medQty').innerText = mediumQty;
});

var smallQty = document.getElementById('smlQty').innerText;
document.getElementById('smlUp').addEventListener('click', function(){
    smallQty++;
    document.getElementById('smlQty').innerText = smallQty;
});
document.getElementById('smlDwn').addEventListener('click',function(){
  if ( smallQty!= 0 ){
    smallQty--;
  }
  document.getElementById('smlQty').innerText = smallQty;
});

function openTab(evt, concName) {
    
    var i, tabcontent, tablinks;
  
    // Get all elements and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(concName).style.display = "block";
    evt.currentTarget.className += " active";
  }
