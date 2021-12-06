const alertBanner = document.getElementById('alert');
const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");
const firstBtn = document.getElementById("firstBtn");
const btns = document.getElementsByClassName("time");

 function resetBtns() {
     for (let i = 0; i < btns.length; i++) {
         btns[i].style.backgroundColor = "white";
         btns[i].style.color = "black";
     } 
 }
 function btnOnclick(param) {
     resetBtns();
     btns[param].style.backgroundColor = "rgb(61, 207, 61)";
     btns[param].style.color = "white";
     btns[param].style.outline = 0;   
 }   
window.addEventListener('load', (event) => {
    firstBtn.style.backgroundColor = "rgb(61, 207, 61)";
    firstBtn.style.color = "white";
    firstBtn.style.outline = 0;
  });

// alert banner

alertBanner.innerHTML =
`
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have unread messages</p>
        <p class="alert-banner-close">x</p>
    </div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});
send.addEventListener('click', () => {
   if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
         alert(`Message successfully sent to: ${user.value}`);
    }
});

var trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        fill:'start',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(68, 68, 231, 0.2)',
        borderWidth: 1,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5, animation: {
      duration: 0
    },
    tension: 0.4,
    scales: {
      y: {
          beginAtZero: true
      }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let trafficChart = new Chart(trafficCanvas, {
     type: 'line',
     data: trafficData,
    options: trafficOptions
 });
const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [0, 160, 100, 90, 200, 250],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});
const mobileCanvas = document.getElementById('mobile-chart');
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};
const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// ON OFF 
function switchOnOff (arrIndex) {
    var ObjSpan = document.getElementsByClassName('status');
    
    if (ObjSpan[arrIndex].innerText == 'ON') {
        ObjSpan[arrIndex].innerText = 'OFF';
        ObjSpan[arrIndex].style.left = "40px";
        ObjSpan[arrIndex].style.fontWeight = "bolder";
        ObjSpan[arrIndex].style.color = "black";
    }
    else
    { if (ObjSpan[arrIndex].innerText == 'OFF')
        {
            ObjSpan[arrIndex].innerText ='ON';
            ObjSpan[arrIndex].style.left = "8px";
            ObjSpan[arrIndex].style.fontWeight = "bolder";
            ObjSpan[arrIndex].style.color = "white";
        }
    }
}
