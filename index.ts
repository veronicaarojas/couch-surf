const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
import { Permissions } from './enums'
import { showReviewTotal, populateUser, recentReviewer } from "./utils";

const reviews : {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string
}[] = [
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



const you = {
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 23,
  stayedAt: [ 'florida-home', 'oman-flat', 'tokyo-bungalow']
}


//properties 

const properties : {
image : string;
title : string;
price : number;
location : {
  firstLine : string;
  city : string;
  postcode: string;
  country: string;
}
contact: [number, string]; 
isAvailiable: boolean;
}[] = [
  {
    image: "",
    title : "London Flat",
    price: 17,
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
    price: 20,
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
    price: 30,
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
  propertyContainer.appendChild(card)
}


let currentLocation : [string, string, number] = [ "London", '17:47', 18 ]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°C'

