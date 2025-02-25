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

//slidenews
const slidesnews = document.getElementById('slidesnews');
const pagenews = document.querySelectorAll('.page');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const totalSlidesnews = 4;
let currentSlidenews = 0;

// Bắt sự kiện khi nhấn vào nút prev
prevSlide.addEventListener('click', () => {
  currentSlidenews = currentSlidenews > 0 ? currentSlidenews - 1 : totalSlidesnews - 1;
  updateSlidenews();
});

// Bắt sự kiện khi nhấn vào nút next
nextSlide.addEventListener('click', () => {
  currentSlidenews = currentSlidenews < totalSlidesnews - 1 ? currentSlidenews + 1 : 0;
  updateSlidenews();
});

// bắt sự kiện khi nhấn vào trang
pagenews.forEach((page, index) => {
  page.addEventListener('click', () => {
    currentSlidenews = index;
    updateSlidenews();
  });
});

function updateSlidenews() {
  slidesnews.style.transform = `translateX(-${currentSlidenews * 100}%)`;
  updatePagenews();
}

// Cập nhật trang đang được chọn
function updatePagenews() {
  pagenews.forEach((page, index) => {
    if (index === currentSlidenews) {
      page.classList.add('bg-green-500');
      page.classList.add('text-white');
      page.classList.remove('bg-gray-400');
      page.classList.remove('text-black');
    } else {
      page.classList.add('bg-gray-400');
      page.classList.add('text-black');
      page.classList.remove('text-white');
      page.classList.remove('bg-green-500');
    }
  });
}

// Đặt slide đầu tiên được chọn khi tải trang
updateSlidenews();
