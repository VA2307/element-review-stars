let starsArr = Array.from(document.getElementsByClassName('star'));
for(let index = 0; index < starsArr.length; index++) {
  starsArr[index].onclick = () => {
    for(let indexTwo = 0; indexTwo < starsArr.length; indexTwo++) {
      if(index <= indexTwo) {
        starsArr[indexTwo].classList.add('star_active')
      } else {
        starsArr[indexTwo].classList.remove('star_active')
      }
    }
  }
}