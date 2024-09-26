const li = document.querySelectorAll("li");

function remove() {
  li.forEach((r) => {
    r.classList.remove("active");
  });
}

li.forEach((r) => {
  if (r.textContent == "Home") {
    r.classList.add("active");
  }
  r.onclick = () => {
    remove();
    r.classList.add("active");
  };
});
