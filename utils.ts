const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { Loyalty, Permissions } from "./enums"
import { Review } from "./interfaces"

export function showReviewTotal(value: number, reviewer: string, isLoyalty: Loyalty) : void {
    const iconDisplay = isLoyalty === Loyalty.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML =   value.toString() + "Review " + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function recentReviewer(reviews : Review[]) {
  reviews.sort((a : any, b : any) => {
      const dateA : any = new Date(a.date);
      const dateB : any = new Date(b.date);
      
      return dateA - dateB;
  });
  
  return reviews[0];


}

export function showDetails(authorityStatus: (boolean | Permissions), element: HTMLDivElement, price : number) {
    if(authorityStatus) {
      const priceDisplay = document.createElement('div')
      priceDisplay.innerHTML = price.toString() + '/night'
      element.appendChild(priceDisplay)
    }}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function makeMultiple(value: number) : string {
    if (value > 1) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}