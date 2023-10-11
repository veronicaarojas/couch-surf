const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
function showReviewTotal (value : number) {
    reviewTotalDisplay.innerHTML = value.toString()
}

showReviewTotal(reviews.length, recentReviewer(reviews))

function recentReviewer(reviews : any) {
    reviews.sort((a : any, b : any) => {
        const dateA : any = new Date(a.date);
        const dateB : any = new Date(b.date);
        
        return dateA - dateB
    });
    
    return reviews[0].name
}