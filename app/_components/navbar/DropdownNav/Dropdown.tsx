'use client'

import Link from 'next/link';


import { Button } from '@/components/ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger
  } from "@/components/ui/dropdown-menu"

import { NavList } from '../../../../lib/types';


export default function DropdownView({navList, route}: {navList: NavList[] , route?: string|undefined}){

    return (
        <div className="flex text-danse pl-2 pr-2 ">
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
              
            
                    <RxHamburgerMenu className='hover:text-danse/70' size={45} />
              
            </DropdownMenuTrigger>
            <DropdownMenuContent >

                {navList.map((i, index) => (
                    <Link key={index} href={i.route ?`/${i.route}` : `${i.title.toLocaleLowerCase()}`}><DropdownMenuItem ><p className="text-lg text-black ">{i.title}</p></DropdownMenuItem></Link>
                ))}
                    
            </DropdownMenuContent>
        </ DropdownMenu>
      </div>
    
        
    )
}