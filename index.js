// Saber qnd o user clicou em algum botao
const buttons = document.querySelectorAll(".option"); // NodeList -> Array: [btn1, bt2,..., bt5]
// console.log(buttons);
const results = document.querySelector(".results");

const votes = {};

// Escopo

// {
//   fly: 4,
//   invisibility: 1,
//   speed: 1
// }

async function vote(superpowerClicked) {
  await fetch("https://68ba0e5f6aaf059a5b595cb7.mockapi.io/votes", {
    method: "POST",
    body: JSON.stringify({ superpower: superpowerClicked }),
    headers: { "content-type": "application/json" },
  });

  displayResults();
}

// for loop
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // console.log(button.value);
    const superpowerClicked = button.value;
    vote(superpowerClicked);
    // if (votes[superpower]) {
    //   votes[superpower] = votes[superpower] + 1;
    // } else {
    //   votes[superpower] = 1;
    // }

    // console.log(votes);

    // displayResults();
  });
});
// console.log(superpower);

async function displayResults() {
  const response = await fetch(
    "https://68ba0e5f6aaf059a5b595cb7.mockapi.io/votes",
    {
      method: "GET", // POST, DELETE, PUT
    }
  );
  // console.log(response);
  const allVotes = await response.json();
  console.log(allVotes);

  for (let i = 0; i < allVotes.length; i++) {
    const currentVote = allVotes[i];
    const option = currentVote.superpower;

    if (votes[option]) {
      votes[option] = votes[option] + 1;
    } else {
      votes[option] = 1;
    }
  }

  // template literals => "dsadsasda"
  results.innerHTML = `
    <h2>Resultado parcial</h2>
    <p>🦅 Voar: ${votes.fly || 0}</p>
    <p>👻 Invisibilidade: ${votes.invisibility || 0}</p>
    <p>💪 Super Força: ${votes.strength || 0}</p>
    <p>⚡ Velocidade do Flash: ${votes.speed || 0}</p>
    <p>🌱 Imortalidade: ${votes.immortality || 0}</p>
  `;
}

displayResults();
