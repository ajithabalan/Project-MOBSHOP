import React from 'react';

const ShowOrders = (props) =>{
    return(
        <div>
            <div className="product-form-inputsadmin">
                <div className="d-flex">
                    <div className="product-form-fieldproductname">
                        <h2>Product Name</h2>
                        <h5>{props.name.map(item=>
                            <div>
                                <p>{item}</p>
                                <br/>
                            </div>
                            )}</h5>
                    </div>
                    <div className="product-form-fieldproductname">
                        <h2 style={{color: "black", marginTop:"0px"}}>Price</h2>
                        <h5>{props.price.map(item=>
                            <div>
                                <p>{item}</p>
                                <br/>
                            </div>
                            )}</h5>
                    </div>
                </div>
            </div>


        </div>
    )
};
export default ShowOrders;
