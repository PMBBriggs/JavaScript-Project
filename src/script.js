document.querySelector('#coffeeDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#coffeePage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})

document.querySelector('#hcDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#hotChocolatePage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})

document.querySelector('#teaDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#teaPage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})

document.querySelector('#muffinDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#muffinsPage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})

document.querySelector('#sandwichDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#sandwichPage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})

document.querySelector('#bagelDrpDown').addEventListener("click", (event) => { 
    event.preventDefault();
    document.querySelector('#bagelPage').style.display = "block";
    document.querySelector('.mainPage').style.display = "none";
})