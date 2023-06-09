//swiper//
var swiper = new Swiper(".popular-content",{
    slidesPerView:1,
    spaceBetween:10,
    autoplay: {
        delay:1000000,
        disableOnInteraction: true,
    },
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation : {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween:10,
        },
        320:{
            slidesPerView:2,
            spaceBetween:10,
        },
        510:{
            slidesPerView:2,
            spaceBetween:10,
        },
        758:{
            slidesPerView:3,
            spaceBetween:15,
        },
        900: {
            slidesPerView:4,
            spaceBetween:20,
        },


    }
});
let modal = document.querySelector("#modal")
let button = document.querySelector(".icons")
let buttonClose = document.querySelector(".modal-close")
modal.style.display = "none"
let showModal = false;
button.onclick = ()=>{
    if(!showModal){
        modal.style.display = "block"
    }else {
        modal.style.display = "none"

    }
}

buttonClose.onclick = ()=>{
    modal.style.display = "none"
}
/*open page*/
function openPage() {
    window.location.href = "atomichabits.html";
}
function openOtherpage() {
    window.location.href="themountain.html"
}
/*delete orders function*/
/* function en general*/
function deleteFunc(btn){
    btn.parentElement.parentElement.remove()
    let elements = document.querySelectorAll(".close")
    let total = 0
    for(let i =0 ; i<elements.length; i++) {
        console.log(elements[i].parentElement.children[2].value);
        total += Number (elements[i].dataset.price)*Number(elements[i].parentElement.children[2].value)
    }
    console.log(total)
    let totalText = document.getElementById("total-price")
    totalText.innerText = total + "DT/-"
}
/* the order button*/
function popFunc() {
    alert("Attention: This forum is currently empty");
}
/* the read less button */
function lessFunc() {
    let suite =  document.getElementById("suite");
    let label = document.getElementById("checked");
    let test = suite.style.display === "none";
    if(test) {
        suite.style.display = "block"
        label.innerText = "Read Less"

    }else{
        suite.style.display="none"
        label.innerText = "Read More"
    }
}
/* the serarch product engine*/
function search () {
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const products = storeitems.getElementsByClassName("product");
    const pname = storeitems.getElementsByTagName("h2");
        for (let i = 0; i < pname.length; i++) {
            let match = pname[i];
            if (match) {
              let textvalue = match.textContent || match.innerText;
              if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                storeitems.style.display = "block"
                storeitems.style.height = "fit-content"
                products[i].style.display = "";
              } else {
                products[i].style.display = "none";
              }
            }
        }
  
};
/* close the search*/
function closeSearch() {
    const storeitems = document.getElementById("product-list");
    storeitems.style.display = "none"
}
/* the contact section */
function contact(){
    window.location.href = "contactUs.html"
}
