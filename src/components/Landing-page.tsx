export default function Landingpage() {
    return (
        <div className=" bg-[#F1F1F1] h-screen w-full text-black">
            {/* <h2>hello</h2> */}
            <div>
                <div className="texts py-36 px-16 leading-[8vw]">
                    <h1 className=" text-[10vw]  font-sm font-['Test_Founders_Grotesk_X']">WE CREATE </h1>
                    <h1 className=" text-[10vw] flex  font-sm font-['Test_Founders_Grotesk_X'] transition duration-[1s]">
                        <span><img className=" gola h-28 py-3  transition duration-[1s] rounded-[50%]" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></span>
                        EYE-OPENING</h1>
                    <h1 className=" text-[10vw]  font-sm font-['Test_Founders_Grotesk_X']">PRESENTATIONS</h1>
                </div>
                <div className="line w-full h-[1px] bg-stone-400"></div>
                <div className="flex justify-between px-10 py-3">{["For public and private companies","From the first pitch to IPO"].map((items,index)=>(
                    <p key={index}>{items}</p>
                ))}
                <div className=" w-40 h-8 flex justify-center items-center border-black border-[1.5px] rounded-[50px] hover:bg-black hover:text-white transition duration-[0.3s] "><h1>Start The Project</h1></div>
                
                </div>
            </div>
        </div>
    )
}