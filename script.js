function toggleButton(btnId) {
  var btn = document.getElementById(btnId);
  var svg = btn.querySelector('svg');

  if (svg.style.color === "red") {
      svg.style.color = "grey";
  } else {
      svg.style.color = "red";
  }
}

document.getElementById('btnh1').addEventListener('click', function () {
  toggleButton('btnh1');
});

document.getElementById('btnh2').addEventListener('click', function () {
  toggleButton('btnh2');
});

document.getElementById('btnh3').addEventListener('click', function () {
  toggleButton('btnh3');
});

document.getElementById('btnh4').addEventListener('click', function () {
  toggleButton('btnh4');
});

document.getElementById('btnh5').addEventListener('click', function () {
  toggleButton('btnh5');
});


var newSaveBtn1 = document.getElementById('newSaveBtn1');
var newSaveBtn2 = document.getElementById('newSaveBtn2');
var newSaveBtn3 = document.getElementById('newSaveBtn3');
var newSaveBtn4 = document.getElementById('newSaveBtn4');
var newSaveBtn5 = document.getElementById('newSaveBtn5');

var isBtnClicked1 = false;
var isBtnClicked2 = false;
var isBtnClicked3 = false;
var isBtnClicked4 = false;
var isBtnClicked5 = false;

function NewSaveButtonClick(slideNumber) {
  var svg;

  switch (slideNumber) {
    case 1:
      svg = newSaveBtn1.querySelector('svg');
      break;
    case 2:
      svg = newSaveBtn2.querySelector('svg');
      break;
    case 3:
      svg = newSaveBtn3.querySelector('svg');
      break;
    case 4:
      svg = newSaveBtn4.querySelector('svg');
      break;
    case 5:
      svg = newSaveBtn5.querySelector('svg');
      break;
    default:
      break;
  }

  if (svg) {
    if (isBtnClicked1 && slideNumber === 1) {
      svg.style.fill = "transparent";
    } else if (isBtnClicked2 && slideNumber === 2) {
      svg.style.fill = "transparent";
    } else if (isBtnClicked3 && slideNumber === 3) {
      svg.style.fill = "transparent";
    } else if (isBtnClicked4 && slideNumber === 4) {
      svg.style.fill = "transparent";
    } else if (isBtnClicked5 && slideNumber === 5) {
      svg.style.fill = "transparent";
    } else {
      svg.style.fill = "blue";
    }

    switch (slideNumber) {
      case 1:
        isBtnClicked1 = !isBtnClicked1;
        break;
      case 2:
        isBtnClicked2 = !isBtnClicked2;
        break;
      case 3:
        isBtnClicked3 = !isBtnClicked3;
        break;
      case 4:
        isBtnClicked4 = !isBtnClicked4;
        break;
      case 5:
        isBtnClicked5 = !isBtnClicked5;
        break;
      default:
        break;
    }
  }
}

