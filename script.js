console.log("iam working")
// Document==>
// 1.creatingElement
//2.setting an attribute
//3.getElementById
//4.queryselector

//creating an element

let newElement = document.createElement("div")

//innertext
// newElement.innerText="hi i was created by js"

//setting an attribute

newElement.setAttribute("class","js-class")
newElement.setAttribute("id","js-id")


// getelement by id

let buildElement = document.getElementById("div-id")
let buildElement2 = document.getElementsByClassName("div-class")
console.log(buildElement2)

//some examples for above concept

console.log(buildElement)

let keyElement = document.createElement("a")
 console.log(keyElement)

 let gElement = document.getElementById("gg-id")
 console.log(gElement)

 ///accesing using query selector
 let queryElement=document.querySelector(".class-ele")
queryElement.style.background="red"
queryElement.style.color="white"

 console.log(queryElement)

 let queryElement2 = document.querySelectorAll(".class-ele")
for(i=1;i<queryElement2.length;i++){
    console.log(queryElement2[i])
    const color=["blue","pink","green","orange"]
    queryElement2[i].style.background= color[i]
    
}
 console.log(queryElement2)

 //adding inner text and inner html or textcontent

 newElement.innerText="yeah buddy i am js"
 newElement.innerHTML=`
 <h1>ronnie</h1>
 <div>yeah buddy light weight</div>
 `
 console.log(newElement)
 //append
 document.body.append(newElement)

 let newdiv= document.createElement("div")
 newdiv.setAttribute("id","apple-id")
 newdiv.textContent =" who is apple owner?"

 newElement.appendChild(newdiv,"hello")
 
//  newElement.append(newdiv,"hello")
