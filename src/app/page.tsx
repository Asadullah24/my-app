'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <body><nav className="bg-blue-800 px-4 py-4"><ul className="flex justify-end space-x-5">
      <li className="font-bold text-white"><Link href={'/Contact-us'}>Contact-us</Link></li>
      <li className="font-bold text-white"><Link href={'/About-us'}>About-us</Link></li>
      <li className="font-bold text-white"><Link href={'/Home'}>Home</Link></li>
      </ul></nav>
      <div className="bg-blue-500 h-96"><div className="text-center py-40 "><p className="mx-16 text-3xl ">Contact with us please click the button below</p>
      <button type="button" onClick={()=>router.push('/Contact-us')} className=" font-bold bg-red-700 px-4 py-2 mx-16 rounded-full hover:bg-slate-200 border-black border">Contact-us</button></div></div>

      </body>

      



    
  )
}
