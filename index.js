const starsArr = document.querySelectorAll('.star');

for (let i = 0; i < starsArr.length; i++) {
  starsArr[i].addEventListener('click', () => {
    for (let j = 0; j < starsArr.length; j++) {
      if (j >= i) {
        starsArr[j].classList.add('star_active');
      } else {
        starsArr[j].classList.remove('star_active');
      }
    }
  });  
}