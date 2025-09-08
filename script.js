let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");
let summa = document.getElementById("summa");

let btn = document.getElementById("btn");

let resultText = document.getElementById("result");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

async function generalFunc(url) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f15caf233bmsh5e4e4e2b74b744bp17ac7cjsnaa6204453046",
      "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
}

let getCurrency = async function () {
  const url =
    "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD";

  let data = await generalFunc(url);

  for (let currency in data.result) {
    let option = document.createElement("option");
    option.value = currency;
    option.innerHTML = currency;
    fromSelect.appendChild(option);

    let option2 = document.createElement("option");
    option2.value = currency;
    option2.innerHTML = currency;
    toSelect.appendChild(option2);
  }
};

getCurrency();

let getResult = async function () {
  const url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${fromSelect.value}&to=${toSelect.value}&amount=${summa.value}`;

  let data = await generalFunc(url);
  resultText.textContent = Math.ceil(data.result);
};

btn.addEventListener("click", getResult);

fromSelect.addEventListener("change", function (e) {
  img1.src = `https://flagcdn.com/24x18/${e.target.value.toLowerCase().slice(0, 2)}.png`;

  console.log(e.target.value);
});
toSelect.addEventListener("change", function (e) {
  console.log(e.target.value);
  img2.src = `https://flagcdn.com/24x18/${e.target.value.toLowerCase().slice(0, 2)}.png`;
});
