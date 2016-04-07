// business logic
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

var tomato = new Produce("tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed")

Produce.prototype.information = function() {
  return this.item + " " + this.sunshine + " " + this.spacing + " " + this.seedDepth + " " + this.germination + " " + this.harvest;
}

// user interface logic
$(document).ready(function() {
  $("drag#tomato").click(function() {
    var newProduce = new Produce();
  });
});
