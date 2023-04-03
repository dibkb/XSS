const form = document.querySelector("form");
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const preview = document.createElement("div");
  console.log(this.elements[0].value);
  preview.innerHTML = this.elements[0].value;
  this.append(preview);
});
