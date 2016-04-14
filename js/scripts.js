
// business logic

function Produce (divid, item, sunshine, spacing, seedDepth, germination, harvest) {
  this.divid = divid,
  this.item = item,
  this.sunshine = sunshine,
  this.spacing = spacing,
  this.seedDepth = seedDepth,
  this.germination = germination,
  this.harvest = harvest
};

var carrot = new Produce("carrot", "Carrot", "carrot-sunshine", "carrot feet apart", "1/4 carrot inches", "7-14 carrot", "80 carrot from seed");

var basil = new Produce("tomato", "Tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed");

var tomato = new Produce("tomato", "Tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed");

var peas = new Produce("peas", "Sugar Snap Peas", "full-sunshine", "2-3 inches", "1 inch", "7-10 days", "62 days from seed");

var pepper = new Produce("pepper", "Red Bell Pepper", "full-sunshine", "1 inch", "1/4 inch", "10-21 days", "74-76 days from transplant");

var radish = new Produce("radish", "Radish", "full-sunshine", "1 inch", "1/2 inch", "5-7 days", "50-60 days from seed");

var rosemary = new Produce("rosemary", "Rosemary", "full-sunshine", "2 inches", "5-10 days", "66 days from seed");

var thyme = new Produce("thyme", "Thyme", "full-sunshine", "1 inch", "1/4 inch", "14-28 days", "85 days from seed");

var gardenItems = [carrot, tomato];



Produce.prototype.information = function() {
  return "<div id='" + this.divid + "'> <li><h2>" +this.item + "</h2></li> <li>Sun required: " + this.sunshine + "</li> <li>Spacing: " + this.spacing + "</li> <li>Seed Depth: " + this.seedDepth + "</li> <li>Germination: " + this.germination + "</li> <li>Harvest: " + this.harvest +"</li><br></div>";
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
