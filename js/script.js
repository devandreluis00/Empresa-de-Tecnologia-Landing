const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

const savedTheme = localStorage.getItem("theme") || "dark";
body.className = savedTheme;
toggleTheme.textContent = savedTheme === "dark" ? "🌙" : "☀️";
toggleTheme.setAttribute("aria-label", `Alternar para tema ${savedTheme === "dark" ? "claro" : "escuro"}`);

toggleTheme.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    body.className = newTheme;
    toggleTheme.textContent = newTheme === "dark" ? "🌙" : "☀️";
    toggleTheme.setAttribute("aria-label", `Alternar para tema ${newTheme === "dark" ? "claro" : "escuro"}`);
    localStorage.setItem("theme", newTheme);
});

function scrollContato() {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("formContato").addEventListener("submit", e => {
    e.preventDefault();

    const msg = e.target.querySelector(".form-msg");
    msg.textContent = "Mensagem enviada com sucesso 🚀";
    msg.className = "form-msg success";

    e.target.reset();

    setTimeout(() => {
        msg.textContent = "";
        msg.className = "form-msg";
    }, 4000);
});