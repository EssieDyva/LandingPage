// Prendi il form e il bottone di submit
const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submitBtn");

const app = document.getElementById("app");
if (app) {
  app.innerHTML = `        
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="#hero">Sara La Pietra</a>
                </div>

                <div id="burger" class="container" onclick="myFunction()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>

                <div class="nav-links" id="navLinks">
                    <a href="#chi-sono">Chi sono</a>
                    <a href="#contatti">Contattami</a>
                </div>
            </nav>
        </header>

        <section id="hero">
            <div class="hero-content">
                <h1 class="hero-title">Benvenuti nella mia landing page</h1>
                <p class="hero-par">Scopri chi sono e le mie esperienze</p>
                <a href="#chi-sono" class="btn">Scopri di più</a>
            </div>
        </section>

        <section id="chi-sono">
            <img src="./img/chisono-img.jpg" class="chisono-img" alt="Chi sono">
            <h2 class="chisono-title">Chi sono</h2>
            <p class="chisono-par">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore similique aspernatur adipisci, maxime eius est doloribus rerum qui ipsa, debitis voluptatibus excepturi corporis quam facere aliquid suscipit deleniti quasi dolor.</p>
        </section>

        <section id="contatti">
            <form id="contact-form">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="cognome">Cognome:</label>
                <input type="text" id="cognome" name="cognome" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="example@mail.com" required>

                <label for="messaggio">Messaggio:</label>
                <textarea id="messaggio" name="messaggio" rows="5"></textarea>

                <button id="submitBtn" type="submit" class="btn" disabled>Invia</button>
            </form>
        </section>`;
}

// Funzione per gestire il menu burger responsive
let x = document.getElementById("navLinks");
let burger = document.getElementById("burger");
function myFunction() {
  if (x) {
    if (x.className === "nav-links") {
      x.className += " responsive";
      x.classList.toggle("active");
      burger.classList.toggle("change");
    } else {
      x.className = "nav-links";
      burger.classList.toggle("change");
    }
  }
}

document.querySelectorAll('#navLinks a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    x.className = "nav-links";
    burger.classList.toggle("change");
  });
});

if (form && submitBtn) {
  // Seleziona tutti gli input del form
  const inputs = form.querySelectorAll("input");

  // Aggiungi un listener per abilitare/disabilitare il bottone
  form.addEventListener("input", () => {
    let allFilled = true;

    // Controlla che tutti gli input siano compilati
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    // Abilita il bottone solo se tutti gli input sono compilati
    submitBtn.disabled = !allFilled;
  });
}

// Scroll fluido per i link interni alla pagina
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Evita il salto brusco
    e.preventDefault();

    // Prendi la sezione di destinazione
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
