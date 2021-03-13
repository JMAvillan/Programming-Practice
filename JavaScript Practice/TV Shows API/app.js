const searchBar = document.querySelector("#searchBar");
const showsList = document.querySelector("#showsList");
const searchButton = document.querySelector("#searchButton");
const NO_IMG_URL = 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'


const searchForShows = async () => {
  //remove previous search results
  clearList();
  //get user input
  let userInput = searchBar.value;
  console.log(userInput);
  //Axios gets the return value of the api and parses it into JSON
  try {
    const res = axios.get(`http://api.tvmaze.com/search/shows?q=${userInput}`)
    //console.dir(res);
    return res;
  } catch (err) {
    console.log(`No TV shows found with ${userInput}`);
    console.log(err);
  }
}

const addToList = async () => {
  try {
    const results = await searchForShows();
    for (var result of results.data) {
      const newImg = document.createElement('img');
      const newLI = document.createElement('LI');
      newImg.setAttribute('src', (result.show.image != null ? result.show.image.medium : NO_IMG_URL));
      newImg.setAttribute('width', 200);
      newImg.setAttribute('heigth', 300);
      newLI.append(newImg);
      newLI.append(result.show.name);
      showsList.append(newLI);
    }
  } catch (err) {
    console.log(err);
  }
}

searchBar.addEventListener('input', addToList);

function clearList() {
  while (showsList.lastElementChild) {
    showsList.removeChild(showsList.lastElementChild);
  }
}
