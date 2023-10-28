import personal from 'assets/personal.jpeg'
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email'
import GitHub from "@mui/icons-material/GitHub";
import Phone from "@mui/icons-material/Phone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WebSite from '@mui/icons-material/Language';

const IconComponent = ({Icon}) => {
  return (
      <span className={`text-black`}><Icon className={`min-w-[24px] min-h-[24px]`}/></span>
  )
}

const ListAddress = ({children}) => {
  return <li className={`flex items-start gap-4 my-5`}>{children}</li>
}

const LinkAddressComponent = ({children,link,className}:{children:any,link:string,className?:string}) => {
  return <a className={`text-gray-600 text-xl ${className}`} href={link} target="_blank" rel="noreferrer">{children}</a>
}

export default function Aside(){


  return (
      <div className={`pt-10`}>
        <img alt="Behrouz Mohammadi" src={personal} className={`rounded-lg max-w-[300px]`}/>
        <h1 className={`text-2xl font-bold mt-4`}>Behrouz Mohammadi</h1>
        <h2 className={`text-xl font-normal capitalize`}>frontend developer / NextJs & ReactJs</h2>
        <ul className={`mt-10`}>
          <ListAddress>
            <IconComponent Icon={LocationOnIcon}/>
            <span className={`text-gray-600 text-xl`}>Isfahan-Iran</span>
          </ListAddress>
          <ListAddress>
            <IconComponent Icon={Phone}/>
            <LinkAddressComponent link={`tel:989162987088`}>
              989162987088
            </LinkAddressComponent>
          </ListAddress>
          <ListAddress>
            <IconComponent Icon={Email}/>
            <LinkAddressComponent link={`mailto:behrouz.dev@gmail.com`}>
              behrouz.dev@gmail.com
            </LinkAddressComponent>
          </ListAddress>
          <ListAddress>
            <IconComponent Icon={LinkedIn}/>
            <LinkAddressComponent link={`https://www.linkedin.com/in/behrouzam`}>
              https://www.linkedin.com/in/behrouzam
            </LinkAddressComponent>
          </ListAddress>
          <ListAddress>
            <IconComponent Icon={GitHub}/>
            <LinkAddressComponent link={`https://github.com/Beroozam`}>
              https://github.com/Beroozam
            </LinkAddressComponent>
          </ListAddress>
          <ListAddress>
            <IconComponent Icon={WebSite}/>
            <LinkAddressComponent link={`https://beroozam.github.com/resume`}>
              https://beroozam.ir
            </LinkAddressComponent>
          </ListAddress>
        </ul>
      </div>
  )
}