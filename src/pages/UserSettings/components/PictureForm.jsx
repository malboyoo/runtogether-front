import { useState } from "react";
import { editProfilePicture } from "../../../api/users";
import Resizer from "react-image-file-resizer";

function PictureForm({ user, setUser, setToggleSettings }) {
  const [file, setFile] = useState(null);

  const resizeFile = async(file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        200,
        200,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

    const onFileUpload = async (newFile) => {
        const formData = new FormData();
        formData.append("image", newFile);
        const body = await editProfilePicture(formData);
        setUser({ ...user, ...body });
        setToggleSettings({
          photo: false,
          name: false,
          city: false,
          club: false,
        });
      };

  const onChangeHandler = async (event) => {
    const newFile = await resizeFile(event.target.files[0]);
    setFile(newFile);
    onFileUpload(newFile);
  };

  

  return (
    <form
      className="my-4 flex flex-row justify-between items-center"  
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className="font-semibold" htmlFor="image">
        Photo
      </label>
      <div className="flex flex-row">
        <input
          type="file"
          name="image"
          accept=".jpg,.png"
          className="mx-1 md:p-2 p-1 max-w-[235px] md:max-w-[350px] text-xs md:text-sm overflow-hidden"
          onChange={onChangeHandler}
          encType="multipart/form-data"
        />
      </div>
      <button className="mr-2 text-end max-w-min justify-self-end">
        <i className="fa-solid fa-pen text-primary cursor-pointer"></i>
      </button>
    </form>
  );
}

export default PictureForm;
