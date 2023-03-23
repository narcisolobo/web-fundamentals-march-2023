// username is entered
// get username (value of the text input)
// when form is submitted make a get request to github api
// parse json response, cherry picked necessary info
// inject info into new card
// render card onto page

let username = '';
let usernameInput = document.querySelector('#username');
let cardContainer = document.querySelector('#card-container');

function getUsername(element) {
  username = element.value;
}

function getElement(id) {
  return document.getElementById(id);
}

function hide(id) {
  getElement(id).remove();
}

// request url: https://api.github.com/users/narcisolobo
// async/await

function createCoderCard(data) {
  let coderCard = `
<div class="card glass light" id="${data.id}">
  <div class="card-body">
    <div class="flex flex-start mb">
      <img
        src="${data.avatar_url}"
        alt="${data.login}"
        class="avatar" />
      <div class="flex-1">
        <h2 class="coder-name">${data.name}</h2>
        <a href="${data.html_url}" target="_blank">
          Github Profile</a
        >
      </div>
    </div>
    <p><strong>Location: </strong>${data.location}</p>
    <p><strong>Repositories: </strong>${data.public_repos}</p>
    <p><strong>Followers: </strong>${data.followers}</p>
  </div>
  <div class="card-footer flex flex-end">
    <button class="btn btn-danger" onclick="hide(${data.id})">DELETE</button>
  </div>
</div>
`;

  return coderCard;
}

async function requestAPI(event) {
  event.preventDefault();
  const response = await fetch(`https://api.github.com/users/${username}`);
  usernameInput.value = '';
  const data = await response.json();
  cardContainer.innerHTML += createCoderCard(data);
}
