const opac = document.getElementsByClassName('bulle');
for (let i = 0; i < opac.length; i++) {
    const debut = () => opac[i].style.opacity = "0.5";
    const fin = () => opac[i].style.opacity = "1" ;
    opac[i].addEventListener("mouseover", debut);
    opac[i].addEventListener("mouseout", fin);
}