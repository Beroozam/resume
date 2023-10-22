export default function Skills(){
  const skills = ["ReactJs","NextJs","HTML","Css","Javascript","Typescript","State Management","Redux","Redux Toolkit","Context api","Git","Tailwind","MUI","RESTFUL APIs"]

  return (
      <div className={`py-10`}>
        <div className={`flex gap-3 flex-wrap`}>
          {skills.map(item=><span key={item} className={`px-4 py-2 text-lg bg-gray-200 rounded-md`}>{item}</span>)}
        </div>
      </div>
  )
}