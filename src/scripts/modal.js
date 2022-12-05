const botao = document.querySelector(".botaoabrirpost2")
const modal = document.querySelector(".dialog2")
  
botao.addEventListener('click',()=>{
  modal.showModal()
})
  /*modal não funcionando
  const botoes2 = document.querySelectorAll(".botaoabrirpost")
  const meumodal = document.getElementById("modaldialog2")

  for(let d = 0; d < botoes2.length;d++){
  botoes2[d].addEventListener("click", function(){
    console.log("click")
    meumodal.showModal()
  })
  }*/
