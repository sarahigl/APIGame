document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("floating-container");

    for (let i = 0; i <10; i++) { // Ajoute 5 images flottantes
        let img = document.createElement("img");
        img.src = "./public/nuagePink.png"; // Remplace par ton image
        img.classList.add("floating-image");

        // Générer une position aléatoire dans la page
        let topPos = Math.random() * 80; // Entre 0% et 80% de hauteur
        let leftPos = Math.random() * 90; // Entre 0% et 90% de largeur

        img.style.top = `${topPos}vh`;
        img.style.left = `${leftPos}vw`;

        container.appendChild(img);
    }
});
