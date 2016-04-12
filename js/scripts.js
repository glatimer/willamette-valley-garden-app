// business logic


function Produce (item, sunshine, spacing, seedDepth, germination, harvest) {
  this.item = item,
  this.sunshine = sunshine,
  this.spacing = spacing,
  this.seedDepth = seedDepth,
  this.germination = germination,
  this.harvest = harvest
};

var carrot = new Produce("<li>Name: carrot</li>", "<li>Sun required: carrot-sunshine</li>", "<li>Spacing: carrot feet apart</li>", "<li>Seed Depth: 1/4 carrot inches</li>", "<li>Germination: 7-14 carrot</li>", "<li>Harvest: 80 carrot from seed</li><br>")
var tomato = new Produce("<li>Name: tomato</li>", "<li>Sun required: full-sunshine</li>", "<li>Spacing: 3 feet apart</li>", "<li>Seed Depth: 1/4 inch</li>", "<li>Germination: 7-14 days</li>", "<li>Harvest: 80 days from seed</li><br>")



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
  var data = event.dataTransfer.getData("text");
  $("#div1").empty();
  // event.target.appendChild(document.getElementById(data));


  event.target.appendChild(document.getElementById(data).cloneNode(true));



  if (data === "tomato") {
    console.log(tomato.information())
    $("#information").append(tomato.information());
  }
  else if (data === "carrot") {
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
