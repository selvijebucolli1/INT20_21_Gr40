let i = 1;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();