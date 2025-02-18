document.addEventListener("DOMContentLoaded", function () {
    // Adicionar canonical tag para evitar conteúdo duplicado
    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = window.location.href;
    document.head.appendChild(canonicalLink);

    // Lazy loading para imagens
    document.querySelectorAll("img").forEach(img => {
        img.loading = "lazy";
    });
});