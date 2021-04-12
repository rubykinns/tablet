const toggleBtn=document.querySelector('.navbar_toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// function myFunction() {
//     var x = document.getElementById("menu");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }