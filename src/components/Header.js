/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Employees', href: '/Employees' }, //change name and href to whatever you want
  { name: 'Contributors', href: '/Contributors' },
  { name: 'Dictionary', href: '/dictionary' },
  { name: 'Calendar', href: '/other2' },
]
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(props) {
    return (
      <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-14 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="http://drive.google.com/uc?export=view&id=1jwy3656ZEgn6_8R2rA9w6opMmlA0bnYa"
                      alt="Your Company" />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="http://drive.google.com/uc?export=view&id=1jwy3656ZEgn6_8R2rA9w6opMmlA0bnYa"
                      alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href} //NavLink uses the to prop instead of href 
                          className={({ isActive }) => {
                            console.log(item.href + ' ' + isActive)
                            return 'px-3 py-2 rounded-md text-sm font-medium no-underline ' + //use a space after no-underline becasue we cancantinating strings
                            (isActive 
                              ? 'bg-gray-900 text-white' 
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white')      

                          }}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <NavLink
                  key={item.name}
                  to={item.href} //NavLink uses the to prop instead of href 
                  className={({ isActive }) => {
                    console.log(item.href + ' ' + isActive)
                    return 'block px-3 py-2 rounded-md text-base font-medium no-underline ' + //use a space after no-underline becasue we cancantinating strings
                    (isActive 
                      ? 'bg-gray-900 text-white'  
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white')      

                  }}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </NavLink> 
                ))}
              </div>
            </Disclosure.Panel>
          
          </>           
        )}
      </Disclosure>
      <div className="bg-grey-300">
      <div className="max-width-7xl bg-grey-300 min-h-screen px-3 py-3">
        {props.children}
      </div>  
      </div>
      </>
    );
}
