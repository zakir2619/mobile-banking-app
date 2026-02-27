const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  button.addEventListener('click', () => {
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      } 
    });
    item.classList.toggle('active');    
  });
});