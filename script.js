const inputElement = document.querySelector("input");
const todoBoxElement = document.querySelector("ul");
const todoElement = document.querySelector("li");
const removeTodoElement = document.querySelector("i");



inputElement.addEventListener("keyup",
    function(event){
        if(event.key=="Enter"){
            addTodo(this.value)
            this.value=""
        }
    }
)

const addTodo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
      ${item}
     <i class="fas fa-xmark"></i>`

    listItem.addEventListener("click",
        function(){
            this.classList.toggle("done")
            // listItem.textContent+="Done"
        }
    )
    listItem.querySelector("i").addEventListener("click",
        function(){
            listItem.remove()
        }
    )


     todoBoxElement.appendChild(listItem)
}







// todoBoxElement.addEventListener("click",()=>{
//     console.log('remove')
//     todoElement.remove();
// })       
// function removethis(){
//     todoElement.parentNode.removeChild(todoElement);
// }
// todoElement.addEventListener("click",()=>{
//     removethis();
// })
// inputElement.addEventListener("keyup",
//     function (event) {
//         if (event.key == "Enter") {
//             console.log(this.value)
//             todoBoxElement.innerHTML+= ` <li class="fs-4 bg-dark p-1  rounded ps-3 mt-2">${this.value} <i class="fa-solid fa-xmark float-end p-2"></i></li>`
//             this.value = ""
//         }

//     }
//     )


// const addTodo = (item) => {
//     todoBoxElement.innerHTML += ` <li class="fs-4 bg-dark p-1  rounded ps-3 mt-2">${item} <i class="fa-solid fa-xmark float-end p-2"></i></li>`
//     //     todoElement.addEventListener("click",()=>{
//     //         console.log("close")
//     //         todolistElement.remove() 
//     // })
//     todoBoxElement.addEventListener('click',
//     function () {
//         todoElement.remove();
//         console.log("remove")
        
//     }
//     )
// }