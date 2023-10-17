const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
import { Permissions, Loyalty } from './enums'
import { showReviewTotal, populateUser, recentReviewer, showDetails, getTopTwoReviews } from "./utils";
import { Property, Review } from './interfaces'

const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: Loyalty.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: Loyalty.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: Loyalty.BRONZE_USER,
        date: '27-03-2021',
    },
]



const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 23,
  stayedAt: [ 'florida-home', 'oman-flat', 'tokyo-bungalow']
}



//properties 

const properties : Property[] = [
  {
    image: "",
    title : "London Flat",
    price: 45,
    location: {
      firstLine: "New Street",
      city: "London",
      postcode: "W1",
      country: "United Kingdom",
    },
    contact: [ +1123495082908 ,"londonflat@couchsurf.com"],
    isAvailiable: true
  },
  {
    image: "",
    title : "Marbella Apartment",
    price: 30,
    location: {
      firstLine: "Main Road",
      city: "Marbella",
      postcode: "E12",
      country: "Spain",
    },
    contact: [ +1123495082908 ,"marbellaapartment@couchsurf.com"],
    isAvailiable: false
  },
  {
    image: "",
    title : "New York Penthouse",
    price: 45,
    location: {
      firstLine: "81st Street",
      city: "New York",
      postcode: "1234",
      country: "United States",
    },
    contact: [ +1123495082908, "newyorkpenthouse@couchsurf.com"],
    isAvailiable: true
  }
]


populateUser(you.isReturning, you.firstName);
showReviewTotal(reviews.length, recentReviewer(reviews).name, recentReviewer(reviews).loyaltyUser);





//add the properties 

for(let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  showDetails(you.permissions, card, properties[i].price)
  propertyContainer.appendChild(card)
}

let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))


let currentLocation : [string, string, number] = [ "London", '17:47', 18 ]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C'



class MainProperty {
  src: string
  title: string
  reviews: Review[]
  constructor( src: string, title: string, reviews: Review[]) {
      this.src = src
      this.title = title
      this.reviews = reviews
  }
}

let yourMainProperty = new MainProperty(
  'images/italian-property.jpg', 
  'Italian House',
  [{
      name: 'Olive',
      stars: 5,
      loyaltyUser: Loyalty.GOLD_USER,
      date: '12-04-2021'
  }] )

  const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)