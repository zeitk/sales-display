import React from "react";
import '../styles/Styles.css'
import '../styles/TextStyles.css'

export default function ProductDisplay(props) {
    
    const product = props.product;

    return (
        <div className="left-column-contents">
            <img src={product.image} className="logo-img" alt=""></img>
            
            <text className="product-title">{product.title}</text>

            <div style={{textAlign: 'center'}}>
                <text className="product-subtitle">{product.subtitle}</text>
            </div>

            <div className="product-tags">
            { 
                product.tags.map((tag: string)=> {
                        return(
                            <div className="tag-card">
                                <text>{tag}</text>
                            </div>
                        )
                })
            }
            </div>
        </div>
    )
}