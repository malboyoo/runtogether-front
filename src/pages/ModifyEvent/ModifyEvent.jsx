import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventSchema } from "../../schema/eventSchema.js";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { modifyEvent } from "../../api/event.js";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useSetCityName } from "../../hooks/useSetCityName.js";
import Map from "./Components/Map.jsx";

function ModifyEvent() {
  const event = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [mapInfo, setMapInfo] = useState(event.location);
  const [cityName] = useSetCityName(mapInfo);

  const defaultValues = {
    name: event.name,
    date: event.date,
    description: event.description,
    public: true,
    type: event.type,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(eventSchema),
  });

  async function submit(values) {
    try {
      clearErrors();
      if (mapInfo) {
        const body = {
          ...values,
          location: { ...mapInfo, city: cityName },
          author: user._id,
          _id: id,
        };
        await modifyEvent(body);
        navigate(`/event/${id}`);
      } else {
        setError("generic", { type: "generic", message: "Veuillez choisir un lieu de RDV valide" });
      }
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <main className="flex flex-auto align-center justify-center bg-gray-3 shadow-lg">
      <form
        onSubmit={handleSubmit(submit)}
        className="card md:p-8 p-4 md:my-16 my-10 mx-4 max-w-4xl flex flex-col flex-auto shadow-lg text-gray-4"
      >
        <h2 className="text-xl md:text-2xl font-semibold italic">Modifier une sortie</h2>
        <hr className="border border-gray-1 my-5" />
        <div className="mb-5 flex flex-col">
          <label htmlFor="map" className="md:text-lg text-base">
            Selectionnez une adresse de RDV
          </label>
          <div className="md:h-96 h-72 rounded-md overflow-hidden border-gray-2 border-2 shadow-lg mt-2" id="map">
            <Map setMapInfo={setMapInfo} {...event.location} />
          </div>
          <p className="mt-2">
            {mapInfo && "[ " + mapInfo.label.split(",")[0] + ","} {mapInfo && cityName + " ]"}
          </p>
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="date" className="md:text-lg text-base">
            Date de sortie
          </label>
          <input type="datetime-local" name="date" {...register("date")} className="mt-2 input" />

          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="type" className="md:text-lg text-base">
            Type de sortie
          </label>
          <select name="type" {...register("type")} className="mt-2 border-2 border-gray-2 rounded-md p-2">
            <option value="Running">Running</option>
            <option value="Trail">Trail</option>
            <option value="Marche">Marche</option>
            <option value="Vélo">Vélo</option>
            <option value="Course">Course officielle</option>
          </select>
          {errors.type && <p className="form-error">{errors.type.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="name" className="md:text-lg text-base">
            Nom de la sortie
          </label>
          <input type="text" name="name" {...register("name")} className="mt-2 border-2 border-gray-2 rounded-md p-2" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="description" className="md:text-lg text-base">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            {...register("description")}
            className="mt-2 h-28 border-2 border-gray-2 rounded-md p-2 md:text-sm text-xstext-base"
          />
          {errors.description && <p className="form-error">{errors.description.message}</p>}
        </div>

        {errors.generic && (
          <div className="mb-5">
            <p className="form-error">{errors.generic.message}</p>
          </div>
        )}
        <hr className="border border-gray-1 my-5" />
        <div className="self-center mt-5">
          <button disabled={isSubmitting} className="btn btn-rt1">
            Valider - <i className="fa-solid fa-person-running"></i>
          </button>
        </div>
      </form>
    </main>
  );
}

export default ModifyEvent;
