"use client";

import { removePerson } from "../actions/person";

export default function RemoveButton({ name }: { name: string }) {
  return (
    <button
      className="text-red-500 hover:text-red-700"
      onClick={() => removePerson(name)}
    >
      Remove
    </button>
  );
}
