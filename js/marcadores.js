// Modal HACKERS
const marcadorHackers = document.querySelector(".btnInfoHackers");
const marcadorHackersB = document.querySelector(".btnInfoHackersB");
const textoHackers = document.querySelector(".textoInfoHackers");

// Modal HACKING
const marcadorHacking = document.querySelector(".btnInfoHacking");
const marcadorHackingB = document.querySelector(".btnInfoHackingB");
const textoHacking = document.querySelector(".textoInfoHacking");

// Modal INGENIERIA SOCIAL
const marcadorIngSocial = document.querySelector(".btnInfoIngSocial");
const marcadorIngSocialB = document.querySelector(".btnInfoIngSocialB");
const textoIngSocial = document.querySelector(".textoInfoIngSocial");

// Modal PHISHING
const marcadorPhishing = document.querySelector(".btnInfoPhishing");
const marcadorPhishingB = document.querySelector(".btnInfoPhishingB");
const textoPhising = document.querySelector(".textoInfoPhishing");

// Modal FILTROS ANTISPAM
const marcadorSpam = document.querySelector(".btnInfoSpam");
const marcadorSpamB = document.querySelector(".btnInfoSpamB");
const textoSpam = document.querySelector(".textoInfoSpam");

// Modal COOKIES
const marcadorCookies = document.querySelector(".btnInfoCookies");
const marcadorCookiesB = document.querySelector(".btnInfoCookiesB");
const textoCookies = document.querySelector(".textoInfoCookies");

// Llamadas a la funcion "Marcar"
Marcar(marcadorHackers, marcadorHackersB, textoHackers);
Marcar(marcadorHacking, marcadorHackingB, textoHacking);
Marcar(marcadorIngSocial, marcadorIngSocialB, textoIngSocial);
Marcar(marcadorPhishing, marcadorPhishingB, textoPhising);
Marcar(marcadorSpam, marcadorSpamB, textoSpam);
Marcar(marcadorCookies, marcadorCookiesB, textoCookies);

// Funcion "Marcar"
function Marcar(btnMarcar, btnMarcarB, textoMarcar) {
    btnMarcar.classList.add("marcadorInfo");
    btnMarcarB.classList.add("marcadorInfo");

    btnMarcarB.style.display = "none";

    btnMarcar.style.color = "white";
    btnMarcarB.style.color = "yellow";

    btnMarcar.addEventListener("click", () => {
        btnMarcarB.style.display = "block";
        btnMarcar.style.display = "none";

        textoMarcar.style.color = "yellow";
    });

    btnMarcarB.addEventListener("click", () => {
        btnMarcar.style.display = "block";
        btnMarcarB.style.display = "none";

        textoMarcar.style.color = "gray";
    })
}