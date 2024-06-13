const CitySlots = [];
let IsPuased = false;
let PopulationFromNewBuildings;
let JSPopulationNumber = parseInt(document.getElementById("PopulationNumber").innerHTML) || 0;
let JSMoneyNumber = parseInt(document.getElementById("MoneyNumber").innerHTML) || 0;
var MoneyLength = document.getElementById("MoneyNumber").innerHTML.length;
const JSBuildingsBar =  document.getElementsByClassName('BuildingsBar');


addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode == 32) {
    if (!IsPuased) {
      document.getElementById("BodyId").style.background = color =
        "rgba(218, 67, 30, 0.719)";
      IsPuased = true;
      document.getElementById('BTitle').style.textShadow = "1px 2px green";
    } else {
      document.getElementById("BodyId").style.backgroundColor = "#97BE5A";
      IsPuased = false;
      document.getElementById('BTitle').style.textShadow = "1px 1px red";
    }
  }
});

// Creates 50 div elements and adds them to the FullMap container
for (var i = 0; i < 50; i++) {
  CitySlots.push("Slot" + i);
  const div = document.createElement("div");
  div.classList.add("Slot" + i);
  div.classList.add("CitySlots");
  div.classList.add("CitySlotsHover");
  div.innerHTML = "Open Site";
  div.style.border = "1px solid black";
  document.getElementsByClassName("FullMap")[0].appendChild(div);
}

// Creates shortcut to access CitySlots divs
const JSSlotsDivs = document.getElementsByClassName("CitySlots");

for (let j = 0; j < JSSlotsDivs.length; j++) {
  JSSlotsDivs[j].addEventListener("click", function () {
    // Check if the clicked div is already marked
    if (this.classList.contains("Marked")) {
      // If already marked, unmark it
      this.classList.remove("Marked");
    } else {
      // If not marked, unmark any previously marked div
      for (let k = 0; k < JSSlotsDivs.length; k++) {
        if (JSSlotsDivs[k].classList.contains("Marked")) {
          JSSlotsDivs[k].classList.remove("Marked");
        }
      }
      // Mark the newly clicked div
      this.classList.add("Marked");
      this.classList.remove("CitySlotsHover");
      
      if (!IsPuased) {
        PopulationFromNewBuildings = Math.floor(Math.random() * 10);
        JSPopulationNumber += PopulationFromNewBuildings;
        document.getElementById("PopulationNumber").innerHTML =
          JSPopulationNumber;
      }
    }
  });
}

setInterval(function() {
  if (JSPopulationNumber > 0 && !IsPuased) {
    let MoneyFromTaxes = JSPopulationNumber * 2;
    console.log(MoneyFromTaxes);
    MoneyFromTaxes = Math.floor(Math.random() * MoneyFromTaxes);
    JSMoneyNumber += MoneyFromTaxes;
    document.getElementById("MoneyNumber").innerHTML = JSMoneyNumber;
    if (document.getElementById("MoneyNumber").innerHTML.length > MoneyLength)
      {
        MoneyLength = document.getElementById("MoneyNumber").innerHTML.length;
        document.getElementsByClassName('InfoBar').style.width = document.getElementsByClassName('InfoBar').style.width + 5;
      }
  }
}, 300);
// End of the building slots code

// Start of the top bars code







// Left bar code
// Will include animations and menu button
