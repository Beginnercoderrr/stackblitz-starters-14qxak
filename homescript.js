document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        "Calmness is the cradle of power.",
        "The best time for new beginnings is now.",
        "Peace comes from within.",
        "Let go of what you cannot control.",
        "Serenity is not freedom from the storm, but peace amidst the storm.",
        "Every moment is a fresh beginning.",
        "Do more things that make you forget to check your phone.",
        "Find joy in the journey."
    ];
    const quoteElement = document.getElementById('daily-quote');
    const today = new Date().getDate();
    const quote = quotes[today % quotes.length];
    quoteElement.textContent = quote;

    const entriesContainer = document.getElementById('home-entries');
    let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

    entries.forEach((entry, index) => {
        const entryElement = createEntryElement(entry, index);
        entriesContainer.appendChild(entryElement);
    });

    function createEntryElement(entry, index) {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');
        entryElement.innerHTML = `
            <h2>${entry.title}</h2>
            <p class="timestamp">${entry.timestamp}</p>
            <p>${entry.content}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        return entryElement;
    }

    entriesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.dataset.index;
            entries.splice(index, 1);
            localStorage.setItem('journalEntries', JSON.stringify(entries));
            entriesContainer.innerHTML = '';
            entries.forEach((entry, index) => {
                const entryElement = createEntryElement(entry, index);
                entriesContainer.appendChild(entryElement);
            });
        }
    });
});
