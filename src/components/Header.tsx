import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { SocialIcons } from './Social'

function Header() {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.getElementById('mobileMenu')?.setAttribute('data-open', 'false')
  }, [])

  return (
    <nav className="top-0 right-0 left-0 z-[400] fixed flex justify-between items-start bg-[linear-gradient(var(--background2))] backdrop-blur-sm mb-4 p-6 px-8 py-[8px] w-100 antialiased select-none">
      <div className="flex justify-start space-x-4 [&>a]:text-[2rem] mr-auto text-zinc-100">
        <a href="#">RLDV</a>
      </div>
      <div className="gap-2 font-4xl [&>a]:text-lg text-zinc-100 hidden md:flex align-center md:place-self-center">
        <a href="#">Home |</a>
        <a href="#"> About | </a>
        <a href="#"> Web development </a>
        <a href="#">| Links</a>
      </div>
      <div className="md:hidden z-[1000] flex place-self-center">
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
        className={`relative antialiased py-32 top-0 right-0 place-items-center [&>li>a]:text-[2rem]  justify-around text-lg  z-[300] block md:hidden  p-8 h-[100svh] text-zinc-100 `}
        data-open={isOpen ? 'true' : 'false'}
      >
        <header className="absolute top-4 right-2 left-0 flex space-x-0 [&>a]:text-[2.6rem] mr-auto text-zinc-100">
          <a href="#" className="mx-8">menu</a>
        </header>
        <img src="https://i.pravatar.cc/250?img=65" alt="avatar" className="mx-auto my-12 rounded-full w-[100px] h-[100px]" />
        <li className="z-[50] py-2 [&>a]:hover:text-violet-200">
          <a href="#">Home</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200">
          <a href="#">About Me</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200 ">
          <a href="#">Web Development</a>
        </li>
        <li className="py-2 [&>a]:hover:text-violet-200 ">
          <a href="#">Links</a>
        </li>
        <li className="right-0 bottom-0 left-0 absolute place-items-center">
          <SocialIcons />
        </li>
      </ul>
    </nav>
  )
}

export default Header
