const scriptURL = "https://script.google.com/macros/s/AKfycbyrmyH7ur3uginwngobCjcCigf11KaJHRZvwsU9DtV-XWs29sWqIn2utuyJzBwOLPQB7A/exec";

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => response.text())
        .then(result => {
            alert("Form Submitted Successfully ✅");

            form.reset();   // 🔥 यही line data clear करती है

            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";
        })
        .catch(error => {
            alert("Error! Please try again ❌");
            submitBtn.disabled = false;
            submitBtn.innerText = "Submit";
        });
});