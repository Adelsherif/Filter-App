let imageFile = document.querySelector("#fileInput");
let imageParent = document.querySelector(".image .section");
let image = document.querySelector(".image .section img");
let inputs = document.querySelectorAll(".secondList form input");

imageFile.addEventListener("input",function () {
    imageParent.innerHTML = '';
    let fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile.files[0]);
    fileReader.addEventListener("load", function () {
    let imageConent = new Image();
    imageConent.src = fileReader.result;
    imageParent.appendChild(imageConent);
    })
});

inputs.forEach((element) =>{
    element.nextElementSibling.textContent = element.value;
    element.addEventListener("change" ,function(){
        this.nextElementSibling.textContent = element.value;
        document.querySelector(".image .section img") !== null && (document.querySelector(".image .section img").style.filter = `${this.dataset.type}(${this.value})`)
    })
})