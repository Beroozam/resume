import LanguagePicker from "components/LanguagePicker/LanguagePicker";

export default function Header(){
  const menuList = [
    {id:1,title:"skills",target:"skills"},
    {id:2,title:"work experience",target: "experience"},
    {id:3,title:"education history",target: "education"},
    {id:4,title:"profile",target: "profile"}
  ]
  return (
      <header className={`bg-gray-200 sticky top-0 h-[70px]`}>
        <div className={`flex flex-row items-center justify-between max-w-[1400px] py-2 m-auto`}>
          <ul className={`flex flex-row items-center`}>
            {menuList.map(item=>{
              return <li key={item.id}>
                <a href={`#${item.target}`} className={`p-4`}>{item.title}</a>
              </li>
            })}
          </ul>
          <LanguagePicker />
        </div>
      </header>
  )
}