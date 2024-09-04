import React from 'react';
import './Connect.css';

const teamMembers = [
  {
    name: "Gmail",
    role: "Visit",
    link: "mailto:ritikgupta0610@gmail.com",  // Updated link for mailto
    imageUrl: "/gmail.png",
  },
  {
    name: "Linkedin",
    role: "Visit",
    link: "https://www.linkedin.com/in/ritikgupta2026/",
    imageUrl: "/ld.png",
  },
  {
    name: "Github",
    role: "Visit",
    link: "https://github.com/ritikgupta06",
    imageUrl: "/github.png",
  },
  {
    name: "Instagram",
    role: "Visit",
    link: "https://www.instagram.com/ritik_g_u_p_t_a_/",
    imageUrl: "/insta.jpg",
  },
  // {
  //   name: "Portfolio",
  //   role: "Visit Portfolio",
  //   link: "https://example.com",
  //   imageUrl: "/src/assets/icon.jpg",
  // },
];

const Connect = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="team-container">
      <h1 className="team-title">Connect with me</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="circle-image">
              <img src={member.imageUrl} alt={member.name} className="profile-pic" />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <button className="connect-button" onClick={() => handleButtonClick(member.link)}>
              {member.role}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
