import React from 'react';
import { useParams } from 'react-router-dom';
import WareHouseProductsList from '../components/WareHouseProductsList'

const DUMMY_PRODUCTS =[
    {
        id:'p1',
        name:' BBQ Burger',
        price: 150,
        description:'Burger Using Chicken And BBQ sauce',
        imageUrl:'https://assets.kraftfoods.com/recipe_images/opendeploy/57423_640x428.jpg',
        inventory:0,
        creator: 'u1'

    },
    {
        id:'p2',
        name:' Double Decker Burger',
        price: 220,
        description:'Burger Using  Double Chicken Patty And BBQ sauce',
        imageUrl:'https://bsstatic2.mrjack.es/wp-content/uploads/2020/09/hamburguesa-bbq-cab.jpg',
        inventory:200,
        creator: 'u2'

    }
]
const WarehouseProducts = ()=>{
    const userId=useParams().userId;
    console.log(userId)
    const loadedProducts= DUMMY_PRODUCTS.filter(place=>place.creator === userId)

return <WareHouseProductsList  items={loadedProducts}/>;
};
export default WarehouseProducts;