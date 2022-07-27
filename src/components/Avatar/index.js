import React from "react";
import { generateAvatarFromHash } from "../../utils/utils";
import "./Avatar.scss";

const Avatar = ({ user }) => {
  
  if (user.avatar || user.photoUrl) {

    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {

    const { color, colorLighten } = generateAvatarFromHash(user.id);

    const firstChar = user.username[0].toUpperCase();

    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};
export default Avatar;