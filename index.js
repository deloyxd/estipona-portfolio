function showSection(sectionName) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(sectionName).classList.add("active");
  event.target.classList.add("active");
}

function showSectionFromButton(sectionName) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(sectionName).classList.add("active");
  const navButtons2 = document.querySelectorAll(".nav-btn");
  navButtons2.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(sectionName.toLowerCase())) {
      btn.classList.add("active");
    }
  });
}

function copyToClipboard(text, button) {
  navigator.clipboard
    .writeText(text)
    .then(function () {
      const successMsg = button.parentElement.querySelector('.copy-success');
      successMsg.classList.add("show");
      setTimeout(() => {
        successMsg.classList.remove("show");
      }, 2000);
    })
    .catch(function (err) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      const successMsg = button.parentElement.querySelector('.copy-success');
      successMsg.classList.add("show");
      setTimeout(() => {
        successMsg.classList.remove("show");
      }, 2000);
    });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.15)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.1)";
  }
});

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "all 0.6s ease";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    }, index * 150);
  });
});
