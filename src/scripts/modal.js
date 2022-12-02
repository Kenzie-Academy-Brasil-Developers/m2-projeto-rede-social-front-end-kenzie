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
  
  
  
  /*modal não funcionando
  const botoes2 = document.querySelectorAll(".botaoabrirpost")
  const meumodal = document.getElementById("modaldialog2")

  for(let d = 0; d < botoes2.length;d++){
  botoes2[d].addEventListener("click", function(){
    console.log("click")
    meumodal.showModal()
  })
  }*/
