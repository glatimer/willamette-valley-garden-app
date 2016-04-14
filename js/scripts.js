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

var parsley = new Produce("parsley", "Parsley", "sun or partial shade", "1-2 inches", "1/4 inch", "18-21 days", "sparingly once plant has 8 to 10 leaves")

var peas = new Produce("peas", "Sugar Snap Peas", "full-sunshine", "2-3 inches", "1 inch", "7-10 days", "62 days from seed")

var pepper = new Produce("pepper", "Red Bell Pepper", "full-sunshine", "1 inch", "1/4 inch", "10-21 days", "74-76 days from transplant")

var radish = new Produce("radish", "Radish", "full-sunshine", "1 inch", "1/2 inch", "5-7 days", "50-60 days from seed")

var rosemary = new Produce("rosemary", "Rosemary", "full-sunshine", "2 inches", "5-10 days", "66 days from seed")

var thyme = new Produce("thyme", "Thyme", "full-sunshine", "1 inch", "1/4 inch", "14-28 days", "85 days from seed")



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
  //$("#div1").empty();
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
