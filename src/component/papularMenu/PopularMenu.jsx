import React from "react";
import "./Prstyle.css";
import {popularMenuFood} from "../../asset/data/product";
import ProductCard from "../ProductCard/ProductCard";
const PopularMenu=()=>{
    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <h2>popular Item Menu</h2>
                    </div>
                    {
                        popularMenuFood.map(item=>(
                            <div className="col-lg-3" key={item.id} id="card">
                               <ProductCard item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default PopularMenu;