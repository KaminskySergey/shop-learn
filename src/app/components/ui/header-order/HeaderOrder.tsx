'use client'



interface IHeaderOrder {}

export default function HeaderOrder({}: IHeaderOrder) {
    
    return (
        <header style={{ maxWidth: '1650px'}} className={`mx-auto px-4 h-full flex items-center bg-black`}>
      <div className="flex flex-row justify-between w-full">
        <div>
            <h3 className="text-white font-bold text-lg">Kama-Shop</h3>
        </div>
        
      </div>
    </header>
    )
}
