const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const videoCards = document.querySelectorAll('.video-card');
searchInput.addEventListener('input', () => searchButton.click());

searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  videoCards.forEach(card => {
    const title = card.querySelector('h2').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
