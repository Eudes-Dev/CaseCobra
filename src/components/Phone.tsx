import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className, dark, ...props}: PhoneProps) => {
    return (
        <div className={cn(
            'relative pointer-events-none z-50 overflow-hidden',
            className,
        )}
             {...props}
        >
            <Image
                src={
                    dark
                        ? '/phone-template-dark-edges.png'
                        : '/phone-template-white-edges.png'
                }
                alt={'phone image'}
                width={500}
                height={500}
                className={'pointer-events-none z-50 select-none'}
            />

            <div className={'absolute -z-10 inset-0'}>
                <Image src={imgSrc} alt={"overlay phone image"} height={500} width={500} className={'object-cover'}/>
            </div>
        </div>
    )
}

export default Phone