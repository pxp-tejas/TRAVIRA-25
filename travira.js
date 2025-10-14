window.addEventListener('DOMContentLoaded', () => {
  // Check if URL has success parameter
  if (window.location.search.includes('success=true')) {
    const msg = document.getElementById('contactMessage');
    msg.textContent = "Inquiry sent successfully!";
    msg.style.display = "block";
  }
});

// 💡 IMAGE LIGHTBOX
const images = document.querySelectorAll(".dest-card img, .package-card img");
const overlay = document.createElement("div");
overlay.id = "lightboxOverlay";
document.body.appendChild(overlay);
overlay.style.display = "none";

const overlayImg = document.createElement("img");
overlay.appendChild(overlayImg);

images.forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default redirect

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('loginMessage').textContent = "Login successful!";
      form.reset(); // Clear form
    } else {
      document.getElementById('loginMessage').textContent = "Oops! Something went wrong.";
    }
  })
  .catch(error => {
    document.getElementById('loginMessage').textContent = "Oops! Something went wrong.";
  });
});



      // Optional: Close modal after 2 seconds
      setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
        if (modal) modal.hide();
        loginMessage.innerHTML = ""; // clear message after close
      }, 2000);

    } else {
      loginMessage.innerHTML = `<div class="text-danger fw-semibold">❌ Invalid credentials. Please try again.</div>`;
    }
  } catch (error) {
    console.error("Error submitting login form:", error);
    loginMessage.innerHTML = `<div class="text-warning fw-semibold">⚠️ Network error. Please check your connection.</div>`;
  }
});
