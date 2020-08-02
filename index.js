

let tab = 'bugs';
searchFromAPI();


function openTab(e, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";

    tab = e.target.dataset.name;

    searchFromAPI();
}



const searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', searchFromAPI);

function searchFromAPI() {
    let hemi, month;
    if (document.getElementById("northern-hemisphere").checked) {
        hemi = "north";
    } else {
        hemi = "south";
    }
    month = document.getElementById('month-list').value;
    console.log("검색 결과:");
    console.log(hemi);
    console.log(month);
    console.log(tab);

    let obj = fetchFromAPI(tab, hemi, month);
}

function fetchFromAPI(tab, hemi, month){
    fetch("https://acnhapi.com/v1/"+tab)
    .then((response) => response.json())
    .then((data) => {
    display(data, tab, hemi, month); });

}


function display(data, tab, hemi, month){
    console.log('--data--')
    console.log(data);

    const container = document.getElementById(tab+"-results");
    container.innerHTML = "";
    for( var key in data){
        if(data.hasOwnProperty(key)){
            // 모든 selection에대한 프린트
            if(data[key].availability.isAllYear){
                container.innerHTML = container.innerHTML +"<img src="+ data[key].icon_uri+">"
            }

        }
    }
}

