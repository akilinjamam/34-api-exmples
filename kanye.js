const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayingData(data))
}





const displayingData = (quote) => {

    const blockContainer = document.getElementById('quote').style.display = 'block';
    const showquote = document.getElementById('show')



    showquote.innerHTML = `
    <p> quotes : ${showquote.innerText = quote.quote} </p>
    `
    blockContainer.appendChild(showquote)



}





