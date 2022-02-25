const loadData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => loadBuddies(data))
}

loadData()

const loadBuddies = (buddies) => {
    // console.log(buddies.results)
    const displayBuddy = document.getElementById('buddy')
    const theBuddies = buddies.results
    for (const buddy of theBuddies) {
        const p = document.createElement('p')
        p.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;

        displayBuddy.appendChild(p)

        console.log(buddy.name)
    }
}