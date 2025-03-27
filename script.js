document.addEventListener("DOMContentLoaded", function() {
    let deskripsiElements = document.querySelectorAll(".DeskripsiArtikel");

    deskripsiElements.forEach(el => {
        let text = el.textContent.trim();
        let words = text.split(" ");

        if (words.length > 20) {
            let shortText = words.slice(0, 20).join(" ") + " ..."; 
            el.textContent = shortText;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            window.location.href = "/isiArtikel.html";
        });
    });
});
