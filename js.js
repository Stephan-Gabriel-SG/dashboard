function show(event) {
    let inputSearch = document.getElementById('input-search').value;

    if (inputSearch && inputSearch.trim().length > 0) {
        alert('Thanks for your search: ' + inputSearch);
    } else {
        document.getElementById('input-search').focus();
    }
}    