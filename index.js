const list = document.querySelector("#list");
const input = document.querySelector("#item");
const btn = document.querySelector("#btn");
// let dBtn = document.querySelector(".removeBtn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (input.value) {
    let item = input.value;
    input.value = "";
    input.focus();
    console.log(item);
    let i = document.createElement("li");
    i.classList.add("lItem")
    let p = document.createElement("p");
    p.textContent = item;

    let dBtn = document.createElement("button");
    dBtn.classList.add("removeBtn");
    dBtn.textContent = "X"
    dBtn.addEventListener("click",(e)=>{
        i.remove();
    })

    i.append(p,dBtn);    
    list.append(i);
  }  
});

