/*DEPLOYER TEXTE*/


const content = document.getElementById("content");
const button = document.getElementById("show-more");

button.onclick = function() {
  if(content.className == "open") {
      /*deroule la boîte*/
    content.className == "";
    button.innerHTML = "Show More";
  } else {
      /*retour initial*/
    content.className = "open";
    button.innerHTML ="Show Less";
  }
};





  





/*SWITCHER IMAGE*/



    function setNewImage() {
        document.getElementById("img1").src = "images/balirizieres.jpg";

    }

    function setOldImage() {

        document.getElementById("img1").src = "images/balirizieres2.jpg";
    }





    /*CHANGE AUTO IMAGE*/


window.onload= defilImg
current_img = 0;
arrImg = ['images/change1.jpg','images/change2.jpg','images/change3.jpg', 'images/change4.jpg']
 
 
function defilImg(){
  if(current_img == arrImg.length)
  current_img = 0;
  document.getElementById('carte').src = arrImg[current_img++]; //la source de la balise img change toute les 1300mms
  window.setTimeout('defilImg()',1300);
}



/*DEPLACER TITRE DE HAUT EN BAS*/


const titre = document.getElementById("deplaceh1");

titre.style.position = "relative";
let pos = 0;
let dir = 1;

    function deplace() {
        if(pos == 300) { dir = -1}
        else if (pos == -200) {dir = 1}
        pos += 2 * dir;
        titre.style.top = `${pos}px`;
        requestAnimationFrame(deplace);

    }

    requestAnimationFrame(deplace);