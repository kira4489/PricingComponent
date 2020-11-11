const button = document.getElementById("bar");
button.addEventListener("click", myFunction);

function myFunction() {
  let monthPayment = document.getElementsByTagName("h3");
  let annualPayment = document.getElementsByTagName("h4");
  let i;
  let n;

  for (i = 0; i < monthPayment.length; i++) {
    for (n = 0; n < annualPayment.length; n++) {
      if (monthPayment[i].style.display === "none") {
        monthPayment[i].style.display = "block";
        annualPayment[i].style.display = "none";
        button.style.justifyContent = "flex-end";
      } else {
        monthPayment[i].style.display = "none";
        annualPayment[i].style.display = "block";
        button.style.justifyContent = "flex-start";
      }
    }
  }
}
