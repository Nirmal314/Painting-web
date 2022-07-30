const img = ["home1", "home2", "home3", "home4", "home5", "home6"];

var i = 0;

function change() {
  document.getElementById(img[i]).style.display = "flex";
  for (let j = 0; j < img.length; j++) {
    if (i != j) {
      document.getElementById(img[j]).style.display = "none";
    }
  }
  i = (i + 1) % img.length;
}

setInterval(() => {
  change();
}, 4000);
