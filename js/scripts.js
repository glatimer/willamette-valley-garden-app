
// business logic

function Produce (item, sunshine, spacing, seedDepth, germination, harvest) {
  this.item = item,
  this.sunshine = sunshine,
  this.spacing = spacing,
  this.seedDepth = seedDepth,
  this.germination = germination,
  this.harvest = harvest
};

// var basil = new Produce("Basil", "full-sunshine", "1 inch apart", "1/4 inch", "7-14 days", "24 days from seed");
//
// var beetroot = new Produce("Beetroot", "full-sunshine", "1 inch apart", "1/2 inch", "5-10 days", "65 days from seed");
//
// var cabbage = new Produce("Cabbage", "full-sunshine", "18 inches apart", "3/4 inch", "12-14 days", "58 days from seed");

var carrot = new Produce("Carrot", "full-sunshine", "2 inches apart", "1/4 carrot inches", "14-21 days", "55 days from seed");

// var eggplant = new Produce("Eggplant", "full-sunshine", "2.5 feet apart", "1/4  inches", "10-21 days", "90 days from seed");
//
// var lavender = new Produce("Lavender", "full-sunshine", "2 feet apart", "1/4  inches", "21-35 days", "57 days from seed");
//
// var peas = new Produce("Sugar Snap Peas", "full-sunshine", "2-3 inches", "1 inch", "7-10 days", "62 days from seed")
//
// var pepper = new Produce(Red Bell Pepper", "full-sunshine", "1 inch", "1/4 inch", "10-21 days", "74-76 days from transplant");
//
// var radish = new Produce(Radish", "full-sunshine", "1 inch", "1/2 inch", "5-7 days", "50-60 days from seed");
//
// var rosemary = new Produce("Rosemary", "full-sunshine", "2 inches", "5-10 days", "66 days from seed");

var tomato = new Produce("Tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed");

var gardenItems = [carrot, tomato];



Produce.prototype.information = function() {
    return "<li> <h2>" + this.item + "</h2> </li> <li>Sun Required: " + this.sunshine + "</li> <li>Spacing: " + this.spacing + "</li> <li>Seed Depth: " + this.seedDepth + "</li> <li>Germination: " + this.germination + "</li> <li>Harvest: " + this.harvest +"</li><br></div>";
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var dataHash = "#" + data

  event.target.appendChild(document.getElementById(data).cloneNode(true));

  for (var i=0; i < gardenItems.length; i++) {
    if (data === gardenItems[i].item) {
      console.log(gardenItems[i].item);
      $("#information").find(dataHash).remove();
      $("#information").append(gardenItems[i].information());
    }
  }
}

// user interface logic
$(document).ready(function() {
  $(".square").click(function() {
    $(this).empty();
  });
});
