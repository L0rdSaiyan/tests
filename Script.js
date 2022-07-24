function pegarTexto(){

const conteudo = document.getElementById("texto").value

if(conteudo==""){
window.alert("Você não informou um valor válido!");

}else{


window.alert("O conteúdo é: "+conteudo);
document.getElementById("texto").value = "";
document.getElementById("resultado").innerHTML = "O conteúdo informado é: "+conteudo;
}



};

let clicou = 0;
function mudarImagem(){
  
  clicou = clicou+1;
  let imagem = document.getElementById("img");


  if(clicou==1){

  imagem.src="raiden.jpg";
  clicou = clicou -2;
  imagem.title("Raiden Brabo dos Brabos");

  }else{

   imagem.src="gokumui.jpeg";
   imagem.title("Goku brabo dos brabos");

  }


};

let apertou2 = 0;

function mudarCor(){

  apertou2 = apertou2+1;

  if(apertou2==1){

  document.body.style.backgroundColor = 'black';
  document.getElementById("titulo").style.color = 'white';
  apertou2 = apertou2-2;
  mudarCorBtn.style.color = 'white';
  btn.style.color = 'white';

  }else if(apertou2==0){

   document.body.style.backgroundColor = 'white';
   document.getElementById("titulo").style.color = 'black';
   mudarCorBtn.style.color = 'black';
   btn.style.color = 'black';

  }


};


let revelou = 0;

function revelarImg(){

revelou = revelou+1;

if(revelou==1){

document.getElementById("imgSecretar").src="gokumui.jpeg";

}else{

document.getElementById("imgSecretar").src="";
revelou = revelou-2;

}


}


let nome = 'goku';
let transformacao = 'super saiyajin';

alert( `${nome} se transformou em ${transformacao}`)

let vetor = ["joao", "bruno", "patrick", {"nome":"victor"}]
vetor.push("Lord Saiyan");
console.table(vetor)


let pessoa = {


"nome": "João Victor",
"cpf": 994329492

}
pessoa.altura = 1.80;
console.table(pessoa);