document.querySelector("#coffeeDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector("#coffeePage").classList.remove("hidden");
});

document.querySelector("#hcDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector("#hotChocolatePage").classList.remove("hidden");
});

document.querySelector("#teaDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector("#teaPage").classList.remove("hidden");
});

document.querySelector("#muffinDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector("#muffinsPage").classList.remove("hidden");
});

document
  .querySelector("#sandwichDrpDown")
  .addEventListener("click", (event) => {
    event.preventDefault();
    var containers = document.querySelectorAll(".container");
    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add("hidden");
    }
    document.querySelector("#sandwichPage").classList.remove("hidden");
  });

document.querySelector("#bagelDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector("#bagelPage").classList.remove("hidden");
});

// start of cart

function showCartContainer(e) {
  var containers = document.querySelectorAll(".container");
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.add("hidden");
  }
  document.querySelector(".CartContainer").classList.remove("hidden");
  e.preventDefault();
}
function addColdBrew() {
  var temp = {
    name: "Vanilla Sweet Cream Cold Brew",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/cold brew 2.jpg",
  };
  createCartItem(temp);
}
// on click executes coldBrew ( tie to add to cart button)

function addCL() {
  var temp = {
    name: "Caramel Latte",
    price: 5.25,
    quantity: 1,
    imagePath: "./assets/caramel latte.jpg",
  };
  createCartItem(temp);
}

function addHC() {
  var temp = {
    name: "Hot Chocolate",
    price: 3.5,
    quantity: 1,
    imagePath: "./assets/hot chocolate 1.jpg",
  };
  createCartItem(temp);
}

function addWHC() {
  var temp = {
    name: "White Hot Chocolate",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/White Hot Chocolate.jfif",
  };
  createCartItem(temp);
}

function addChaiTea() {
  var temp = {
    name: "Chai Tea",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/I love chai.jpg",
  };
  createCartItem(temp);
}

function addMatchaTea() {
  var temp = {
    name: "Matcha Tea",
    price: 4.5,
    quantity: 1,
    imagePath: "./assets/matcha mug 1.jpg",
  };
  createCartItem(temp);
}

function addBNM() {
  var temp = {
    name: "Banana Nut Muffin",
    price: 3.0,
    quantity: 1,
    imagePath: "./assets/muffins 1.jpg",
  };
  createCartItem(temp);
}

function addCM() {
  var temp = {
    name: "Chocolate Muffin",
    price: 3.0,
    quantity: 1,
    imagePath: "./assets/chocolate muffin.jpg",
  };
  createCartItem(temp);
}

function addBEC() {
  var temp = {
    name: "Bacon Egg & Cheese",
    price: 5.5,
    quantity: 1,
    imagePath: "./assets/bacon egg and cheese 2.jpg",
  };
  createCartItem(temp);
}

function addSEC() {
  var temp = {
    name: "Sausage Egg & Cheese",
    price: 5.5,
    quantity: 1,
    imagePath: "./assets/sausage egg and cheese.jpg",
  };
  createCartItem(temp);
}

function addSSB() {
  var temp = {
    name: "Sam's Salty Bagel",
    price: 6.0,
    quantity: 1,
    imagePath: "./assets/salt bagel.jpeg",
  };
  createCartItem(temp);
}

function addAB() {
  var temp = {
    name: "Asiago Bagel",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/asiago bagel.jpg",
  };
  createCartItem(temp);
}

var cart = [];

function createCartItem(item) {
  var root = document.createElement("div");
  root.classList.add("cartItem");
  root.innerHTML = `<div class=" ">
  <img src="${item.imagePath}" class="cartImage" />
  </div>

  <div class="about">
    <h3 class="title">${item.name}</h3>
    <h4 class="subtitle">16oz.</h4>
  </div>

  <p class="quantity">
    Quantity: ${item.quantity}
  </p>
  <div class="prices">
    <div class="amount">$${item.price}</div>
  </div>`;

  document.querySelector(".cartItems").appendChild(root);

  // cartQuantity(item);
}

function cartQuantity(item) {
  document.querySelector(".amount").innerText = `$${
    item.price * item.quantity
  }`;
  document.querySelector(".howmanybox").value = item.quantity;
  document.querySelector("#myquantityform").addEventListener("submit", (e) => {
    var formData = new FormData(e.target);
    item.quantity = formData.get("quantity");
    document.querySelector(".amount").innerText = `$${
      item.price * item.quantity
    }`;
    e.preventDefault();
  });
}
function submitForm(e) {
  var formData = new FormData(e.target);
  item.quantity = formData.get("quantity");
  document.querySelector(".amount").innerText = `$${
    item.price * item.quantity
  }`;
  e.preventDefault();
}
function removeItems(e) {
  var cart = document.querySelector(".cartItems");
  var children = cart.querySelectorAll(".cartItem");
  for (let i = 0; i < children.length; i++) {
    children[i].remove();
  }
}
