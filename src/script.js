
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

function showCartContainer(e) {
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector(".CartContainer").classList.remove("hidden");
  e.preventDefault();
}
const items = [
  {
    name: "mocha",
    price: 16.0,
    quantity: 1,
  },
];
document.querySelector(".amount").innerText = `$${
  items[0].price * items[0].quantity
}`;
document.querySelector(".howmanybox").value = items[0].quantity;
document.querySelector("#myquantityform").addEventListener("submit", (e) => {
  var formData = new FormData(e.target);
  items[0].quantity = formData.get("quantity");
  document.querySelector(".amount").innerText = `$${
    items[0].price * items[0].quantity
  }`;
  e.preventDefault();
});

