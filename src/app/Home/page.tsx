import Link from "next/link";

function Home(){
    return(<body><nav className="bg-blue-800 px-4 py-4"><ul className="flex justify-end space-x-5">
    <li className="font-bold text-white"><Link href={'/Contact-us'}>Contact-us</Link></li>
    <li className="font-bold text-white"><Link href={'/About-us'}>About-us</Link></li>
    <li className="font-bold text-white"><Link href={'/Home'}>Home</Link></li>
    </ul></nav>
    <div className="bg-blue-600 h-96">
        <p className="text-center text-3xl py-36">This is Home page</p>
    </div>
    </body>)
}
export default Home;