const peopleList = document.getElementById("container");
async function main() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();

  for (let i = 0; i < data.users.length; i++) {
    const box = document.createElement("div");
    box.classList.add("item");

    box.innerHTML = `<img class="suret" src="${data.users[i].image}"/>
    <div class="column">
     <span>${data.users[i].firstName} ${data.users[i].lastName}</span>
     <span>${data.users[i].email}</span>
     </div>`;
    peopleList.appendChild(box);
  }
}

main();
