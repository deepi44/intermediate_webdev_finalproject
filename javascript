function calculate() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);

    if (principal <= 0) {
        alert("Enter a positive number");
        return;
    }

    let interest = (principal * rate * years) / 100;

    document.getElementById("result").innerHTML =
        "Interest amount = " + interest;
}