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

var carrot = new Produce("carrot", "carrot", "carrot-sunshine", "carrot feet apart", "1/4 carrot inches", "7-14 carrot", "80 carrot from seed")

var tomato = new Produce("tomato", "tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed")

var basil = new Produce("Basil", "Basil", "Basil", "Basil", "Basil", "Basil", "Basil")

var gardenItems = [carrot, tomato, basil]


Produce.prototype.information = function() {
  return "<div id='" + this.divid + "'> <li>Name: " +this.item + "</li> <li>Sun required: " + this.sunshine + "</li> <li>Spacing: " + this.spacing + "</li> <li>Seed Depth: " + this.seedDepth + "</li> <li>Germination: " + this.germination + "</li> <li>Harvest: " + this.harvest +"</li><br></div>";
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
