"use strict";

{
    // hamburger menu
    const menu = document.querySelector("#menu-btn"),
        header = document.querySelector(".header");

    menu.addEventListener("click", () => {
        menu.classList.toggle("fa-times");
        header.classList.toggle("active");
        document.body.classList.toggle("active");
    });

    window.onscroll = () => {
        if (window.innerWidth < 1200) {
            menu.classList.remove("fa-times");
            header.classList.remove("active");
            document.body.classList.remove("active");
        }
    };

    // product detail
    const productPreviewContainer = document.querySelector(".products-preview-container"),
        productPreview = document.querySelectorAll(".products-preview-container .product-preview");

    document.querySelectorAll(".products .slide .btn").forEach((detailBtn) => {
        detailBtn.addEventListener("click", () => {
            productPreviewContainer.style.display = "block";
            const name = detailBtn.getAttribute("data-product");
            productPreview.forEach((preview) => {
                const target = preview.getAttribute("data-target");
                if (name === target) {
                    preview.style.display = "flex";
                }
            });
        });
    });

    document.querySelectorAll(".products-preview-container .product-preview .fa-times").forEach((close) => {
        close.addEventListener("click", () => {
            productPreviewContainer.style.display = "none";
            productPreview.forEach((closePreview) => {
                closePreview.style.display = "none";
            });
        });
    });

    // swiper.js (products)
    var swiper = new Swiper(".products-slider", {
        // loop: true,
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
        },
    });

    // swiper.js (reviews)
    var swiper = new Swiper(".reviews-slider", {
        loop: true,
        spaceBetween: 20,
        grabCursor: true,
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1.6,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3.6,
            },
        },
    });
}
