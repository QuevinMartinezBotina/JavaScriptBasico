const API_URL = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();
const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map(user => `<li>${user.name}  📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });

/* function onRequestHandler() {

    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');

        const tpl = data.map((user) => `<li>${user.name}  📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul> ${tpl}</ul>`;
    } else {
        console.log(`Error ${API_URL}`);

    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send(); */

