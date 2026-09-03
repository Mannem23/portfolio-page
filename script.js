// ============================
// MOBILE MENU
// ============================

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", () => {

    navbar.classList.toggle("open");

});


// Close mobile menu after clicking a link

const navigationLinks =
    document.querySelectorAll(".navbar nav a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");

    });

});


// ============================
// SCROLL REVEAL
// ============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


// ============================
// ACTIVE NAVIGATION
// ============================

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "home";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});
