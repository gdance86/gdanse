
import Link from 'next/link';

import style from './footer.module.css'

import { Genos } from "next/font/google";




const genos = Genos({weight: ["500"] , subsets: ['latin']}) 



export default function Footer(){


    return (
    
    <div  >


        <div className='flex flex-row justify-center'>
            <div className='flex items-center gap-2 text-lg'>Site <Link href='https://www.awattsdev.eu' target="_blank"><p className={` ${genos.className} ${style.wattsLink}`}> awattsdev</p></Link></div >
        </div>
       


    </div>
   
  
    )
}