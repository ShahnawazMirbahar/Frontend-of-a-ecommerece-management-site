import React from 'react';
import { Link } from 'react-router-dom'
import './ProductItem.css'
import Card from '../../shared/components/UIElements/Card';
import Avatar from '../../shared/components/UIElements/Avatar';
const ProductItem = props =>{
    return (
         <li className="products-item">
             <Card className="products-item__content">
                 <Link to={`/${props.id}/warehouse`}>
                 <div className ="products-item__image">
                     <Avatar image = {props.image} alt ={props.name} />
                 </div>
                 <div className="products-item__info">
                     <h2>{props.name}</h2>
                     <h3>{props.address}</h3>
                     <h4>
                         {props.area} 
                     </h4>
                     <h5>{'Mobile:  '} {props.contactinfo} </h5>
                 </div>
                 </Link>
                 {/* <div className ="products-item__actions">
                    <Button inverse> VIEW ON MAP</Button>
                 </div> */}
             </Card>
         </li>
    )

}
export default ProductItem;
