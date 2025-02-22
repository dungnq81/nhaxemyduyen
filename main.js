// Gioi thieu
const gioithieu=document.querySelector("#gioithieu");
const gioithieuButton=document.querySelector("#gioithieu-btn");
gioithieuButton.addEventListener("click",()=>{
    gioithieu.classList.toggle("invisible");
})

// dich vu
const dichvu=document.querySelector("#dichvu");
const dichvuButton=document.querySelector("#dichvu-btn");
dichvuButton.addEventListener("click",()=>{
    dichvu.classList.toggle("invisible");
})

// tra cuu
const tracuu=document.querySelector("#tracuu");
const tracuuButton=document.querySelector("#tracuu-btn");
tracuuButton.addEventListener("click",()=>{
    tracuu.classList.toggle("invisible");
})

// menu
const menu=document.querySelector("#menu");
const menuButton=document.querySelector("#menu-btn");
menuButton.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
})

const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = 4;
let currentSlide = 0;

// Bắt sự kiện khi nhấn vào dấu chấm
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
  });
});

function updateSlide() {
  currentSlide=(currentSlide+1)%totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}
setInterval(updateSlide,5000);

// Cập nhật dấu chấm đang được chọn
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('bg-red-500');
      dot.classList.remove('bg-gray-400');
    } else {
      dot.classList.add('bg-gray-400');
      dot.classList.remove('bg-red-500');
    }
  });
}

// Đặt slide đầu tiên được chọn khi tải trang
updateDots();
