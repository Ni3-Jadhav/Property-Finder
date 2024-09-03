import { useNavigate } from "react-router-dom";

const SuccessPayComp = () =>{
 
    const navigate = useNavigate()
    return(
        <>
        <div class="success-container">
                <div class="success-content">
                    <i class="fa-solid fa-check-circle success-icon"></i>
                    <h1>Payment Successful!</h1>
                    <p>Thank you for your payment. Your transaction has been completed successfully.</p>
                    
                    <a onClick={()=>{ navigate('/')}} class="back-home-btn">Back to Home</a>
                </div>
            </div>

        </>
    );
};

export default SuccessPayComp;