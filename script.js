function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
}

document.querySelector('.hamburger').addEventListener('click', function(e){
  e.preventDefault();
  toggleMenu();
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

slider.oninput = function() {
  output.innerHTML = slider.value;
}

$('slider').change(function (){
    $(this).css('height', '20px')
})

$('input[type="range"]').change(function () {
    var val = ($('input[type="range"]').val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    var percentVal = val * $(this).width();
    $("#demo").css('margin-left', percentVal);
    output.innerHTML = "Days: " + slider.value;

    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #ff6600), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')'
                );
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4

            // 5
            label: "Signups",

            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]

    },
    options: {
      legend: {
        display: false,
      }
    }
});

// OPEN AND CLOSE MODAL ADDBANNERS //

var button = document.getElementById('bannersBtn');
var button1= document.getElementById('bannersBtn1')
var modal = document.querySelector('.modalAddBanners');
var iconX = document.querySelector('.modalAddBanners .icon-close');

console.log(button);

function closeModal() {
  modal.style.display = 'none';
}

function openModal() {
  modal.style.display = 'flex';
}

button.addEventListener("click", openModal);
button1.addEventListener('click', openModal);
iconX.addEventListener("click", closeModal);
modal.addEventListener("click", function(e) {
  if(e.target.className === 'modalAddBanners') closeModal();
});

// OPEN AND CLOSE MODAL ADDURL //

var buttonUrl = document.getElementById('linksBtn');
var buttonUrl1 = document.getElementById('linksBtn1')
var modalUrl = document.querySelector('.modalAddUrl');
var iconXUrl = document.querySelector('.modalAddUrl .icon-close');

function closeModalUrl() {
  modalUrl.style.display = 'none';
}

function openModalUrl() {
  modalUrl.style.display = 'flex';
}

buttonUrl.addEventListener("click", openModalUrl);
buttonUrl1.addEventListener('click', openModalUrl);
iconXUrl.addEventListener ("click", closeModalUrl);
modalUrl.addEventListener("click", function(e) {
  if(e.target.className === 'modalAddUrl') closeModalUrl();
});

//MODAL ONLINE CHAT//

var modalOnLine = document.querySelector('.modalOnLine');
var iconXOnLine = document.querySelector('.modalOnLine .icon-close');
var userinfo = document.querySelector(".user-info");

function closeModalOnLine() {
  modalOnLine.style.display = 'none';
}

function openModalOnLine() {
  modalOnLine.style.display = 'flex';
}

modalOnLine.addEventListener("click", function(e) {
  if(e.target.className === 'modalOnLine') closeModalOnLine();
});

iconXOnLine.addEventListener ("click", closeModalOnLine);
userinfo.addEventListener("click", openModalOnLine)

// FLAGS

var flagChosen = document.querySelector(".modalAddBanners .flagChosen");
var flags = document.querySelector(".modalAddBanners .flags");
var flagInput = document.querySelector(".modalAddBanners .flagList input");


function toggleFlagsList() {
  if(flags.style.display !== "block") flags.style.display = "block"
  else flags.style.display = "none"
}

function pickFlag(elem) {
  flagChosen.innerHTML = elem.innerHTML;
  flagInput.value = elem.dataset.flag;
}

flagChosen.addEventListener("click", toggleFlagsList)

flags.addEventListener("click", function(e) {
  pickFlag(e.target)
  toggleFlagsList();
})

pickFlag(flags.querySelector('li'))

// FLAGS URL

var flagChosenUrl = document.querySelector(".modalAddUrl .flagChosen");
var flagsUrl = document.querySelector(".modalAddUrl .flags");
var flagInputUrl = document.querySelector(".modalAddUrl .flagList input");


function toggleFlagsListUrl() {
  if(flagsUrl.style.display !== "block") flagsUrl.style.display = "block"
  else flagsUrl.style.display = "none"
}

function pickFlagUrl(elem) {
  flagChosenUrl.innerHTML = elem.innerHTML;
  flagInputUrl.value = elem.dataset.flag;
}

flagChosenUrl.addEventListener("click", toggleFlagsListUrl)

flagsUrl.addEventListener("click", function(e) {
  pickFlagUrl(e.target)
  toggleFlagsListUrl();
})

pickFlag(flags.querySelector('li'))
