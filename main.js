// Gioi thieu
const gioithieu = document.querySelector("#gioithieu");
const gioithieuButton = document.querySelector("#gioithieu-btn");
let hideTimeout;

// Hiện khi hover vào button
gioithieuButton.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
  gioithieu.classList.remove("invisible");
});

// Hiện khi hover vào nội dung
gioithieu.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
});

// Ẩn khi rời khỏi cả button và nội dung
gioithieuButton.addEventListener("mouseleave", hideWithDelay);
gioithieu.addEventListener("mouseleave", hideWithDelay);

function hideWithDelay() {
  hideTimeout = setTimeout(() => {
    gioithieu.classList.add("invisible");
  }, 200); // Trì hoãn ẩn 200ms giúp mượt hơn
}

// dich vu
const dichvu = document.querySelector("#dichvu");
const dichvuButton = document.querySelector("#dichvu-btn");
let hideTimeout2;
// Hiện khi hover vào button
dichvuButton.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout2);
  dichvu.classList.remove("invisible");
});

// Hiện khi hover vào nội dung
dichvu.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout2);
});

// Ẩn khi rời khỏi cả button và nội dung
dichvuButton.addEventListener("mouseleave", hideWithDelay2);
dichvu.addEventListener("mouseleave", hideWithDelay2);

function hideWithDelay2() {
  hideTimeout2 = setTimeout(() => {
    dichvu.classList.add("invisible");
  }, 200); // Trì hoãn ẩn 200ms giúp mượt hơn
}

// tra cuu
const tracuu = document.querySelector("#tracuu");
const tracuuButton = document.querySelector("#tracuu-btn");
let hideTimeout3;
// Hiện khi hover vào button
tracuuButton.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout3);
  tracuu.classList.remove("invisible");
});

// Hiện khi hover vào nội dung
tracuu.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout3);
});

// Ẩn khi rời khỏi cả button và nội dung
tracuuButton.addEventListener("mouseleave", hideWithDelay3);
tracuu.addEventListener("mouseleave", hideWithDelay3);

function hideWithDelay3() {
  hideTimeout3 = setTimeout(() => {
    tracuu.classList.add("invisible");
  }, 200); // Trì hoãn ẩn 200ms giúp mượt hơn
}

// menu
const menu = document.querySelector("#menu");
const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("invisible");
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    menu.classList.remove("invisible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarIcon = document.getElementById("calendarIcon");
  const dateInput = document.getElementById("flatpickrInput");

  const calendarIconEnd = document.getElementById("calendarIconEnd");
  const dateInputEnd = document.getElementById("flatpickrInputEnd");

  // Khởi tạo Flatpickr ngay di
  const datepicker = flatpickr(dateInput, {
    dateFormat: "d.m.Y",
    allowInput: true,
  });

  // Khởi tạo Flatpickr ngay ve
  const datepickerEnd = flatpickr(dateInputEnd, {
    dateFormat: "d.m.Y",
    allowInput: true,
  });
  // Khi chọn ngày, cập nhật giá trị vào input
  calendarIconEnd.addEventListener("click", function () {
    datepickerEnd.open();
  });
  // Khi bấm vào icon lịch, mở lịch chọn ngày
  calendarIcon.addEventListener("click", function () {
    datepicker.open();
  });
});

const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");
const totalSlides = 4;
let currentSlide = 0;

// Bắt sự kiện khi nhấn vào dấu chấm
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide();
  });
});

function updateSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  updateDots();
}
setInterval(updateSlide, 5000);

// Cập nhật dấu chấm đang được chọn
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("bg-red-500");
      dot.classList.remove("bg-gray-400");
    } else {
      dot.classList.add("bg-gray-400");
      dot.classList.remove("bg-red-500");
    }
  });
}

// Đặt slide đầu tiên được chọn khi tải trang
updateDots();

//slidenews
const slidesnews = document.getElementById("slidesnews");
const pagenews = document.querySelectorAll(".page");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");
const totalSlidesnews = 4;
let currentSlidenews = 0;

// Bắt sự kiện khi nhấn vào nút prev
prevSlide.addEventListener("click", () => {
  currentSlidenews =
    currentSlidenews > 0 ? currentSlidenews - 1 : totalSlidesnews - 1;
  updateSlidenews();
});

// Bắt sự kiện khi nhấn vào nút next
nextSlide.addEventListener("click", () => {
  currentSlidenews =
    currentSlidenews < totalSlidesnews - 1 ? currentSlidenews + 1 : 0;
  updateSlidenews();
});

// bắt sự kiện khi nhấn vào trang
pagenews.forEach((page, index) => {
  page.addEventListener("click", () => {
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
      page.classList.add("bg-green-500");
      page.classList.add("text-white");
      page.classList.remove("bg-gray-400");
      page.classList.remove("text-black");
    } else {
      page.classList.add("bg-gray-400");
      page.classList.add("text-black");
      page.classList.remove("text-white");
      page.classList.remove("bg-green-500");
    }
  });
}

// Đặt slide đầu tiên được chọn khi tải trang
updateSlidenews();

// back to top
var toTopButton = document.getElementById("totopButton");

// When the user scrolls down 200px from the top of the document, show the button
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    toTopButton.classList.remove("hidden");
  } else {
    toTopButton.classList.add("hidden");
  }
});

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
