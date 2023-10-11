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








const you : {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age : number;
  stayedAt: string[];
} = {
  firstName: 'Bobby',
  lastName: 'Brown',
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
contact: string; 
isAvailiable: boolean;
}[] = [
  {
    image: "",
    title : "",
    price: 1,
    location: {
      firstLine: "",
      city: "",
      postcode: "",
      country: "",
    },
    contact: "",
    isAvailiable: true

  }
]


populateUser(you.isReturning, you.firstName);
showReviewTotal(reviews.length, recentReviewer(reviews).name, recentReviewer(reviews).loyaltyUser);

