const search = document.querySelector(".search");
const gallery = document.querySelector(".gallery");

search.addEventListener("keydown", (event) => {
  if (event.key === "Enter")
    if (search.value !== "") request(search.value).catch(console.log);
});

const request = async (search) => {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?per_page=9&query=${search}&client_id=eqi_ARM_9spxMeebax0Rn6mx6GniEUEErfQMiKTsI_E`
  );
  if (!response.ok) {
    alert(response.status);
  }
  let json = await response.json();
  gallery.innerHTML = "";
  for (let element of json.results) {
    console.log(element.urls.regular);
    addElement(element.urls.regular);
  }
};

const addElement = (src) => {
  let image = document.createElement("div");
  image.classList.add("gallery__img");
  image.style.backgroundImage = `url(${src})`;
  console.log(image);
  gallery.append(image);
};
