const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const distanciaTopo = mario.offsetTop;
let funcaoAtiva = false;
let condivaoValida = true;

function condicao() {
  const distanciaPipe = pipe.offsetLeft;
  const distanciaClouds = clouds.offsetLeft;
  const distanciaPulo = mario.offsetTop;
  const alturaPulo = distanciaTopo - distanciaPulo;
  const valor = alturaPulo < 80;

  if (distanciaPipe > 0 && distanciaPipe < 120 && valor) {
    condivaoValida = false;

    pipe.style.animation = "none";
    pipe.style.left = `${distanciaPipe}px`;

    clouds.style.animation = "none";
    clouds.style.left = `${distanciaClouds}px`;

    mario.src = "./img/game-over.png";
    mario.style.animation = "none";
    mario.style.bottom = `${alturaPulo}px`;
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}

const loop = setInterval(condicao, 10);

function removeClasseAtivo() {
  mario.classList.remove("ativo");
  funcaoAtiva = false;
}

function handleClick(event) {
  if (
    (event.key === "ArrowUp" || event.key === " ") &&
    funcaoAtiva === false &&
    condivaoValida === true
  ) {
    mario.classList.add("ativo");
    funcaoAtiva = true;
    setTimeout(removeClasseAtivo, 500);
  }
}

window.addEventListener("keydown", handleClick);
