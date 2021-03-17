//give an affect when page scroll

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

const line = document.querySelector(".line")
const navUl = document.querySelector(".line ul");
const navli = document.querySelectorAll(".line li");
const navAlla = document.querySelectorAll(".line a");
const newli = document.createElement("li");
var myVar = null;

let copyLi = [];
navli.forEach((li) => {
    copyLi.push(li);
})
//changing information text 

function index() {



    if (window.outerWidth < 1100) {


        defaulta();
        myVar = setInterval(changea, 3000);



        function defaulta() {

            newli.appendChild(navAlla[0]);
            navUl.appendChild(newli);


        }


        let i = 1;

        function changea() {

            navUl.removeChild(navUl.lastChild);
            newli.removeChild(newli.lastChild);
            newli.appendChild(navAlla[i]);
            navUl.appendChild(newli);

            i = i + 1;

            if (i == navAlla.length) {
                i = 0;
            }


        }


    } else {
        clearInterval(myVar);
        navUl.innerHTML = "";
        copyLi.forEach((li) => {
            navUl.appendChild(li);
        })
        console.log(navUl);
    }

}

index();
window.addEventListener("resize", index);

