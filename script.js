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

// funzione per ottenere il singolo oggetto
function teamMember(Arrayobject) {
  for (let i = 0; i < Arrayobject.length; i++) {
    const member = Arrayobject[i];

    return member;
    //
  }
}
//console.log(member);

// console.log(teamMember(teamMembers));
let member = "";
for (let i = 0; i < teamMembers.length; i++) {
  member = teamMembers[i];
  console.log(member);

  // estrapolare le chiavi che ci servono da inserire nel markup
  const { name, role, email, img } = member;
  console.log(name, role, email, img);
  // creare il pezzo di markkup con il template literal

  console.log(img);

  const memberMarkup = `<div class="card" style="width: 18rem">
  <img src=${img} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${email}</li>
  </ul>
</div>`;

  document.getElementById("containercard").innerHTML = memberMarkup;
}
