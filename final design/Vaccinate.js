let counts=setInterval(updated, 500);
        let upto=180000;
        function updated(){
            var count= document.getElementById("vtn");
            count.innerHTML=++upto;
        }


        let counts2=setInterval(updated2, 500);
        let upto2=10000;
        function updated2(){
            var count= document.getElementById("vdt");
            count.innerHTML=++upto2;
        }

        const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
