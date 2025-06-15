"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Notifications from "./notifications";
import { useDispatch, useSelector } from "react-redux";


export default function DashboardHeader() {
  // const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const [open, setOpen] = useState(false);

  // const mobileMenu = useSelector((state) => state.mobileMenu)

  // useEffect(() => {
  //   console.log('mobileMenu', mobileMenu)
  // }, [mobileMenu])

  // const handleSidebarOpen = () => {
  //   if(mobileMenu) {
  //     dispatch({
  //       type: "SET_MENU_VISIBLE",
  //       payload: false
  //     });
  //   } else {
  //     dispatch({
  //       type: "SET_MENU_VISIBLE",
  //       payload: true
  //     });
  //   }
  // }

  return (
    <div className="dashboard-header">
      <div className="dashboard-header__logo">
        <div className="dashboard-header__logo__mobile-menu">
          <button 
            className="hamburger-menu" 
            // onClick={handleSidebarOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z"
                fill="black"
              />
            </svg>
          </button>

          {/* <div className="mobile-sidebar">
              <Sidebar />
            </div> */}
        </div>

        <div className="dashboard-header__logo__img">
          <Image alt="" src="/assets/logo.png" width={44} height={44} />
        </div>

        <div className="dashboard-header__logo__title-group">
          <h1 className="dashboard-header__logo__title-group__title">
            Centralised Domestic Staff Registrar CDSR
          </h1>
          <h2 className="dashboard-header__logo__title-group__subtitle">
            Powered by Nigerian Police Force (NPF)
          </h2>
        </div>
      </div>

      <form className="dashboard-header__board">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.58268 17.1253C3.87435 17.1253 0.0410156 13.292 0.0410156 8.58366C0.0410156 3.87533 3.87435 0.0419922 8.58268 0.0419922C13.291 0.0419922 17.1243 3.87533 17.1243 8.58366C17.1243 13.292 13.291 17.1253 8.58268 17.1253ZM8.58268 1.29199C4.55768 1.29199 1.29102 4.56699 1.29102 8.58366C1.29102 12.6003 4.55768 15.8753 8.58268 15.8753C12.6077 15.8753 15.8743 12.6003 15.8743 8.58366C15.8743 4.56699 12.6077 1.29199 8.58268 1.29199Z"
            fill="#7E92A2"
          />
          <path
            d="M17.3327 17.9587C17.1743 17.9587 17.016 17.9003 16.891 17.7753L15.2243 16.1087C14.9827 15.867 14.9827 15.467 15.2243 15.2253C15.466 14.9837 15.866 14.9837 16.1077 15.2253L17.7744 16.892C18.016 17.1337 18.016 17.5337 17.7744 17.7753C17.6494 17.9003 17.491 17.9587 17.3327 17.9587Z"
            fill="#7E92A2"
          />
        </svg>
        <input type="text" placeholder="Search..." />
      </form>

      <div className="dashboard-header__account">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21.752C20.9015 21.7522 20.8039 21.7329 20.7129 21.6951C20.622 21.6574 20.5393 21.602 20.4698 21.5322L2.46984 3.5322C2.33513 3.39041 2.26114 3.20159 2.26364 3.00602C2.26614 2.81045 2.34495 2.6236 2.48325 2.4853C2.62155 2.34699 2.8084 2.26819 3.00398 2.26569C3.19955 2.26318 3.38836 2.33718 3.53016 2.47189L21.5302 20.4719C21.635 20.5768 21.7064 20.7104 21.7353 20.8558C21.7642 21.0013 21.7493 21.152 21.6926 21.289C21.6358 21.426 21.5398 21.5431 21.4165 21.6255C21.2932 21.708 21.1483 21.752 21 21.752ZM1.815 9.22611C0.627656 10.3089 0 11.7874 0 13.502C0 15.1895 0.674063 16.7308 1.89797 17.8422C3.07687 18.9128 4.66687 19.502 6.375 19.502H15.4125C15.4867 19.5021 15.5593 19.4801 15.621 19.4389C15.6827 19.3977 15.7308 19.3392 15.7592 19.2706C15.7876 19.202 15.7951 19.1266 15.7806 19.0538C15.7661 18.981 15.7303 18.9142 15.6778 18.8617L4.72875 7.91267C4.68065 7.86447 4.62033 7.83027 4.55426 7.81376C4.48819 7.79724 4.41888 7.79903 4.35375 7.81892C3.375 8.11845 2.50313 8.59798 1.815 9.22611ZM22.3402 18.341C23.4263 17.4761 24 16.1922 24 14.627C24 11.9285 22.0312 10.3811 19.8956 9.90439C19.7551 9.87238 19.6269 9.80059 19.5261 9.69759C19.4254 9.59459 19.3564 9.46476 19.3275 9.32361C18.9675 7.60423 18.1814 6.12908 17.0222 5.01111C15.673 3.71401 13.8716 2.9934 12 3.00205C10.5413 3.00205 9.18188 3.42392 8.03344 4.22548C7.98796 4.2566 7.94989 4.29735 7.92195 4.34485C7.894 4.39234 7.87687 4.44541 7.87177 4.50028C7.86667 4.55515 7.87372 4.61047 7.89243 4.6623C7.91113 4.71413 7.94103 4.76121 7.98 4.80017L21.6413 18.4614C21.7033 18.5235 21.7851 18.5618 21.8724 18.5698C21.9598 18.5777 22.0472 18.5548 22.1194 18.505C22.1953 18.4525 22.2689 18.3978 22.3402 18.341Z"
            fill="#B4B4B4"
          />
        </svg>

        <div
          className="dashboard-header__account__notifications"
          onClick={() => setOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04173 19.0069H14.9583C14.7196 20.425 13.486 21.5054 12 21.5054C10.514 21.5054 9.28037 20.425 9.04173 19.0069ZM12 2.00781C16.1421 2.00781 19.5 5.36567 19.5 9.50781V13.5063L20.9183 16.6664C20.9732 16.7887 21.0016 16.9213 21.0016 17.0554C21.0016 17.5801 20.5763 18.0054 20.0516 18.0054H3.95219C3.8184 18.0054 3.68613 17.9772 3.56402 17.9225C3.08515 17.7081 2.87073 17.1461 3.08511 16.6672L4.50001 13.5067L4.50011 9.49489L4.50453 9.24497C4.6436 5.21425 7.95588 2.00781 12 2.00781Z"
              fill="black"
            />
            <circle cx="17.5" cy="5.5" r="4" fill="#BA0000" stroke="#E9E9E9" />
          </svg>
        </div>

        <Image
          alt=""
          src="/assets/cdsr.png"
          width={50}
          height={50}
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={() => (window.location.href = "/justice/dashboard/profile")}
        />
      </div>

      <Notifications open={open} setOpen={setOpen} />
    </div>
  );
}
