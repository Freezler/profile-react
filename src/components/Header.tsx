'use client'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { SocialIcons } from './Social'

const navigationItems = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  {
    label: 'projects',
    children: [
      { label: 'YelpCamp clone TypeScript', href: 'https://github.com/Freezler/tsx-yelpcamp' },
      { label: 'az900 learning', href: 'https://az-900-freezlers-projects.vercel.app' },
    ],
  },
  { label: 'links', href: '/links' },
]

function Header() {
  const [isOpen, setOpen] = useState(false)

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <nav className="top-0 right-0 left-0 z-[400] fixed flex justify-between items-start bg-[linear-gradient(var(--background2))] backdrop-blur-sm mb-4 p-6 py-[8px] max-w-[100svw] antialiased select-none">
      <div className="flex justify-start space-x-4 mr-auto text-zinc-100 [&>a]:text-[2rem]">
        <a href="/" aria-label="Home">RLDV</a>
      </div>
      <div className="hidden md:flex font-4xl font-xl text-zinc-100 [&>a]:text-lg align-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map(item => (
              <NavigationMenuItem key={item.label}>
                {item.children
                  ? (
                      <>
                        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-[linear-gradient(var(--background2))]">
                          {item.children.map(child => (
                            <NavigationMenuLink
                              key={child.label}
                              className={navigationMenuTriggerStyle()}
                              href={child.href}
                            >
                              {child.label}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </>
                    )
                  : (
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        href={item.href}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden z-[1000] flex place-self-center">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobileMenu"
        />
      </div>
      <ul
        id="mobileMenu"
        className="md:hidden top-0 right-0 bottom-0 left-0 z-[300] fixed flex flex-col justify-between items-center p-8 w-screen h-[100svh] text-zinc-100 [&>li>a]:text-[2rem] text-lg antialiased"
        data-open={isOpen ? 'true' : 'false'}
        role="menu"
      >
        <header className="right-0 left-0 absolute flex space-x-4 mr-auto text-zinc-100 [&>a]:text-3xl">
          <span className="mr-2 text-[2rem]">MENU</span>
        </header>
        <img src="https://i.pravatar.cc/250?img=65" alt="Profile avatar" className="mx-auto my-0 mt-12 mb-0 rounded-full w-[100px] h-[100px]" />
        {navigationItems.map(item => (
          <li key={item.label} className="z-[50] py-0 [&>a]:hover:text-violet-500" role="menuitem">
            <a href={item.children ? '#' : item.href}>
              {item.label}
            </a>
          </li>
        ))}
        <footer className="right-0 bottom-0 left-0 relative place-items-center">
          <SocialIcons />
        </footer>
      </ul>
    </nav>
  )
}

export default Header
