const fetchImages = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await response.json();
  const images = data.slice(0, 10);
  
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  
  images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.title;
    
    const title = document.createElement('p');
    title.textContent = image.title;
    
    const figure = document.createElement('figure');
    figure.appendChild(img);
    figure.appendChild(title);
    gallery.appendChild(figure);
  });
  
  document.body.appendChild(gallery);
};

fetchImages();