const neverthelesse = document.querySelector("h2");

const newname = "neverthelesse";
let index = 1;
console.log(index);
neverthelesse.textContent = newname.slice(0, index);

setInterval(() => {
  neverthelesse.textContent = newname.slice(0, index);
  if (index < 9) {
    index++;
    console.log(index);
  } else {
    index = 1;
  }
}, 500);
