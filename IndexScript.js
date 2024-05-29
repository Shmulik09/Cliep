const CitySlots = [];
const divs = [];

// Creates 50 div elements and adds them to the FullMap container
for (var i = 0; i < 50; i++) {
  CitySlots.push("Slot" + i);
  const div = document.createElement('div');
  div.classList.add('Slot' + i);
  div.classList.add('BuildingSlots');
  div.classList.add('BuildingSlotsHover');
  divs.push(div);
  div.innerHTML = "Open Site";
  div.style.border = "1px solid black";
  document.getElementsByClassName("FullMap")[0].appendChild(div);
}

// Creates shortcut to access BuildingSlots divs
const JSSlotsDivs = document.getElementsByClassName("BuildingSlots");

for (let j = 0; j < JSSlotsDivs.length; j++) {
  JSSlotsDivs[j].addEventListener("click", function() {
    // Check if the clicked div is already marked
    if (this.classList.contains("Marked")) {
      // If already marked, unmark it
      this.classList.remove('Marked');
    } else {
      // If not marked, unmark any previously marked div
      for (let k = 0; k < JSSlotsDivs.length; k++) {
        if (JSSlotsDivs[k].classList.contains("Marked")) {
          JSSlotsDivs[k].classList.remove('Marked');
        }
      }
      // Mark the newly clicked div
      this.classList.add('Marked');
      this.classList.remove('BuildingSlotsHover');
    }
  });
}

// End of the building slots code


// Start of the top bars code

// Left bar code
// Will include animations and menu button

