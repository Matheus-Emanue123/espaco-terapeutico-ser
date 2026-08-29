document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach((el) => {
        const file = el.getAttribute("data-include");

        fetch(file)
            .then((res) => {
                if (!res.ok) throw new Error(`Falha ao carregar ${file}`);
                return res.text();
            })
            .then((html) => {
                el.innerHTML = html;
                if (file.includes("header")) {
                    highlightActiveNavLink();
                }
            })
            .catch((err) => console.error(err));
    });
});

function highlightActiveNavLink() {
    const currentPage = document.body.dataset.page;

    document.querySelectorAll("[data-nav-link]").forEach((link) => {
        const isActive = link.dataset.navLink === currentPage;

        link.classList.toggle("text-primary", isActive);
        link.classList.toggle("font-bold", isActive);
        link.classList.toggle("border-b-2", isActive);
        link.classList.toggle("border-primary", isActive);
        link.classList.toggle("pb-1", isActive);
        link.classList.toggle("text-on-surface-variant", !isActive);
    });
}
