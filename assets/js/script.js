function changeLanguage(lang) {
    // Set the lang attribute of the HTML element
    document.documentElement.lang = lang;

    // Change the text for the Sign In button and language button
    if (lang === 'es') {
        document.querySelector('.signin-btn').innerText = "Iniciar sesión"; // Example translation for the button
        document.querySelector('.language-button button').innerText = "es"; // Update language button text
        
        // Change all <p> tags content to Spanish
        const pTags = document.querySelectorAll('p');
        pTags.forEach(p => {
            if (p.innerText === 'Follow us!') {
                p.innerText = '¡Síguenos!';
            }
        });
    } else if (lang === 'pt') {
        document.querySelector('.signin-btn').innerText = "Entrar"; // Portuguese translation
        document.querySelector('.language-button button').innerText = "br"; // Update language button text
        
        // Change all <p> tags content to Portuguese
        const pTags = document.querySelectorAll('p');
        pTags.forEach(p => {
            if (p.innerText === 'Follow us!') {
                p.innerText = 'Siga-nos!';
            }
        });
    } else {
        document.querySelector('.signin-btn').innerText = "Sign in"; // Default English
        document.querySelector('.language-button button').innerText = "us"; // Update language button text
        
        // Change all <p> tags content to English
        const pTags = document.querySelectorAll('p');
        pTags.forEach(p => {
            if (p.innerText === '¡Síguenos!') {
                p.innerText = 'Follow us!';
            } else if (p.innerText === 'Siga-nos!') {
                p.innerText = 'Follow us!';
            }
        });
    }
};

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active');
  }

  function filterDropdown(searchInput, dropdownId) {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(`#${dropdownId} .dropdown-item`);
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? '' : 'none';
    });
  }

  function updateInput(inputId, dropdownId) {
    const checkedOptions = Array.from(document.querySelectorAll(`#${dropdownId} .dropdown-item input:checked`))
      .map(input => input.value);
    document.getElementById(inputId).value = checkedOptions.join(', ');
  }

  // Close the dropdown if clicked outside
  document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown-list');
    const inputs = document.querySelectorAll('.form-control');
    dropdowns.forEach((dropdown, index) => {
      if (!dropdown.contains(e.target) && e.target !== inputs[index]) {
        dropdown.classList.remove('active');
      }
    });
  });