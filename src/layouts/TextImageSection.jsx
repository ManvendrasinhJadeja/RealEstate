import React from 'react'
import { CapsuleHeading } from '../components/CapsuleHeading'
import { PrimaryBlackBtn } from '../components/PrimaryBlackBtn'
import { SecondoryHeadingText } from '../components/SecondoryHeadingText'

export const TextImageSection = ({text1,text2,text3,text4,imgSrc}) => {
  return (

    <>
    <div className="flex ">
        <div className="flex flex-col">
            <div className="">

            <CapsuleHeading text={text1}/>
            <SecondoryHeadingText text ={text2}/>
            </div>
            <div className="">
                <p>{text3}</p>
                <PrimaryBlackBtn text={text4}/>
            </div>
        </div>
        <div className="">
            <img src={imgSrc} alt="" />
        </div>
    </div>
    </>
  )
}
