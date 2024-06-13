import { cookies } from "next/headers";

export default function Profile({params}) {
  console.log(params)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Profile {params.id}</h2>      
  
      </main>
    );
  }
  