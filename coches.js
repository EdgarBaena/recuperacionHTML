console.log();

const coches = [
  {
    nom: "Bugatti Chiron Super Sport 300+",
    potencia: 1500,
    motor: "8.0 litres W16",
    foto: "./imagenes/bugatti.jpg"
  },
  {
    nom: "Koenigsegg Jesko",
    potencia: 1600,
    motor: "V8 de 5.0 litres",
    foto: "./imagenes/Koenigsegg.jpg"
  },
  {
    nom: "Hennessey Venom F5",
    potencia: 1800,
    motor: "V8 de 6.6 litres",
    foto: "./imagenes/Hennessey.jpg"
  },
  {
    nom: "Rimac C_Two",
    potencia: 1900,
    motor: "Elèctric",
    foto: "./imagenes/Rimac.jpg"
  },
  {
    nom: "Lamborghini Sian",
    potencia: 800,
    motor: "V12 híbrid",
    foto: "./imagenes/lamborguini.jpg"
  }
];

  const cardsContainer = document.querySelector('.cards');
  cardsContainer.innerHTML = '';

{
document.querySelector('.boton1').addEventListener('click', compararCoches);
document.querySelector('.boton2').addEventListener('click', cercarPotencia);
};

function compararCoches() {
  const coche1 = document.getElementById('coche1').value;
  const coche2 = document.getElementById('coche2').value;
  const comparacionDiv = document.querySelector('.comparacion')
;}

