var JSTopButtons = document.getElementsByClassName("TopButtons"); // Defiens TopButtons JS variable, it refers to the buutons in the top of the screen

for (var i = 0; i < JSTopButtons.length; i++) {
  JSTopButtons[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "#B0EBB4";
  });

  JSTopButtons[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "#ACE1AF";
    this.style.color = "black";
  });
}
