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

// // Form Submission
// const contactForm = document.getElementById("contactForm")

// if (contactForm) {
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     // Get form values
//     const name = document.getElementById("name").value
//     const email = document.getElementById("email").value
//     const subject = document.getElementById("subject").value
//     const message = document.getElementById("message").value

//     // Here you would typically send the form data to a server
//     // For now, we'll just log it to the console and show an alert
//     console.log({ name, email, subject, message })

//     // Show success message
//     alert("Thank you for your message! I will get back to you soon.")

//     // Reset form
//     contactForm.reset()
//   })
// }


// Form Submission with EmailJS
// const contactForm = document.getElementById("contactForm");

// if (contactForm) {
//     emailjs.init("fLVlgJcogZyPuPpcm"); // Replace with your EmailJS Public Key

//     contactForm.addEventListener("submit", (e) => {
//         e.preventDefault();

//         emailjs.sendForm("service_2jnodll", "__ejs-test-mail-service__", contactForm)
//             .then(response => {
//                 console.log("Email sent!", response);
//                 alert("Message sent successfully!");
//                 contactForm.reset();
//             })
//             .catch(error => {
//                 console.error("Error:", error);
//                 alert("Failed to send message. Please try again.");
//             });
//     });
// }


// Initialize EmailJS
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("fLVlgJcogZyPuPpcm"); // Replace with your actual Public Key
});

// Form Submission with EmailJS
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      emailjs.sendForm("service_2jnodll", "__ejs-test-mail-service__", contactForm) // Use actual Service ID & Template ID
          .then(response => {
              console.log("Email sent!", response);
              alert("Message sent successfully!");
              contactForm.reset();
          })
          .catch(error => {
              console.error("Error:", error);
              alert("Failed to send message. Please try again.");
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

