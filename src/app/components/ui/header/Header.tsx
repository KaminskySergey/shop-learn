
import Link from "next/link"

export const Header = () => {
    return <header style={{margin: '0 auto', maxWidth: '1650px', padding: '0 32px', height: '100%', display: 'flex', alignItems: 'center'}} className="bg-black">
    <div >
      <div>
        <Link href={'/'} className="text-white font-bold text-lg">Kama-Shop</Link>
      </div>
    </div>
  </header>
}