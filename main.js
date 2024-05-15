document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked () {
    let num1 = +document.getElementById("num1-in").value;
    let num2 = +document.getElementById("num2-in").value;
    let num3 = +document.getElementById("num3-in").value;

    let total = num1 * num2 * num3;

    document.getElementById("output").innerHTML = total;
}
// const Price = 19.99;
// const formattedPrice = `Total: $${price.toFixed(2)}`;
// console.log(formattedPrice);