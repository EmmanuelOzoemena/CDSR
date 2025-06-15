"use client";

import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [dropdownActive, setDropdownActive] = useState(false);
  // const mobileMenu = useSelector((state) => state.mobileMenu)

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    window.location.href = "/justice/login";
    window.scrollTo(0, 0);
  };

  console.log("ginger", pathname?.split("/")?.length);

  return (
    // <div className={`adminDashboard-sidebar ${!mobileMenu && `adminDashboard-sidebar-none`}`}>
    <div className="adminDashboard-sidebar">
      <div
        className={
          pathname?.includes("dashboard") && pathname?.split("/")?.length < 4
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard")}
      >
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.475 10.4577H12.1083C10.4333 10.4577 9.625 9.68268 9.625 8.08268V2.41602C9.625 0.816015 10.4417 0.0410156 12.1083 0.0410156H15.475C17.15 0.0410156 17.9583 0.816015 17.9583 2.41602V8.08268C17.9583 9.68268 17.1417 10.4577 15.475 10.4577ZM12.1083 1.29102C11.05 1.29102 10.875 1.57435 10.875 2.41602V8.08268C10.875 8.92435 11.05 9.20768 12.1083 9.20768H15.475C16.5333 9.20768 16.7083 8.92435 16.7083 8.08268V2.41602C16.7083 1.57435 16.5333 1.29102 15.475 1.29102H12.1083Z"
              fill="#7E92A2"
            />
            <path
              d="M15.475 17.457H12.1083C11.3384 17.457 10.8662 17.2781 10.5842 17.0083C10.3066 16.7426 10.125 16.3036 10.125 15.582V14.082C10.125 13.3618 10.308 12.9225 10.5869 12.6562C10.8704 12.3856 11.3432 12.207 12.1083 12.207H15.475C16.2449 12.207 16.7171 12.3859 16.9991 12.6558C17.2768 12.9215 17.4583 13.3605 17.4583 14.082V15.582C17.4583 16.3023 17.2754 16.7416 16.9964 17.0079C16.713 17.2784 16.2401 17.457 15.475 17.457ZM12.1083 12.457C11.5806 12.457 11.0756 12.516 10.7412 12.8504C10.4031 13.1885 10.375 13.675 10.375 14.082V15.582C10.375 15.9891 10.4031 16.4756 10.7412 16.8137C11.0756 17.1481 11.5806 17.207 12.1083 17.207H15.475C16.0027 17.207 16.5077 17.1481 16.8421 16.8137C17.1802 16.4756 17.2083 15.9891 17.2083 15.582V14.082C17.2083 13.675 17.1802 13.1885 16.8421 12.8504C16.5077 12.516 16.0027 12.457 15.475 12.457H12.1083Z"
              stroke="#7E92A2"
            />
            <path
              d="M5.8915 17.9577H2.52484C0.849837 17.9577 0.0415039 17.1827 0.0415039 15.5827V9.91602C0.0415039 8.31602 0.858171 7.54102 2.52484 7.54102H5.8915C7.5665 7.54102 8.37484 8.31602 8.37484 9.91602V15.5827C8.37484 17.1827 7.55817 17.9577 5.8915 17.9577ZM2.52484 8.79102C1.4665 8.79102 1.2915 9.07435 1.2915 9.91602V15.5827C1.2915 16.4243 1.4665 16.7077 2.52484 16.7077H5.8915C6.94984 16.7077 7.12484 16.4243 7.12484 15.5827V9.91602C7.12484 9.07435 6.94984 8.79102 5.8915 8.79102H2.52484Z"
              fill="#7E92A2"
            />
            <path
              d="M5.8915 6.29102H2.52484C0.849837 6.29102 0.0415039 5.51602 0.0415039 3.91602V2.41602C0.0415039 0.816016 0.858171 0.0410156 2.52484 0.0410156H5.8915C7.5665 0.0410156 8.37484 0.816016 8.37484 2.41602V3.91602C8.37484 5.51602 7.55817 6.29102 5.8915 6.29102ZM2.52484 1.29102C1.4665 1.29102 1.2915 1.57435 1.2915 2.41602V3.91602C1.2915 4.75768 1.4665 5.04102 2.52484 5.04102H5.8915C6.94984 5.04102 7.12484 4.75768 7.12484 3.91602V2.41602C7.12484 1.57435 6.94984 1.29102 5.8915 1.29102H2.52484Z"
              fill="#7E92A2"
            />
          </svg>
        </div>
        <div className="adminDashboard-sidebar__item__title">Dashboard</div>
      </div>

      <div
        className={
          pathname?.includes("suspect") && pathname?.split("/")?.length < 5
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/staff")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3697 4.89012L13.5097 2.28012C12.6497 1.90012 11.3497 1.90012 10.4897 2.28012L4.62969 4.89012C3.14969 5.55012 2.92969 6.45012 2.92969 6.93012C2.92969 7.41012 3.14969 8.31012 4.62969 8.97012L10.4897 11.5801C10.9197 11.7701 11.4597 11.8701 11.9997 11.8701C12.5397 11.8701 13.0797 11.7701 13.5097 11.5801L19.3697 8.97012C20.8497 8.31012 21.0697 7.41012 21.0697 6.93012C21.0697 6.45012 20.8597 5.55012 19.3697 4.89012Z"
              fill="#94A3B8"
            />
            <path
              d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
              fill="#94A3B8"
            />
            <path
              d="M12.0003 22C11.6203 22 11.2403 21.92 10.8903 21.77L4.15031 18.77C3.04031 18.28 2.32031 17.17 2.32031 15.95C2.32031 15.54 2.65031 15.21 3.06031 15.21C3.47031 15.21 3.80031 15.54 3.80031 15.95C3.80031 16.58 4.17031 17.15 4.75031 17.41L11.4903 20.41C11.8103 20.55 12.1803 20.55 12.5003 20.41L19.2403 17.41C19.8103 17.16 20.1903 16.58 20.1903 15.95C20.1903 15.54 20.5203 15.21 20.9303 15.21C21.3403 15.21 21.6703 15.54 21.6703 15.95C21.6703 17.17 20.9503 18.27 19.8403 18.77L13.1003 21.77C12.7603 21.92 12.3803 22 12.0003 22Z"
              fill="#94A3B8"
            />
          </svg>
        </div>
        <div className="adminDashboard-sidebar__item__title">Staff List</div>
      </div>

      {/* -------------------------------------------------------------- */}

      {/* <div className="adminDashboard-sidebar__item-container">
        <div
          className={
            pathname?.includes("cases")
              ? "adminDashboard-sidebar__item-container__item adminDashboard-sidebar__item-container__item-active"
              : "adminDashboard-sidebar__item-container__item"
          }
          onClick={() => setDropdownActive(!dropdownActive)}
        >
          <div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3697 4.89012L13.5097 2.28012C12.6497 1.90012 11.3497 1.90012 10.4897 2.28012L4.62969 4.89012C3.14969 5.55012 2.92969 6.45012 2.92969 6.93012C2.92969 7.41012 3.14969 8.31012 4.62969 8.97012L10.4897 11.5801C10.9197 11.7701 11.4597 11.8701 11.9997 11.8701C12.5397 11.8701 13.0797 11.7701 13.5097 11.5801L19.3697 8.97012C20.8497 8.31012 21.0697 7.41012 21.0697 6.93012C21.0697 6.45012 20.8597 5.55012 19.3697 4.89012Z"
                  fill="#94A3B8"
                />
                <path
                  d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
                  fill="#94A3B8"
                />
                <path
                  d="M12.0003 22C11.6203 22 11.2403 21.92 10.8903 21.77L4.15031 18.77C3.04031 18.28 2.32031 17.17 2.32031 15.95C2.32031 15.54 2.65031 15.21 3.06031 15.21C3.47031 15.21 3.80031 15.54 3.80031 15.95C3.80031 16.58 4.17031 17.15 4.75031 17.41L11.4903 20.41C11.8103 20.55 12.1803 20.55 12.5003 20.41L19.2403 17.41C19.8103 17.16 20.1903 16.58 20.1903 15.95C20.1903 15.54 20.5203 15.21 20.9303 15.21C21.3403 15.21 21.6703 15.54 21.6703 15.95C21.6703 17.17 20.9503 18.27 19.8403 18.77L13.1003 21.77C12.7603 21.92 12.3803 22 12.0003 22Z"
                  fill="#94A3B8"
                />
              </svg>
            </div>
            <div className="adminDashboard-sidebar__item__title">Suspect</div>
          </div>
          {dropdownActive ? (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34876 3.42336L10.3438 7.4184C10.5365 7.61107 10.5365 7.92345 10.3438 8.11611L9.87782 8.58206C9.68547 8.77441 9.37373 8.77478 9.18093 8.58288L5.9999 5.41675L2.81888 8.58288C2.62608 8.77478 2.31434 8.77441 2.12199 8.58206L1.65604 8.11611C1.46336 7.92343 1.46336 7.61105 1.65604 7.4184L5.65103 3.42336C5.84371 3.23071 6.15609 3.23071 6.34876 3.42336Z"
                fill="#009B07"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#94A3B8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </div>

        <div
          className={
            dropdownActive
              ? "adminDashboard-sidebar__item-container__sub-items"
              : "adminDashboard-sidebar__item-container__sub-items-inactive"
          }
        >
          <div
            className={
              pathname?.includes("create-case") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href = "/justice/dashboard/suspect/add-profile")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>New Suspect</div>
          </div>
          <div
            className={
              pathname?.includes("cases") &&
              pathname.split("/")?.length < 5 &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() =>
              (window.location.href = "/justice/dashboard/suspect/list")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Suspect list</div>
          </div>
          <div
            className={
              pathname?.includes("favourite") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() => {
              window.location.href = `/justice/dashboard/suspect/favourite-cases`
          }}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Favourites</div>
          </div>
          <div
            className={
              pathname?.includes("transferred") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() => {
              window.location.href = `/justice/dashboard/suspect/transferred-cases`
          }}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Transferred Profile</div>
          </div>
          <div
            className={
              pathname?.includes("deactivated") &&
              "adminDashboard-sidebar__item-container__sub-items__active"
            }
            onClick={() => {
              window.location.href = `/justice/dashboard/suspect/deactivated-cases`
          }}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Deactivated Profile</div>
          </div>
        </div>
      </div> */}

      {/* -------------------------------------------------------------- */}

      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/incident")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.5288C12.2183 17.5288 12.4012 17.455 12.5487 17.3075C12.6954 17.16 12.7687 16.9775 12.7687 16.76C12.7687 16.5425 12.695 16.3596 12.5475 16.2113C12.4 16.0629 12.2175 15.9892 12 15.99C11.7825 15.9908 11.6 16.0646 11.4525 16.2113C11.305 16.3579 11.2313 16.5408 11.2313 16.76C11.2313 16.9792 11.305 17.1617 11.4525 17.3075C11.6 17.4533 11.7825 17.5271 12 17.5288ZM11.375 13.8275H12.625V6.23H11.375V13.8275ZM7.84125 22L2 16.17V7.84125L7.83 2H16.1587L22 7.83V16.1587L16.17 22H7.84125Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">
          Incident Report
        </div>
      </div>

      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/find-match")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50108 6.375C1.50108 5.47989 1.85666 4.62145 2.4896 3.98851C3.12253 3.35558 3.98098 3 4.87608 3H19.1261C20.0212 3 20.8796 3.35558 21.5126 3.98851C22.1455 4.62145 22.5011 5.47989 22.5011 6.375V17.625C22.5011 18.5201 22.1455 19.3786 21.5126 20.0115C20.8796 20.6444 20.0212 21 19.1261 21H12.3761C12.3221 20.9296 12.264 20.8625 12.2021 20.799L10.3271 18.9248C10.6796 18.1898 10.8761 17.367 10.8761 16.5H14.2511C14.45 16.5 14.6408 16.421 14.7814 16.2803C14.9221 16.1397 15.0011 15.9489 15.0011 15.75C15.0011 15.5511 14.9221 15.3603 14.7814 15.2197C14.6408 15.079 14.45 15 14.2511 15H10.6736C10.4423 14.1653 10.0213 13.3953 9.44358 12.75H16.5011C16.7 12.75 16.8908 12.671 17.0314 12.5303C17.1721 12.3897 17.2511 12.1989 17.2511 12C17.2511 11.8011 17.1721 11.6103 17.0314 11.4697C16.8908 11.329 16.7 11.25 16.5011 11.25H7.27458C6.62888 11.0016 5.9429 10.8745 5.25108 10.875C3.81108 10.875 2.49633 11.4165 1.50108 12.3075V6.375ZM6.00108 8.25C6.00108 8.44891 6.0801 8.63968 6.22075 8.78033C6.3614 8.92098 6.55217 9 6.75108 9H12.0011C12.2 9 12.3908 8.92098 12.5314 8.78033C12.6721 8.63968 12.7511 8.44891 12.7511 8.25C12.7511 8.05109 12.6721 7.86032 12.5314 7.71967C12.3908 7.57902 12.2 7.5 12.0011 7.5H6.75108C6.55217 7.5 6.3614 7.57902 6.22075 7.71967C6.0801 7.86032 6.00108 8.05109 6.00108 8.25ZM5.25108 21C6.22308 21 7.12308 20.6925 7.85808 20.1675L10.3458 22.6553C10.4873 22.7919 10.6767 22.8675 10.8734 22.8658C11.07 22.864 11.2581 22.7852 11.3972 22.6461C11.5363 22.5071 11.6151 22.319 11.6168 22.1223C11.6185 21.9257 11.543 21.7362 11.4063 21.5948L8.91933 19.1077C9.50392 18.2856 9.79531 17.2909 9.74674 16.2833C9.69816 15.2757 9.31243 14.3136 8.65146 13.5515C7.9905 12.7895 7.09264 12.2716 6.10202 12.081C5.1114 11.8905 4.08549 12.0383 3.18896 12.5007C2.29243 12.9632 1.5773 13.7135 1.15836 14.6312C0.739422 15.5489 0.640977 16.5807 0.878831 17.561C1.11668 18.5414 1.67704 19.4134 2.46994 20.037C3.26284 20.6607 4.2423 20.9998 5.25108 21ZM5.25108 19.5C4.45543 19.5 3.69237 19.1839 3.12976 18.6213C2.56715 18.0587 2.25108 17.2957 2.25108 16.5C2.25108 15.7044 2.56715 14.9413 3.12976 14.3787C3.69237 13.8161 4.45543 13.5 5.25108 13.5C6.04673 13.5 6.80979 13.8161 7.3724 14.3787C7.93501 14.9413 8.25108 15.7044 8.25108 16.5C8.25108 17.2957 7.93501 18.0587 7.3724 18.6213C6.80979 19.1839 6.04673 19.5 5.25108 19.5Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">
          Background Check
        </div>
      </div>

      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/health")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 7.81V12.5H17.92C17.8 12.49 17.54 12.34 17.48 12.23L16.44 10.26C16.03 9.48 15.32 9.04 14.56 9.08C13.8 9.12 13.15 9.63 12.82 10.46L11.44 13.92L11.24 13.4C10.75 12.13 9.35 11.17 7.97 11.17L2 11.2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
              fill="#94A3B8"
            />
            <path
              d="M22 16.1897V13.9997H17.92C17.25 13.9997 16.46 13.5197 16.15 12.9297L15.11 10.9597C14.83 10.4297 14.43 10.4597 14.21 11.0097L11.91 16.8197C11.66 17.4697 11.24 17.4697 10.98 16.8197L9.84 13.9397C9.57 13.2397 8.73 12.6697 7.98 12.6697L2 12.6997V16.1897C2 19.7697 4.1 21.9297 7.63 21.9897C7.74 21.9997 7.86 21.9997 7.97 21.9997H15.97C16.12 21.9997 16.27 21.9997 16.41 21.9897C19.92 21.9097 22 19.7597 22 16.1897Z"
              fill="#94A3B8"
            />
            <path
              d="M2.0007 12.7002V16.0102C1.9807 15.6902 1.9707 15.3502 1.9707 15.0002V12.7002H2.0007Z"
              fill="#292D32"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">
          Medical Section
        </div>
      </div>

      <div
        className={
          pathname?.includes("chat")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/chat")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Message</div>
      </div>

      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/profile")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              fill="#94A3B8"
            />
            <path
              d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Account</div>
      </div>

      <div className="adminDashboard-sidebar__item" onClick={handleLogout}>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9"
                stroke="#7E9EA2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Log out</div>
      </div>
    </div>
  );
}
