
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
    }
    createCartItem(temp);
    }
  // on click executes coldBrew ( tie to add to cart button)



  function addCL () {
    var temp = {
    name: "Caramel Latte",
    price: 5.25,
    quantity: 1,
    imagePath: "./assets/caramel latte.jpg",
    }
    createCartItem(temp);
    }
  
  
  function addHC () {
    var temp = {
    name: "Hot Chocolate",
    price: 3.50,
    quantity: 1,
    imagePath: "./assets/hot chocolate 1.jpg",
    }
    createCartItem(temp);
    }
  
  function addWHC () {
    var temp = {
    name: "White Hot Chocolate",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/White Hot Chocolate.jfif",
    }
    createCartItem(temp);
    }
  
  function addChaiTea () {
    var temp = {
    name: "Chai Tea",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/I love chai.jpg",
    }
    createCartItem(temp);
    }
  
  function addMatchaTea () {
    var temp = {
    name: "Matcha Tea",
    price: 4.50,
    quantity: 1,
    imagePath: "./assets/matcha mug 1.jpg",
    }
    createCartItem(temp);
    }
  
  function addBNM () {
    var temp = {
    name: "Banana Nut Muffin",
    price: 3.00,
    quantity: 1,
    imagePath: "./assets/muffins 1.jpg",
    }
    createCartItem(temp);
    }
  
  function addCM () {
    var temp = {
    name: "Chocolate Muffin",
    price: 3.00,
    quantity: 1,
    imagePath: "./assets/chocolate muffin.jpg",
    }
    createCartItem(temp);
    }

  function addBEC () {
    var temp = {
    name: "Bacon Egg & Cheese",
    price: 5.50,
    quantity: 1,
    imagePath: "./assets/bacon egg and cheese 2.jpg",
    }
    createCartItem(temp);
    }

  function addSEC () {
    var temp = {
    name: "Sausage Egg & Cheese",
    price: 5.50,
    quantity: 1,
    imagePath: "./assets/sausage egg and cheese.jpg",
    }
    createCartItem(temp);
    }

  function addSSB () {
    var temp = {
    name: "Sam's Salty Bagel",
    price: 6.00,
    quantity: 1,
    imagePath: "./assets/salt bagel.jpeg",
    }
    createCartItem(temp);
    }

  function addAB() {
    var temp = {
    name: "Asiago Bagel",
    price: 4.25,
    quantity: 1,
    imagePath: "./assets/asiago bagel.jpg",
    }
    createCartItem(temp);
    }

var cart = [];

function createCartItem(item) {
  var root = document.createElement("div")
  root.innerHTML = `<div class=" ">
  <img src="${item.imagePath}" class="cartImage" />
</div>

<div class="about">
  <h3 class="title">${item.name}</h3>
  <h4 class="subtitle">16oz.</h4>
</div>

<form id="myquantityform">
  <div class="howmany">
     <label for="quantity" class="first">Quantity?</label>
     <input type="number" min="0"   class="howmanybox" name="quantity" value= "${item.quantity}">
 </div>
</form>
<div class="prices">
  <div class="amount">${item.price}</div>
  <div class="remove"><u>Remove</u></div>
</div> `

document.querySelector(".cartItems").appendChild(root)
}



// cart 1
// document.querySelector(".amount").innerText = `$${
//   items[0].price * items[0].quantity
// }`;
// document.querySelector(".howmanybox").value = items[0].quantity;
// document.querySelector("#myquantityform").addEventListener("submit", (e) => {
//   var formData = new FormData(e.target);
//   items[0].quantity = formData.get("quantity");
//   document.querySelector(".amount").innerText = `$${
//     items[0].price * items[0].quantity
//   }`;
//   e.preventDefault();
// });

// getElementbyclass ( class of product container) 
// pull product container and add to cart through query selector? or by array?

