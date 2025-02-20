document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
    });

    if (!isActive) {
      accordionItem.classList.add('active');
    }
  });
});
