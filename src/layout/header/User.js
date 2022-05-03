import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { Store, action_logout } from "../../store";

import { AlertToast } from "../../components/global";

// api
import { server_logout } from "../../server/auth";

import styles from "../../styles/layout/user.module.css";

export default function User() {
  // store
  const { authStore, authDispatch } = useContext(Store);
  const { user } = authStore;

  // logout
  const handleLogOut = () => {
    // request /
    authDispatch(action_logout());
    AlertToast("success", "you are logged out!");
    // server_logout().then((res) => {
    //   authDispatch(action_logout());
    //   AlertToast("success", "you are logged out!");
    // });
  };

  // handle active link
  const activeLink = (active) => {
    const classes = `${styles.dropdownProfileItem} dropdown-item`;
    if (active) {
      return `${classes} ${styles.dropdownProfileItemActive}`;
    }
    return `${classes}`;
  };

  return (
    <div className={`${styles.user}`}>
      <div className="dropdown">
        <button
          className={`dropdown-toggle text-capitalize d-flex align-items-center justify-content-center ${styles.profileBtn}`}
          type="button"
          id="dropdownMenuProfileButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {user.image_profile ? (
            <span className={styles.profileImgWrapper}>
              <img
                src={user.image_profile}
                alt={user.name}
                className={`img-fluid ${styles.profileImg}`}
              />
            </span>
          ) : (
            <span
              className={`d-flex align-items-center justify-content-center ${styles.profileImgIcon}`}
            >
              <ion-icon name="person-outline"></ion-icon>
            </span>
          )}
          {/* <span>{user.name}</span> */}
        </button>
        <ul
          className={`dropdown-menu ${styles.profileMenu}`}
          aria-labelledby="dropdownMenuProfileButton"
        >
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => activeLink(isActive)}
            >
              profile
            </NavLink>
          </li>

          <li>
            <button
              type="button"
              onClick={handleLogOut}
              className={`dropdown-item ${styles.dropdownProfileItem} ${styles.dropdownLogout}`}
            >
              logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
