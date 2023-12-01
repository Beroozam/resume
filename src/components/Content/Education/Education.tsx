import Title from "components/Content/Experience/Title";
import {useTranslation} from "react-i18next";

export default function Education(){
    const {t} = useTranslation("translation")
  return (
      <div className={`py-10`}>
        <Title
          company={`Electrical and Electronics Engineering`}
          date={`2011-2014`}
        >
            {t('degree')}
        </Title>
      </div>
  )
}