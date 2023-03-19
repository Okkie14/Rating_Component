const ratingOne = document.getElementById('one-star');
const ratingTwo = document.getElementById('two-star');
const ratingThree = document.getElementById('three-star');
const ratingFour = document.getElementById('four-star');
const ratingFive = document.getElementById('five-star');

ratingArray = [ratingOne, ratingTwo, ratingThree, ratingFour, ratingFive    ]

function changeColor() {
    ratingArray.forEach(rating => {
        if (rating.classList.contains("selected")) {
            rating.classList.remove('selected')
        }
    });
}

const answer = document.getElementById('answer');

ratingOne.addEventListener('click', () => {
    changeColor()
    ratingOne.classList.add('selected')
    answer.innerHTML = ratingOne.textContent
})

ratingTwo.addEventListener('click', () => {
    changeColor()
    ratingTwo.classList.add('selected')
    answer.innerHTML = ratingTwo.textContent
})

ratingThree.addEventListener('click', () => {
    changeColor()
    ratingThree.classList.add('selected')
    answer.innerHTML = ratingThree.textContent
})

ratingFour.addEventListener('click', () => {
    changeColor()
    ratingFour.classList.add('selected')
    answer.innerHTML = ratingFour.textContent
})

ratingFive.addEventListener('click', () => {
    changeColor()
    ratingFive.classList.add('selected')
    answer.innerHTML = ratingFive.textContent
})

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    const thankYouCard = document.getElementById('thank-card');

    thankYouCard.classList.add('active');
})