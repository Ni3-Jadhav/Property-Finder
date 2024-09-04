import { useNavigate } from "react-router-dom";
import { usePropertyApp } from "../Context/PropertyAppContext";
import { useState } from "react";
import EmptyCartComp from "./EmptyCartComp";
;

const CartComp = () => {

    const navigation = useNavigate();
    const { state, dispatch } = usePropertyApp();
    const [quantity1, setQuantity1] = useState({});

    const totalAmount =
        state?.WhishList1?.reduce((total, item) => {
            const itemQuantity = quantity1[item.id] || 1;
            return total + itemQuantity * item.price;
        }, 0) || 0;

    const handleQuantityCount = (id, delta) => {
        setQuantity1((prevQuantity) => ({
            ...prevQuantity,
            [id]: Math.max((prevQuantity[id] || 1) + delta, 1),
        }));
    };
    return (
        <>
            {state?.WhishList1 && state.WhishList1.length === 0 ? (
                <EmptyCartComp />
            ) : (
                <section class="cart-section">
                    <h2>Your Cart</h2>

                    <div class="cart-container">
                        {state?.WhishList1 &&
                            state?.WhishList1.map(({ id, image, name, price }) => {
                                const itemQuantity = quantity1[id] || 1;
                                return (
                                    <div class="cart-item" key={id}>
                                        <img src={image} alt="Property Image" />
                                        <div class="item-details">
                                            <h3>{name}</h3>
                                            <p class="price">Price: INR {price} ₹</p>
                                            <a
                                                class="see-details"
                                                onClick={() => { navigation("/propertyPage") }}
                                            >
                                                See details
                                            </a>
                                        </div>
                                        <div class="item-actions">
                                            <button
                                                class="quantity-btn"
                                                onClick={() => handleQuantityCount(id, -1)}
                                                disabled={(quantity1[id] || 1) <= 1}
                                            >
                                                -
                                            </button>
                                            <span class="quantity">{itemQuantity}</span>
                                            <button
                                                class="quantity-btn"
                                                onClick={() => handleQuantityCount(id, 1)}
                                            >
                                                +
                                            </button>
                                            <button
                                                class="remove-btn"
                                                onClick={() =>
                                                    dispatch({ type: "REMOVE_WHISHLIST", payload: id })
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <p class="item-total">Total: INR {itemQuantity * price} ₹</p>
                                    </div>
                                )
                            })}
                    </div>

                    <div class="cart-summary">
                        <h3>Total Amount: INR {totalAmount}₹</h3>
                        <button
                            class="checkout-btn"
                            onClick={() => navigation("/paymentPage", { state: { totalAmount } })}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </section>
            )}
        </>
    );
};

export default CartComp;