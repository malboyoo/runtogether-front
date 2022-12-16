import styles from "./EventProfile.module.scss";

function EventProfile({ user, textColor, reverse = false }) {
  return (
    <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center justify-between  p-1 rounded-md `}>
      <div className="mr-2 font-medium">
        <span className={`${textColor} text-sm`}>
          {user.firstName} {user.lastName[0]}
        </span>
      </div>
      <div
        className={`${styles.profilePicture} h-5 w-5 md:h-10 md:w-10`}
        style={{ backgroundImage: `url(${user.imageUrl})` }}
      ></div>
    </div>
  );
}

export default EventProfile;
