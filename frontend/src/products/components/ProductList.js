import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import './ProductList.css';
import ProductItem from './ProductItem';

const Productlist = props =>{
    if(props.items.length === 0)
    {
        return <div className="center">
            <Card>
            <h2>No Products Found</h2>
            </Card>
        </div>
    };
    return <ul className="products-list">
        {props.items.map(products=> (
        <ProductItem
         key={products.id}
         id={products.id}
         image ={products.image}
         name={products.name}
         address={products.address}
         area={products.area}
         contactinfo = {products.contactinfo}
         coordinates = {products.location}
         />
              ))}
    </ul>

};
export default Productlist;