import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'

function Header() {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.getElementById('mobileMenu')?.setAttribute('data-open', 'false')
  }, [])

  return (
    <nav className="top-0 right-0 left-0 z-[100] fixed flex justify-between items-start bg-[linear-gradient(var(--background2))] backdrop-blur-sm mb-4 p-6 px-8 py-[8px] w-100 antialiased select-none">
      <div className="flex justify-start space-x-4 [&>a]:text-[2rem] mr-auto text-zinc-100">
        <a href="#">RLDV</a>
      </div>
      <div className="gap-2 font-4xl [&>a]:text-lg text-zinc-100 hidden md:flex align-center md:place-self-center">
        <a href="#">Home |</a>
        <a href="#"> About | </a>
        <a href="#"> Web development </a>
        <a href="#">| Links</a>
      </div>
      <div className="md:hidden z-[2000] flex place-self-center">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          onToggle={(toggled) => {
            if (toggled) {
              document.getElementById('mobileMenu')?.setAttribute('data-open', 'true')
            }
            else {
              document.getElementById('mobileMenu')?.setAttribute('data-open', 'false')
            }
          }}
        />
      </div>
      <ul
        id="mobileMenu"
        className={`relative antialiased pt-40 top-0 right-0 text-lg  z-[200] block md:hidden  bg-[rgba(31,17,45,0.59)]  p-8 h-[100svh] text-zinc-100 align-center text-center [&>li>a]:transition-all [&>li>a]:p-2 [&>li>a]:w-full [&>li>a]:duration-[450ms] [&li>a]:ease-in-out `}
        data-open={isOpen ? 'true' : 'false'}
      >
        <div className="absolute top-5 left-0flex justify-start space-x-0 [&>a]:text-[2rem] mr-auto text-zinc-100">
          <a href="#" className="underline-offset-16">RLDV</a>
        </div>
        <img src="https://i.pravatar.cc/250?img=65" alt="avatar" className="mx-auto my-12 rounded-full w-[100px] h-[100px]" />
        <li className="z-[50] py-2 [&>a]:hover:text-violet-200">
          <a href="#">Home</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200   rounded-full">
          <a href="#">About Me</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200 ">
          <a href="#">Web Development</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200 ">
          <a href="#">Links</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
