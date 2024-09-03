import { useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";

const PaymentComp = () => {

    const location = useLocation();
    const amount = location.state || {};
    const navigate = useNavigate();

    const [ formData , setFromData ] = useState({
        name:"",
        email:"",
        address:"",
        mobileNumber:"",
        pincode:"",
        payment:""
    });

    const handleInput = (triggerEvent) =>{
        const {name ,value } = triggerEvent.target;
        setFromData ((formDetail) => ({ ...formDetail , [name]:value}));
    };

    const handleFromData = ( triggerEvent ) => {
        triggerEvent.preventDefault();
        navigate("/succesPay");
    };
    
    return (
        <>
            
            <div class="payment-form-container">
                <form class="payment-form" onSubmit={handleFromData}>
                <div class="total-amount">
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

                    <div class="total-amount">
                        <h1>Total Amount: ₹{amount.totalAmount}</h1>
                    </div>
                    <button onSubmit="submit" class="payment-btn">Proceed To Payment</button>
                </form>
                <button class="back-btn" onClick={()=>{navigate('/cartPage')}}>Previous</button>
                <p class="terms">By proceeding, you agree to our terms and conditions.</p>
            </div>
           
        </>
    );
};

export default PaymentComp;