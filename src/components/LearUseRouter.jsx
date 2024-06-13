'use client'

import { useRouter } from "next/navigation"

const LearUseRouter = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div> 
    <h1>LearnUseRouter</h1>
    <button type="button" onClick={() => router.push("/admin/dashboard")}>Go to dashboard</button>
    </div>
  )
}

export default LearUseRouter