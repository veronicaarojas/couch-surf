const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

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
function showReviewTotal (value : number, name: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : ""
    reviewTotalDisplay.innerHTML = 'review total' + value.toString() + '| last reviewer:' + name + iconDisplay
}

showReviewTotal(reviews.length, recentReviewer(reviews).name, recentReviewer(reviews).loyaltyUser)

function recentReviewer(reviews : any) {
    reviews.sort((a : any, b : any) => {
        const dateA : any = new Date(a.date);
        const dateB : any = new Date(b.date);
        
        return dateA - dateB;
    });
    
    return reviews[0];


}

const you: {
  userName: string;
  isReturning: boolean
} = {
  userName: 'Bobby',
  isReturning: true,
}


function populateUser(isReturning : boolean, userName : string ) {
  if (isReturning){
      returningUserDisplay.innerHTML = 'back'
  }
  userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)

