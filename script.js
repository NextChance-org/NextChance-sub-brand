let producthead = document.getElementById("product-head");
let productsecond = document.getElementById("product-second");
let productthird = document.getElementById("product-third");
let overviewtab = document.getElementById("overview-tab");
let hometab = document.getElementById("home-tab");
let codetab = document.getElementById("code-tab");
let codeconsent = document.getElementById("code-consent");
let producttab = document.getElementById("product-tab");
let productview = document.getElementById("product-view");

overviewtab.addEventListener("click", open_overview);
function open_overview() {
    codeconsent.style.display = "none";
    productview.style.display = "none";
    overview.style.display = "block";
    producthead.style.display = "none";
    productsecond.style.display = "none";
    productthird.style.display = "none";
}

hometab.addEventListener("click", open_home);
function open_home() {
    codeconsent.style.display = "none";
    productview.style.display = "none";
    overview.style.display = "none";
    producthead.style.display = "block";
    productsecond.style.display = "block";
    productthird.style.display = "block";
}

codetab.addEventListener("click", open_code);
function open_code() {
    codeconsent.style.display = "none";
    codeconsent.style.display = "block";
    overview.style.display = "none";
    producthead.style.display = "block";
    productsecond.style.display = "block";
    productthird.style.display = "block";
}

producttab.addEventListener("click", open_product);
function open_product() {
    overview.style.display = "none";
    productview.style.display = "block";
    producthead.style.display = "block";
    productsecond.style.display = "block";
    productthird.style.display = "block";
}

check.addEventListener("click", moral_check);
function moral_check() {
    if (license.checked & moral.checked){
        codelink.style.display = "block";
    }
}

closes.addEventListener("click", code_close);
function code_close() {
    codeconsent.style.display = "none";
}