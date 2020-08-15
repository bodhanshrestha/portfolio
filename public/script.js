window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.header').style.padding = '12px 40px';
  } else {
    document.querySelector('.header').style.padding = '15px 30px';
  }

  var height = document.body.scrollTop || document.documentElement.scrollTop;

  var totalHeight =
    document.body.clientHeight || document.documentElement.clientHeight;

  var totalHeight = totalHeight - 605;
  var client = (height / totalHeight) * 100;
  document.querySelector('.window-bar').style.width = `${client}%`;

  if (
    document.body.scrollTop > totalHeight - 100 ||
    document.documentElement.scrollTop > totalHeight - 100
  ) {
    document.querySelector('.newBtn').style.display = 'none';
  } else {
    document.querySelector('.newBtn').style.display = 'block';
  }
}
