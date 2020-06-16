//window.alert("salut")



function play() {
    var x = document.querySelectorAll(".case");
    console.log(x);
    the_end = false;
//en cour... mais useless de fait pour le moment :v
//(et je doute de pouvoir y retoucher des masses..)
}

i = 0; //il est dehor, c est moche mais au moins il se reset pas..

function swap(button) {
    i++;

    if(button.src != "img/rien.png") //if(button.src === "img/rien.png")
    {                                 // c etait la condition que je voulais mettre
        if(i%2 === 0)                 //pour ne pouvoir cliquer qu une fois 
        {
            return button.src="img/croix.png";
        }
        else
        {
            return button.src="img/rond.png";
        }
    }
    
}