import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { animate, motion} from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CollectionItem from '../components/CollectionItem'
gsap.registerPlugin(ScrollTrigger);


function Home() {
    const circleRef = useRef()
    const necklaceRef = useRef()
    const [canCircleMove, setCanCircleMove] = useState(false)
    const [leftJhumkaArray , setLeftJhumkaArray ] = useState(1)
    const [rightJhumkaArray , setRightJhumkaArray ] = useState(4)
    const [jhumkaNumber , setJhumkaNumber] = useState(2);
    


    const moveCircle = (e) =>{
        if(canCircleMove){
            const x = e.clientX
            circleRef.current.style.left = (x - 150)+'px'
        }
    }

    

    useGSAP(()=>{
        gsap.from('.move1',{
            opacity:0,
            duration:1,
            x:-20,  
        })
        gsap.from('.move2',{
            opacity:0,
            duration:1,
            x:-20,
        })
        gsap.from('.move3',{
            opacity:0,
            duration:1,
            x:-20,
        })

        

        gsap.to(circleRef.current,{
            y:550,
            x:-200,
            duration:2.2,
            zIndex:-1,
            opacity:0,
            scrollTrigger:{
                trigger:'.move3',
                scroller:"body",
                // markers:true,    
                start:'top 40%',
                end:"top 0",
                scrub:2,
            }
        })

        gsap.to(necklaceRef.current,{
            y:"263%",
            x:"149%",
            duration:2.2,
            scale:0.3,
            scrollTrigger:{
                trigger:'.move3',
                scroller:"body",
                // markers:true,    
                start:'top 40%',
                end:"top -30%",
                scrub:2,
            }
        })

        


    })

return ( 
    <div className="main flex flex-col overflow-x-hidden  text-font">
        <div className=" flex flex-col h-screen w-screen ">
            <Navbar/>   
            <div 
                className='h-full w-full font-light mt-10 '
                onMouseMove={(e)=>{moveCircle(e)}}
            >
                
                <motion.div 
                    className='text-[10vh] pl-20   flex justify-start move1 '
                    
                >
                    BEST
                </motion.div>

                <motion.div 
                    className='text-[25vh] flex font-normal justify-center move2 '
                    
                >
                    JEWELLERY
                </motion.div>

                <motion.div 
                    
                    
                    className='text-[10vh] pr-12 flex justify-end move3'
                
                >
                    STORE
                </motion.div>

                <motion.div ref={circleRef} className=' absolute top-[22%] left-[40%] h-80 w-80 rounded-full bg-orange-300 opacity-55'></motion.div>
                <div ref={necklaceRef} className=' absolute top-[22%] left-[40%] h-80 w-80 rounded-full  '>
                    <img className='absolute top-10' src="necklace-1.png" alt="" />
                </div>

                
            </div>
        </div>

        <div className="flex h-screen w-screen">
            <div className='h-full w-4/6 flex flex-col justify-end'>
                <div className='h-5/6 w-full flex flex-col rounded-t-[250px] bg-orange-300 font-serif'>
                
                    <div className='flex mt-10 w-full justify-center opacity-100'>
                        <div className=' m-10 text-7xl w-4/6 text-left moranga-font'>Jewellery that transforms your look</div>
                    </div>


                <div className='flex w-full justify-center'>
                        <div className=' m-2 text-2xl w-2/3 text-left'>Feel your heart thumping as you breeze into the magical realm of enchanted pieces. Perfect jewellery for getting or treating yourself.</div>
                </div>     
                    <div className='flex w-full mt-16 h-1/6  items-center justify-center gap-12'> 
                        <button className='bg-black text-white rounded-2xl h-1/2 w-[10vw] text-xl'>View</button>
                        <button className='bg-black text-white rounded-2xl h-1/2 w-[10vw] text-xl'>Collection</button>
                    </div>
                </div>
            </div>
            <div className='h-full w-2/6 flex justify-center items-center'>
                <div className='h-5/6 w-full   '>
                    <img className='  rounded-tl-[55%]'  src="saaree.jpg" alt="" /> 
                </div>
            </div>
        </div>

        <motion.div 
            initial={{
                opacity:0,
                x:-100
            }}
            transition={{
                duration:2,
                ease:'easeInOut'
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            className="page-3 flex flex-col h-screen w-screen bg-orange-300">
                <div className='h-[20vh] w-full  flex'>
                    <div className='h-full w-1/2  flex items-center justify-center'>
                        <div className=" text-[10vh] moranga-font ">EARRINGS</div>
                    </div>
                    <div className='h-[150%] w-1/2  flex items-center justify-center'>
                        <div className=" text-xl text-left w-3/4">Every bloom has the power to inspire us to love unconditionally. These earrings in radiant bloom are certainly nothing short of that</div>
                    </div>
                </div>
                <div className='h-full w-full flex '>
                    <div className="h-full w-[40%]  flex justify-center items-center relative">
                        <img src={`/single_earring/earring-${jhumkaNumber}.png`} className='absolute top-[31vh] left-[13vw]'/>
                        <img className='h-[95%] w-[70%]' src="face-1.png" alt="" />
                    </div>
                    <div className="h-full w-[60%] flex flex-col  items-center bottom-0">
                        <div className="text-3xl text-center pt-10 moranga-font ">TRY NOW</div>
                        <div className="h-[90%] w-[90%] flex justify-evenly items-center">
                            <div className="h-[80%] w-[40%] bg-yellow-100 rounded-t-full border-2 border-black flex items-center justify-center cursor-pointer">
                                <img 
                                    onClick={()=>{
                                        setLeftJhumkaArray((prev) => (prev+1)%3 +1 )
                                        setJhumkaNumber(leftJhumkaArray)
                                    }} 
                                    src={`earring-${leftJhumkaArray}.png`}  
                                     
                                    
                                    />
                            </div>
                            <div className="h-[80%] w-[40%] bg-yellow-100 rounded-t-full border-2 border-black flex items-center justify-center cursor-pointer">
                                <img  
                                    onClick={()=>{
                                        setRightJhumkaArray((prev) => (prev+1)%3 +4 )
                                        setJhumkaNumber(rightJhumkaArray)
                                    }} 
                                    src={`earring-${rightJhumkaArray}.png`}  
                                     />
                            </div>
                        </div>
                    </div>
                </div>
        </motion.div>

        {/* <div className="flex flex-col h-screen w-screen bg-orange-300">
               <div className=' font-serif text-6xl pt-10  text-center moranga-font '>
                    COLLECTIONS
               </div>
               <div className='h-full w-full flex justify-center items-center'>
                    <div className='border-black border-2 h-[80%] w-[90%] flex overflow-x-auto items-center gap-4'>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                        <CollectionItem/>
                    
                    </div>
               </div>
        </div> */}

        {/* <div className="flex flex-col h-screen w-screen bg-orange-300">
               <div className="flex h-[80%] pt-10 w-full ">
                    <div className="h-full w-3/6 pt-20 ">
                        
                        <div className="h-1/4 w-full  flex justify-center items-center">
                            <div className="text-6xl font-mono  ">LOCATION</div> 
                        </div>
                        
                        <a className='h-1/2 w-full flex justify-center ' target='_blanck' href="https://www.google.com/maps/dir//msit+location/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x390d04afb8dbcfe1:0xaff19e718be2136b?sa=X&ved=1t:3061&ictx=111">
                            <motion.img 
                                whileHover={{
                                    scale:1.2
                                }}
                                className='h-[80%] w-[60]' 
                                src="location.png" 
                                alt="" 
                            />
                        </a>
                    </div>
                    <div className="h-full w-3/6 pt-20 ">
                        
                        <div className="h-1/4 w-full  flex justify-center items-center">
                            <div className="text-6xl font-mono  ">CONTACT US</div> 
                        </div>
                        
                        <a className='h-1/2 w-full flex justify-center '  href="mailto:vashisth11shivam@gmail.com">
                            <motion.img 
                                whileHover={{
                                    scale:1.2
                                }}
                                className='h-[80%] w-[60]' 
                                src="send.png" 
                                alt="" 
                            />
                        </a>
                    </div>
               </div>
               <div className="bg-black h-[25%] text-white">
                Footer
               </div>
        </div> */}

        
    </div>
)
}

export default Home