// business logic
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

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text", event.target.id);
  var newData = data + ".information()"
  event.target.appendChild(document.getElementById(data));
  console.log(data.sunshine)
}











// user interface logic
$(document).ready(function() {


  // $("drag#tomato").click(function() {
  //   var newProduce = new Produce();
  // });
});
