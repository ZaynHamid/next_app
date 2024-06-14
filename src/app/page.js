import LearUseRouter from "@/components/LearUseRouter";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseImage from "@/components/LearnUseImage";
import Register from "@/components/Register";
import FetchData from "@/components/fetchData";
import LearnLink from "@/components/learn-link";
import connectDB from "@/lib/connectDB";
import User from "@/models/users";

const getData = async () => {
  const res = await fetch('https://next-app-mu-henna.vercel.app')
  const data = await res.json()
  return data
}

export default async function Home() {  
  const {data} = await getData()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}

      {/* <LearUseRouter /> */}

      {/* <LearnServerComponent /> */}

      {/* {<LearnCSSModule />} */}

      {/* {<LearnUseImage/>} */}

      {/* {<FetchData />} */}

      {data.map((val,i) => (
          <div key={i}>
            <p>{val.title}</p>
            <p>{val.body}</p>
          </div>
      ))}    

    </main>
  );
}
