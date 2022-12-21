import styles from "./Profile.module.scss";

function Profile({ user }) {
  return (
    <div className="flex flex-row items-center bg-gray-4 p-1 rounded-md  hover:bg-dark-2 transition-all">
      <div className="mx-2 font-medium">
        <span className="text-white">
          {user.firstName} {user.lastName[0]}
        </span>
      </div>
      <div className={styles.profilePicture} style={{ backgroundImage: `url(${user.imageUrl})` }}></div>
    </div>
  );
}

export default Profile;
