let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
windows.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData();
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch( (error) => {
          status.innerHTML = "Oops! There was a problem submitting your form";
      });
}

form.addEventListener("submit", handleSubmit);



var loader = document.getElementById('preloader');
		window.addEventListener("load", function(){
			loader.style.display = "none";
		});


