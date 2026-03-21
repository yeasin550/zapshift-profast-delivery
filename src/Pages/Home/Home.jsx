import Banner from "../../Components/Banner/Banner";
import BeMerchant from "../../Components/BeMerchant/BeMerchant";
import LogoMarquee from "../../Components/ClientLogoMerque/LogoMarquee";
import CustomersReview from "../../Components/CustomersReview/CustomersReview";
import FAQ from "../../Components/FAQ/FAQ";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import OurServices from "../../Components/OurServices/OurServices";

const Home = () => {
    return (
        <div className="">

            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <LogoMarquee/>
            <BeMerchant/>
            <CustomersReview/>
            <FAQ/>
        </div>
    );
};

export default Home;