import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex justify-center min-h-screen text-center pt-[32px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-white mb-4">Oops! The page you are looking for might be in another castle.</p>
        <div className="flex justify-center">
          <Image src="/404.png" alt="404" width={350} height={350} />
        </div>
        <Link href="/" className="text-black hover:underline hover:text-white  mt-4 block underline transition duration-300">Go back to Home</Link>
      </div>
    </div>
  )
}