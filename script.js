function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



var namesHTML = "";
var numberOfNames = names.features.length;
for (var index = 0; index < numberOfNames; index++) {
  namesHTML += '<a href="#">' + names.features[index].properties.Text + '</a><br><hr>';
  document.getElementById("sideNames").innerHTML = namesHTML;
}





// to be tested
//namesHTML += '<a href="#" id="' +names.features[index].properties.Text +'">' + names.features[index].properties.Text + '</a><br><hr>';