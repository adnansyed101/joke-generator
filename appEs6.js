const input = document.querySelector('#number');
const collection = document.querySelector('.collection');

document.querySelector('.fact-form').addEventListener('submit', (e) => {
  getJokes();
  e.preventDefault();
});
document
  .querySelector('.clear')
  .addEventListener('click', () => (collection.innerHTML = ''));

async function getJokes() {
  const response = await fetch(
    `https://v2.jokeapi.dev/joke/Any?type=single&amount=${input.value}`
  );
  const resData = await response.json();
  displayJokes(resData);
}

function displayJokes(jokes) {
  let output = '';
  if (input.value > 1) {
    jokes.jokes.forEach((joke) => {
      output += `<li class="collection-item">${joke.joke}</li>`;
    });
  } else {
    output += `<li class="collection-item">${jokes.joke}</li>`;
  }
  collection.innerHTML = output;
  input.value = '';
}

