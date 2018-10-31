function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let divs = document.querySelector('div#grand-node');
  let divsList = divs.querySelectorAll('div');

  return divsList[divsList.length - 1];
}
