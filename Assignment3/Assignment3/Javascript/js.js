
var clicks1 = 0;
var clicks2 = 0;
var clicks3 = 0;
var clicks4 = 0;
var clicks5 = 0;

function car1() {
    
    var elem= document.getElementById("img1");
    var elem2= document.getElementById("p1");
    document.getElementById("displayframe").src = elem.src;
    document.getElementById("p6").innerHTML = elem2.innerText;
    document.getElementById("p7").textContent=++clicks1;
  }
  function car2() {
    var elem= document.getElementById("img2");
    var elem2= document.getElementById("p2");
    document.getElementById("displayframe").src = elem.src;
    document.getElementById("p6").innerHTML = elem2.innerText;
    document.getElementById("p7").textContent=++clicks2;
  }
  function car3() {
    var elem= document.getElementById("img3");
    var elem2= document.getElementById("p3");
    document.getElementById("displayframe").src = elem.src;
    document.getElementById("p6").innerHTML = elem2.innerText;
    document.getElementById("p7").textContent=++clicks3;
  }
  function car4() {
    var elem= document.getElementById("img4");
    var elem2= document.getElementById("p4");
    document.getElementById("displayframe").src = elem.src;
    document.getElementById("p6").innerHTML = elem2.innerText;
    document.getElementById("p7").textContent=++clicks4;
  }
  function car5() {
    var elem= document.getElementById("img5");
    var elem2= document.getElementById("p5");
    document.getElementById("displayframe").src = elem.src;
    document.getElementById("p6").innerHTML = elem2.innerText;
    document.getElementById("p7").textContent=++clicks5;
  }