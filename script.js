let scrollToTopBtn= document.getElementById("scrollToTopBtn");
window.onscroll = function(){
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display ="block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function topfunction() {
    window.scrollTo({top: 0, behavior:"smooth" })
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting!");
        event.preventDefault(); // Prevent the form from submitting
    } else {
        alert("Form submitted successfully!");
    }
});
