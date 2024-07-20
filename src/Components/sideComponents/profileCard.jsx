import React from "react";
import "./profileCard.css";

const ProfileCard = ({ image, name, title, description, socialLinks }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-img" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
      </div>
      <div className="profile-hover-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
