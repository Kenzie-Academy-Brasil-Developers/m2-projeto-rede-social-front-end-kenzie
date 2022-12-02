//meu aside numero 1, primeiro aside
let aside = document.createElement("aside")
aside.classList.add("asidedesktop")

let tituloaside = document.createElement("h3")
tituloaside.innerHTML = "Sugestões para você seguir"
tituloaside.classList.add("tituloaside")

let ul1 = document.createElement("ul")
ul1.classList.add("divcard1")

let li1 = document.createElement("li")
li1.classList.add("li1")

let divcargouser = document.createElement("div")
divcargouser.classList.add("divcargouser")

let usercard1 = document.createElement("p")
usercard1.innerHTML = users[2].user
usercard1.classList.add("usercard1")

let imgaside1 = document.createElement("img")
imgaside1.classList.add("imgaside")
imgaside1.src= users[2].img

let cargoaside1 = document.createElement("span")
cargoaside1.classList.add("cargoaside1")
cargoaside1.innerHTML = users[2].stack

let botaoseguir = document.createElement("button")
botaoseguir.innerHTML = "Seguindo"
botaoseguir.classList.add("botaoseguindo")
divcargouser.append(usercard1,cargoaside1)
li1.append(imgaside1,divcargouser,botaoseguir)
ul1.append(li1)

//fim do primeiro aside

//aside numero 2 abaixo

let ul2 = document.createElement("ul")
let li2 = document.createElement("li")
ul2.classList.add("divcard1")
li2.classList.add("li1")

let divcargouser2 = document.createElement("div")
divcargouser2.classList.add("divcargouser")

let usercard2 = document.createElement("p")
usercard2.innerHTML = users[5].user
usercard2.classList.add("usercard1")

let imgaside2 = document.createElement("img")
imgaside2.classList.add("imgaside")
imgaside2.src = users[5].img

let cargoaside2 = document.createElement("span")
cargoaside2.classList.add("cargoaside1")
cargoaside2.innerHTML = users[5].stack

let botaoseguir2 = document.createElement("button")
botaoseguir2.innerHTML = "Seguir"
botaoseguir2.classList.add("botaoseguir")

divcargouser2.append(usercard2,cargoaside2)
li2.append(imgaside2,divcargouser2,botaoseguir2)
ul2.append(li2)
//fim do segundo aside

//começo do terceiro aside
let ul3 = document.createElement("ul")
let li3 = document.createElement("li")
ul3.classList.add("divcard1")
li3.classList.add("li1")

let divcargouser3 = document.createElement("div")
divcargouser3.classList.add("divcargouser")
let usercard3 =document.createElement("p")
usercard3.innerHTML = users[6].user

usercard3.classList.add("usercard1")
let imgaside3 = document.createElement("img")
imgaside3.src = users[6].img
imgaside3.classList.add("imgaside")

let cargoaside3 = document.createElement("span")
cargoaside3.classList.add("cargoaside1")
cargoaside3.innerHTML = users[6].stack

let botaoseguir3 = document.createElement("button")
botaoseguir3.innerHTML = "Seguir"
botaoseguir3.classList.add("botaoseguir2")

divcargouser3.append(usercard3,cargoaside3)

li3.append(imgaside3,divcargouser3,botaoseguir3)
ul3.append(li3)
//fim do terceiro aside

aside.append(tituloaside,ul1,ul2,ul3)

let paiaside = document.querySelector(".paiaside")//div que engloba todo o aside
paiaside.append(aside)
let body = document.querySelector("body")
body.append(paiaside)
/*mobile abaixo, asidemobile 1*/
let divpaiulaside =document.querySelector(".divpaiul")
let asidemobile = document.createElement("aside")
asidemobile.classList.add("asidemobile")

let tituloasidemobile = document.createElement("h3")
tituloasidemobile.innerHTML = "Sugestões para você seguir"
tituloasidemobile.classList.add("tituloasidemobile")

let ul1mobile = document.createElement("ul")
ul1mobile.classList.add("divcard1mobile")

let limobile = document.createElement("li")
limobile.classList.add("li1mobile")

let divcargousermobile = document.createElement("div")
divcargousermobile.classList.add("divcargouser")

let usercard1mobile = document.createElement("p")
usercard1mobile.innerHTML = users[2].user
usercard1mobile.classList.add("usercard1")

let imgaside1mobile = document.createElement("img")
imgaside1mobile.classList.add("imgasidemmobile")
imgaside1mobile.src= users[2].img

let cargoaside1mobile = document.createElement("span")
cargoaside1mobile.classList.add("cargoaside1")
cargoaside1mobile.innerHTML = users[2].stack


let botaoseguirmobile = document.createElement("button")
botaoseguirmobile.innerHTML = "Seguindo"
botaoseguirmobile.classList.add("botaoseguindomobile")
divcargousermobile.append(usercard1mobile,cargoaside1mobile)
limobile.append(imgaside1mobile,divcargousermobile,botaoseguirmobile)
//fim do asidemobile1

//começo aside 2 mobile
let limobile2 = document.createElement("li")
limobile2.classList.add("limobile2")

let divcargousermobile2 = document.createElement("div")
divcargousermobile2.classList.add("divcargouser")

let usercard2mobile = document.createElement("p")
usercard2mobile.innerHTML = users[5].user
usercard2mobile.classList.add("usercard2")

let imgaside2mobile = document.createElement("img")
imgaside2mobile.classList.add("imgasidemmobile2")
imgaside2mobile.src= users[5].img

let cargoaside2mobile = document.createElement("span")
cargoaside2mobile.classList.add("cargoaside2")
cargoaside2mobile.innerHTML = users[5].stack

let botaoseguirmobile2 = document.createElement("button")
botaoseguirmobile2.innerHTML = "Seguir"
botaoseguirmobile2.classList.add("botaoseguirmobile2")


divcargousermobile2.append(usercard2mobile,cargoaside2mobile)
limobile2.append(imgaside2mobile,divcargousermobile2,botaoseguirmobile2)

ul1mobile.append(limobile,limobile2)
asidemobile.append(ul1mobile,tituloasidemobile)
divpaiulaside.append(asidemobile)