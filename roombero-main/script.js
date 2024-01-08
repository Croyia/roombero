const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    item.addEventListener('click', () => {
        const li = item.parentElement;

        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });

        li.classList.add('active');

        // Store the active item in sessionStorage for persistence during page load
        sessionStorage.setItem('activeMenuItem', item.getAttribute('href'));
    });
});

// Check sessionStorage on page load and set the active item
document.addEventListener('DOMContentLoaded', () => {
    const activeMenuItem = sessionStorage.getItem('activeMenuItem');
    if (activeMenuItem) {
        const activeLink = document.querySelector(`#sidebar .side-menu.top li a[href="${activeMenuItem}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add('active');
        }
    }
});





// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

//FILTER

  
  document.addEventListener("DOMContentLoaded", function() {
	var filterBtn = document.getElementById("filterBtn");
	var filterDropdown = document.getElementById("filterDropdown");
	var tableRows = document.querySelectorAll(".table-data tbody tr");
  
	filterBtn.addEventListener("click", function() {
	  filterDropdown.style.display = (filterDropdown.style.display === "block") ? "none" : "block";
	});
  
	document.addEventListener("click", function(event) {
	  if (!event.target.matches("#filterBtn") && !event.target.closest("#filterDropdown")) {
		filterDropdown.style.display = "none";
	  }
	});
  
	document.querySelectorAll("#filterDropdown a").forEach(function(option) {
	  option.addEventListener("click", function() {
		var selectedOption = this.textContent.trim().toLowerCase();
		filterTableData(selectedOption);
		filterDropdown.style.display = "none";
	  });
	});
  
	function filterTableData(option) {
	  tableRows.forEach(function(row) {
		var status = row.querySelector(".status").textContent.trim().toLowerCase();
		if (option === "all" || status === option) {
		  row.style.display = "table-row";
		} else {
		  row.style.display = "none";
		}
	  });
	}
  });
  






const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('theme');
const filterDropdown = document.getElementById('filterDropdown');


switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
		filterDropdown.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark');
		filterDropdown.classList.remove('dark-mode');
	}
})

//circle

// Function to create circular progress bar
function createCircularProgressBar(progressBarContainer, endValue, speed) {
	let progressBar = progressBarContainer.querySelector(".circular-progress");
	let valueContainer = progressBarContainer.querySelector(".value-container");
  
	let progressValue = 0;
  
	let progress = setInterval(() => {
	  progressValue++;
	  valueContainer.textContent = `${progressValue}%`;
	  progressBar.style.background = `conic-gradient(
		#2AE006 ${progressValue * 3.6}deg,
		#afcfa9 ${progressValue * 3.6}deg
	  )`;
	  if (progressValue === endValue) {
		clearInterval(progress);
	  }
	}, speed);
  }
  
  // Example usage:
  const cameraProgressBarContainer = document.querySelector('.box-info li:nth-child(1)');
  createCircularProgressBar(cameraProgressBarContainer, 100, 50);
  
  const smokeProgressBarContainer = document.querySelector('.box-info li:nth-child(2)');
  createCircularProgressBar(smokeProgressBarContainer, 80, 30);
  
  const infraredProgressBarContainer = document.querySelector('.box-info li:nth-child(3)');
  createCircularProgressBar(infraredProgressBarContainer, 90, 40);
  
  const crossProgressBarContainer = document.querySelector('.box-info li:nth-child(4)');
  createCircularProgressBar(crossProgressBarContainer, 70, 25);

  //calendar

  const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});
  

daysTag.addEventListener("click", (event) => {
	const selectedDate = event.target.dataset.date;
	if (selectedDate) {
	  const eventContainer = event.target.querySelector(".event-container");
	  const userEvent = prompt("Enter your event:");
	  eventContainer.innerText = userEvent;
	}
  });

  function togglePopup(){
	document.getElementById("reportpop").classList.toggle("active");
}