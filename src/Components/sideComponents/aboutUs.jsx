import React from "react";
import ProfileCard from "./profileCard"; // Adjust the import path as necessary
import harisImage from "./download.png";
import anotherImage from "./download.png";
import thirdImage from "./download.png";
import fourthImage from "./download.png";

const AboutUs = () => {
  const socialLinksHaris = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "#", iconClass: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/haris-becirovic-142565267/",
      iconClass: "fab fa-linkedin",
    },
  ];
  const socialLinksDzenis = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "https://github.com/DzenisFejzovic", iconClass: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/dzenis-fejzovic-ba0aa5316/",
      iconClass: "fab fa-linkedin",
    },
  ];
  const socialLinksImran = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "#", iconClass: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/imran-becirovic-06b95a21a",
      iconClass: "fab fa-linkedin",
    },
  ];
  const socialLinksEldar = [
    { href: "#", iconClass: "fab fa-facebook-square" },
    { href: "#", iconClass: "fab fa-instagram" },
    { href: "#", iconClass: "fab fa-github" },
    {
      href: "https://www.linkedin.com/in/eldar-ćatović-24b887277",
      iconClass: "fab fa-linkedin",
    },
  ];

  return (
    <div>
      <div className="profile-cards-container">
        <ProfileCard
          image={fourthImage}
          name="Dženis Fejzović"
          title="Backend Developer"
          description="Dzenis oversaw the project management and coordination among the team members."
          socialLinks={socialLinksDzenis}
        />
        <ProfileCard
          image={anotherImage}
          name="Imran Bećirović"
          title="UI/UX Designer"
          description="Imran was responsible for the design and user experience of the application."
          socialLinks={socialLinksImran}
        />
        <ProfileCard
          image={thirdImage}
          name="Eldar"
          title="Project Manager"
          description="Eldar was responsible for server-side logic and integration."
          socialLinks={socialLinksEldar}
        />
        <div className="break"></div> {/* Breaks the line */}
        <ProfileCard
          image={harisImage}
          name="Haris Bećirović"
          title="Web Developer"
          description="Haris was in charge of the main functionalities of the application, as well as the arrangement of components in the project."
          socialLinks={socialLinksHaris}
        />
      </div>
    </div>
  );
};

export default AboutUs;
