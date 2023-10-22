import Title from "components/Content/Experience/Title";

const ProjectsLink = ({children}) => {
  return <li><a href={children} className={`text underline`}>{children}</a></li>
}

export default function Experience(){
  const links = [
    {id:1,link:"https://weddstate.com"},
    {id:2,link:"https://swftfood.com"},
    {id:3,link:"https://explorerofoman.com"},
    {id:4,link:"https://eagle-eye.ir"},
    {id:5,link:""},
  ]

  return (
      <>
        <div className={`py-10`}>
          <Title
              company="Nafuntech Technology Company"
              date="Aug 2020 - Present"
          >
            Frontend Developer
          </Title>
          <p className={`text-gray-800 text-lg text-justify`}>
            Among the projects I participated in. There have been
            projects in the field of wedding, explorer, exclusive store,
            etc., and the technologies used in these apps include
            reactjs, nextjs, and state management with context and
            redux. In many cases, I have played a constructive role in
            structuring projects and using newer technologies to
            improve the performance of applications and improve the
            development process.
          </p>
          <ul className={`mt-3 flex flex-col gap-2`}>
            {links.map(item=>{
              return <ProjectsLink key={item.id}>{item.link}</ProjectsLink>
            })}
          </ul>
          <p className={`text-gray-800 text-lg text-justify mt-5`}>
            Things like agile project management (jira) and git source
            control are some of the technologies that I deal with on a
            daily basis.
          </p>
        </div>
      </>
  )
}