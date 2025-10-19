/*
</>

This was build by Richard liu, this is for app lab code in browser

You can use this code in your website
*/

//UI Control
function getText(elementId) {
  return (
    document.getElementById(elementId).value ||
    document.getElementById(elementId).innerHTML
  );
}

function setImageUrl(ImageId, TargetImageURL) {
  document.getElementById(ImageId).src = TargetImageURL;
}

function getNumber(id) {
  return parseFloat(document.getElementById(id).value);
}

function setNumber(id, Number) {
  if (!isNaN(Number)) {
    if (document.getElementById(id).value == undefined) {
      document.getElementById(id).innerHTML = Number;
    } else {
      document.getElementById(id).value = Number;
    }
  } else {
    if (document.getElementById(id).value == undefined) {
      document.getElementById(id).innerHTML = NaN;
    } else {
      document.getElementById(id).value = NaN;
    }
  }
}

function getImageUrl(ImageId) {
  return document.getElementById(ImageId).src;
}

function setStyle(ID, CSS) {
  document.getElementByID(ID).style = CSS;
}

function setText(elementId, text) {
  var element = document.getElementById(elementId);
  if (element.value !== undefined) {
    element.value = text;
  } else {
    element.innerHTML = text;
  }
}

function onEvent(id, status, callback) {
  var elementForID = document.getElementById(id);
  if (elementForID) {
    elementForID.addEventListener(status, callback);
  } else {
    console.error("Element with ID " + id + " not found.");
  }
}

function open(URLForOpen) {
  window.open(URLForOpen);
}

//MATH
function RandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(0);
}

//list
function appendItems(list,item){
  list.push(item)
}
