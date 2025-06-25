document.addEventListener("DOMContentLoaded", function () {
        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Header animation on scroll
        const header = document.querySelector("header");
        ScrollTrigger.create({
          start: "top -80",
          end: 99999,
          toggleClass: {
            className: "backdrop-blur-md bg-white/80",
            targets: header,
          },
          animation: false,
        });

        // Navigation links hover effect
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach((link) => {
          const text = link.textContent;
          link.innerHTML = text
            .split("")
            .map(
              (char) =>
                `<span class="inline-block hover:translate-y-[-2px] transition-transform duration-200">${char}</span>`,
            )
            .join("");
        });

        // Hero text animation
        gsap.from(".hero-content h1", {
          duration: 1.5,
          opacity: 0,
          y: 50,
          ease: "power3.out",
          animation: false,
        });

        gsap.from(".hero-content p", {
          duration: 1.5,
          opacity: 0,
          y: 30,
          delay: 0.5,
          ease: "power3.out",
          animation: false,
        });

        gsap.from(".hero-content a", {
          duration: 1,
          opacity: 0,
          y: 20,
          delay: 1,
          stagger: 0.2,
          ease: "power3.out",
          animation: false,
        });
        // Enhanced parallax effect for hero section
        gsap.to(".hero-bg", {
          y: 200,
          scale: 1.1,
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            animation: false,
          },
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
          gsap.to(window, {
          duration: 1,
          scrollTo: {
          y: target,
          offsetY: 80,
          },
          ease: "power3.inOut",
          });
        }
      });
    });

        // Product cards stagger animation
        gsap.from(".product-card", {
          scrollTrigger: {
            trigger: ".product-card",
            start: "top 80%",
            animation: false,
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
        // Parallax effect for banner section
        gsap.to(".parallax-bg", {
          y: 100,
          scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            animation: false,
          },
        });
        // Enhanced fade in animations with scale
        const fadeElements = document.querySelectorAll(".fade-in");
        fadeElements.forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 30, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              scrollTrigger: {
                trigger: element,
                start: "top 85%",
                animation: false,
              },
              ease: "power3.out",
            },
          );
        });

        // Testimonials animation
        gsap.from(".testimonial", {
          scrollTrigger: {
            trigger: ".testimonial",
            start: "top 80%",
            animation: false,
          },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        });

        // Instagram feed hover effect
        document.querySelectorAll(".instagram-item").forEach((item) => {
          item.addEventListener("mouseenter", () => {
            gsap.to(item.querySelector("img"), {
              scale: 1.1,
              duration: 0.5,
              ease: "power2.out",
            });
          });

          item.addEventListener("mouseleave", () => {
            gsap.to(item.querySelector("img"), {
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
            });
          });
        });
        // Product card hover animations
        const productCards = document.querySelectorAll(".product-card");
        productCards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -10, duration: 0.3 });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, duration: 0.3 });
          });
        });
      });