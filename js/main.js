var switchEle = document.querySelector('.switch');
var bodyEle = document.querySelector('body')
var scriptEle = document.querySelector('.status');

function toggleSwitch() {
  switchEle.classList.toggle('on');
  switchEle.classList.toggle('off');
  bodyEle.classList.toggle('light');
  bodyEle.classList.toggle('dark');
  if (scriptEle.innerText === "It's so bright in here!") {
    scriptEle.innerText = "Who turned off the damn lights!?";
  } else {
    scriptEle.innerText = "It's so bright in here!";
  }
}

switchEle.addEventListener('click', toggleSwitch);
