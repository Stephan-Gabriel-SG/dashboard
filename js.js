function show(event) {
    let inputSearch = document.getElementById('input-search').value;

    if (inputSearch && inputSearch.trim().length > 0) {
        alert('Thanks for your search: ' + inputSearch);
    } else {
        document.getElementById('input-search').focus();
    }
}

function showAlert(opt) {
    const author = "NANDRASANTSOA Stéphan Gabriel";
    
    const messages = [
        `🚀 Awesome choice! Option ${opt} has been selected!`,
        `🎉 Nice one! You just clicked on option ${opt}!`,
        `🔥 Option ${opt} activated! Ready for an adventure?`,
        `😎 Boom! Option ${opt} is now in action! Let's go!`,
        `🛠️ Done! Option ${opt} is now being used!`
    ];
    
    // Pick a random message and add your name
    const randomMessage = messages[Math.floor(Math.random() * messages.length)] + `\n\n- Author : ${author}`;

    alert(randomMessage);
}
