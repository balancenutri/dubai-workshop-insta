// import React from "react";
// import BannerImage from "../assets/banner_image.png";
// import { FiCalendar } from "react-icons/fi";
// import { GiPositionMarker } from "react-icons/gi";
// import { FaClipboardCheck, FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// export default function WorkshopCard({ setModalControl }) {
//   return (
//     // <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-4">
//     <div className="w-full max-w-md bg-white p-4 shadow-xl rounded-xl mx-3 ">
//       <h1 className="text-lg sm:text-xl  text-center bg-[#3FBEC9] -mx-4 -mt-6 py-4 font-bold text-white mb-4 rounded-t-xl shadow-lg">
//         Nutrition Workshop hosted by IWD
//       </h1>
//       <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-3 overflow-hidden rounded-lg">
//         <img
//           alt="Workshop Image"
//           className="object-cover w-full h-full "
//           height="400"
//           src={BannerImage}
//           width="600"
//         />
//       </div>
//       <div className="text-center mb-4">
//         <div className="rounded-lg bg-yellow-50 py-2 border-2 shadow-lg">
//           <h2 className="text-lg  font-semibold text-gray-800 underline">
//             Workshop Topic:
//           </h2>
//           <h2 className="text-lg  font-semibold text-gray-800">
//             How to lose weight without
//             <br />
//             going to the gym?
//           </h2>
//         </div>
//         <div className="flex flex-col items-start justify-between rounded-lg p-4 bg-white gap-y-3 mt-3 border-2 shadow-lg border-gray-600">
//           <div className="flex items-center space-x-3">
//             <div className="text-green-600 flex text-2xl w-7">
//               <FiCalendar className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="text-red-600 font-semibold">29th Jan, 10:30 AM</p>
//             </div>
//           </div>
//           <div className="flex space-x-3">
//             <div className="text-blue-600 text-2xl w-7">
//               <FaLocationDot className="w-6 h-6" />
//             </div>
//             <div>
//               <p className="md:text-base text-gray-800 font-semibold">
//                 India Club, Dubai
//               </p>
//             </div>
//           </div>
//         </div>
//         <p className="text-black-600 my-4 md:my-3">
//           <span className="text-black text-lg font-bold">
//             Registration fee:{" "}
//           </span>
//           <span className="text-red-500 text-xl font-bold">50 AED</span>
//         </p>
//       </div>
//       <div className="flex justify-center mb-6 md:mb-3">
//         <button
//           className="bg-[#FFB412] text-black px-6 py-3 md:py-1 rounded-full transition-all duration-300 flex items-center
//       animate-scale-in-out"
//           onClick={() => setModalControl(true)}
//         >
//           <FaClipboardCheck className="mr-2" />
//           <span className="font-bold md:text-lg">Register Now</span>
//         </button>
//       </div>
//       <div>
//         <p className="text-sm font-regular bg-orange-50 p-2 text-black text-center rounded-lg shadow-lg">
//           <span className="font-bold">50 AED </span>fully redeemable upon
//           enrolling in our online diet program.
//         </p>
//       </div>
//       <p className="font-medium mt-2 text-black text-center">
//         For more details contact Ritu:
//       </p>
//       <p className="text-center">
//         <Link
//           to={`https://wa.me/+917021985258?text=Hi, I’d like to book an appointment with Khyati in Dubai. Please let me know the available slots. Thank you!`}
//           className="text-base text-blue-500 underline font-medium"
//           target="_blank"
//         >
//           +91 7021985258
//         </Link>
//       </p>

//       <style jsx>{`
//         @keyframes scaleInOut {
//           0% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//           100% {
//             transform: scale(1);
//           }
//         }

//         .animate-scale-in-out {
//           animation: scaleInOut 1.5s infinite;
//         }
//       `}</style>
//     </div>
//     // </div>
//   );
// }

