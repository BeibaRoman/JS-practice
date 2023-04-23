const refs = {
  form: document.getElementById("form"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

dataFill();
displayTotal();
refs.amount.textContent = data.quantity;

refs.form.addEventListener("input", onFormInput);

function onFormInput({ target }) {
  const { value } = target;

  if (target === refs.quantity) {
    refs.amount.textContent = value;
  }

  target.setAttribute("value", value);

  dataFill();
  displayTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displayTotal() {
  refs.total.textContent = data.calcTotalPrice() + " грн";
}
