import Image from 'next/image'
import one from '../public/item2.jpg'
import two from '../public/logos/blaze.PNG'
import three from '../public/item2.jpg'

// const features = [
//   {
//     imageSrc: one,
//     imageAlt:'Others'
//   },
//   {
//     imageSrc: two,
//     imageAlt:'Melo'
//   },
//   {
//     imageSrc: three,
//     imageAlt:'item2'
//   },
// ]

export default function CTA() {
    return (
      <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
          <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Trending 
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            
              <div className="relative">
                {/* <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Training</p>
                </dt> */}
                <Image src={one} width={360} height={420} alt='Others' className="mt-2 ml-16 text-base text-gray-500"></Image>
              </div>
               <div className="relative">
               {/* <dt>
                 <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Get together</p>
               </dt> */}
               <Image src={two} width={360} height={420} alt='Melo' className="mt-2 ml-16 text-base text-gray-500"></Image>
             </div>
              <div  className="relative">
              {/* <dt>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ready to go</p>
              </dt> */}
              <Image src={three} width={360} height={420} alt='item2' className="mt-2 ml-16 text-base text-gray-500"></Image>
            </div>
           
          </dl>
        </div>
      </div>
    </div>
    )
  }
  