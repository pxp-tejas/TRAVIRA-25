document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const cname = document.getElementById("cname").value.trim();
  const cemail = document.getElementById("cemail").value.trim();
  const cmsg = document.getElementById("cmsg").value.trim();

  if (cname === "" || cemail === "" || cmsg === "") {
    alert("Please fill all required fields.");
    return;
  }


  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(cemail)) {
    alert("Enter a valid email address.");
    return;
  }
  alert("Thank you for contacting us! We'll respond shortly.");
  this.reset();
});

const images = document.querySelectorAll(".dest-card img, .package-card img");
const lightboxOverlay = document.createElement("div");
lightboxOverlay.id = "lightboxOverlay";
document.body.appendChild(lightboxOverlay);
lightboxOverlay.style.display = "none";

const lightboxImg = document.createElement("img");
lightboxOverlay.appendChild(lightboxImg);

images.forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    lightboxOverlay.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightboxOverlay.addEventListener("click", () => {
  lightboxOverlay.style.display = "none";
});
