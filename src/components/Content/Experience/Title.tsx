export default function Title({children,company,date}){
  return (
      <div className={`mt-5 mb-5`}>
        <h3 className={`text-gray-800 font-bold text-2xl uppercase`}>{children}</h3>
        <div className={`w-full flex items-center justify-between mt-2`}>
          <span className={`text-gray-400 font-bold text-xl capitalize`}>{company}</span>
          <span className={`text-gray-800 font-bold text-lg`}>{date}</span>
        </div>
      </div>
  )
}