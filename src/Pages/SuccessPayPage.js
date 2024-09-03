import FooterComp from "../Components/FooterComp"
import NavComp from "../Components/NavComp"
import SuccessPayComp from "../Components/SuccessPayComp"

const SuccesPayPage = () =>{
    return(
        <>
        {<NavComp/>}
        {<SuccessPayComp/>}
        {<FooterComp/>}
        </>
    );
};

export default SuccesPayPage;