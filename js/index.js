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
})