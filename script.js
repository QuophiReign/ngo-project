
  AOS.init({ duration: 800, offset: 100 });

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const header = document.querySelector('header');

  //  Mobile menu toggle
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  //  Sticky header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-white/90', 'backdrop-blur-md');
    } else {
      header.classList.remove('bg-white/90', 'backdrop-blur-md');
    }
  });

  //  Projects dropdown for mobile
  document.addEventListener("DOMContentLoaded", () => {
    const projectBtn = document.getElementById("mobile-projects-btn");
    const projectDropdown = document.getElementById("mobile-projects-dropdown");
    const projectIcon = document.getElementById("mobile-projects-icon");

    if (projectBtn) {
      projectBtn.addEventListener("click", () => {
        const isOpen = projectDropdown.style.maxHeight && projectDropdown.style.maxHeight !== "0px";

        if (isOpen) {
          projectDropdown.style.maxHeight = "0px";
          projectIcon.classList.remove("rotate-180");
        } else {
          projectDropdown.style.maxHeight = projectDropdown.scrollHeight + "px";
          projectIcon.classList.add("rotate-180");
        }
      });
    }
  });
