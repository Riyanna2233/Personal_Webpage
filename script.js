function showMessage() {
    alert("Hello, welcome to my webpage!");
}

const profilePic = document.getElementById("profile-pic");

profilePic.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "#e6e6fa";  
});

profilePic.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = "#f0f8ff";  
});
