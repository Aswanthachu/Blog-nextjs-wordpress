import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container-full  bg-darkBlue py-[10px]  md:p-[30px] px-3">
      <div className=" md:py-[10px] lg:pr-[60px] lg:py-[20px] flex justify-evenly flex-col-reverse md:flex-row ml-5 md:ml-0 ">
        <div className=" text-[20px] text-white flex justify-between md:justify-start flex-col w-[100%]  sm:flex-row  lg:w-[75%] lg:mr-[110px]">
          <div className="w-[50%] flex flex-col lg:flex-row justify-start">
            <div className="mt-2 md:mt-0 lg:ml-28">
              <h5 className="">Pages</h5>
              <ul className="font-extralight text-[19px] w-[80%]">
                <li >
                  <Link href="/">Home</Link>
                </li>
                <li >
                  <Link href="/about">About Us</Link>
                </li>
                <li >
                  <Link href="/services">Services</Link>
                </li>
                <li >
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li >
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li >
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="flex font-extralight text-[15px] lg:ml-5 lg:mt-8">
              <div>
                <ul className="font-extralight text-[19px]">
                  <li >
                    <Link href="/benefits-of-us-stocks">
                      Benefits of Investing in US Stocks
                    </Link>
                  </li>
                  <li >
                    <Link href="/retirement-plan">Retirement Plan</Link>
                  </li>
                  <li >
                    <Link href="/sip">SIP/Lumpsum Calculator</Link>
                  </li>
                  <li >
                    <Link href="/refund-cancellation-policy">
                      Refund & Cancellation Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[40%] font-extralight text-[20px]  mt-7 md:mt-0 lg:ml-16">
            <h3 className="font-semibold text-[30px]">KKS Capitals</h3>
            <div className="w-[100%]">
              <p>
                By the end of 2030, build a
                <br className="block" />
                portfolio of International
                <br className="block " /> stocks that have a minimum
                <br className="block" />
                expected return of 6X.
              </p>
              <div>
                <a
                  href="https://app.kkscapitals.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className=" mt-3 w-[150px] text-darkBlue font-semibold rounded-lg p-2 text-center text- bg-white">
                    Login
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:items-center mt-10 md:mt-0  w-[100%] md:w-[25%] lg:w-[25%] mb-4 md:mb-3">
          <div>
            <div>
              <h1 className=" text-white  font-normal text-[30px]">
                <span className=" font-semibold ">KKS</span> Capitals
              </h1>
            </div>
            <div className="flex  items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/kks-capitals/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <svg
                  style={{ width: "26px", height: "26px" }}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M24 1.76471V22.2353C24 22.7033 23.8141 23.1522 23.4831 23.4831C23.1522 23.8141 22.7033 24 22.2353 24H1.76471C1.29668 24 0.847817 23.8141 0.51687 23.4831C0.185924 23.1522 0 22.7033 0 22.2353L0 1.76471C0 1.29668 0.185924 0.847817 0.51687 0.51687C0.847817 0.185924 1.29668 0 1.76471 0L22.2353 0C22.7033 0 23.1522 0.185924 23.4831 0.51687C23.8141 0.847817 24 1.29668 24 1.76471ZM7.05882 9.17647H3.52941V20.4706H7.05882V9.17647ZM7.37647 5.29412C7.37833 5.02715 7.32759 4.76242 7.22714 4.51506C7.12669 4.2677 6.9785 4.04255 6.79103 3.85246C6.60357 3.66237 6.38049 3.51107 6.13455 3.4072C5.88861 3.30332 5.62462 3.24891 5.35765 3.24706H5.29412C4.7512 3.24706 4.23053 3.46273 3.84663 3.84663C3.46273 4.23053 3.24706 4.7512 3.24706 5.29412C3.24706 5.83703 3.46273 6.35771 3.84663 6.74161C4.23053 7.1255 4.7512 7.34118 5.29412 7.34118C5.56111 7.34774 5.82678 7.30164 6.07594 7.2055C6.32511 7.10936 6.55289 6.96506 6.74627 6.78086C6.93965 6.59666 7.09484 6.37616 7.20297 6.13196C7.3111 5.88775 7.37006 5.62464 7.37647 5.35765V5.29412ZM20.4706 13.6094C20.4706 10.2141 18.3106 8.89412 16.1647 8.89412C15.4621 8.85894 14.7626 9.00858 14.1358 9.32814C13.5091 9.64769 12.9771 10.126 12.5929 10.7153H12.4941V9.17647H9.17647V20.4706H12.7059V14.4635C12.6549 13.8483 12.8487 13.2378 13.2452 12.7646C13.6417 12.2915 14.2089 11.9939 14.8235 11.9365H14.9576C16.08 11.9365 16.9129 12.6424 16.9129 14.4212V20.4706H20.4424L20.4706 13.6094Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kks_capitals"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <svg
                  style={{ width: "30px", height: "30px" }}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 4C12.7408 4 12.3328 4.0136 11.0528 4.072C9.7752 4.1304 8.9024 4.3336 8.1392 4.6304C7.3392 4.9312 6.6136 5.4032 6.0136 6.0144C5.40338 6.61371 4.93109 7.3388 4.6296 8.1392C4.3344 8.9024 4.1304 9.776 4.072 11.0536C4.0144 12.3328 4 12.74 4 16C4 19.26 4.0136 19.6672 4.072 20.9472C4.1304 22.2248 4.3336 23.0976 4.6304 23.8608C4.9312 24.6608 5.4032 25.3864 6.0144 25.9864C6.61372 26.5966 7.33881 27.0689 8.1392 27.3704C8.9024 27.6664 9.7752 27.8696 11.0528 27.928C12.3328 27.9864 12.7408 28 16 28C19.2592 28 19.6672 27.9864 20.9472 27.928C22.2248 27.8696 23.0976 27.6664 23.8608 27.3696C24.6608 27.0688 25.3864 26.5968 25.9864 25.9856C26.5966 25.3863 27.0689 24.6612 27.3704 23.8608C27.6664 23.0976 27.8696 22.2248 27.928 20.9472C27.9864 19.6672 28 19.2592 28 16C28 12.7408 27.9864 12.3328 27.928 11.0528C27.8696 9.7752 27.6664 8.9024 27.3696 8.1392C27.0683 7.33845 26.596 6.61306 25.9856 6.0136C25.3863 5.40338 24.6612 4.93109 23.8608 4.6296C23.0976 4.3344 22.224 4.1304 20.9464 4.072C19.6672 4.0144 19.26 4 16 4ZM16 6.1624C19.204 6.1624 19.584 6.1744 20.8496 6.232C22.0192 6.2856 22.6544 6.48 23.0776 6.6456C23.6376 6.8624 24.0376 7.1232 24.4576 7.5424C24.8776 7.9624 25.1376 8.3624 25.3544 8.9224C25.5192 9.3456 25.7144 9.9808 25.768 11.1504C25.8256 12.416 25.8376 12.796 25.8376 16C25.8376 19.204 25.8256 19.584 25.768 20.8496C25.7144 22.0192 25.52 22.6544 25.3544 23.0776C25.1623 23.5988 24.8559 24.0704 24.4576 24.4576C24.0705 24.856 23.5989 25.1624 23.0776 25.3544C22.6544 25.5192 22.0192 25.7144 20.8496 25.768C19.584 25.8256 19.2048 25.8376 16 25.8376C12.7952 25.8376 12.416 25.8256 11.1504 25.768C9.9808 25.7144 9.3456 25.52 8.9224 25.3544C8.40116 25.1623 7.92961 24.8559 7.5424 24.4576C7.14414 24.0704 6.8377 23.5988 6.6456 23.0776C6.4808 22.6544 6.2856 22.0192 6.232 20.8496C6.1744 19.584 6.1624 19.204 6.1624 16C6.1624 12.796 6.1744 12.416 6.232 11.1504C6.2856 9.9808 6.48 9.3456 6.6456 8.9224C6.8624 8.3624 7.1232 7.9624 7.5424 7.5424C7.92955 7.14404 8.40113 6.83758 8.9224 6.6456C9.3456 6.4808 9.9808 6.2856 11.1504 6.232C12.416 6.1744 12.796 6.1624 16 6.1624Z"
                    fill="#F8F8F8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 20.0037C15.4742 20.0037 14.9536 19.9002 14.4678 19.6989C13.982 19.4977 13.5406 19.2028 13.1688 18.831C12.797 18.4592 12.502 18.0178 12.3008 17.532C12.0996 17.0462 11.996 16.5255 11.996 15.9997C11.996 15.4739 12.0996 14.9532 12.3008 14.4675C12.502 13.9817 12.797 13.5403 13.1688 13.1685C13.5406 12.7967 13.982 12.5017 14.4678 12.3005C14.9536 12.0993 15.4742 11.9957 16 11.9957C17.062 11.9957 18.0804 12.4176 18.8313 13.1685C19.5822 13.9194 20.004 14.9378 20.004 15.9997C20.004 17.0616 19.5822 18.0801 18.8313 18.831C18.0804 19.5819 17.062 20.0037 16 20.0037V20.0037ZM16 9.83172C14.3642 9.83172 12.7953 10.4816 11.6386 11.6383C10.4819 12.795 9.83203 14.3639 9.83203 15.9997C9.83203 17.6356 10.4819 19.2044 11.6386 20.3612C12.7953 21.5179 14.3642 22.1677 16 22.1677C17.6359 22.1677 19.2047 21.5179 20.3615 20.3612C21.5182 19.2044 22.168 17.6356 22.168 15.9997C22.168 14.3639 21.5182 12.795 20.3615 11.6383C19.2047 10.4816 17.6359 9.83172 16 9.83172V9.83172ZM23.9624 9.71972C23.9624 10.1064 23.8088 10.4773 23.5354 10.7507C23.262 11.0241 22.8911 11.1777 22.5044 11.1777C22.1177 11.1777 21.7469 11.0241 21.4735 10.7507C21.2 10.4773 21.0464 10.1064 21.0464 9.71972C21.0464 9.33303 21.2 8.96219 21.4735 8.68876C21.7469 8.41533 22.1177 8.26172 22.5044 8.26172C22.8911 8.26172 23.262 8.41533 23.5354 8.68876C23.8088 8.96219 23.9624 9.33303 23.9624 9.71972"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/kkscapitals"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  style={{ width: "26px", height: "26px" }}
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M24.6031 5.5603C24.6194 5.79539 24.6194 6.03047 24.6194 6.26773C24.6194 13.4969 19.116 21.8344 9.05272 21.8344V21.8301C6.08001 21.8344 3.16904 20.9829 0.666504 19.3773C1.09876 19.4293 1.53318 19.4553 1.96869 19.4564C4.43223 19.4586 6.82535 18.632 8.76346 17.1099C6.42234 17.0655 4.3694 15.539 3.65222 13.3106C4.47231 13.4688 5.31733 13.4363 6.12226 13.2163C3.56988 12.7007 1.7336 10.4581 1.7336 7.85375C1.7336 7.82992 1.7336 7.80717 1.7336 7.78442C2.49412 8.20801 3.34563 8.4431 4.21664 8.4691C1.81269 6.86249 1.07168 3.66444 2.52337 1.16407C5.30108 4.58204 9.39939 6.6599 13.7989 6.87982C13.358 4.97962 13.9603 2.98843 15.3817 1.65266C17.5852 -0.418709 21.0508 -0.312541 23.1222 1.88991C24.3475 1.64832 25.5218 1.19873 26.5965 0.561723C26.1881 1.82816 25.3333 2.90393 24.1915 3.58752C25.2759 3.45968 26.3354 3.16935 27.3332 2.72626C26.5987 3.82694 25.6735 4.78571 24.6031 5.5603Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/kkscapitals"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <svg
                  style={{ width: "26px", height: "26px" }}
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M26.7505 13.0789C26.7505 5.8552 20.8437 0 13.5559 0C6.2681 0 0.361328 5.8552 0.361328 13.0789C0.361328 19.6083 5.18526 25.0189 11.494 26V16.8601H8.14436V13.078H11.494V10.1972C11.494 6.91947 13.4635 5.10813 16.4781 5.10813C17.9207 5.10813 19.4319 5.3638 19.4319 5.3638V8.5826H17.7667C16.128 8.5826 15.6178 9.5914 15.6178 10.6262V13.0789H19.2771L18.6921 16.8593H15.6178V26C21.9265 25.0189 26.7505 19.6083 26.7505 13.0789Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </a>
            </div>
            <div className="text-white text-[20px]">
              <h1>
                <Link
                  href="javascript:void(0)"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location =
                      "mailto:support@kks.com?subject=Enquiry related to site";
                  }}
                >
                  {" "}
                  support@kks.com
                </Link>
              </h1>
              <h1>
                {" "}
                <Link
                  href="javascript:void(0)"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location = "tel:+ +91 9035808904";
                  }}
                >
                  +91 9035808904
                </Link>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-0 md:mt-0 ">
        <p className="text-white font-sans font-thin text-[12px] leading-[18px]">
          Expertises with Charles River IMS & State Street Alpha of STATE STREET
          CORP CIK 0000093751
          <br className="block" />
          Use of this site constitutes acceptance of our
          <Link href="/privacy-policy" className="font-normal">
            Privacy Statement
          </Link>{" "}
          and{" "}
          <Link href="/terms-conditions" className="font-normal">
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
