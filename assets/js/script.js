const ul = document.querySelector(".tagCreate")
const tagName = document.querySelector(".tagName")
const itensList = []

tagName.addEventListener("keydown",(e)=>{
    if(e.code.includes("Enter") && e.target.value){
        itensList.push(e.target.value)
        tagName.value=""

        loadingTagsName()
    }
})

function loadingTagsName(){
    ul.innerHTML = ""
    itensList.forEach((item,i)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <h1>${item}</h1>
        <button onclick="removerItem(${i})">X</button>
        `
        ul.appendChild(li)
    })
}

function removerItem(i){
    itensList.splice(i,1)
    loadingTagsName()
}