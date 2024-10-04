"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addPerson(formData: FormData) {
  try {
    const name = (formData.get("personName") as string) || "";
    console.log(name);
    if (name === "") throw new Error("name is empty");
    await sql`INSERT INTO PERSON (NAME) VALUES (${name})`;
    console.log("INSERT SUCCESS");
    revalidatePath("/"); // 데이터 캐시 초기화
  } catch (error) {
    return { error, status: 500 };
  }
}

export async function removePerson(name: string) {
  try {
    if (name === "") throw new Error("name is empty");
    await sql`DELETE FROM PERSON WHERE NAME = ${name};`;
    console.log("DELETE SUCCESS");
    revalidatePath("/"); // 데이터 캐시 초기화
  } catch (error) {
    return { error, status: 500 };
  }
}
