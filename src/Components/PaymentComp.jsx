import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmptyCartComp from "./EmptyCartComp";

const PaymentComp = () => {

    const location = useLocation();
    const amount = location.state || {};
    const navigate = useNavigate();

    const [formData, setFromData] = useState({
        name: "",
        email: "",
        address: "",
        mobileNumber: "",
        pincode: "",
        payment: ""
    });

    const handleInput = (triggerEvent) => {
        const { name, value } = triggerEvent.target;
        setFromData((formDetail) => ({ ...formDetail, [name]: value }));
  
    };

    const handleFromData = (triggerEvent) => {
        triggerEvent.preventDefault();
        navigate("/succesPay");      
        console.log(formData)
    };

    return (
        <>
            {amount.totalAmount > 0 ? (
                <div className="payment-form-container">
                    <form className="payment-form" onSubmit={handleFromData}>
                        <div className="total-amount">
                            <h1>Make Payment</h1>
                        </div>
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                onChange={handleInput}
                                value={formData.name}
                                required
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                onChange={handleInput}
                                value={formData.email}
                                required
                            />
                        </label>
                        <label>
                            Address
                            <input
                                type="text"
                                name="address"
                                onChange={handleInput}
                                value={formData.address}
                                required
                            />
                        </label>
                        <label>
                            Mobile Number
                            <input
                                type="tel"
                                name="mobileNumber"
                                onChange={handleInput}
                                value={formData.mobileNumber}
                                required
                            />
                        </label>
                        <label>
                            Pincode
                            <input
                                type="text"
                                name="pincode"
                                onChange={handleInput}
                                value={formData.pincode}
                                required
                            />
                        </label>
                        <label>
                            Payment
                            <select
                                onChange={handleInput}
                                name="payment"
                                value={formData.payment}
                                required
                            >
                                <option value="UPI">UPI</option>
                                <option value="Card">Card</option>
                                <option value="Cash">Cash</option>
                                <option value="Cheque">Cheque</option>
                            </select>
                        </label>

                        <div className="total-amount">
                            <h1>Total Amount: ₹{amount.totalAmount}</h1>
                        </div>
                        <button type="submit" className="payment-btn">
                            Proceed To Payment
                        </button>
                    </form>
                    <button
                        className="back-btn"
                        onClick={() => {
                            navigate("/cartPage");
                        }}
                    >
                        Previous
                    </button>
                    <p className="terms">
                        By proceeding, you agree to our terms and conditions.
                    </p>
                </div>
            ) : (
                <EmptyCartComp />
            )}
        </>
    );
};

export default PaymentComp;