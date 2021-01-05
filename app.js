//gestion des erreurs

//on tente de recuperer un div mais avec une faute dans son id

let result = document.getElementById("resultss");

try {
    result.innerHTML = "salut les geeks";
}
catch(error) {
    alert("l'element n'existe pas !!")
    alert(`
        Error name: ${error.name}
        Error message: ${error.message}
        `);
}

