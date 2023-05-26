const feedBackElement = document.getElementById("feedBackElement");
const submitBtn = document.getElementById("submitBtn");
const firstName = document.getElementById("fName");

//console.log("submitBtn");
let fName = false; //boolean
let eName = false; //boolean
let email = false; //boolean

//feedBackElement.innerText = "Her kommer til at stå noget text" //indsætter texten i tagget på domen
//console.log(feedBackElement)


submitBtn.addEventListener("click", (event) => {
    event.preventDefault()

    // console.log('cliked: ' + event);
});

firstName.addEventListener("input", (event) => {

    console.log('tastet: ' + event);
});
