import NavComp from "../Components/NavComp";
import FooterComp from "../Components/FooterComp";
import { usePropertyApp } from "../Context/PropertyAppContext";
import { useLocation, useNavigate } from "react-router-dom";

const PropertyPage = () => {

    const locationUrl = useLocation();
    const { id, image, name, price, location, address, bedrooms, amenities } = locationUrl.state || {}
    const { state, dispatch } = usePropertyApp();
    const navigate = useNavigate();

    return (
        <>
            <NavComp />


            <div class="property-page-container" >
                <div class="property-image">
                    <img src={image} alt="Property Image" />
                </div>

                <div class="property-details">
                    <h1 class="property-name">{name}</h1>
                    <p class="property-location">{location}</p>
                    <h2 class="property-price">INR {price} ₹</h2>
                    <p class="property-address">
                        {address}
                    </p>
                    <p class="property-bedrooms">
                        <strong>Bedrooms:</strong> {bedrooms}BHK
                    </p>
                    <p class="property-amenities">
                        <strong>Amenities:</strong>{amenities}
                    </p>


                    <div class="property-buttons">
                        <button
                            class="action-btn"
                            onClick={() => { navigate("/") }}
                        >
                            <i class="fas fa-home"></i> Home
                        </button>
                        <button
                            class="action-btn"
                            onClick={() =>
                                dispatch({ type: "ADD_WHISHLIST", payload: id })
                            }
                        >
                            <i class="fa-solid fa-bookmark"></i> Book Now
                        </button>
                    </div>
                </div>
            </div>

            <FooterComp />
        </>
    );
};

export default PropertyPage;