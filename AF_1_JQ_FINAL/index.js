

// ADD MATERIAL IN SIDEBAR.
var dataCount = 2;
function handleMaterialForm(event) {

  var materialName = document.getElementById("material-name");
  var materialDescription = document.getElementById("message-text");
  count++;
  dataCount++;

  console.log(materialName.value, materialDescription.value);

  $(
    `<button class="listItem" style='padding:10px;' onclick=getMaterialData(this)><li><p>${materialName.value.toUpperCase()}<span><i class='float-end mt-3 fa-solid fa-angle-right forward'></i> </span><br>${materialDescription.value.toUpperCase()}</p></li></button>`
  )
    .attr(`id`, `listMaterial${dataCount}`)
    .appendTo("#listButtons");

  data.push({
    "id": `listMaterial${dataCount}`,
    "details": {
      "matName": materialName.value.toUpperCase(),
      "matDescription": materialDescription.value.toUpperCase(),
      "matId": "1201-PHEONIX",
      "dateFrom": "NOV-22-2020",
      "dateTo": "NOV-30-2020",
      "status": "READY - PRODUCTION",
      "quantity": "5EC USED",
      "card1": {
        "cardName": "CO89",
        "cardDescription": "Wheel-Material",
        "quantity": "5 EA",
        "quantityDescription": "5KT02",
      },
    },
  },);

  console.log(data);


  materialName.value = "";
  materialDescription.value = "";

 //Make buttons active
var listButtons = document.getElementById("listButtons");
var btns = listButtons.getElementsByClassName("listItem");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var currentActive = document.getElementsByClassName("active");
    console.log(currentActive);
    currentActive[0].className = currentActive[0].className.replace(
      "active",
      ""
    );
    this.className += " active";
  });
}

  event.preventDefault();
}

console.log(data);



updated_data = data.slice(1);
count = 0;
updated_data.map((material) => {
  count++;
  $(
    `<button class="listItem" style='padding:10px;' onclick=getMaterialData(this)><li><p>${material.details.matName}<span><i class='float-end mt-3 fa-solid fa-angle-right forward'></i> </span><br>${material.details.matDescription}</p></li></button>`
  )
    .attr(`id`, `listMaterial${count}`)
    .appendTo("#listButtons");
});

function getMaterialData(element) {
  var cardList = document.querySelectorAll(".materialCardClass");
  for (let i=1;i<cardList.length;i++){
    cardList[i].remove();
  }
  data.map((material) => {
    if (element.id == material.id) {
      var matName = document.getElementById("matName");
      var matDescription = document.getElementById("matDescription");
      var matID = document.getElementById("matId");
      var matDate = document.getElementById("matDate");
      var matStatus = document.getElementById("matStatus");
      var matQuantity = document.getElementById("quantity");
      var cardMatName = document.getElementById("cardMatName");
      var cardMatDesc = document.getElementById("cardMatDescription");
      var cardMatquan = document.getElementById("cardMatQuantity");
      var cardMatQuanDesc = document.getElementById("cardMatQuantDescription");

      matName.innerText = material.details.matName;
      matDescription.innerText = material.details.matDescription;
      matID.innerText = material.details.matId;
      matDate.innerText = `${material.details.dateFrom} TO ${material.details.dateTo}`;
      matStatus.innerText = material.details.status;
      matQuantity.innerText = `QUANTITY - ${material.details.quantity}`;
      cardMatName.innerText = material.details.card1.cardName;
      cardMatDesc.innerText = material.details.card1.cardDescription;
      cardMatquan.innerText = material.details.card1.quantity;
      cardMatQuanDesc.innerText = material.details.card1.quantityDescription  ;
    }
  });
}

//Make buttons active
var listButtons = document.getElementById("listButtons");
var btns = listButtons.getElementsByClassName("listItem");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var currentActive = document.getElementsByClassName("active");
    console.log(currentActive);
    currentActive[0].className = currentActive[0].className.replace(
      "active",
      ""
    );
    this.className += " active";
  });
}


// ADD MATERIAL CLONE
var count = 0;
var materialCard = $("#material-card");
console.log(materialCard)
function addMaterial() {
  count++;
  materialCard
    .clone()
    .attr("id", `material-card-${count}`)
    .appendTo("#top-card");
}

// REMOVE MATERIAL CLONE
function removeMaterial(element) {
  var cardList = document.querySelectorAll(".materialCardClass");
if(cardList.length === 1){
  alert("OOPS! Can't able to remove material");
}
else{
  var id = element.parentNode.parentNode.id;
  console.log(`Element ${id} is deleted.`);
  $("#" + id).remove();
}

}