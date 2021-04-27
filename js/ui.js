// Student ID: 134455203
// Email: jdsouza20@myseneca.ca
// Student: Jordan D'Souza

function updateTitle(text) {
  const title = document.querySelector("#observation-title > span");
  title.innerText = text;
}

function clearAllCards() {
  const cards = document.querySelector("#observation-cards");
  cards.innerHTML = "";
}

function addCard(card) {
  const cards = document.querySelector("#observation-cards");
  cards.appendChild(card);
}

function createAnchor(href, innerContent) {
  const a = document.createElement("a");
  a.href = href;
  a.innerText = innerContent;
  return a;
}

function cardImg(url) {
  url = url.replace('square', 'medium');
  const div = document.createElement("div");
  div.className = "card-img";
  div.style = `background-image: url(${url})`;

  return div;
}

function cardBody(name, date, uri, wikipediaUrl,) {
  const body = document.createElement("div");
  body.className="card-body";

  const nameAnchor = createAnchor(wikipediaUrl, name);
  const h3 = document.createElement("h3");
  h3.appendChild(nameAnchor);
  body.appendChild(h3);

  const dateAnchor = createAnchor(uri, date.toLocaleDateString());
  const h4 = document.createElement("h4");
  h4.appendChild(dateAnchor);
  body.appendChild(h4);

  return body;
}

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  const icons = document.createElement("div");
  icons.className = "card-icons";

  function cardIcon(classes, title) {
    const icon = document.createElement("i");
    icon.className = classes;
    icon.title = title
    return icon;
  }

  if(isNative) {
    icons.appendChild(cardIcon("fas fa-leaf", "Native"));
  }

  if(isIntroduced) {
    icons.appendChild(cardIcon("fas fa-frog", "Introduced"));
  }

  if(isThreatened) {
    icons.appendChild(cardIcon("fas fa-radiation-alt", "Threatened"));
  }

  if(isEndangered) {
    icons.appendChild(cardIcon("fas fa-skull-crossbones", "Endangered"));
  }

  return icons;
}

function buildCardForObservation(observation) {
  const {
    id, name, photoUrl, date, uri, wikipediaUrl, isNative, isEndangered, isIntroduced, isThreatened
  } = observation;

  const card = document.createElement("div");
  card.className = "card";
  card.id = id;

  card.appendChild(cardImg(photoUrl));
  card.appendChild(cardBody(name, date, uri, wikipediaUrl));
  card.appendChild(cardIcons(isNative, isIntroduced, isThreatened, isEndangered));

  return card;
}

function toggleLoading(isLoading) {
  let icon = document.querySelector("#searchButton > i");
  let loadText = document.querySelector("#searchButton > span");
  let sButton = document.querySelector("#searchButton");

  if (isLoading) {
    icon.className = "fas fa-hourglass-half";
    loadText.innerText = "";
    text = document.createTextNode(" Loading...");
    loadText.appendChild(text);
    console.log(loadText, "Loading applied");
    sButton.disabled = true;
  }
  else {
    icon.className = "fas fa-search";
    loadText.innerText = "";
    text = document.createTextNode(" Search");
    loadText.appendChild(text);
    sButton.disabled = false;
  }
}
