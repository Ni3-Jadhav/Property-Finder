// import { useNavigate } from "react-router-dom";
// import { usePropertyApp } from "../Context/PropertyAppContext";
import FooterComp from "../Components/FooterComp";
import NavComp from "../Components/NavComp";

const FavListPage = () => {
    // const navigate = useNavigate();
    // const { state, dispatch } = usePropertyApp();

    return (
        <>
            <NavComp />

            <section class="favorite-list-section">
      <h2>Your Favorite Properties</h2>
      <div class="favorite-properties-grid">
        {/* Dummy Property 1 */}
        <div class="favorite-property-card">
          <img src="https://via.placeholder.com/300x200" alt="Property 1" class="property-image" />
          <div class="property-details">
            <h3>Sunset Villa</h3>
            <p>Location: New York, USA</p>
            <div class="buttons-container">
              <button class="see-details-btn">
                <i class="fas fa-info-circle"></i> See Details
              </button>
              <button class="remove-btn">
                <i class="fas fa-trash-alt"></i> Remove
              </button>
            </div>
          </div>
        </div>

        {/* Dummy Property 2 */}
        <div class="favorite-property-card">
          <img src="https://via.placeholder.com/300x200" alt="Property 2" class="property-image" />
          <div class="property-details">
            <h3>Ocean Breeze Apartment</h3>
            <p>Location: Miami, USA</p>
            <div class="buttons-container">
              <button class="see-details-btn">
                <i class="fas fa-info-circle"></i> See Details
              </button>
              <button class="remove-btn">
                <i class="fas fa-trash-alt"></i> Remove
              </button>
            </div>
          </div>
        </div>

        {/* Dummy Property 3 */}
        <div class="favorite-property-card">
          <img src="https://via.placeholder.com/300x200" alt="Property 3" class="property-image" />
          <div class="property-details">
            <h3>Mountain Cabin</h3>
            <p>Location: Denver, USA</p>
            <div class="buttons-container">
              <button class="see-details-btn">
                <i class="fas fa-info-circle"></i> See Details
              </button>
              <button class="remove-btn">
                <i class="fas fa-trash-alt"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

            <FooterComp />

        </>
    );
};

export default FavListPage;
