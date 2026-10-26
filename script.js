const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "Coffee, coffee, coffee.",
    "Oy with the poodles already.",
    "Babette Ate Oatmeal.",
    "Life's short. Talk fast.",
    "I smell snow.",
    "I need coffee in an IV",
    "No, it's National Baptism Day. Tie your tubes, idiot!",
    "People are particularly stupid today, I can't talk to any more of them"
  ];
   

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);


    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});

