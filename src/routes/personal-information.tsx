import { Link } from "react-router-dom"
import { useFormStore } from "../stores/forms"

export function PersonalInformation() {
  const formState = useFormStore()
  const { firstName, lastName, setFirstName, setLastName } = formState

  return (
    <div>
      <h1 className="mb-8">Personal Information</h1>
      <form className="flex flex-col gap-4">
        <label className="flex gap-4 items-center">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="flex gap-4 items-center">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </form>
      <Link
        className="bg-slate-500 text-slate-100 rounded-md px-4 py-2"
        to="/results"
      >
        Next
      </Link>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
      <button
        className="bg-slate-500 text-slate-100 rounded-md px-4 py-2"
        onClick={() =>
          localStorage.setItem("button", JSON.stringify({ message: "hello" }))
        }
      >
        Create Localstorage
      </button>
      <button
        className="bg-slate-500 text-slate-100 rounded-md px-4 py-2"
        onClick={() => localStorage.removeItem("button")}
      >
        Remove Localstorage
      </button>
      <button
        className="bg-slate-500 text-slate-100 rounded-md px-4 py-2"
        onClick={() => alert(localStorage.getItem("button"))}
      >
        Retrive Localstorage
      </button>
    </div>
  )
}
