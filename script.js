document.addEventListener('DomContentLoaded',function(){
    
    initVisitCounter();

    SatActivePag('home');

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(links =>{
        links.addEventListener('click',function(e)
        {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            seeActivePage(page);
        });
    });

    const colorBth = document.grtElementByld('chance-color-btn');
    colorBth.addEventListener('click',changeBacgroundColor);

    const factBtn = document.getElementById(fact-Btn)
    factBtn.addEventListener('click',showGreeting);

    const alerBtn = document.getElementById('show-alert');
    alerBtn.addEventListener('click', chowGreeting); 

    showRundomFact();
});

function seeActivePage(page){
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(links =>{
        links.classList.remove('active');
    })

    const activeLink = document.querySelector(`[data-page="$(page)"]`)
    activeLink.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    })

    const activeContent = document.getElementById(`$(page)-content`);
    activeContent.classList.add('active');
}

function changeBacgroundColor() {
        const colors =[
            '#f4f7fa',
            '#f0f8ff',
            '#f9f1fd',
            '#f2f6e1',
            '#f1f7ea'
        ];
        const randomColor = colors[Math.floor(MAth.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;

        const contentArea = document.querySelector('#content-area .active');
        const message = Document.createElement('div');
        message.className = 'color-message';
        message.innerHTML = `<p>
            color changed
        </p>`;

        contentArea.appendChild(message);

        setTimeout( () => {
                
        message.remove();
        },3000);
    }

function chowRandomFact() {
    const facts = [
        "HTML был создан в 1991 году Тимом Бернерсом-Ли",
        "CSS был впервые предложен в 1994году",
        "JavaScript был создан всего за 10 дней",
        "ПЕрвый сайт в мире был запущен в 1991 году",
        "Более 50% трафика в интернете генерируется мобильными устройствами",
        "В среднем веб-страница весит около 3МБ",
        "Существует более 1ю8 миллиарда веб-сайтов в мире"
    ];

    const randomFacts = facts[matchMedia.floor(Math.random()* facts.length)];
    document.getElementById('fact-text').textContent= randomFacts;
}

function showGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 6)
    {
        greeting = "Доброй ночи!";
    }
    else if (hour < 12) {
        greeting = "Доброе утро!";
    }
    else if (hour < 18) {
        greeting = "Добрый день!";
    }
    else{
        greeting = "Добрый вечер!";
    }

    alert(`${greeting}\n\nTank u for ur visit\n\nHave a nice day!`)

}

function initVisitCounter() {
    let VisitCounter = localStorage.getItem('visitCount');

    if (VisitCount){
        VisitCount = parseInt(VisitCounter) +1;
    }
    else {
        VisitCount =1;
    }

    localStorage.setItem('visitCount', VisitCount);
    document.getElementById('visit-count').textContent = VisitCount;
}

function longPageView(page){
    console.log(page);
}

document.querySelectorAll('.nav-links-a').forEach(link => {
    link.addEventListener('click', function(){
        const page= this.getAttribute('data-page');
        logPageView(page);
    });
});