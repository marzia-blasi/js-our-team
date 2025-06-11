const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// recuper elemento dall'html
const cardEl = document.getElementById("containercard");

// variabile in cui vengono salvate le card complete
let members = "";

// loop for per separare i singoli oggetti
for (let i = 0; i < teamMembers.length; i++) {
  member = teamMembers[i];
  console.log(member);

  // estrapolare le chiavi che ci servono da inserire nel markup
  const { name, role, email, img } = member;
  console.log(name, role, email, img);

  // creare il pezzo di markkup con il template literal
  const memberMarkup = `<div class="card" style="width: 18rem">
  <img src=${img} class="card-img-start" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${email}</li>
  </ul>
 </div>`;

  members += memberMarkup;
}

// elementi aggiunti all'html
cardEl.innerHTML = members;
