// Henter DOM-elementer som trengs
const resourceContent = document.getElementById('resource-content');
const buttons = document.querySelectorAll('nav button');

// Hovedfunksjon for å vise ressurser for valgt kategori
function showResources(category) {
    // Filtrer ressursene basert på valgt kategori
    const selectedResources = resources.filter(res => res.category === category);
    
    // Oppdater aktiv tilstand på navigasjonsknappene
    buttons.forEach(btn => {
        btn.classList.remove('active'); // Fjern active-klasse fra alle knapper
        if(btn.getAttribute('data-category') === category) {
            btn.classList.add('active'); // Legg til active-klasse på valgt knapp
        }
    });

    // Generer HTML for de filtrerte ressursene
    const content = selectedResources.map(res => `
        <article>
            <h2>${res.category}</h2>
            <p>${res.text}</p>
            <ul>
                ${res.sources.map(src => `
                    <li><a href="${src.url}" target="_blank">${src.title}</a></li>
                `).join('')}
            </ul>
        </article>
    `).join('');
    
    // Sett inn generert HTML i DOM
    resourceContent.innerHTML = content;
}

// Vis HTML-kategorien når siden lastes
showResources('HTML');

// Legg til click event listeners på alle navigasjonsknapper
buttons.forEach(button => {
    button.addEventListener('click', () => {
        showResources(button.getAttribute('data-category'));
    });
});
