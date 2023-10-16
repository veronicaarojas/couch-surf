const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
import { Permissions, Loyalty } from './enums'
import { showReviewTotal, populateUser, recentReviewer } from "./utils";

const reviews: any[] = [
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
        description: "Good location, kind host. Area was a bit quiet."
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

type Country = "United Kingdom" | "United States" | "Spain"

type Price = 45 | 30 | 25

//properties 

const properties : {
image : string;
title : string;
price : Price;
location : {
  firstLine : string;
  city : string;
  postcode: string;
  country: Country;
}
contact: [number, string]; 
isAvailiable: boolean;
}[] = [
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



function showDetails(authorityStatus: (boolean | Permissions), element: HTMLDivElement, price : number) {
if(authorityStatus) {
  const priceDisplay = document.createElement('div')
  priceDisplay.innerHTML = price.toString() + '/night'
  element.appendChild(priceDisplay)
}
}

//add the properties 

for(let i = 0; i < properties.length; i++) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = properties[i].title
  const image = document.createElement('img')
  image.setAttribute('src', properties[i].image)
  card.appendChild(image)
  propertyContainer.appendChild(card)
  showDetails(you.permissions, card, properties[i].price)
}


let currentLocation : [string, string, number] = [ "London", '17:47', 18 ]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C'

