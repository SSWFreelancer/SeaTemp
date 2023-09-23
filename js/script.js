document.addEventListener('DOMContentLoaded', function(event) {
	function setupSelectInput(inputSelector, optionsSelector) {
	  const input = document.querySelector(inputSelector);
	  const options = document.querySelectorAll(optionsSelector);
	  input.addEventListener('input', function() {
	    const filter = this.value.toLowerCase();
	    options.forEach(option => {
	      const text = option.textContent.toLowerCase();
	      option.style.display = text.includes(filter) ? 'block' : 'none';
	    });

	    const optionsList = this.nextElementSibling;
	    optionsList.style.display = filter.length === 0 ? 'none' : 'block';
	  });
	  options.forEach(option => {
	    option.addEventListener('click', function() {
	      input.value = this.textContent;
	      input.nextElementSibling.style.display = 'none';
	    });
	  });
	  document.addEventListener('click', function(event) {
	    if (!input.contains(event.target)) {
	      document.querySelectorAll(optionsSelector).forEach(optionsList => {
	        optionsList.style.display = 'none';
	      });
	    }
	  });
	}
	setupSelectInput('.header__select-input', '.header__select-options li');
	setupSelectInput('.footer__select-input', '.footer__select-options li');

	var header = document.querySelector('.header');
	var languages = document.querySelector('.header__languages');
	var footerLanguages = document.querySelector('.footer__languages');
	var langMenu = document.querySelector('.menu');
	var langClose = document.querySelector('.menu__close img');
	languages.addEventListener('click', function(event) {
		langMenu.classList.add('open');
	});
	footerLanguages.addEventListener('click', function(event) {
		langMenu.classList.add('open');
	});

	langClose.addEventListener('click', function(event) {
		langMenu.classList.remove('open');
	});
	document.addEventListener('click', function(event) {
	  if (!header.contains(event.target) && !footerLanguages.contains(event.target)) {
	    langMenu.classList.remove('open');
	  }	  
	});
	if(document.querySelectorAll('.temp__block')){
  		function updateParagraphSizes(block) {
	    const paragraphs = block.querySelectorAll('p');
	    let maxWidth = 0;
	    paragraphs.forEach(p => {
	      const width = p.offsetWidth;
	      if (width > maxWidth) {
	        maxWidth = width;
	      }
	    });
	    paragraphs.forEach(p => {
	      p.style.marginRight = maxWidth - p.offsetWidth + 10  + 'px';
	    });
	  }
	  function handleResize() {
	    const blocks = document.querySelectorAll('.temp__block');
	    blocks.forEach(block => {
	      updateParagraphSizes(block);
	    });
	  }
	  window.addEventListener('resize', handleResize);	
	  handleResize(); 	
	}

    setTimeout(function() {
    	function mainDynamic() {
        const main = document.querySelector('main');
        main.style.marginTop = header.offsetHeight + 'px';
       }
	    mainDynamic(); 
		 window.addEventListener('resize', mainDynamic);	
    }, 200); 
	 

});

