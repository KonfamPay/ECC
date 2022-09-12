import FooterList from "../../Components/FooterList";
import Image from "next/image";

const Footer: React.FC = (props) => {
  return (
    <footer
      data-aos="fade-up"
      className="flex flex-col gap-[36px] lg:gap-[70px] mt-[72px] mx-auto max-w-[1440px] w-[92%] lg:w-[90%]"
    >
      <div className="flex gap-[36px] lg:gap-[150px]">
        <div className="flex-col gap-[50px] hidden lg:flex">
          <img
            src="./images/eccLogo-2.svg"
            className="w-[65px]"
            alt="ECC's Logo"
          />
          <p className=" text-[16px] text-grey-200 leading-[37px] w-[528px]">ecc is complaints a distributor of pine tm from vizag andhra pradesh as of oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost </p>
        </div>
        <div className="w-[100%] flex flex-col gap-[25px] lg:gap-[60px]">
          <div className="flex w-[100%] justify-between">
            <FooterList
              title="NAVIGATE THROUGH"
              items={["Home", "Complaints", "Latest Scams", "Statistics", "Complaint letter"]}
            />
            <div className="flex flex-col lg:flex-row gap-[18px] lg:gap-[25px]">
              <FooterList
                title="SUPPORT"
                items={["Contact Us", "FAQs"]}
              />
              <FooterList
                title="COMPANY"
                items={["Terms of Service", "Privacy Policy"]}
              />
            </div>
          </div>
          <FooterList
            title=""
            items={["Post a Complaint", "Login/Signup"]}
            areButtons={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[15px] lg:gap-[23px] items-center justify-center w-[100%]">
        <p className="text-[12px] leading-[18px] lg:text-[16px] lg:leading-[24px] ">
          Avoid getting scammed, Use <span className="text-eccgreen">Konfampay</span>
        </p>
        <button className="text-[10px] lg:text-[14px] px-[30px] py-[10px] lg:px-[30px] lg:py-[14px] text-center text-white mb-[24px] rounded-[8px] bg-eccgreen font-medium box-border w-[170px] block">Learn more</button>
      </div>
      <div className="flex-col gap-[30px] lg:hidden flex">
        <img
          src="./images/eccLogo-2.svg"
          className="w-[35px]"
          alt="ECC's Logo"
        />
        <p className=" text-[12px] text-grey-200 leading-[19.4px] w-[100%]">ecc is complaints a distributor of pine tm from vizag andhra pradesh as of oct all our costumer bills got reversed and my money lost no responce from them as nearly ****/- lost </p>
      </div>
      <div className="w-[100%] mb-[54px]">
        <p className="text-center text-[10px] leading-[15px] lg:text-[16px] lg:leading-[24px]">&copy; Copyright 2022. E-commerce complaints, Nigeria.</p>
      </div>
    </footer>
  );
};
export default Footer;
