import Bigcontainer from "../../container/big-container/big-container.jsx";
import SmallContainer from "../../container/small-container/small-container.jsx";
import Card from "../../cards/card.jsx";

import gmail from "../../images/images/gmail.jpg";

import "./profile.css";


function Profile() {
  return (
    <div id="profile-page">
      <div className="profile-section-top">
        <Bigcontainer
          heading="Your Profile"
          paragraph="Manage your account details, view saved items, and track your activity at one place."
        >
          <div className="profile-details-grid">
       <Card
          image={gmail}
          number="Ajay"
          title="user"
          description="Membership status, subscription benefits, and renewal information." 
        />
    
          </div>
        </Bigcontainer>
      </div>
    </div>
  );
}

export default Profile;


