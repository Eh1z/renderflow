import type { Route } from "./+types/home";
import { Footer, Navbar } from "@/components";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "RenderFlow AI" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



const home = () => {
  return (
    <div className="min-h-svh">
      <Navbar />
      <div className="flex items-center justify-center ">
        <h1 className="text-7xl font-bold">Welcome to RenderFlow AI!</h1>
      </div>
      <Footer />
    </div>
  )
}

export default home
