var isstatus = document.querySelector("h5");
var nayadost = document.querySelector("#addkaro");
var imgs =document.querySelector("#imgelem");
var clicked = 0;

nayadost.addEventListener("click", function(){
    if(clicked == 0) {
        isstatus.innerHTML = " Friends";
        isstatus.style.color = "green";
        nayadost.innerHTML = "Remove Friend";
        // imgs.src="vandri.png";
        clicked = 1;
    } else {
        isstatus.innerHTML = " Unknown ";
        isstatus.style.color = "red";
        nayadost.innerHTML = "Add Friend";
        // imgs.src="edite pose .jpg";
        clicked = 0;
    }
})


