document.querySelector("#coffeeDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#coffeePage").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
});

document.querySelector("#hcDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#hotChocolatePage").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
});

document.querySelector("#teaDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#teaPage").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
});

document.querySelector("#muffinDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#muffinsPage").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
});

document
  .querySelector("#sandwichDrpDown")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#sandwichPage").style.display = "block";
    document.querySelector(".mainPage").style.display = "none";
  });

document.querySelector("#bagelDrpDown").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#bagelPage").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
});

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
// when you click checkout in cart takes you to payment method radio button forms
document.querySelector(".checkout").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".payOptions").style.display = "block";
  document.querySelector(".mainPage").style.display = "none";
  document.querySelector(".Cart-Items").style.display = "none";
  document.querySelector(".shoppingCart").style.display = "none";
});
// *****when you choose the cash radio button it takes you to cash method form***

const btnPm = document.querySelector(".paymentMethodSubmit");
const payMethodBtns = document.querySelectorAll(
  'input[name = "paymentMethod"]'
);
btnPm.addEventListener("click", (event) => {
  event.preventDefault();
  for (const payMethodBtn of payMethodBtns) {
    if (payMethodBtn.checked) {
      console.log(payMethodBtn.id);
      if (payMethodBtn.id === "cashMethod") {
        document.querySelector(".cashOption").style.display = "block";
        document.querySelector(".payOptions").style.display = "none";
        document.querySelector(".mainPage").style.display = "none";
        document.querySelector(".Cart-Items").style.display = "none";
      } else if (payMethodBtn.id === "cardMethod") {
        document.querySelector(".cardOption").style.display = "block";
        document.querySelector(".payOptions").style.display = "none";
        document.querySelector(".mainPage").style.display = "none";
        document.querySelector(".Cart-Items").style.display = "none";
      }
      break;
    }
  }
});
// getting data from the cash and card forms
// cash form
document.querySelector(".cashSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.querySelector(".cashForm");
  const Data = new FormData(form);
  let amountGiven = data.get("given");
  console.log(amountGiven);
  console.log(Data);
});
