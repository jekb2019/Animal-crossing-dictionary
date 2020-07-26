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
}

document.querySelector("#search-button").addEventListener('click',searchFromAPI);

function searchFromAPI(){
    let hemi, month;
    if(document.getElementById('northern-hemisphere').checked){
        hemi = "north";
    }else{
        hemi = "south";
    }
    month = document.getElementById('month-list').value;
}





fetchFromAPI();

function fetchFromAPI() {
    fetch("http://acnhapi.com/v1/fish")
        .then((response) => response.json())
        .then((data) => { console.log(data) });
}
