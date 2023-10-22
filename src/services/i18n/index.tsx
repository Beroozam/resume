import i18next from "i18next"
import {initReactI18next} from "react-i18next"


// import all transltion files  
import transEnglish from "../../locales/en/Translation.json"
import transPersian from "../../locales/fa/Translation.json"


const resources = {
    en:{
        translation:transEnglish, // translation is main namespace useTranslation() any other name in this object needs specification
        // fore example
        // home:homeEnglish       // would result in usage like this usetranslation("home")
    },
    fa:{
        translation:transPersian,
    },
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"en",// default language
    })