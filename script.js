const diaryEntries = [];

// Function to display diary entries on the Journal page
function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = ''; // Clear previous entries

    diaryEntries.forEach((entry, index) => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');

        const titleElement = document.createElement('h2');
        titleElement.textContent = entry.title;

        const timestampElement = document.createElement('p');
        timestampElement.classList.add('timestamp');
        timestampElement.textContent = entry.timestamp;

        const contentElement = document.createElement('p');
        contentElement.textContent = entry.content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = '✖';
        deleteButton.onclick = () => {
            diaryEntries.splice(index, 1);
            displayEntries();
        };

        entryElement.appendChild(titleElement);
        entryElement.appendChild(timestampElement);
        entryElement.appendChild(contentElement);
        entryElement.appendChild(deleteButton);
        entriesContainer.appendChild(entryElement);
    });
}

// Function to add a new diary entry
document.getElementById('entry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const timestamp = new Date().toLocaleString();

    const newEntry = { title, content, timestamp };
    diaryEntries.push(newEntry);
    displayEntries();

    document.getElementById('entry-form').reset();
});

// Function to display a daily quote
function displayQuote() {
    const quotes = [
        "“The only way to achieve the impossible is to believe it is possible.” — Charles Kingsleigh",
        "“Don’t watch the clock; do what it does. Keep going.” — Sam Levenson",
        "“Success usually comes to those who are too busy to be looking for it.” — Henry David Thoreau",
        "“Don’t be afraid to give up the good to go for the great.” — John D. Rockefeller",
        "“I find that the harder I work, the more luck I seem to have.” — Thomas Jefferson"
    ];
    const quoteElement = document.getElementById('daily-quote');
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// Display diary entries and quote when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayEntries();
    setTimeout(displayQuote, 3000);  // Show the quote after 3 seconds
});
