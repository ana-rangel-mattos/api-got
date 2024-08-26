const characterId = document.querySelector("#character-id");
const btnSearch= document.querySelector(".btn-submit");
const charTitle = document.querySelector(".character-title");
const charName = document.querySelector(".character-name");
const charPic = document.querySelector(".character-img");
const charFamily = document.querySelector(".character-family");

const fetchApi = (value) => {
  const result = fetch(`https://thronesapi.com/api/v2/Characters/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  
  return result;
}

btnSearch.addEventListener("click", async function(event) {
  event.preventDefault();
  const result = await fetchApi(characterId.value);
  const card = document.querySelector(".card");
  
  card.classList.remove("hidden");
  charName.textContent = result.fullName;
  charTitle.textContent = result.title;
  charPic.setAttribute("src", result.imageUrl)
  charFamily.textContent = result.family
})