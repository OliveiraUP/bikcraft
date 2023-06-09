//Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");
function ativarlink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarlink);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarproduto(item) {
  const element = document.getElementById(item);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarproduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarbotao(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  if (resposta.classList.contains("ativo")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarbotao);
}

perguntas.forEach(eventosPerguntas);

//Mudando Galeria de imagem das bikes

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function mudarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoimg(imagem) {
  imagem.addEventListener("click", mudarImagem);
}

galeria.forEach(eventoimg);

//plugin animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
