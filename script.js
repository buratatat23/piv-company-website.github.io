document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const topic = document.getElementById("topic").value;
  const message = document.getElementById("message").value.trim();

  if (!message) {
    status.textContent = "Please enter a message before continuing.";
    return;
  }

  const subject = encodeURIComponent("Website inquiry: " + topic);
  const body = encodeURIComponent(
    "Name: " + (name || "Not provided") + "\n" +
    "Reply email: " + (email || "Not provided") + "\n" +
    "Inquiry type: " + topic + "\n\n" +
    "Message:\n" + message + "\n\n" +
    "Please do not request or send sensitive identity documents through ordinary email."
  );

  status.textContent = "Opening your email application. Review the message and press Send there.";
  window.location.href = "mailto:adm.safe.id@gmail.com?subject=" + subject + "&body=" + body;
});
