const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
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



const switchMode = document.getElementById('switch-mode');
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