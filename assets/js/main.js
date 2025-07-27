/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 300,
});

sr.reveal(`.home__data, .about__data, .footer__container`);
sr.reveal(`.home__images`, { delay: 1000 });
// sr.reveal(`.home__dam-1`, { delay: 1000, scale: 0, rotate: { z: 45 } });
// sr.reveal(`.home__dam-2, .home__dam-3`, {
//   delay: 1400,
//   scale: 0,
//   rotate: { z: 45 },
// });
// sr.reveal(`.home__dam-4`, { delay: 1700, scale: 0, rotate: { z: 45 } });
// sr.reveal(`.home__dam-5`, { delay: 1800, scale: 0, rotate: { z: 45 } });
sr.reveal(`.about__img-1`, { delay: 600, origin: "right" });
sr.reveal(`.about__img-2`, { delay: 800, origin: "left" });
sr.reveal(`.about__tooltip-1`, { delay: 1600, origin: "left" });
sr.reveal(`.about__tooltip-2`, { delay: 1800, origin: "right" });
sr.reveal(`.order__card:nth-child(1)`, { origin: "right" });
sr.reveal(`.order__card:nth-child(2)`, { origin: "left" });
sr.reveal(`.order__tooltip-1`, { delay: 800, origin: "right" });
sr.reveal(`.order__tooltip-2`, { delay: 800, origin: "left" });
sr.reveal(`.combo__titles`, { origin: "bottom" });
sr.reveal(`.combo__img`, { delay: 1000 });
sr.reveal(`.combo__data`, { delay: 1600 });
sr.reveal(`.combo__numbers`, { delay: 1600, origin: "bottom" });
sr.reveal(`.contact__data`, { origin: "right" });
sr.reveal(`.contact__info`, { origin: "left" });
sr.reveal(`.contact__img-1`, {
  delay: 1000,
  distance: 0,
  scale: 0,
  rotate: { z: -45 },
});
sr.reveal(`.contact__img-2`, {
  delay: 1200,
  distance: 0,
  scale: 0,
  rotate: { z: 45 },
});
sr.reveal(`.contact__dam-1`, { delay: 1400, scale: 0, rotate: { z: 45 } });
sr.reveal(`.contact__dam-3`, { delay: 1600, scale: 0, rotate: { z: 45 } });
sr.reveal(`.contact__dam-2`, { delay: 1800, scale: 0, rotate: { z: 45 } });
sr.reveal(`.contact__dam-4`, { delay: 2000, scale: 0, rotate: { z: 45 } });
sr.reveal(`.timeline__item:nth-child(odd)`, { origin: "left" });
sr.reveal(`.timeline__item:nth-child(even)`, { origin: "right" });

/*=============== PARALLAX SCROLLING ===============*/
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const dam1 = document.querySelector(".home__dam-1");
  if (dam1) dam1.style.transform = `translateY(${scrollY * 0.1}px)`;

  const dam2 = document.querySelector(".home__dam-2");
  if (dam2)
    dam2.style.transform = `translateY(${scrollY * -0.15}px) rotate(-15deg)`;

  const dam3 = document.querySelector(".home__dam-3");
  if (dam3) dam3.style.transform = `translateY(${scrollY * -0.1}px)`;

  const dam4 = document.querySelector(".home__dam-4");
  if (dam4) dam4.style.transform = `translateY(${scrollY * 0.12}px)`;

  const dam5 = document.querySelector(".home__dam-5");
  if (dam5) dam5.style.transform = `translateY(${scrollY * 0.2}px)`;
});

/*=============== DYNAMIC TYPING EFFECT ===============*/
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("description-headline")) {
    new Typed("#description-headline", {
      strings: [
        "Nikmati ayam goreng terbaik dan paling renyah, dibuat dari bahan-bahan pilihan, sekali gigit pasti mau lagi.",
      ],
      typeSpeed: 30, 
      backSpeed: 10,
      startDelay: 500,
      loop: false,
      showCursor: false, 
    });
  }
});

/*=============== INTERACTIVE STATS COUNTER ===============*/
const statsSection = document.getElementById("stats");

