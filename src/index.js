const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const runtime = document.querySelector('#runtime');
const showtime = document.querySelector('#showtime');
const ticketNum = document.querySelector('#ticket-num');
const films = document.querySelector('#films');

const buyButton = document.getElementById('buy-ticket');

async function fetchCount() {
    let req = await fetch('http://localhost:3000/films/1');
    let res = await req.json();
    count = (res.capacity - res.tickets_sold)
    ticketNum.append(count);                    // deleted the 'x' in the HTML, crude!!!
}

fetchCount();

async function fetchData() {
    let req = await fetch('http://localhost:3000/films/1');
    let res = await req.json();
    title.innerText = res.title;
    poster.src = res.poster;
    runtime.innerText = res.runtime + ' minutes';
    showtime.innerText = res.showtime;
}

fetchData();

async function fetchFilms() {
    let req = await fetch('http://localhost:3000/films');
    let res = await req.json();
    res.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = element.title;
        films.append(li);
    })
}

fetchFilms();

buyButton.addEventListener('click', () => {
    if (count > 0) {
        count--
    }
    ticketNum.innerText = `${count}`
});
