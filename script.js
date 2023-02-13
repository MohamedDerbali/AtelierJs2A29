const goToEsprit = () => {
    location.href ='http://www.esprit.tn';
}
//selection
var nom = document.getElementById("nom");
// console.log(nom.value);
let nomByName = document.getElementsByName("input")
// console.log(nomByName);//objet of nodes {HTML}
// console.log("nom"+ nomByName[0].value)
// console.log("prenom"+ nomByName[1].value)
// console.log("age"+ nomByName[2].value)
var nomByQuerySelectorID = document.querySelectorAll("#nom");
var nomByQuerySelectorCLASS = document.querySelector(".nom");
// console.log(nomByQuerySelectorID[0].value);
// console.log(nomByQuerySelectorCLASS.value);

const calculerSomme = () => {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    console.log(Number.isInteger(x));
    document.getElementById("values").innerHTML = `la somme est: ${x+y}`;
    var creationInput = document.createElement("input");
    // document.querySelector("#content").appendChild(creationInput);
    document.querySelector("#content").innerHTML += "<input style='background-color: red' type='text' id='spawnedInput'>";
}

const removeInput = () => {
    var spawnedInput = document.getElementById("spawnedInput");
    console.log(spawnedInput);
    document.querySelector("#content").removeChild(spawnedInput);
}


var arr = ["hello", false, 2020, {"name": "ali", "age":25}, true];
var tableBody = document.getElementById("tableContent");
arr.map((el, i) => {
    if(typeof el == "object"){
        tableBody.innerHTML += `<tr><td>${i}</td><td>{"name": ${el.name},"age": ${el.age}}</td></tr>`;
        return el;
    }
        tableBody.innerHTML += `<tr><td>${i}</td><td>${el}</td></tr>`;
    
})
var checkForm = (e) => {
    e.preventDefault();
    var inputsForm = document.getElementsByName("inputsForm");
    console.log(inputsForm[0].value);
    let nom = inputsForm[0].value;
    let age = inputsForm[1].value;
    let classe = inputsForm[2].value;
    let gender = inputsForm[3].checked;
    let error = document.getElementById("checkInputs");
    error.innerHTML = "";
    if(nom.length >= 3){
        error.innerHTML = "<p style='color:red;font-weight:bold'>name must have less than 3 caracters</p>"
    }
    else if(parseInt(age)>25){
        error.innerHTML = "<p style='color:red;font-weight:bold'>your age must be less 25</p>" 
    }
    else if(classe == ""){
        error.innerHTML = "<p style='color:red;font-weight:bold'>vous devez selectionner au min un classe</p>" 
    }
    else if(!gender){
        error.innerHTML = "<p style='color:red;font-weight:bold'>vous devez spécifier votre gender</p>" 
    }
    // console.log("hello you clicked here...")
}
var btn = document.querySelector("#envoyer").addEventListener("click", checkForm);
