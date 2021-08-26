import React from 'react';
import './WareHouseProductsList.css'
import WareHouseItems from './WareHouseItems'
import Card from '../../shared/components/UIElements/Card';

const Products = props =>{
    if(props.items.length===0){
        return (<div className ="product-list center">
            <Card>
                <h2> No Products Found.Create One Please</h2>
                <button>Create Product</button>
            </Card>
        </div>
        );
    }
    return <ul className="product-list">
        {props.items.map(product =><WareHouseItems 
        key={product.id} 
        id ={product.id} 
        image= {product.imageUrl}
        name ={product.name} 
        price={product.price} 
        description={product.description}
        inventory={product.inventory}
        creatorId ={product.creator}
        />
        )}
    </ul>
};
export default Products;