

const colori = document.getElementsByClassName('essai');
for (let i = 0; i < colori.length; i++) {
    const hello1 = () => colori[i].style.color = 'grey'
    const bye1 = () => colori[i].style.color = 'black'
    colori[i].addEventListener("mouseover", hello1);
    colori[i].addEventListener("mouseout", bye1);
}

