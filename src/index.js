console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let breeds = [];

document.addEventListener('DOMContentLoaded', () => {
  const imgContainer = document.getElementById('dog-image-container');
  const breedList = document.getElementById('dog-breeds');
  const dropdown = document.getElementById('breed-dropdown');

  // Challenge 1: Load and display 4 random dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img;
        imageElement.alt = "A cute dog";
        imgContainer.appendChild(imageElement);
      });
    });

  // Challenge 2: Load and display all dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breeds = Object.keys(data.message);
      renderBreeds(breeds);
    });

  // Challenge 4: Filter breeds by selected letter
  dropdown.addEventListener('change', (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = selectedLetter === 'all'
      ? breeds
      : breeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });

  // Function to render breed list with click color change
  function renderBreeds(breedArray) {
    breedList.innerHTML = ''; // Clear existing list
    breedArray.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      li.addEventListener('click', () => {
        li.style.color = 'blue'; // Change to any color
      });
      breedList.appendChild(li);
    });
  }
});

