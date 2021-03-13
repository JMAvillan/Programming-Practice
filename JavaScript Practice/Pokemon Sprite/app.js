//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png

const container = document.querySelector('#container');

const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1";

for (var i = 1; i <= 200; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  const newImg = document.createElement('img');

  if (i <= 9)
    newImg.src = baseUrl.concat("000" + i + ".png");
  else if (i <= 99)
    newImg.src = baseUrl.concat("00" + i + ".png");
  else
    newImg.src = baseUrl.concat("0" + i + ".png");

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}