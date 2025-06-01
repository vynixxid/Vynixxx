// Data untuk Trending Films
const trendingFilms = [
  {
    title: "Quantum Echo",
    description: "Petualangan AI di dunia kuantum.",
    thumbnail: "https://via.placeholder.com/400x225.png?text=Quantum+Echo"
  },
  {
    title: "Digital Pulse",
    description: "Thriller tentang AI yang mengendalikan kota.",
    thumbnail: "https://via.placeholder.com/400x225.png?text=Digital+Pulse"
  },
  {
    title: "Eternal Code",
    description: "Drama AI tentang keabadian digital.",
    thumbnail: "https://via.placeholder.com/400x225.png?text=Eternal+Code"
  }
];

// Data untuk Featured Films
const films = [
  {
    title: "AI Genesis",
    description: "Sebuah film AI tentang awal mula kesadaran mesin.",
    thumbnail: "https://via.placeholder.com/200x120.png?text=AI+Genesis",
    genre: "AI Technology"
  },
  {
    title: "Neon Mind",
    description: "Sebuah film AI bergenre thriller futuristik.",
    thumbnail: "https://via.placeholder.com/200x120.png?text=Neon+Mind",
    genre: "Thriller"
  },
  {
    title: "Synthetic Heart",
    description: "Drama emosional antara manusia dan AI.",
    thumbnail: "https://via.placeholder.com/200x120.png?text=Synthetic+Heart",
    genre: "Romance"
  },
  {
    title: "Cyber Dreams",
    description: "Petualangan futuristik di dunia AI dan cybernetics.",
    thumbnail: "https://via.placeholder.com/200x120.png?text=Cyber+Dreams",
    genre: "Fantasy"
  }
];

// Populate Trending Films
const trendingCarousel = document.getElementById("trendingCarousel");
trendingFilms.forEach(film => {
  const card = document.createElement("div");
  card.className = "trending-card";
  card.innerHTML = `
    <img src="${film.thumbnail}" alt="${film.title}" />
    <div class="card-content">
      <h3>${film.title}</h3>
      <p>${film.description}</p>
      <button class="btn-watch">Nonton</button>
    </div>
  `;
  card.addEventListener('click', () => alert(`Detail ${film.title}`));
  card.querySelector('.btn-watch').addEventListener('click', (e) => {
    e.stopPropagation();
    alert(`Menonton ${film.title}`);
  });
  trendingCarousel.appendChild(card);
});

// Populate Featured Films
const filmGrid = document.getElementById("filmGrid");
films.forEach(film => {
  const card = document.createElement("div");
  card.className = "film-card";
  card.innerHTML = `
    <img src="${film.thumbnail}" alt="${film.title}" />
    <div class="card-content">
      <h3>${film.title}</h3>
      <p>${film.description}</p>
    </div>
  `;
  card.addEventListener('click', () => alert(`Detail ${film.title}`));
  filmGrid.appendChild(card);
});

// Populate Genres
const genreList = document.getElementById("genreList");
const genres = ["Fantasy", "Action", "Comedy", "AI Technology", "Romance", "Thriller", "Drama"];
genres.forEach(genre => {
  const button = document.createElement("button");
  button.className = "genre-btn";
  button.textContent = genre;
  button.dataset.genre = genre;
  button.addEventListener('click', () => {
    alert(`Filtering by ${genre}`);
    filmGrid.innerHTML = '';
    const filteredFilms = films.filter(f => f.genre === genre);
    filteredFilms.forEach(film => {
      const card = document.createElement("div");
      card.className = "film-card";
      card.innerHTML = `
        <img src="${film.thumbnail}" alt="${film.title}" />
        <div class="card-content">
          <h3>${film.title}</h3>
          <p>${film.description}</p>
        </div>
      `;
      card.addEventListener('click', () => alert(`Detail ${film.title}`));
      filmGrid.appendChild(card);
    });
    document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
  genreList.appendChild(button);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
