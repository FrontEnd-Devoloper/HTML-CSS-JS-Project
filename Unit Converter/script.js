var feet = document.querySelector('#feet')
var inch = document.querySelector('#inch')

feet.addEventListener('input', function() {
  let f = this.value;
  let i = f*12;
  inch.value = i;
})
inch.addEventListener('input', function() {
  let i = this.value;
  let f = i/12;
  if(!Number.isInteger(f)){
    f = f.toFixed(2);
  };
  feet.value = f;
})