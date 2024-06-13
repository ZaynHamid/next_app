import LearUseRouter from "@/components/LearUseRouter";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseImage from "@/components/LearnUseImage";
import Register from "@/components/Register";
import FetchData from "@/components/fetchData";
import LearnLink from "@/components/learn-link";
import connectDB from "@/lib/connectDB";
import User from "@/models/users";

export default async function Home() {  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      {/* <LearUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* {<LearnCSSModule />} */}
      {/* {<LearnUseImage/>} */}
      {/* {<FetchData />} */}
      {/* {data.map((val,i) => (
          <div key={i}>
            <p>{val.title}</p>
            <p>{val.body}</p>
          </div>
      ))} */}

      <p>Hello World!</p>
    
    </main>
  );
}
