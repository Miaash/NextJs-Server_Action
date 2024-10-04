import { sql } from "@vercel/postgres";
import RemoveButton from "./_components/remove-button";
import FormEditor from "./_components/form-editor";

// v2
export default async function Home() {
  // API
  // -> 데이터 요청, 데이터 추가, 데이터 변경, 데이터 삭제

  // Next.js를 사용하게 되면
  // 백엔드(서버) 연동 과정 필요 없음

  // 데이터 조회 -> 객체구조분해할당
  const { rows } = await sql`SELECT * FROM PERSON;`;

  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col gap-4 w-[400px]">
        {/* Form Container */}
        <div className="w-full max-w-md bg-gray-700 rounded-xl shadow-md">
          <FormEditor />
        </div>
        {/* List Container */}
        <div className="w-full max-w-md rounded-md shadow-md flex flex-col gap-4">
          {rows &&
            rows.map((row, idx) => (
              <div
                className="text-white space-y-4 p-4 bg-gray-700 flex justify-between"
                key={idx}
              >
                {/* Replace with dynamic content */}
                {row.name}
                <RemoveButton name={row.name} />
              </div>
            ))}
          {/* Repeat for each person */}
        </div>
      </div>
    </div>
  );
}
