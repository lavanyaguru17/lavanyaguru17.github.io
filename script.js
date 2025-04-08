// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")
const navLinksItems = document.querySelectorAll(".nav-links li")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navLinks.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  })
})

// Active Navigation Link on Scroll
const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navItems.forEach((item) => {
    item.classList.remove("active")
    if (item.getAttribute("href").substring(1) === current) {
      item.classList.add("active")
    }
  })
})


// // Initialize EmailJS
// document.addEventListener("DOMContentLoaded", () => {
//   emailjs.init("fLVlgJcogZyPuPpcm"); 
// });
// // Form Submission with EmailJS
// const contactForm = document.getElementById("contactForm");
// if (contactForm) {
//   contactForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       emailjs.sendForm("service_2jnodll", "template_cn1gb5n", contactForm) // Use actual Service ID & Template ID
//           .then(response => {
//               console.log("Email sent!", response);
//               alert("Message sent successfully!");
//               contactForm.reset();
//           })
//           .catch(error => {
//               console.error("Error:", error);
//               alert("Failed to send message. Please try again.");
//           });
//   });
// }

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2jnodll", "template_cn1gb5n", contactForm)
      .then(response => {
        console.log("Email sent!", response);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon.",
          confirmButtonColor: "#3085d6"
        });
        contactForm.reset();
      })
      .catch(error => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#d33"
        });
      });
  });
}



// Scroll Reveal Animation
window.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".section-header, .about-content, .skills-content, .project-card, .contact-content",
  )

  const revealElement = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
        observer.unobserve(entry.target)
      }
    })
  }

  const options = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver(revealElement, options)

  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(element)
  })

  // Add the revealed class to make elements visible
  document.addEventListener("scroll", () => {
    revealElements.forEach((element) => {
      const position = element.getBoundingClientRect()

      if (position.top < window.innerHeight) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  })
})

