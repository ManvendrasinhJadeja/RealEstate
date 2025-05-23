import React from 'react'
import { HeroHeadingText } from "../components/HeroHeadingText";
import { HeroCapsuleHeading} from "../components/HeroCapsuleHeading";

export const HeroPrimaryHeading = ({text1,text2}) => {
  return (
<>
<div className="w-[100%] mx-auto text-center my-[80px]">

    <HeroCapsuleHeading text={text1}/>
    <HeroHeadingText text={text2}/>
</div>
    
</>
  )
}
