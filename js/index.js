// put vibration class to target onclick
const vibration = (target) => {
  target.classList.add("vibration");

  setTimeout( () => {
    target.classList.remove("vibration");
  }, 400);
}

// const by class
let count = 0;
const clickEgg = document.getElementsByClassName('egg')[0];
const countText = document.getElementsByClassName('count')[0];

// addEventListener when click
clickEgg.addEventListener('click', () => {
  countText.textContent = count++;
  // change background image when count increase
  if (count > 49) {
  clickEgg.style.background = 'url("/img/egg2.png")';
  clickEgg.style.backgroundPosition = 'center';
  clickEgg.style.backgroundSize = 'cover';
  } 
  if (count > 99) {
    clickEgg.style.background = 'url("/img/egg3.png")';
    clickEgg.style.backgroundPosition = 'center';
    clickEgg.style.backgroundSize = 'cover';
  }
  if (count > 199) {
    clickEgg.style.background = 'url("/img/egg4.png")';
    clickEgg.style.backgroundPosition = 'center';
    clickEgg.style.backgroundSize = 'cover';
  }
  if (count > 499) {
    clickEgg.style.background = 'url("/img/egg5.png")';
    clickEgg.style.backgroundPosition = 'center';
    clickEgg.style.backgroundSize = 'cover';
  }
});