let currentRule = 0;
const startBtn = document.getElementById('startBtn');
const progressBar = document.getElementById('progressBar');
const statusText = document.getElementById('statusText');
const modal = document.getElementById('verifyModal');
const ruleContainer = document.getElementById('rule-container');
const interactiveZone = document.getElementById('interactive-zone');

// 1. Initial Fake Loading Logic
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 99) {
            clearInterval(interval);
            statusText.innerText = "Error: Manual Verification Required";
            setTimeout(() => { modal.style.display = 'block'; nextRule(); }, 1000);
        } else {
            progress += (progress > 80) ? 0.1 : 1; // Slow down at the end
            progressBar.style.width = progress + '%';
            statusText.innerText = `Extracting Assets: ${Math.floor(progress)}%`;
        }
    }, 40);
});

// 2. The Rule Engine
function nextRule() {
    currentRule++;
    interactiveZone.innerHTML = ""; // Clear old task

    const ruleDiv = document.createElement('div');
    ruleDiv.className = 'rule-box';

    if (currentRule === 1) {
        ruleDiv.innerHTML = "<strong>Rule 1:</strong> Type 'I AM HUMAN' backwards to verify consciousness.";
        ruleContainer.prepend(ruleDiv);

        const input = document.createElement('input');
        input.placeholder = "Type here...";
        input.oninput = (e) => {
            if (e.target.value.toUpperCase() === "NAMUH MA I") {
                input.disabled = true;
                nextRule();
            }
        };
        interactiveZone.appendChild(input);

    } else if (currentRule === 2) {
        ruleDiv.innerHTML = "<strong>Rule 2:</strong> Connection unstable. Click the 'BOOST' button to generate 100 units of kinetic power.";
        ruleContainer.prepend(ruleDiv);

        let power = 0;
        const btn = document.createElement('button');
        btn.innerText = `BOOST (Power: ${power})`;
        btn.className = "main-btn";

        // Power drains over time
        const drain = setInterval(() => {
            power = Math.max(0, power - 2);
            btn.innerText = `BOOST (Power: ${power})`;
        }, 100);

        btn.onclick = () => {
            power += 10;
            if (power >= 100) {
                clearInterval(drain);
                nextRule();
            }
        };
        interactiveZone.appendChild(btn);

    } else if (currentRule === 3) {
        ruleDiv.innerHTML = "<strong>Rule 3:</strong> Final Confirmation. Click the button below.";
        ruleContainer.prepend(ruleDiv);

        const runBtn = document.createElement('button');
        runBtn.innerText = "FINISH DOWNLOAD";
        runBtn.className = "evasive-btn";

        // The button "runs away" from the mouse
        runBtn.onmouseover = () => {
            runBtn.style.top = Math.random() * 80 + "%";
            runBtn.style.left = Math.random() * 80 + "%";
        };

        runBtn.onclick = () => alert("Impossible! You caught it! (Just kidding, Rule 4 is loading...)");
        document.body.appendChild(runBtn);
        let currentRule = 0;
        const startBtn = document.getElementById('startBtn');
        const progressBar = document.getElementById('progressBar');
        const statusText = document.getElementById('statusText');
        const modal = document.getElementById('verifyModal');
        const ruleContainer = document.getElementById('rule-container');
        const interactiveZone = document.getElementById('interactive-zone');

// 1. Initial Fake Loading Logic
        startBtn.addEventListener('click', () => {
            startBtn.style.display = 'none';
            let progress = 0;
            const interval = setInterval(() => {
                if (progress >= 99) {
                    clearInterval(interval);
                    statusText.innerText = "Error: Manual Verification Required";
                    setTimeout(() => { modal.style.display = 'block'; nextRule(); }, 1000);
                } else {
                    progress += (progress > 80) ? 0.1 : 1; // Slow down at the end
                    progressBar.style.width = progress + '%';
                    statusText.innerText = `Extracting Assets: ${Math.floor(progress)}%`;
                }
            }, 40);
        });

// 2. The Rule Engine
        function nextRule() {
            currentRule++;
            interactiveZone.innerHTML = ""; // Clear old task

            const ruleDiv = document.createElement('div');
            ruleDiv.className = 'rule-box';

            if (currentRule === 1) {
                ruleDiv.innerHTML = "<strong>Rule 1:</strong> Type 'I AM HUMAN' backwards to verify consciousness.";
                ruleContainer.prepend(ruleDiv);

                const input = document.createElement('input');
                input.placeholder = "Type here...";
                input.oninput = (e) => {
                    if (e.target.value.toUpperCase() === "NAMUH MA I") {
                        input.disabled = true;
                        nextRule();
                    }
                };
                interactiveZone.appendChild(input);

            } else if (currentRule === 2) {
                ruleDiv.innerHTML = "<strong>Rule 2:</strong> Connection unstable. Click the 'BOOST' button to generate 100 units of kinetic power.";
                ruleContainer.prepend(ruleDiv);

                let power = 0;
                const btn = document.createElement('button');
                btn.innerText = `BOOST (Power: ${power})`;
                btn.className = "main-btn";

                // Power drains over time
                const drain = setInterval(() => {
                    power = Math.max(0, power - 2);
                    btn.innerText = `BOOST (Power: ${power})`;
                }, 100);

                btn.onclick = () => {
                    power += 10;
                    if (power >= 100) {
                        clearInterval(drain);
                        nextRule();
                    }
                };
                interactiveZone.appendChild(btn);

            } else if (currentRule === 3) {
                ruleDiv.innerHTML = "<strong>Rule 3:</strong> Final Confirmation. Click the button below.";
                ruleContainer.prepend(ruleDiv);

                const runBtn = document.createElement('button');
                runBtn.innerText = "FINISH DOWNLOAD";
                runBtn.className = "evasive-btn";

                // The button "runs away" from the mouse
                runBtn.onmouseover = () => {
                    runBtn.style.top = Math.random() * 80 + "%";
                    runBtn.style.left = Math.random() * 80 + "%";
                };

                runBtn.onclick = () => alert("Impossible! You caught it! (Just kidding, Rule 4 is loading...)");
                document.body.appendChild(runBtn);
            }
        }
    }
}