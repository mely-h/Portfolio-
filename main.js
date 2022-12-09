const listlettre = document.querySelectorAll(".ul2 li h1") ; 
const body = document.querySelector("body") 



function lettreTombent (event2)  { 
    /// faire tomber TOUT les flocons
    listlettre.forEach((lettre) => {  
        console.log(lettre)
        
        lettre.style.paddingTop = "25vh"   
        
      })

} 



 body.addEventListener('mouseover',  lettreTombent)
