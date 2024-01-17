let rewek = document.querySelector(`#rewek`);
let orlov = document.querySelector(`#orlov`);
let broski = document.querySelector(`#broski`);
let moneta = document.querySelector(`#moneta`);
brosok = 0;
rewwka= 0;
orell= 0;
moneta.addEventListener(`click`, function () {
  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    brosok++;
    orell++;
    moneta.src = "orel.png";
    broski.textContent = `${brosok}`;
    console.log(broski);
    console.log(typeof `broski`);
    orlov.textContent = `${orell}`;
  } else if (random === 1) {
    moneta.src = `rewka.png`;
    brosok++;
    broski.textContent = `${brosok}`;
    rewwka++;
    rewek.textContent=`${rewwka}`
  }
  console.log(random);
});
