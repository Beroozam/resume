import {useTranslation} from "react-i18next";
import IranFlag from 'assets/iranFlag.svg'
import UsaFlag from 'assets/usaFlag.svg'
import {ReactComponent as IranFlagRounded} from 'assets/flagRoundedIran.svg'
import {ReactComponent as UsaFlagRounded} from 'assets/flagRoundedUsa.svg'
import {ReactComponent as Chevron} from 'assets/chevronDown.svg'
import {useState} from "react";

const SelectedLanguage = () => {
  const {t,i18n:{language}} = useTranslation()

  if(language === "fa") {
    return (
        <div className={`flex flex-row items-center`} >
          <span className={`text-lg me-2`}>{t("langPersian")}</span>
          <img className={`max-h-[24px]`} src={IranFlag} alt=""/>
        </div>
    )
  }else if(language === 'en'){
    return (
        <div className={`flex flex-row items-center`} >
          <span className={`text-lg me-2`}>{t("langEnglish")}</span>
          <img className={`max-h-[24px]`} src={UsaFlag} alt="" />
        </div>
    )
  }
}

const SelectorLanguage = ({Flag,text,lang,disabledHandler}) => {
  const {i18n:{changeLanguage}} = useTranslation()
  return (
      <li className={`flex flex-row cursor-pointer`} onClick={()=>{
        changeLanguage(lang).then(()=>{})
        disabledHandler()
      }}>
        <span className={`text-xl me-2 grow`}>{text}</span>
        <Flag className={`w-[32px] h-[32px]`}/>
      </li>
  )
}

export default function LanguagePicker(){
  const {t} = useTranslation()
  const [active ,setActive] = useState(false)

  const subMenuHandler = () =>{
    setActive(prevState => !prevState)
  }

  return (
      <div className={`flex flex-col w-[160px]`}>
        <div className={`flex flex-row justify-between items-end w-full border border-blue-200 rounded-md py-2 px-2 cursor-pointer`} onClick={subMenuHandler}>
          <SelectedLanguage />
          <Chevron className={`w-[32px] h-[32px] `}/>
        </div>
        <ul className={`${active?'flex':'hidden'} flex-col gap-5 w-fit px-2 py-6 rounded-2xl shadow-2xl w-full`}>
          <SelectorLanguage Flag={IranFlagRounded} text={t("langPersian")} lang="fa" disabledHandler={()=>setActive(false)}/>
          <SelectorLanguage Flag={UsaFlagRounded} text={t("langEnglish")} lang="en" disabledHandler={()=>setActive(false)}/>
        </ul>
      </div>
  )
}