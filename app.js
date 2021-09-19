const fetchBitcoinPrice = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        console.log(res.data.joke)
        return res.data.joke
    } catch (e) {
        console.log("ERROR!", e)
    }
};

async function getJoke() {
    const jokeText = await fetchBitcoinPrice();
    document.querySelector('#dad-joke').innerHTML = jokeText;
}
getJoke();
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', getJoke);
}