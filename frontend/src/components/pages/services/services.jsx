
import Bigcontainer from "../../container/big-container/big-container";
import Midcontainer from "../../container/mid-container/mid-container";


import pic1 from "../../images/images/pic1.jpeg";
import pic2 from "../../images/images/pic2.jpeg";
import pic3 from "../../images/images/pic3.jpeg";
import pic4 from "../../images/images/pic4.jpeg";
import pic5 from "../../images/images/pic5.jpeg";
import pic6 from "../../images/images/pic6.jpeg";

import img1 from "../../images/images/icon1.png";
import img2 from "../../images/images/icon2.png";
import img3 from "../../images/images/icon3.png";
import img4 from "../../images/images/icon4.png";
import img5 from "../../images/images/icon5.png";
import img6 from "../../images/images/icon6.png";
import "./services.css";
import "./services.css";
import Card from "../../cards/card"
import SmallContainer from "../../container/small-container/small-container";

function Services() {
  return (
    <div id="services-page">
      <Bigcontainer
        heading="What We Do"
        paragraph="Atavishaala delivers end to end agricultural solutions by connecting farmers and businesses through sourcing, infrastructure, technology, and quality systems."
      >

        <div className="services-cards">
          <Midcontainer backgroundColor="" image={img1} imagename="pic1" title="Farmer Onboarding" description="We onboard and verify farmers across regions for reliable sourcing." />
          <Midcontainer backgroundColor="" image={img2} imagename="pic2" title="Crop Monitoring" description="Digitized tracking and monitoring to keep crops healthy and productive." />
          <Midcontainer backgroundColor="" image={img3} imagename="pic3" title="Procurement" description="Transparent procurement that connects farmers to buyers." />
          <Midcontainer backgroundColor="" image={img4} imagename="pic4" title="Quality Check" description="Quality checks that ensure products meet required standards." />
          <Midcontainer backgroundColor="" image={img5} imagename="pic5" title="Storage & Logistics" description="Efficient logistics and cold storage to maintain freshness." />
          <Midcontainer backgroundColor="" image={img6} imagename="pic6" title="Delivery to Business" description="Timely delivery to traders, exporters, and manufacturers." />
        </div>

      </Bigcontainer>
      <div className="services-cards-bottom">
       
         <Card image={pic1} number="1" title="Farmer Onboarding" description="We onboard and verify farmers across regions, building a trusted network for reliable sourcing."></Card>
          <Card image={pic2} number="2" title="Crop Monitoring" description="We monitor crop growth and availability to ensure accurate planning and consistent supply."></Card>
            <Card image={pic3} number="3" title="Procurement" description="Agricultural produce is sourced directly from farms based on demand and quality requirements."></Card>
              <Card image={pic4} number="4" title="Quality Check" description="Products undergo quality checks to ensure they meet required standards before moving forward."></Card>
                <Card image={pic5} number="5" title="Storage & Logistics" description="Produce is stored and transported through efficient logistics and cold storage to maintain freshness."></Card>
                  <Card image={pic6} number="6" title="Delivery to Business" description="Products are delivered to traders, exporters, and manufacturers with reliability and timely coordination."></Card>
      </div>
     <Bigcontainer  heading="Why We Do" paragraph="At Atavishaala, we bridge the gap between farmers and buyers with trust, efficiency, and transparency. Our platform is built to create a seamless agricultural trading experience.">
      <div className="services-small-container">
        <SmallContainer  title="Direct Farmer-to-Buyer Connection" description="Eliminating middlemen to ensure better pricing and genuine partnerships."></SmallContainer>
          <SmallContainer  title="Reliable & Consistent Bulk Supply" description="We ensure steady availability of high-quality produce for your business needs."></SmallContainer>
            <SmallContainer  title="Transparent & Fair Trade Process" description="Clear pricing, honest dealings, and complete visibility at every step."></SmallContainer>
              <SmallContainer  title="Wide Range of Agricultural Products" description="From cereals to spices, fruits, and ready-to-eat products — all in one place."></SmallContainer>
                <SmallContainer  title=" Regional Farmer Network" description="A trusted network of farmers ensuring diversity and scale."></SmallContainer>
                  <SmallContainer  title="Efficient Sourcing & Logistics Support" description="Streamlined procurement with dependable delivery systems."></SmallContainer>

      </div>
     </Bigcontainer>
     

    </div>
  );
}

export default Services;

