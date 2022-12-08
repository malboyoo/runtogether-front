import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventSchema } from "../../schema/eventSchema.js";
import Map from "./Components/Map.jsx";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { createEvent } from "../../api/event.js";
import { useNavigate } from "react-router-dom";
import { useSetCityName } from "../../hooks/useSetCityName.js";

function CreateEvent() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [mapInfo, setMapInfo] = useState(undefined);
  const [cityName] = useSetCityName(mapInfo);

  const defaultValues = {
    name: "",
    date: "",
    description: "",
    public: true,
    type: "Running",
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
          registered: [],
          messages: [],
        };
        const event = await createEvent(body);
        navigate(`/event/${event._id}`);
      }
      setError("generic", { type: "generic", message: "Veuillez choisir un lieu de RDV valide" });
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  }

  return (
    <div className="flex flex-auto align-center justify-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="card p-8 my-20 max-w-4xl flex flex-col flex-auto shadow-lg text-gray-4"
      >
        <h2 className="mb-10 text-2xl font-semibold italic">Créer une sortie</h2>
        <div className="mb-5 flex flex-col">
          <label htmlFor="map" className="ml-1 text-lg">
            Selectionnez une adresse de RDV
          </label>
          <div className="h-96 rounded-md overflow-hidden border-gray-2 border-2 shadow-lg ml-2 mt-2" id="map">
            <Map setMapInfo={setMapInfo} />
          </div>
          <p className=" ml-2 mt-2">
            {mapInfo && mapInfo.label.split(",")[0] + ","} {mapInfo && cityName}
          </p>
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="date" className="ml-1 text-lg">
            Date de sortie
          </label>
          <input type="datetime-local" name="date" {...register("date")} className="ml-2 mt-2 input" />

          {errors.date && <p className="form-error">{errors.date.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="type" className="ml-1 text-lg">
            Type de sortie
          </label>
          <select name="type" {...register("type")} className="ml-2 mt-2 input">
            <option value="Running">Running</option>
            <option value="Trail">Trail</option>
            <option value="Marche">Marche</option>
            <option value="Vélo">Vélo</option>
          </select>
          {errors.type && <p className="form-error">{errors.type.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="name" className="ml-1">
            Nom de la sortie
          </label>
          <input type="text" name="name" {...register("name")} className="input ml-2 mt-2 input" />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="mb-5 flex flex-col">
          <label htmlFor="description" className="ml-1">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            {...register("description")}
            className="input ml-2 mt-2 input h-28"
          />
          {errors.description && <p className="form-error">{errors.description.message}</p>}
        </div>

        {errors.generic && (
          <div className="mb-5">
            <p className="form-error">{errors.generic.message}</p>
          </div>
        )}

        <div className="self-center mt-5">
          <button disabled={isSubmitting} className="btn btn-primary">
            Valider - <i className="fa-solid fa-person-running"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
