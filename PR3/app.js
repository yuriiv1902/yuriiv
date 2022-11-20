var button = document.querySelectorAll("div.massage > button");

// function closeMassage() {
//     button.parentNode.style.display = "none";
// }
// var firstButtton = document.getElementById("first-button");
// firstButtton.addEventListener("click", closeMassage)

var firstButtton = document.getElementById("first-button");
firstButtton.addEventListener("click", function() {
    firstButtton.parentNode.style.display = "none";
});

var secondButton = document.getElementById("second-button");
secondButton.addEventListener("click", function() {
    secondButton.parentNode.style.display = "none";
});

var thirdButtton = document.getElementById("third-button");
thirdButtton.addEventListener("click", function() {
    thirdButtton.parentNode.style.display = "none";
});

// let massages = document.querySelectorAll('.massage');

//     for(let massage of massages) {
//         massage.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//         massage.lastChild.onclick = () => massage.remove();
//     }