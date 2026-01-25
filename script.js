let form1 = document.querySelector("#platformSelection");
let form2 = document.querySelector("#usernameInput");
let inputPlatformsId = [];
form1.addEventListener("submit" , function (event) {
    event.preventDefault();
    console.log("Form-1 submitted");

    let selectedCheckBoxes = document.querySelectorAll("input[name='platform[]']:checked");
    
        
    let selectedPlatforms = [];
    selectedCheckBoxes.forEach(checkBox => {
        selectedPlatforms.push(checkBox.value);
    });
    
    if(selectedPlatforms.length == 0) alert("Select atleast one of the platforms");
    else {
        let mainDiv = document.createElement("div");
        for(let platform of selectedPlatforms) {
            let input = document.createElement("input");
            let label = document.createElement("label");

            input.type="text";
            input.placeholder = `Your ${platform} Username`
            input.id = `${platform}_username`
            input.name = "username[]"

            inputPlatformsId.push(input.id);
            
            label.setAttribute("for" , input.id);
            label.textContent = `${platform} Username: `
            
            let subDiv = document.createElement("div");
            subDiv.appendChild(label);
            subDiv.appendChild(input);
            
            let br = document.createElement("br")
            mainDiv.appendChild(subDiv);
            mainDiv.appendChild(br);
        }

        let submitBtn = document.createElement("button");
        submitBtn.type = "submit"
        submitBtn.innerText = "Submit"

        form2.appendChild(mainDiv);
        form2.appendChild(submitBtn);
        
        form1.classList.add("hidden");
        form2.classList.remove("hidden");
    }
}); 

let inputUsernames = [];

form2.addEventListener("submit" , function(event) {
    event.preventDefault();
    console.log("Form-2 submitted");

    // fetch all text-input values
    for(let id of inputPlatformsId) {
        let inputBtn = document.querySelector(`#${id}`)
        inputUsernames.push({[id] : inputBtn.value}); 
    }

});