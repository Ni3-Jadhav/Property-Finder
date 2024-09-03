import FooterComp from "../Components/FooterComp"
import HomeComp from "../Components/HomeComp"
import NavComp from "../Components/NavComp"

const HomePage = ()=>{

    return(
        <>
        {<NavComp/>}
        {<HomeComp/>}
        {<FooterComp/>}
        </>
    );
};

export default HomePage;