import React from 'react';
import './WareHouseItems.css'
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';

const Items = props =>{
return <li className="product-item">
    <Card className="product-item__content">
    <div className="product-item__image">
    <img src={props.image} alt ={props.name}/>
    </div>
    <div class="product-item__info">
        <h2> {props.name}</h2>
        <h3>{props.price }{props.price=== 1? ' TK':' TK'}</h3>
        <h4>{'Desc : '}{props.description}</h4>
        <h5>{props.inventory=== 0? 'Out Of Stock':'In Stock'}</h5>
    </div>
    <div className= "product-item__actions">
        <Button to={`/warehouse/${props.id}`}>EDIT</Button>
        <Button danger>DELETE</Button>

    </div>
    </Card>
</li>
}
export default Items;