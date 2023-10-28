import Aside from "components/Aside/Aside";
import Content from "components/Content/Content";

export default function Layout(){
  return (
      <div className={`flex items-start max-w-[1600px] m-auto`}>
        <div className={`min-w-[450px] sticky top-[70px] px-10`}>
          <Aside />
        </div>
        <div className={`grow px-10`}>
          <Content />
        </div>
      </div>
  )
}