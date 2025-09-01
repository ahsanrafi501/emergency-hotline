const allHearts = document.querySelectorAll('.heart-icon');
const countDisplay = document.getElementById('counter');

let count = 0;

function incrementCounter() {
  count++;
  countDisplay.innerText = count;
}
for (let heart of allHearts) {
  heart.addEventListener('click', incrementCounter);
}






function callCoin(service, number) {
  let coin = 20;
  const availableCoin = parseInt(document.getElementById('coins').innerText);
  if (availableCoin < coin) {
    alert('Recharge Your Coin');
    return;
  }
  const newCoin = availableCoin - coin;
  alert('Service: ' + service + 'Number: ' + 999);
  document.getElementById('coins').innerText = newCoin;
  const date = new Date();
  const time = date.toLocaleTimeString();
  const callHistory = document.getElementById('history-added');
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <div class="mt-2 bg-slate-300 rounded-lg p-3">
                    <div class="flex justify-between">
                        <div class="">
                            <h2>${service}</h2>
                            <p>${number}</p>
                        </div>
                        <div>
                            <p>${time}</p>

                        </div>
                    </div>
                </div>
  `

  callHistory.appendChild(newDiv);

}





document.getElementById("card1-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'জাতীয় জরুরি সেবা';
  const number = 999;
  callCoin(services, number);
})

document.getElementById("card2-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'পুলিশ';
  const number = 999;
  callCoin(services, number);
})
document.getElementById("card3-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'ফায়ার সার্ভিস';
  const number = 999;
  callCoin(services, number);
})
document.getElementById("card4-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'অ্যাম্বুলেন্স';
  const number = 1994999999;
  callCoin(services, number);
})
document.getElementById("card5-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'নারী ও শিশু সহায়তা';
  const number = 109;
  callCoin(services, number);
})
document.getElementById("card6-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'দুদক';
  const number = 106;
  callCoin(services, number);
})
document.getElementById("card7-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'বিদ্যুৎ বিভ্রাট';
  const number = 16216;
  callCoin(services, number);
})
document.getElementById("card8-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'ব্র্যাক';
  const number = 16445;
  callCoin(services, number);
})
document.getElementById("card9-call-btn").addEventListener('click', function (e) {
  e.preventDefault();
  const services = 'বাংলাদেশ রেলওয়ে';
  const number = 163;
  callCoin(services, number);
})


// clear the history

document.getElementById("clear-history").addEventListener("click", function () {
  const callHistory = document.getElementById('history-added');
  const childCallHistory = callHistory.querySelectorAll('div');

  childCallHistory.forEach(div => div.remove());
})


const allCopyButtons = document.querySelectorAll('.copy-btn');
const countCopyElement = document.getElementById('copyCounter');

let copyCount = 0;


function handleCopyClick(event) {
  const button = event.target;
  const textToCopy = button.dataset.copy;
  navigator.clipboard.writeText(textToCopy).then(() => {

    copyCount++;

    if (countCopyElement) {
      countCopyElement.innerText = copyCount;
    }

    alert(`Copied: ${textToCopy}`);

  }).catch(err => {

    console.error('Could not copy text: ', err);
  });
}
for (let button of allCopyButtons) {
  button.addEventListener('click', handleCopyClick);
}








