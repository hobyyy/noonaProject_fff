// button
let toggleBtn = document.querySelector(".toggle_button");
let reasonBtn = document.querySelector(".int_reason");
let fourBtn = document.querySelector(".int_four");
let visionBtn = document.querySelector(".int_vision");

reasonBtn.addEventListener('click', function() {
  toggleBtn.style.left="18.5%";
  toggleBtn.style.background="#8C5535";
  document.querySelector(".int_reason > p").style.color = "#fff";
  document.querySelector(".int_vision > p").style.color = "#121212"; 
});
fourBtn.addEventListener('click', function() {
  toggleBtn.style.left="50%";
  toggleBtn.style.background="#ccc";
  document.querySelector(".int_reason > p").style.color = "#121212";  
  document.querySelector(".int_vision > p").style.color = "#121212"; 
});
visionBtn.addEventListener('click', function() {
  toggleBtn.style.left="81.5%";
  toggleBtn.style.background="#7598EC";
  document.querySelector(".int_vision > p").style.color = "#fff";
  document.querySelector(".int_reason > p").style.color = "#121212"; 
});


//index 내용 보이기
window.addEventListener('DOMContentLoaded', function() {
  showContent('B');
});

function showContent(content) {
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");
  var contentC = document.getElementById("contentC");
    // 내용 숨김
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "none";
    // 선택한 내용 보이기
    if (content === "A") {
      contentA.style.display = "block";
    } else if (content === "B") {
      contentB.style.display = "block";
    }
      else if (content === "C") {
      contentC.style.display = "block";
    }
  }