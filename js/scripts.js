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

var carrot = new Produce("carrot", "Carrot", "carrot-sunshine", "carrot feet apart", "1/4 carrot inches", "7-14 carrot", "80 carrot from seed")

var tomato = new Produce("tomato", "Tomato", "full-sunshine", "3 feet apart", "1/4 inch", "7-14 days", "80 days from seed")

var basil = new Produce("basil", "Basil", "full-sunshine", "2 inches apart", "1/4 inch", "5-10 days", "60 days from seed")

var beetroot = new Produce ("betroot", "Beetroot", "part-sunshine", "12 inches apart", "1/2 inch", "10-14 days", "90 days from seed")

var cabbage = new Produce ("cabbage", "Cabbage", "light-shade-sunshine", "18 inches apart", "1/2 inch", "10-14 days", "90-100 days from seed")

var dill = new Produce ("dill", "Dill", "shade", "12 inches apart", "1/2 inch", "7-10 days", "90 days from seed")

var eggplant = new Produce ("eggplant", "Eggplant", "full-sunshine", "12 inches apart", "1/2 inch", "7-14 days", "120 days from seed")

var lavender = new Produce ("lavender", "Lavender", "indoor-light sunshine", "1 inch apart", "1/4 inch", "18-28 days", "90- 100 days from seed")

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
  $("#div1").empty();
  // event.target.appendChild(document.getElementById(data));


  event.target.appendChild(document.getElementById(data).cloneNode(true));


  if (data === "tomato") {
    // first delete tomato if it's there.
    $("#information").find("#tomato").remove();
    console.log(tomato.information())
    $("#information").append(tomato.information());
  }
  else if (data === "carrot") {
    $("#information").find("#carrot").remove();
    console.log(carrot.information())
    $("#information").append(carrot.information());
  }
  else {
    console.console.log("fail");
  }
}



// user interface logic
$(document).ready(function() {
  $(".square").click(function() {
    $(this).empty();
    console.log("test");
  });
});
