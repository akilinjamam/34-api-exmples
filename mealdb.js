const loadData = () => {
    const inputText = document.getElementById('input-field');
    const inputValue = inputText.value;

    inputText.value = ''
    if (inputValue == '') {
        document.getElementById('error').style.display = 'block'
    }
    // making input value dynamic.
    else if (inputValue != '') {

        document.getElementById('error').style.display = 'none'
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`

        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))

    }


}

const displayMeals = (meals) => {
    // console.log(meals)
    const showingGridDiv = document.getElementById('show-grid')
    showingGridDiv.textContent = ''

    if (meals.length == 0) {

    }

    else if (meals.length != 0) {
        document.getElementById('error').style.display = 'none'
        meals.forEach(showMeals => {
            // console.log(showMeals);


            const newDiv = document.createElement('div');
            newDiv.classList.add('col');

            newDiv.innerHTML = `
                <div class="card">
                        <img onclick="convertDetails(${showMeals.idMeal})" src="${showMeals.strMealThumb}" class="card-img-top" alt="...">
        
                        <div class="card-body">
        
                        <h5 class="card-title">${showMeals.strMeal}</h5>
        
                        <p class="card-text">${showMeals.strInstructions.slice(0, 200)}</p>
                 </div>
        
                `


            showingGridDiv.appendChild(newDiv)


        })

    }




}


const convertDetails = convert => {
    const secondUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${convert}`
    fetch(secondUrl)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]))
}


const displayDetails = detail => {
    // console.log(detail)

    const singleCard = document.getElementById('single-card');
    singleCard.textContent = ''
    const newSingleDiv = document.createElement('div');
    newSingleDiv.classList.add('card');

    newSingleDiv.innerHTML = `
    <img src="${detail.strMealThumb}" class="card-img-top" alt="...">

    <div class="card-body">

    <h5 class="card-title">${detail.strMeal}</h5>
    <p class="card-text">${detail.strInstructions.slice(0, 200)}</p>
    <a href="${detail.strYoutube}" class="btn btn-primary">Go somewhere</a>

    </div>
    `

    singleCard.appendChild(newSingleDiv)
}