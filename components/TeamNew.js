import Image from 'next/image'


const players = [
  {
    imageSrc: '/team/Chuol.JPG',
    imageAlt:'Others',
    name:'Chuol Nyout',
    number:'15'
  },
  {
    imageSrc: '/team/Camelo.JPG',
    imageAlt:'Melo',
    name:'Amisi Saidi Danny',
    number:'12'
  },
  {
    imageSrc: '/team/Dikong.JPG',
    imageAlt:'item2',
    name:'David Kongor Dikong',
    number:'24'
  },
  {
    imageSrc: '/team/Ken.jpg',
    imageAlt:'item2',
    name:'Kenneth Mesho',
    number:'12'
  },
  {
    imageSrc: '/team/Macgyver.JPG',
    imageAlt:'Others',
    name:'Paul Odong',
    number:'8'
  },
  {
    imageSrc: '/team/Najja.JPG',
    imageAlt:'Melo',
    name:'Juuko Daniel',
    number:'25'
  },
  {
    imageSrc: '/team/Blair.JPG',
    imageAlt:'item2',
    name:'Blair Valentine',
    number:'3'
  },
  {
    imageSrc: '/team/Ikong.JPG',
    imageAlt:'item2',
    name:'Ikong Joseph',
    number:'11'
  },
  {
    imageSrc: '/team/Syrus.JPG',
    imageAlt:'Others',
    name:'Syrus Kiviiri',
    number:'27'
  },
  {
    imageSrc: '/team/Collins.JPG',
    imageAlt:'Melo',
    name:'Collins Suubi Kasujja',
    number:'10'
  },
  {
    imageSrc: '/team/Ongom.JPG',
    imageAlt:'item2',
    name:'Ongom Richard',
    number:'9'
  },
  {
    imageSrc: '/team/Dudus.jpg',
    imageAlt:'item2',
    name:'Monoja Daniel',
    number:'14'
  },
]

export default function TeamNew() {
    return (
      <>
      <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Team
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-10">
            {/* {players.map((player) => (
                <>
              <div key={player.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{player.name}</p>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{player.number}</p>
                </dt>
                <Image src={player.imageSrc} width={250} height={300} alt={player.imageAlt} className="mt-2 ml-16 text-base text-gray-500 rounded transform transition duration-500 hover:scale-110"></Image>
              </div>
               </>
            ))} */}
            {players.map((player) => (
            <div key={player.id} className="flex items-center justify-center transform transition duration-500 hover:scale-110">
          <figure className="relative max-w-xs cursor-pointer">
            <Image className="rounded-lg shadow-xl hover:shadow-2xl" src={player.imageSrc} width={250} height={300} alt={player.imageAlt}></Image>
              <figcaption className="absolute text-lg -mt-16 bg-opacity-50 text-gray-700 w-full px-4 bg-slate-100 pt-1">
            <div>
             <h1>{player.number}</h1>
            </div>
              <div>
               <h1>{player.name}</h1>
            </div>
            </figcaption>
           </figure>
          </div>
          ))}
          </dl>
        </div>
       </div>
    </div>


    



<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center lg:text-center">
  {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2> */}
  <p className="mt-2 py-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Coaching Staff
  </p>
  <div className="container max-w-7xl mx-auto px-4 py-2" >

<div className="flex flex-wrap">
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div className="px-6">
      <img alt="John Doe" src="https://dummyimage.com/300" className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"/>
      <div className="pt-6 text-center">
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Escodata</h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Head Coach</p>
        <div className="flex items-center justify-center">
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
            <i className="fab fa-twitter undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
            <i className="fab fa-facebook-f undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
            <i className="fab fa-dribbble undefined text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
    <div className="px-6" >
      <img alt="Jack Wales" src="https://dummyimage.com/300" className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined" />
      <div className="pt-6 text-center">
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Eric Malinga</h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Assistant Head Coach</p>
        <div className="flex items-center justify-center">
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
            <i className="fab fa-twitter undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
            <i className="fab fa-facebook-f undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
            <i className="fab fa-dribbble undefined text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" >
    <div className="px-6" >
      <img alt="George Hoyt" src="https://dummyimage.com/300" className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined" />
      <div className="pt-6 text-center">
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Balinnya John</h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Statistician</p>
        <div className="flex items-center justify-center">
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
            <i className="fab fa-twitter undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
            <i className="fab fa-facebook-f undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
            <i className="fab fa-dribbble undefined text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div className="px-6">
      <img alt="Jenna Kardi" src="https://dummyimage.com/300" className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"/>
      <div className="pt-6 text-center">
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Nsubuga Ali</h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Team Manager</p>
        <div className="flex items-center justify-center">
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
            <i className="fab fa-twitter undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
            <i className="fab fa-facebook-f undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
            <i className="fab fa-dribbble undefined text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
    <div className="px-6">
      <img alt="Jenna Kardi" src="https://dummyimage.com/300" className="rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined"/>
      <div className="pt-6 text-center">
        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Dr. Noah Kayongo</h1>
        <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">Physio</p>
        <div className="flex items-center justify-center">
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
            <i className="fab fa-twitter undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
            <i className="fab fa-facebook-f undefined text-lg"></i>
          </button>
          <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
            <i className="fab fa-dribbble undefined text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</>
    )
  }
  