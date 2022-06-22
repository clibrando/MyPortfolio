import { FaGithub, FaCopyright, FaDirections } from 'react-icons/fa';
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import Settings from './../Settings/AnimationSettings';

import FadeIn from './../Components/FadeIn';

const Card = (props) => {
  return (
    <div className="cardss flex items-center px-4 py-2">
      <div className="space-y-1">
        <div className="custom-min-height bg-white border rounded-lg overflow-hidden shadow-lg">
          <a href={`${props.item.Link}`} data-lightbox="homePortfolio">
            <FadeIn duration={Settings.Gallery.CardImageFadeIn}>
              <img
                className="w-full fixed-card-image-height"
                src={`${props.item.ImageFileName}`}
                alt="designs"
              />
            </FadeIn>
            
          </a>
          <div className="p-6">
            <div className="flex items-baseline">
              <span className="inline-block bg-green-300 text-green-800 text-sm px-2 rounded-full uppercase font-semibold tracking-wide">
                {`${props.item.Type}`}
              </span>
              <div className="ml-2 text-gray-500 text-xs uppercase font-semibold tracking-wide">
                {props.item.HashTags.map((item, i) => {
                  return HashTag(item, i);
                })}
              </div>
            </div>
            <h4 className="mt-2 font-semibold text-gray-800 text-lg leading-tight truncate">
              {props.item.Title}
            </h4>
            <div className="excerpt mt-1 text-gray-800 h-20">
              <span className="text-gray-600 text-sm">
                {props.item.Description}
              </span>
            </div>
            <div className="flex flex-row items-center h-8 justify-start flex-nowrap text-xs">
              {props.item.Buttons.map((item, i) => CallToAction(item, i))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HashTag = (itemName, index) => {
  return (
    <span key={index} className="inline xs:text-xs font-semibold">{itemName} • </span>
  );
};

const CallToAction = (buttonInfo, index) => {

  if (buttonInfo.Disabled)
    return DisabledButton(buttonInfo, index);

  return (
    <div key={index} className="tracking-wide h-full pr-2">
      <a href={buttonInfo.href} target="_blank" rel="noreferrer">
        <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border rounded">
          <span className="pr-2">{SelectIcon(buttonInfo.ImageIcon)}</span> <span>{buttonInfo.Title}</span> 
        </button>
      </a>
    </div>
  )
}

const DisabledButton = (buttonInfo, index) => {
  return (
    <div key={index} className="ml-2 pt-4 pb-0 tracking-wide">
      <button disabled={true} className="inline-flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
        <span className="pr-2">{SelectIcon(buttonInfo.ImageIcon)}</span> <span>{buttonInfo.Title}</span> 
      </button>
    </div>
  )
} 

const SelectIcon = (iconName) => {
  switch (iconName)
  {
    case "FaGithub":
      return <FaGithub />
    case "AiFillCodeSandboxSquare":
      return <AiFillCodeSandboxSquare />
    case "FaCopyright":
      return <FaCopyright />
    case "FaDirections":
      return <FaDirections />
    default:
      return null;
  }
}

export default Card;