const animateCounters = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll(".stats__number");

      counters.forEach((counter) => {
        const target = +counter.dataset.goal;
        const prefix = counter.dataset.prefix || "";
        const suffix = counter.dataset.suffix || "";
        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentValue = Math.floor(progress * target);

          counter.innerText = prefix + currentValue + suffix;

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            counter.innerText = prefix + target + suffix;
          }
        };
        window.requestAnimationFrame(step);
      });
      observer.unobserve(entry.target);
    }
  });
};

if (statsSection) {
  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.5,
  });
  observer.observe(statsSection);
}

/*=============== SERVICES ACCORDION ===============*/
const serviceCards = document.querySelectorAll(".service__card");

serviceCards.forEach((card) => {
  const button = card.querySelector(".service__button");

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    serviceCards.forEach((otherCard) => {
      if (otherCard !== card && otherCard.classList.contains("active")) {
        otherCard.classList.remove("active");
      }
    });
    card.classList.toggle("active");
  });
});

/*=============== TESTIMONIALS CAROUSEL ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "Andi Pratama",
      review:
        "Ayamnya benar-benar renyah dan gurih! Pesan antar juga cepat sekali sampainya. Pasti akan pesan lagi.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=andi",
    },
    {
      name: "Siti Lestari",
      review:
        "Paket combo untuk acara keluarga sangat memuaskan. Porsinya pas dan rasanya disukai semua orang.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=siti",
    },
    {
      name: "Budi Santoso",
      review:
        "Rasa ayamnya enak, tapi akan lebih baik jika pilihan sausnya lebih beragam. Overall, pengalaman yang baik.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=budi",
    },
    {
      name: "Rina Wijaya",
      review:
        "Kualitasnya konsisten, tidak pernah mengecewakan. Ini jadi pilihan utama kalau lagi malas masak di rumah.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=rina",
    },
  ];

  const swiperWrapper = document.querySelector(
    ".testimonial-swiper .swiper-wrapper"
  );

  if (swiperWrapper) {
    testimonials.forEach((testimonial) => {
      let starsHTML = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= testimonial.rating) {
          starsHTML += '<i class="ri-star-s-fill"></i>';
        } else {
          starsHTML += '<i class="ri-star-s-line star-inactive"></i>';
        }
      }

      const slideHTML = `
                <div class="swiper-slide">
                    <div class="testimonial__card">
                        <img src="${testimonial.avatar}" alt="Avatar ${testimonial.name}" class="testimonial__avatar">
                        <h3 class="testimonial__name">${testimonial.name}</h3>
                        <p class="testimonial__review">"${testimonial.review}"</p>
                        <div class="testimonial__stars">${starsHTML}</div>
                    </div>
                </div>
            `;
      swiperWrapper.innerHTML += slideHTML;
    });
  }
  new Swiper(".testimonial-swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

/*=============== SERVICES/PRODUCTS PAGE LOGIC ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.querySelector(".catalog__filters");
  const productCards = document.querySelectorAll(".product-card");

  if (filterContainer) {
    filterContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        // Atur tombol aktif
        filterContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        productCards.forEach((card) => {
          if (card.dataset.category === filterValue || filterValue === "all") {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      }
    });
  }

  const calcProduct = document.getElementById("calc-product");
  const calcQuantity = document.getElementById("calc-quantity");
  const calcTotal = document.getElementById("calc-total");

  function updateCalcTotal() {
    if (calcProduct && calcQuantity && calcTotal) {
      const price = parseFloat(calcProduct.value);
      const quantity = parseInt(calcQuantity.value);
      const total = price * quantity;
      calcTotal.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    }
  }
  if (calcProduct) calcProduct.addEventListener("change", updateCalcTotal);
  if (calcQuantity) calcQuantity.addEventListener("input", updateCalcTotal);
  const customForm = document.getElementById("custom-form");
  const customTotal = document.getElementById("custom-total");

  function updateCustomTotal() {
    if (customForm && customTotal) {
      let total = 0;
      const selectedChicken = customForm.querySelector(
        'input[name="main-chicken"]:checked'
      );
      if (selectedChicken) {
        total += parseFloat(selectedChicken.value);
      }
      const selectedAddons = customForm.querySelectorAll(
        'input[name="addon"]:checked'
      );
      selectedAddons.forEach((addon) => {
        total += parseFloat(addon.value);
      });

      customTotal.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    }
  }
  if (customForm) customForm.addEventListener("change", updateCustomTotal);
});

/*=============== PORTFOLIO PAGE LOGIC ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const portfolioFilterContainer = document.querySelector(
    ".portfolio__filters"
  );
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  if (portfolioFilterContainer) {
    portfolioFilterContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        portfolioFilterContainer
          .querySelector(".active")
          .classList.remove("active");
        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");

        portfolioCards.forEach((card) => {
          setTimeout(() => {
            if (
              card.dataset.category === filterValue ||
              filterValue === "all"
            ) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          }, 300);
        });
      }
    });
  }

  const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
  });

  const modal = document.getElementById("portfolio-modal");
  const modalCloseBtn = document.getElementById("modal-close");
  const detailButtons = document.querySelectorAll(".portfolio-details-btn");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalTestimonial = document.getElementById("modal-testimonial");

  if (modal) {
    detailButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const description = button.getAttribute("data-description");
        const testimonial = button.getAttribute("data-testimonial");
        // Set konten modal
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalTestimonial.textContent = testimonial;
        modal.classList.add("active");
      });
    });

    modalCloseBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});

/*=============== CONTACT PAGE LOGIC ===============*/
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("advanced-contact-form");
  if (contactForm) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const counter = document.querySelector(".message-counter");

    const validateField = (field, condition, errorMessage) => {
      const errorMsgElement = field.nextElementSibling;
      if (condition) {
        errorMsgElement.textContent = "";
        errorMsgElement.style.display = "none";
        field.style.borderColor = "#2ecc71";
      } else {
        errorMsgElement.textContent = errorMessage;
        errorMsgElement.style.display = "block";
        field.style.borderColor = "#e74c3c";
      }
    };

    name.addEventListener("input", () =>
      validateField(
        name,
        name.value.length >= 3,
        "Nama harus minimal 3 karakter."
      )
    );
    email.addEventListener("input", () =>
      validateField(
        email,
        /^\S+@\S+\.\S+$/.test(email.value),
        "Format email tidak valid."
      )
    );
    message.addEventListener("input", () => {
      validateField(
        message,
        message.value.length >= 10,
        "Pesan harus minimal 10 karakter."
      );
      counter.textContent = `${message.value.length} / 200`;
    });
  }

  /*=============== LOCATION ACTIVE BUTTON ===============*/
