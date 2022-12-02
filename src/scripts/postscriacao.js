//criação do post samuel
let divpaiul = document.querySelector(".divpaiul")
divpaiul.classList.add("divpaiul")
let ulsamuel = document.querySelector(".postsamuel");

let postsamuel = document.createElement("li");
postsamuel.classList.add("lipostsamuel")

let divpostsamuel = document.createElement("div");
divpostsamuel.classList.add("divpaiposts");

let sectionspantitulosamu = document.createElement("section")
     sectionspantitulosamu.classList.add("sectionspantitulosamu")

let imgpostsamuel = document.createElement("img");
imgpostsamuel.src = users[0].img;
imgpostsamuel.classList.add("imgpostssamu");

let divpostsamuel2 = document.createElement("div");
divpostsamuel2.classList.add("divpaititulospan");

let userpostsamuel = document.createElement("h3");
userpostsamuel.classList.add("userposttitulo");
userpostsamuel.innerHTML = users[0].user;

let stackpostsamuel = document.createElement("span")
 stackpostsamuel.innerHTML = users[0].stack;
stackpostsamuel.classList.add("stackposts")

sectionspantitulosamu.append(userpostsamuel, stackpostsamuel);
divpostsamuel.append(imgpostsamuel, sectionspantitulosamu);
postsamuel.append(divpostsamuel);
ulsamuel.append(postsamuel);

//criação do formulario do post samuel
document.querySelector(".postsamuel").insertAdjacentHTML(
  "beforeend",
  `

<form class="postagemsamuel">
<input class="inputinterface" type="text" placeholder=" Titulo do Post" name="interface" id="interface" required="true" /><br>
<textarea class="textointerface"placeholder=" Descrição do Post" id="mensagem" cols="20" rows="3" name="mensagem"> </textarea><br>
<button class="botaopostar" type="submit">Postar</button>
</form>
`
);
divpaiul.append(ulsamuel)
//fim do post samuel

//criação dos outros 3 posts
for (let j = 0; j < posts.length; j++) {
  let ulposts = document.querySelector(".posts");
  let liposts = document.createElement("li");
  liposts.classList.add("liposts");

  let titulopost = document.createElement("h2");
  titulopost.innerHTML = posts[j].title;

  let descricaopost = document.createElement("p");
  descricaopost.classList.add("paragrafopostagem")
  descricaopost.innerHTML = posts[j].text;

  for (let i = 0; i < users.length; i++) {
    if (posts[j].user == users[i].id) {
      var main = document.querySelector("main");

      let imgposts = document.createElement("img");
      imgposts.src = users[i].img;
      imgposts.classList.add("imgposts");

      let divposts2 = document.createElement("div");
      divposts2.classList.add("divpaititulospanimg");

      let buttonabrirpost = document.createElement("button");
      buttonabrirpost.dataset.userid = users[i].id
    
     // buttonabrirpost.addEventListener("click", function () {
      
      buttonabrirpost.innerHTML = "Abrir Post";
     buttonabrirpost.classList.add("botaoabrirpost")
    // buttonabrirpost.addEventListener("click",()=>{
      //let titulomodal = event.path[1].children[0].children

     let sectionspantitulo = document.createElement("section")
     sectionspantitulo.classList.add("sectionspantitulo")

      let userposts = document.createElement("h3");
      userposts.classList.add("userposttitulo");
      userposts.innerHTML = users[i].user;

      let stackposts = document.createElement("span");
      stackposts.innerHTML = users[i].stack;
      stackposts.classList.add("stackposts")
     
      sectionspantitulo.append(userposts,stackposts)
      divposts2.append(imgposts,sectionspantitulo);


      liposts.append(
        divposts2,
        titulopost,
        descricaopost,
        buttonabrirpost
      );
      ulposts.append(liposts);
      main.append(ulsamuel, ulposts);
    }
  }
}//fim de criação dos outros posts

function eventobotaopost(){
  let botoes = document.querySelectorAll(".botaoabrirpost")
  for(let a = 0; a < botoes.length;a++){
    botoes[a].addEventListener("click", function(event){
   (abrirmodal(event.target.dataset.userid))
   excluirmodal()
     
    })
 }
}
eventobotaopost()


//começo da criação do modal
function abrirmodal(id){
      let modaldialog = document.getElementById("modaldialog")
  let element = []
  for(let b = 0; b < posts.length;b++){
  if(posts[b].id_post === Number(id)){
  element.push(posts[b])
  console.log(element)
  modaldialog.append(criarmodal(element))
  console.log(modaldialog)
modaldialog.showModal()

  }
    }
  }
  function criarmodal(info){
 let modal__container = document.createElement("div")
 modal__container.classList.add("paiparagrafotitulo")
 let modal__title = document.createElement("h2")
 modal__title.innerText = info[0].title
let modal__text = document.createElement("p")
modal__text.innerText =info[0].text

 modal__container.append(modal__title,modal__text)

 return modal__container
  }

  function excluirmodal(){
    const exluirmodal1 = document.getElementById("modaldialog")
    const spanfechar = document.querySelector(".spanfechar")
    spanfechar.addEventListener("click", function(){
      exluirmodal1.close()
    })
  }
  
 