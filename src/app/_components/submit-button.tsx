"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        className="disabled:bg-rose-500 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        disabled={pending}
      >
        Add Person
      </button>
    </>
  );
}