const locationButtons = document.querySelectorAll('.location-btn');
const mapIframe = document.getElementById('google-map-iframe');

function setActiveLocation() {
    locationButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    this.classList.add('active');
    const mapSource = this.getAttribute('data-src');
    if (mapIframe && mapSource) {
        mapIframe.src = mapSource;
    }
}
locationButtons.forEach(button => {
    button.addEventListener('click', setActiveLocation);
});

// Set tombol pertama sebagai aktif saat halaman dimuat
if (locationButtons.length > 0) {
    locationButtons[0].classList.add('active');
}

  const chatBubble = document.getElementById("chat-bubble");
  const chatWindow = document.getElementById("chat-window");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatBody = document.getElementById("chat-body");
  if (chatBubble) {
    chatBubble.addEventListener("click", () =>
      chatWindow.classList.toggle("active")
    );

    const sendUserMessage = () => {
      const userText = chatInput.value.trim();
      if (userText === "") return;

      chatBody.innerHTML += `<div class="chat-message user">${userText}</div>`;
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;

      // Bot reply simulation
      setTimeout(() => {
        chatBody.innerHTML += `<div class="chat-message bot">Terima kasih atas pesan Anda! Tim kami akan segera merespons.</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    };
    chatSend.addEventListener("click", sendUserMessage);
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") sendUserMessage();
    });
  }
  const faqItems = document.querySelectorAll(".faq__item");
  const faqSearch = document.getElementById("faq-search");
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq__question");
      question.addEventListener("click", () => item.classList.toggle("active"));
    });

    faqSearch.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      faqItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? "block" : "none";
      });
    });
  }
});

/*=============== BLOG PAGE LOGIC ===============*/
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("blog-posts-container")) {
    const allPosts = [
      {
        title: "Rahasia Ayam Goreng Super Krispi",
        category: "resep",
        date: "2025-07-25",
        image: "assets/img/krispi.png",
        content:
          "Membuat ayam goreng yang benar-benar krispi membutuhkan teknik khusus. Pertama, pastikan ayam dalam keadaan kering. Baluri dengan campuran tepung terigu, maizena, dan sedikit baking powder. Bumbui dengan garam, merica, dan bubuk bawang putih. Celupkan ke dalam telur kocok, lalu gulingkan lagi ke dalam tepung kering. Goreng dalam minyak panas bersuhu 175°C hingga berwarna keemasan. Jangan terlalu banyak memasukkan ayam ke dalam wajan agar suhu minyak tidak turun. Angkat dan tiriskan di atas rak kawat, bukan tisu, agar bagian bawahnya tetap renyah. Sajikan selagi hangat dengan saus sambal favorit Anda. Teknik ini menjamin kerenyahan yang tahan lama dan rasa yang meresap hingga ke tulang. Selamat mencoba di dapur Anda sendiri!",
      },
      {
        title: "5 Tips Menyimpan Ayam Agar Tetap Segar",
        category: "tips",
        date: "2025-07-22",
        image: "assets/img/lima.png",
        content:
          "Menyimpan ayam dengan benar sangat penting untuk menjaga kualitasnya. Pertama, selalu simpan di bagian terdingin kulkas. Kedua, jika tidak akan dimasak dalam 2 hari, bekukan. Ketiga, gunakan wadah kedap udara. Keempat, pisahkan potongan ayam agar tidak menempel saat beku. Kelima, jangan mencuci ayam sebelum disimpan di kulkas.",
      },
      {
        title: "Kami Buka Cabang Baru di Jakarta Selatan!",
        category: "berita",
        date: "2025-07-20",
        image: "assets/img/combo-img.png",
        content:
          "Kabar gembira untuk Anda semua! Kini kami hadir lebih dekat dengan Anda di Jakarta Selatan. Kunjungi gerai baru kami dan nikmati promo spesial selama minggu pertama pembukaan. Kami berkomitmen untuk menyajikan kualitas yang sama di setiap cabang kami. Terima kasih atas dukungan Anda selama ini.",
      },
      {
        title: "Resep Saus Madu Pedas untuk Cocolan",
        category: "resep",
        date: "2025-07-18",
        image: "assets/img/order-img-1.png",
        content:
          "Saus ini sangat mudah dibuat. Campurkan 4 sdm madu, 2 sdm saus sambal, 1 sdm kecap asin, dan 1 siung bawang putih cincang. Masak di atas api kecil hingga sedikit mengental. Saus ini cocok sekali untuk cocolan ayam goreng Anda.",
      },
      {
        title: "Cara Memilih Minyak Goreng yang Tepat",
        category: "tips",
        date: "2025-07-15",
        image: "assets/img/order-img-2.png",
        content:
          "Pilihlah minyak dengan titik asap yang tinggi seperti minyak kanola atau minyak kelapa sawit agar tidak mudah gosong dan menghasilkan gorengan yang sempurna.",
      },
      {
        title: "Promo Kemerdekaan: Beli 1 Gratis 1",
        category: "berita",
        date: "2025-07-12",
        image: "assets/img/contact-img-1.png",
        content:
          "Sambut hari kemerdekaan dengan promo spesial dari kami. Nikmati penawaran beli 1 gratis 1 untuk semua menu mini bucket selama bulan Agustus. Syarat dan ketentuan berlaku.",
      },
    ];

    let currentPosts = [...allPosts];
    let currentPage = 1;
    const postsPerPage = 3;

    const postsContainer = document.getElementById("blog-posts-container");
    const paginationContainer = document.getElementById("pagination-container");
    const searchInput = document.getElementById("blog-search");
    const filterButtonsContainer = document.querySelector(".blog__filters");
    function displayContent() {
      displayPosts(currentPosts, postsContainer, currentPage, postsPerPage);
      setupPagination(currentPosts, paginationContainer, postsPerPage);
    }
postsContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('blog-card__read-more')) {
        const button = e.target;
        const card = button.closest('.blog-card');
        
        if (card) {
            card.classList.toggle('active');
            if (card.classList.contains('active')) {
                button.textContent = 'Tutup';
            } else {
                button.textContent = 'Baca Selengkapnya';
            }
        }
    }
});

    function displayPosts(posts, wrapper, page, perPage) {
  wrapper.innerHTML = "";
  page--; 

  const start = perPage * page;
  const end = start + perPage;
  const paginatedPosts = posts.slice(start, end);

  for (const post of paginatedPosts) {
    // Kalkulasi waktu baca
    const wordCount = post.content.split(" ").length;
    const readingTime = Math.ceil(wordCount / 225);

    // Membuat kutipan (excerpt) dari konten, misal 25 kata pertama
    const excerpt = post.content.split(" ").slice(0, 25).join(" ") + "...";

    // Link untuk berbagi
    const postUrl = window.location.href;
    const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${postUrl}`;
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
    const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " " + postUrl)}`;

    const postElement = document.createElement("article");
    postElement.className = "blog-card";
    postElement.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="blog-card__image">
      <div class="blog-card__content">
          <div class="blog-card__meta">
              <span class="blog-card__category">${post.category}</span>
              <span class="blog-card__date">${new Date(post.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <h3 class="blog-card__title">${post.title}</h3>
          <p class="blog-card__excerpt">${excerpt}</p>
          
          <div class="blog-card__full-content">
              <p>${post.content.replace(/\n/g, "<br>")}</p>
          </div>

          <div class="blog-card__footer">
              <button class="blog-card__read-more">Baca Selengkapnya</button>
              <div class="social-share">
                  <span class="blog-card__reading-time"><i class="ri-time-line"></i> ${readingTime} min</span>
                  <a href="${twitterShare}" target="_blank" title="Bagikan ke Twitter"><i class="ri-twitter-x-line"></i></a>
                  <a href="${facebookShare}" target="_blank" title="Bagikan ke Facebook"><i class="ri-facebook-circle-fill"></i></a>
                  <a href="${whatsappShare}" target="_blank" title="Bagikan ke WhatsApp"><i class="ri-whatsapp-fill"></i></a>
              </div>
          </div>
      </div>
    `;
    wrapper.appendChild(postElement);
  }
}

    function setupPagination(posts, wrapper, perPage) {
      wrapper.innerHTML = "";
      const pageCount = Math.ceil(posts.length / perPage);
      const prevButton = document.createElement("button");
      prevButton.className = "pagination-btn";
      prevButton.innerText = "Sebelumnya";
      prevButton.disabled = currentPage === 1;
      prevButton.addEventListener("click", () => {
        currentPage--;
        displayContent();
      });
      wrapper.appendChild(prevButton);
      const nextButton = document.createElement("button");
      nextButton.className = "pagination-btn";
      nextButton.innerText = "Berikutnya";
      nextButton.disabled = currentPage === pageCount;
      nextButton.addEventListener("click", () => {
        currentPage++;
        displayContent();
      });
      wrapper.appendChild(nextButton);
    }

    function applyFilters() {
      const searchTerm = searchInput.value.toLowerCase();
      const activeFilter =
        filterButtonsContainer.querySelector(".active").dataset.filter;

      currentPosts = allPosts.filter((post) => {
        const matchesCategory =
          activeFilter === "all" || post.category === activeFilter;
        const matchesSearch =
          post.title.toLowerCase().includes(searchTerm) ||
          post.content.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
      });

      currentPage = 1; 
      displayContent();
    }

    filterButtonsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        filterButtonsContainer
          .querySelector(".active")
          .classList.remove("active");
        e.target.classList.add("active");
        applyFilters();
      }
    });

    searchInput.addEventListener("input", applyFilters);

    displayContent();
  }
});

// === LOGIKA UNTUK HALAMAN SINGLE POST ===
const postDetailContainer = document.querySelector(".post-detail__container");
if (postDetailContainer) {
  const params = new URLSearchParams(window.location.search);
  const postId = parseInt(params.get("id"));
  const post = allPosts[postId];
  if (post) {
    document.title = post.title;
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-image").src = post.image;
    document.getElementById("post-image").alt = post.title;
    document.getElementById(
      "post-content"
    ).innerHTML = `<p>${post.content.replace(/\n/g, "<p></p>")}</p>`;
    document.getElementById("post-meta").innerHTML = `
                <span>${new Date(post.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}</span> 
                &bull; 
                <span class="blog-card__category">${post.category}</span>`;
  } else {
    postDetailContainer.innerHTML = "<h2>Artikel tidak ditemukan.</h2>";
  }
}
