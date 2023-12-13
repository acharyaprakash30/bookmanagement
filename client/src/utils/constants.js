import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'


import thecodebreaker from '../assests/thecodebreaker.jpeg'
import thinkandgrowritch from '../assests/thinkandgrowritch.jpg'
import atomichabit from '../assests/atomichabit.jpg'
import bhagwatgeeta from '../assests/bhagwatgeeta.jpeg'
import richdadpoordad from '../assests/richdadpoordad.jpeg'
import harrypoter from '../assests/harrypoter.jpg'

import { FaTiktok } from 'react-icons/fa'
import H1 from '../assests/H1.png'
import H2 from '../assests/H2.png'
import H3 from '../assests/H3.png'
import H4 from '../assests/H4.png'



export const APIURL = process.env.REACT_APP_API_URL

export const PopularBook =
    [
        { id: 'f1', image: thecodebreaker, name: "The Code Breaker  ", category: "Top Seller", price: 1500 },
        { id: 'f2', image: thinkandgrowritch, name: "Think And Grow Rich ", category: "Top Seller", price: 799 },
        { id: 'f3', image: atomichabit, name: "Atomic Habit", category: "Top Seller", price: 680 },
        { id: 'f4', image: bhagwatgeeta, name: "Bhagwat Geeta", category: "Top Seller", price: 320 },
        { id: 'f5', image: richdadpoordad, name: "Rich Dad Poor Dad", category: "Top Seller", price: 220 },
        { id: 'f6', image: harrypoter, name: "Harry Poter", category: "Top Seller", price: 190 },
    ];



export const FooterItems = [
    { id: "h1", image: H1, title: "No minimum order" },
    { id: "h2", image: H2, title: "Free Delivery " },
    { id: "h3", image: H3, title: "Cash back with every order" },
    { id: "h4", image: H4, title: "TPay online or cash on delivery" }
];

export const MenuCategory = [

    { id: 0, title: "All", category: "all" },
    { id: 1, title: "Fiction", category: "Fiction"},
    { id: 2, title: "Non-Fiction", category: "Non-Fiction"},
    { id: 3, title: "Novel", category: "Novel"},
    { id: 4, title: "Romance", category: "Romance" },

]
export const Category = [

    { id: 1, title: "Fiction", category: "Fiction", },
    { id: 2, title: "Non-Fiction", category: "Non-Fiction", },
    { id: 3, title: "Novel", category: "Novel", },
    { id: 4, title: "Romance", category: "Romance", },

]

export const SocialData = [
    {
        id: 1,
        child: <>Facebook <FaFacebookSquare size={25} /></>,
        href: '#',
        style: 'rounded-tr-md',
        delay: 100
    },
    {
        id: 2,
        child: <>Instagram <BsInstagram size={25} /></>,
        href: '#',
        delay: 300
    },
    {
        id: 3,
        child: <> Tiktok <FaTiktok size={25} /></>,
        href: '#',
        delay: 500
    },
    {
        id: 4,
        child: <>Prakash <BsFillPersonLinesFill size={25} /></>,
        href: 'https://github.com/acharyaprakash30',
        style: 'rounded-br-md',
        download: true,
        delay: 700
    },
];