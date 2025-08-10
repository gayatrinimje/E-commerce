function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }

  function toggleDropdown(event) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      const dropdown = event.target.parentElement;
      dropdown.classList.toggle("open");
    }
  }


 function toggleDropdown() {
    const dropdown = document.getElementById('womenDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  window.onclick = function(e) {
    const dropdown = document.getElementById('womenDropdown');
    if (!e.target.matches('.navbar a')) {
      dropdown.style.display = 'none';
    }
  }


   function toggleProfileMenu() {
    document.getElementById("profileDropdown").classList.toggle("show");
  }

  window.addEventListener("click", function(e) {
    if (!e.target.matches('.profile-icon')) {
      document.getElementById("profileDropdown").classList.remove("show");
    }
  });
