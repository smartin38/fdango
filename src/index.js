// See the first movie's details, 
// including its 
    // poster(image), 
    // title, 
    // runtime, 
    // showtime, and 
    // available tickets when the page loads. 
    // The number of available tickets will need to be derived by subtracting the number of tickets_sold from the theater's capacity.
    // You will need to make a GET request to the following endpoint to retrieve the film data:
    
// See a menu of all movies on the left side of the page in the ul#films element when the page loads. (optional: you can style each film in the list by adding the classes film item to each li element.) There is a placeholder li in the ul#films element that is hardcoded in the HTML — feel free to remove that element by editing the HTML file directly, or use JavaScript to remove the placeholder element before populating the list.You will need to make a GET request to the following endpoint to retrieve the film data:

// Buy a ticket for a movie.After clicking the "Buy Ticket" button, I should see the number of available tickets decreasing on the frontend.I should not be able to buy a ticket if the showing is sold out(if there are 0 tickets available). No persistence is needed for this feature.
    // count --

const poster = document.querySelector('#poster');
const title = document.querySelector('#title');
const runtime = document.querySelector('#runtime');
const showtime = document.querySelector('#showtime');
const ticketNum = document.querySelector('#ticket-num');
const films = document.querySelector('#films');
const buyTicket = document.querySelector('#buy-ticket');

async function fetchData() {
    let req = await fetch('http://localhost:3000/films/1');
    let res = await req.json();
    // console.log('res', res);
    // console.log('res.title', res.title);
    title.innerText = res.title;
    // console.log('res.runtime', res.runtime);
    runtime.innerText = res.runtime + ' minutes';
    // console.log('res.showtime', res.showtime);
    showtime.innerText = res.showtime;
    // console.log('res.tickets_sold', res.tickets_sold); // come back to this
    // ticketNum.innerText = res.tickets_sold;
}

fetchData();

async function fetchFilms() {
    let req = await fetch('http://localhost:3000/films');
    let res = await req.json();
    // console.log('res', res);
    res.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = element.title;
        films.append(li);
    })
}

fetchFilms();

async function ticketCount() {
    let req = await fetch('http://localhost:3000/films/1');
    let res = await req.json();
    // console.log('res', res);
    buyTicket.addEventListener('click', (e) => {
        e.preventDefault();
        count = (res.capacity - res.tickets_sold);
        count --    
        ticketBuy = count;
        ticketNum.innerHTML = ticketBuy;
    });
}

ticketCount();

