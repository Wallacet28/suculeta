// Selecionar o elemento "Produtos" e a lista de subitens
const productLink = document.getElementById("product-link");
const sublist = productLink.querySelector(".sublist");

// Adicionar um evento de mouseover para mostrar a lista
productLink.addEventListener("mouseover", () => {
    sublist.style.display = "block";
});

// Adicionar um evento de mouseout para esconder a lista
productLink.addEventListener("mouseout", () => {
    sublist.style.display = "none";
});
// Selecionar o elemento "Login" e a lista de login
const loginLink = document.getElementById("login-link");
const loginList = loginLink.querySelector(".login");

// Adicionar um evento de mouseover para mostrar a lista de login
loginLink.addEventListener("mouseover", () => {
    loginList.style.display = "block";
});

// Adicionar um evento de mouseout para esconder a lista de login
loginLink.addEventListener("mouseout", () => {
    loginList.style.display = "none";
});
