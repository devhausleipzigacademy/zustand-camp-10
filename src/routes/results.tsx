import { useFormStore } from "../stores/forms"

export function Results() {
  const formState = useFormStore()
  return (
    <div>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  )
}
