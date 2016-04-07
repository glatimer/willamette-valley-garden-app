function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function Produce (item, sunshine, spacing, seedDepth, germination, harvest) {
  this.item = item,
  this.sunshine = sunshine,
  this.spacing = spacing,
  this.seedDepth = seedDepth,
  this.germination = germination,
  this.harvest = harvest
};

var tomato = new Produce("<li>Name: tomato</li>", "<li>Sun required: full-sunshine</li>", "<li>Spacing: 3 feet apart</li>", "<li>Seed Depth: 1/4 inch</li>", "<li>Germination: 7-14 days</li>", "<li>Harvest: 80 days from seed</li><br>")

Produce.prototype.information = function() {
  return this.item + " " + this.sunshine + " " + this.spacing + " " + this.seedDepth + " " + this.germination + " " + this.harvest;
}

// user interface logic
$(document).ready(function() {
  $("#tomato h1").click(function() {
    $("#information").append(tomato.information());
  });
});
