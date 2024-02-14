var a = document.getElementById("sa");
var b;
var c;
a.textContent = "naberss";
a.style.color = "White";
document.body.style.backgroundColor = "Black";
document.title = "saas";
for (i = 1; i < 5; i++) {
  c = document.getElementById("th" + i);
  if (c != null) {
    console.log("th" + i);
    if (i % 2 == 1) {
      c.textContent = "sa" + " " + new Date().getFullYear();
    } else {
      c.textContent = "as" + " " + new Date().getFullYear();
    }
  }
  for (j = 1; j < 5; j++) {
    b = document.getElementById("td" + i + j);
    if (b != null) {
      console.log("td" + i + j);

      if ((i + j) % 2 == 1) {
        b.textContent = "as" + i + j;
      } else {
        b.textContent = "sa" + i + j;
      }
    }
  }
}
