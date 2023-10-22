import Experience from "components/Content/Experience/Experience";
import Skills from "components/Content/Skills/Skills";
import Profile from "components/Content/Profile/Profile";
import Education from "components/Content/Education/Education";

const TitleSection = ({children}) => {
  return (
      <>
        <h2 className={`text-3xl text-black font-bold`}>{children}</h2>
        <span className={`w-[180px] h-[3px] bg-gray-500 flex mt-2`}></span>
      </>
  )
}

export default function Content(){
  return (
      <div className={`pt-10`}>
        <TitleSection>Profile</TitleSection>
        <Profile />
        <TitleSection>Skills</TitleSection>
        <Skills />
        <TitleSection>Work Experience</TitleSection>
        <Experience />
        <TitleSection>Education History</TitleSection>
        <Education />
      </div>
  )
}