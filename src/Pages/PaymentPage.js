import PaymentComp from "../Components/PaymentComp";
import NavComp from "../Components/NavComp";
import FooterComp from "../Components/FooterComp"

const PaymentPage = () =>{

    return(
        <>
        {<NavComp/>}
        {<PaymentComp/>}
        {<FooterComp/>}
        </>
    );
};

export default PaymentPage;