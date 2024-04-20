import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import  Rajan  from '/img/Rajan.png';

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-cyan-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Rajan} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nihil dignissimos! Fuga doloremque nihil tempora tenetur, mollitia nam ad eaque dicta et eos quae corporis aspernatur, molestias consequatur deleniti accusamus.</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rajan Pandey</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">MERN Developer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime sed sint recusandae architecto voluptas ducimus quod dignissimos. Soluta reiciendis voluptatem assumenda? Veniam, facilis nulla magnam voluptas ducimus perferendis vero.</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sapiente illo ipsam libero natus soluta voluptate ut qui praesentium obcaecati facere modi sed tempore culpa recusandae est excepturi, esse voluptatem.</p>
                                <span className="inline-block h-1 w-10 rounded bg-cyan-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial