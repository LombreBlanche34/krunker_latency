let target = document.querySelector("#ammoVal");

if (target) {
    let lastValue = target.innerText; // Save the initial value

    let observer = new MutationObserver(() => {
        let newValue = target.innerText;
        if (newValue !== lastValue) { // Check if the text has changed
            lastValue = newValue; // Update the last known value
            alert("Text changed!\nNew text: " + newValue + "\nTimestamp: " + Date.now());
        }
    });

    observer.observe(target, { childList: true, subtree: true, characterData: true });

    alert("SCRIPT OK - Observation started on #ammoVal!");
} else {
    alert("ERROR - Element #ammoVal not found! TRY REMOVE CSS");
}
