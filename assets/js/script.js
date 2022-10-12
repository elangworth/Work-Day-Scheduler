//set date in the header
const now = luxon.DateTime.now().setZone('America/Los_Angeles').toLocaleString();

const currentDay = document.getElementById('currentDay');

currentDay.innerHTML = now;

//elements needed to compare times
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');
const thirteen = document.getElementById('thirteen');
const fourteen = document.getElementById('fourteen');
const fifteen = document.getElementById('fifteen');
const sixteen = document.getElementById('sixteen');

//if currentTime is > calendarHour then class should be gray
//else if currentTime is == calendarHour then class should be green
//else class should be red.
const today = luxon.DateTime.local();
const hour = today.get('hour');

const eightOClock = luxon.DateTime.local().set({ hour: 8 }).toFormat('HH');
const nineOClock = luxon.DateTime.local().set({ hour: 9 }).toFormat('HH');
const tenOClock = luxon.DateTime.local().set({ hour: 10 }).toFormat('HH');
const elevenOClock = luxon.DateTime.local().set({ hour: 11}).toFormat('HH');
const twelveOClock = luxon.DateTime.local().set({ hour: 12 }).toFormat('HH');
const thirteenHundred = luxon.DateTime.local().set({ hour: 13}).toFormat('HH');
const fourteenHundred = luxon.DateTime.local().set({ hour: 14 }).toFormat('HH');
const fifteenHundred = luxon.DateTime.local().set({ hour: 15 }).toFormat('HH');
const sixteenHundred = luxon.DateTime.local().set({ hour: 16 }).toFormat('HH');

function hourEight() {
  if (hour > eightOClock) {
    eight.classList.add('past');
  } else if (hour == eightOClock) {
    eight.classList.add('present');
  } else {
    eight.classList.add('future');
  }
};
hourEight();

function hourNine() {
  if (hour > nineOClock) {
    nine.classList.add('past');
  } else if (hour == nineOClock) {
    nine.classList.add('present');
  } else {
    nine.classList.add('future');
  }
};
hourNine();

function hourTen() {
  if (hour > tenOClock) {
    ten.classList.add('past');
  } else if (hour == tenOClock) {
    ten.classList.add('present');
  } else {
    ten.classList.add('future');
  }
};
hourTen();

function hourEleven() {
  if (hour > elevenOClock) {
    eleven.classList.add('past');
  } else if (hour == elevenOClock) {
    eleven.classList.add('present');
  } else {
    eleven.classList.add('future')
  }
};
hourEleven();

function hourTwelve(){
  if (hour > twelveOClock) {
    twelve.classList.add('past');
  } else if (hour == twelveOClock){
    twelve.classList.add('present');
  } else {
    twelve.classList.add('future');
  }
};
hourTwelve();
function hourThirteen() {
  if (hour > thirteenHundred) {
    thirteen.classList.add('past');
  } else if (hour == thirteenHundred){
    thirteen.classList.add('present');
  } else {
    thirteen.classList.add('future');
  }
};
hourThirteen();
function hourfourteen() {
  if (hour > fourteenHundred) {
    fourteen.classList.add('past');
  } else if (hour == fourteenHundred) {
    fourteen.classList.add('present');
  } else {
    fourteen.classList.add('future');
  }
};
hourfourteen();
function hourFifteen() {
  if (hour > fifteenHundred) {
    fifteen.classList.add('past');
  } else if (hour == fifteenHundred) {
    fifteen.classList.add('present');
  } else { 
    fifteen.classList.add('future');
  }
};
hourFifteen();
function hourSixteen() {
  if (hour > sixteenHundred) {
    sixteen.classList.add('past');
  } else if (hour == sixteenHundred) {
    sixteen.classList.add('present');
  } else {
    sixteen.classList.add('future');
  }
};
hourSixteen();

// get inputs to persist in local storage
const eightEvent = document.getElementById('eight-event');
const nineEvent = document.getElementById('nine-event');
const tenEvent = document.getElementById('ten-event');
const elevenEvent = document.getElementById('eleven-event');
const twelveEvent = document.getElementById('twelve-event');
const thirteenEvent = document.getElementById('thirteen-event');
const fourteenEvent = document.getElementById('fourteen-event');
const fifteenEvent = document.getElementById('fifteen-event');
const sixteenEvent = document.getElementById('sixteen-event');

function persistInput(input) {
  let key = "input-" + eightEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

  eightEvent.addEventListener('input', function() {
    localStorage.setItem(key, eightEvent.value);
  });
}
persistInput(eightEvent);

function persistInputNine(input) {
  let key = "input-" + nineEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

  nineEvent.addEventListener('input', function() {
    localStorage.setItem(key, nineEvent.value);
  });
}
persistInputNine(nineEvent);

function persistInputTen(input) {
  let key = "input-" + tenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    tenEvent.addEventListener('input', function() {
    localStorage.setItem(key, tenEvent.value);
  });
}
persistInputTen(tenEvent);

function persistInput11(input) {
  let key = "input-" + elevenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    elevenEvent.addEventListener('input', function() {
    localStorage.setItem(key, elevenEvent.value);
  });
}
persistInput11(elevenEvent);

function persistInput12(input) {
  let key = "input-" + twelveEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    twelveEvent.addEventListener('input', function() {
    localStorage.setItem(key, twelveEvent.value);
  });
}
persistInput12(twelveEvent);

function persistInput13(input) {
  let key = "input-" + thirteenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    thirteenEvent.addEventListener('input', function() {
    localStorage.setItem(key, thirteenEvent.value);
  });
}
persistInput13(thirteenEvent);

function persistInput14(input) {
  let key = "input-" + fourteenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    fourteenEvent.addEventListener('input', function() {
    localStorage.setItem(key, fourteenEvent.value);
  });
}
persistInput14(fourteenEvent);

function persistInput15(input) {
  let key = "input-" + fifteenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    fifteenEvent.addEventListener('input', function() {
    localStorage.setItem(key, fifteenEvent.value);
  });
}
persistInput15(fifteenEvent);

function persistInput16(input) {
  let key = "input-" + sixteenEvent.id;

  let storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

    sixteenEvent.addEventListener('input', function() {
    localStorage.setItem(key, sixteenEvent.value);
  });
}

persistInput16(sixteenEvent);