// 2.1
const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  promise.then(() => {
    console.log("Time out!");
  });
};

async function runTimeOutasync() {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
  await promise;
  console.log("Time out!");
}

// 2.2
function getCharacters() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((characters) => console.log(characters));
}

getCharacters();

async function getCharactersAsync() {
  let response = await fetch("https://rickandmortyapi.com/api/character");
  let characters = await response.json();
  console.log(characters);
}
getCharacters();