import React from "react";
import BannerImage from "../assets/banner_image.png";
import BnLogo from "../assets/bn_logo.png";
import IWDubai from "../assets/iwdubai.png";
import { FiCalendar } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";
import { FaClipboardCheck, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WorkshopCard({ setModalControl }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-4">
    <div className="w-full max-w-md bg-white p-4 shadow-xl rounded-xl mx-3 ">
      <h1 className="text-lg sm:text-xl  text-center bg-[#3FBEC9] -mx-4 -mt-6 py-4 font-bold text-white mb-4 rounded-t-xl shadow-lg">
        Nutrition Workshop hosted by IWD
      </h1>
      <div className="w-full relative h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-3 overflow-hidden rounded-lg">
        <img
          alt="Workshop Image"
          className="object-cover w-full h-full "
          height="400"
          src={BannerImage}
          width="600"
        />
        <img
          alt="Workshop Image"
          className="absolute top-2 left-2 rounded-lg object-cover h-10 w-10 "
          height="40"
          src={BnLogo}
          width="40"
        />
        <img
          alt="Workshop Image"
          className="absolute top-2 right-2  rounded-lg object-cover h-10 w-10 "
          src={IWDubai}
        />
      </div>
      <div className="text-center mb-2">
        <div className="rounded-lg bg-yellow-50 py-4 border-2 shadow-lg">
          <p className="text-gray-800 font-inter text-[13px] font-medium px-4">
            <span className="text-gray-800 text-center font-inter text-base font-bold ">
              Meet Dietitian Khyati Rupani,
            </span>{" "}
            Ex-Chief Dietitian at Lilavati Hospital. She is an Award- Winning
            Dietitian who has lost 40kg herself.
          </p>
          <p className="text-gray-800 font-inter text-[13px] px-1 font-bold underline decoration-solid underline-offset-auto decoration-from-font">
            Trusted by 5,000+ clients in the UAE since 2014
          </p>
        </div>
        <div className="flex flex-col items-start justify-between rounded-xl px-4 py-2 bg-white gap-y-2 mt-3 border-2 shadow-lg border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="text-green-600 flex w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M33.75 7.5V13.75H6.25V7.5C6.25 7.16848 6.3817 6.85054 6.61612 6.61612C6.85054 6.3817 7.16848 6.25 7.5 6.25H32.5C32.8315 6.25 33.1495 6.3817 33.3839 6.61612C33.6183 6.85054 33.75 7.16848 33.75 7.5Z"
                  fill="#0B6A6E"
                />
                <path
                  d="M32.5 5H28.75V3.75C28.75 3.41848 28.6183 3.10054 28.3839 2.86612C28.1495 2.6317 27.8315 2.5 27.5 2.5C27.1685 2.5 26.8505 2.6317 26.6161 2.86612C26.3817 3.10054 26.25 3.41848 26.25 3.75V5H13.75V3.75C13.75 3.41848 13.6183 3.10054 13.3839 2.86612C13.1495 2.6317 12.8315 2.5 12.5 2.5C12.1685 2.5 11.8505 2.6317 11.6161 2.86612C11.3817 3.10054 11.25 3.41848 11.25 3.75V5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H32.5C33.163 35 33.7989 34.7366 34.2678 34.2678C34.7366 33.7989 35 33.163 35 32.5V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5ZM11.25 7.5V8.75C11.25 9.08152 11.3817 9.39946 11.6161 9.63388C11.8505 9.8683 12.1685 10 12.5 10C12.8315 10 13.1495 9.8683 13.3839 9.63388C13.6183 9.39946 13.75 9.08152 13.75 8.75V7.5H26.25V8.75C26.25 9.08152 26.3817 9.39946 26.6161 9.63388C26.8505 9.8683 27.1685 10 27.5 10C27.8315 10 28.1495 9.8683 28.3839 9.63388C28.6183 9.39946 28.75 9.08152 28.75 8.75V7.5H32.5V12.5H7.5V7.5H11.25ZM32.5 32.5H7.5V15H32.5V32.5ZM21.875 20.625C21.875 20.9958 21.765 21.3584 21.559 21.6667C21.353 21.975 21.0601 22.2154 20.7175 22.3573C20.3749 22.4992 19.9979 22.5363 19.6342 22.464C19.2705 22.3916 18.9364 22.213 18.6742 21.9508C18.412 21.6886 18.2334 21.3545 18.161 20.9908C18.0887 20.6271 18.1258 20.2501 18.2677 19.9075C18.4096 19.5649 18.65 19.272 18.9583 19.066C19.2666 18.86 19.6292 18.75 20 18.75C20.4973 18.75 20.9742 18.9475 21.3258 19.2992C21.6775 19.6508 21.875 20.1277 21.875 20.625ZM28.75 20.625C28.75 20.9958 28.64 21.3584 28.434 21.6667C28.228 21.975 27.9351 22.2154 27.5925 22.3573C27.2499 22.4992 26.8729 22.5363 26.5092 22.464C26.1455 22.3916 25.8114 22.213 25.5492 21.9508C25.287 21.6886 25.1084 21.3545 25.036 20.9908C24.9637 20.6271 25.0008 20.2501 25.1427 19.9075C25.2846 19.5649 25.525 19.272 25.8333 19.066C26.1416 18.86 26.5042 18.75 26.875 18.75C27.3723 18.75 27.8492 18.9475 28.2008 19.2992C28.5525 19.6508 28.75 20.1277 28.75 20.625ZM15 26.875C15 27.2458 14.89 27.6084 14.684 27.9167C14.478 28.225 14.1851 28.4654 13.8425 28.6073C13.4999 28.7492 13.1229 28.7863 12.7592 28.714C12.3955 28.6416 12.0614 28.463 11.7992 28.2008C11.537 27.9386 11.3584 27.6045 11.286 27.2408C11.2137 26.8771 11.2508 26.5001 11.3927 26.1575C11.5346 25.8149 11.775 25.522 12.0833 25.316C12.3916 25.11 12.7542 25 13.125 25C13.6223 25 14.0992 25.1975 14.4508 25.5492C14.8025 25.9008 15 26.3777 15 26.875ZM21.875 26.875C21.875 27.2458 21.765 27.6084 21.559 27.9167C21.353 28.225 21.0601 28.4654 20.7175 28.6073C20.3749 28.7492 19.9979 28.7863 19.6342 28.714C19.2705 28.6416 18.9364 28.463 18.6742 28.2008C18.412 27.9386 18.2334 27.6045 18.161 27.2408C18.0887 26.8771 18.1258 26.5001 18.2677 26.1575C18.4096 25.8149 18.65 25.522 18.9583 25.316C19.2666 25.11 19.6292 25 20 25C20.4973 25 20.9742 25.1975 21.3258 25.5492C21.6775 25.9008 21.875 26.3777 21.875 26.875ZM28.75 26.875C28.75 27.2458 28.64 27.6084 28.434 27.9167C28.228 28.225 27.9351 28.4654 27.5925 28.6073C27.2499 28.7492 26.8729 28.7863 26.5092 28.714C26.1455 28.6416 25.8114 28.463 25.5492 28.2008C25.287 27.9386 25.1084 27.6045 25.036 27.2408C24.9637 26.8771 25.0008 26.5001 25.1427 26.1575C25.2846 25.8149 25.525 25.522 25.8333 25.316C26.1416 25.11 26.5042 25 26.875 25C27.3723 25 27.8492 25.1975 28.2008 25.5492C28.5525 25.9008 28.75 26.3777 28.75 26.875Z"
                  fill="#0B6A6E"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-inter text-sm font-bold">
                29th Jan, 10:30 am - 12:30 pm
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="text-blue-600 w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  opacity="0.2"
                  d="M20 3.75C16.6848 3.75 13.5054 5.06696 11.1612 7.41117C8.81696 9.75537 7.5 12.9348 7.5 16.25C7.5 27.5 20 36.25 20 36.25C20 36.25 32.5 27.5 32.5 16.25C32.5 12.9348 31.183 9.75537 28.8388 7.41117C26.4946 5.06696 23.3152 3.75 20 3.75ZM20 21.25C19.0111 21.25 18.0444 20.9568 17.2221 20.4073C16.3999 19.8579 15.759 19.077 15.3806 18.1634C15.0022 17.2498 14.9031 16.2445 15.0961 15.2745C15.289 14.3046 15.7652 13.4137 16.4645 12.7145C17.1637 12.0152 18.0546 11.539 19.0245 11.3461C19.9945 11.1531 20.9998 11.2522 21.9134 11.6306C22.827 12.009 23.6079 12.6499 24.1573 13.4721C24.7068 14.2944 25 15.2611 25 16.25C25 17.5761 24.4732 18.8479 23.5355 19.7855C22.5979 20.7232 21.3261 21.25 20 21.25Z"
                  fill="#0B6A6E"
                />
                <path
                  d="M20 10C18.7639 10 17.5555 10.3666 16.5277 11.0533C15.4999 11.7401 14.6988 12.7162 14.2258 13.8582C13.7527 15.0003 13.6289 16.2569 13.8701 17.4693C14.1112 18.6817 14.7065 19.7953 15.5806 20.6694C16.4547 21.5435 17.5683 22.1388 18.7807 22.3799C19.9931 22.6211 21.2497 22.4973 22.3918 22.0242C23.5338 21.5512 24.5099 20.7501 25.1967 19.7223C25.8834 18.6945 26.25 17.4861 26.25 16.25C26.25 14.5924 25.5915 13.0027 24.4194 11.8306C23.2473 10.6585 21.6576 10 20 10ZM20 20C19.2583 20 18.5333 19.7801 17.9166 19.368C17.2999 18.956 16.8193 18.3703 16.5355 17.6851C16.2516 16.9998 16.1774 16.2458 16.3221 15.5184C16.4667 14.791 16.8239 14.1228 17.3483 13.5983C17.8728 13.0739 18.541 12.7167 19.2684 12.5721C19.9958 12.4274 20.7498 12.5016 21.4351 12.7855C22.1203 13.0693 22.706 13.5499 23.118 14.1666C23.5301 14.7833 23.75 15.5083 23.75 16.25C23.75 17.2446 23.3549 18.1984 22.6517 18.9017C21.9484 19.6049 20.9946 20 20 20ZM20 2.5C16.3545 2.50414 12.8596 3.95412 10.2818 6.53185C7.70412 9.10958 6.25414 12.6045 6.25 16.25C6.25 21.1562 8.51719 26.3563 12.8125 31.2891C14.7425 33.5181 16.9148 35.5252 19.2891 37.2734C19.4992 37.4207 19.7496 37.4996 20.0062 37.4996C20.2629 37.4996 20.5133 37.4207 20.7234 37.2734C23.0934 35.5245 25.2614 33.5174 27.1875 31.2891C31.4766 26.3563 33.75 21.1562 33.75 16.25C33.7459 12.6045 32.2959 9.10958 29.7182 6.53185C27.1404 3.95412 23.6455 2.50414 20 2.5ZM20 34.6875C17.4172 32.6562 8.75 25.1953 8.75 16.25C8.75 13.2663 9.93526 10.4048 12.045 8.29505C14.1548 6.18526 17.0163 5 20 5C22.9837 5 25.8452 6.18526 27.955 8.29505C30.0647 10.4048 31.25 13.2663 31.25 16.25C31.25 25.1922 22.5828 32.6562 20 34.6875Z"
                  fill="#0B6A6E"
                />
              </svg>
            </div>
            <div>
              <p className="md:text-base text-gray-800 font-semibold">
                Dubai
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-between my-3">
          <p className="text-black-600 my-4 md:my-3">
            <span className="text-gray-800 font-inter text-[15px] font- md:text-xl font-medium">
              Registration Fee:{" "}
            </span>
            <span className="text-red-500 font-inter text-base md:text-xl font-bold">
              50 AED{" "}
            </span>
          </p>
          <button
            className="bg-yellow-500 rounded-lg text-gray-800 font-inter text-[15px] px-3 py-2 font-bold"
            onClick={() => setModalControl(true)}
          >
            Register Now
          </button>
        </div>
      </div>

      <div className="mb-2">
        <p className="text-base font-medium bg-[#FFF7ED] border border-[#B8A349] px-3 py-2 text-black text-center rounded-lg shadow-lg">
          <span className="font-bold">50 AED </span>fully redeemable upon
          enrolling in our online diet program.
        </p>
      </div>

      <p className="text-gray-800 text-center font-inter text-sm font-medium italic">
        Workshop - includes refreshments*
      </p>
    </div>
    // </div>
  );
}
