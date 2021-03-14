//on sélectionne tous les h4 des parties de l'accordion
let titles = document.querySelectorAll(".accordion-part h4")

//on boucle sur chaque h4
for(title of titles){
    title.addEventListener("click", function(event){
        let bloc = this.parentElement //on récupère le bloc parent du h4, donc div.accordion-part
        //si cette div contient la classe acc-open, le clic ne doit servir à rien
        //on vérifie que la div ne la contient pas
        if(!bloc.classList.contains("acc-open")){
            //on sélectionne la div avec la classe acc-open et on la lui supprime
            document.querySelector(".acc-open").classList.remove("acc-open")
            //on ajoute la classe acc-open au bloc contenant le h4 visé par le clic
            bloc.classList.add("acc-open")
            //et CSS s'occupe du reste
        }
    })
}

// on récupère les éléments de la galerie
let links = document.querySelectorAll("#sec_three nav a")

// on boucle sur les éléments en fonction de type de données
for (let link of links){
    let type = link.dataset.type
    // on ajoute un écouteur d'évènement pour le menu de la gallerie
    link.addEventListener("click", (event) =>{
        // on définit par une classe "active" les éléments à afficher
        document.querySelector(".active").classList.remove("active")
        link.classList.add("active")
        let images = document.querySelectorAll("#sec_three img.fa")
        // on ne laisse affiché que les données sélectionnées dans le menu de la gallerie
        for(let image of images){
            if(typeof type === "undefined" || image.classList.contains(type)){
                image.style.display = "block"
            }
            else image.style.display = "none"
        }
    })
}