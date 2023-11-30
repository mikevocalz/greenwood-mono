import { SolitoImage } from 'solito/image';
import Logo from '../../../apps/expo/assets/images/dyn-logo.png';
import { Footer } from '@expo/html-elements'

const WebFooter = () => {
  return (

    <Footer>
      <div className=" border-t-[0.5px] border-black  bg-gray-100 sm:p-0  relative bottom-0 left-0 right-0 items-center">

        <div className="flex-1 py-6 w-full mx-auto max-w-7xl  px-10 md:flex justify-between">
          <div className=" mb-6 md:mb-0">
            <a href="https://www.dynamicphlebotomycpr.org" className="justify-start items-start">
              <SolitoImage
                unoptimized
                alt='logo'
                src={Logo}
                contentFit='contain'
                width={200} height={250}
                style={{
                  marginTop: 0,
                  marginLeft: -10,
                  height: 260,
                  width: 300
                }}
              />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-[50px] sm:gap-8 sm:mt-0 mt-8">



            {/* Connect Section */}
            <div>
              <h2 className="mb-6  md:text-3xl text-2xl font-semibold font-[BebasNeue-Bold] uppercase text-red-700 tracking-wide">Let's Connect</h2>
              <ul className="text-gray-800 ">
                <li className="mb-4">
                  <a href="mailto:dynamicphlebotomycpr@gmail.com" className="hover:underline break-all ">dynamicphlebotomycpr@gmail.com</a>
                </li>

              </ul>
            </div>

            {/* Socials Section */}
            <div>
              <h2 className="mb-6 md:text-3xl text-2xl font-semibold font-[BebasNeue-Bold] tracking-wide uppercase text-red-700">Socials</h2>
              <ul className="text-gray-800 ">
                <li className="mb-4">
                  <a href="https://www.facebook.com/Dynamic-PhlebotomyCPR-733562010164615" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                  <a href="http://www.instagram.com/dynamic_phlebotomy" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-0 border-red-700 sm:mx-auto  lg:my-8" />

        <div className="px-4 py-3 bg-black flex items-center justify-center">
          <span className="font-bold  text-sm text-gray-300 sm:text-center">© 2024  <a href="https://www.dynamicphlebotomycpr.org" className="mx-2 tracking-wider ">Dynamic Phlebotomy & CPR.</a>  All Rights Reserved.
          </span>
        </div>
      </div>
    </Footer >
  )
}

export default WebFooter