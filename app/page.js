import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div class="w-screen h-screen" style={{
        backgroundImage: "url('images/home.png')", backgroundSize: "cover", /* Scale the image to maintain its aspect ratio while fitting within the container */
        backgroundPosition: "center", /* Center the background image */
        backgroundRepeat: "no-repeat"
      }}>
        <div className="flex justify-between lg:px-20 md:px-14 sm:px-8 px-6 lg:py-4 py-8 border-b border-b-white/20">
          <Image src='/images/logo.png' alt='pokigames' height={50} width={140} />
          <Image src='/images/play-now.png' alt='pokigames' height={44} width={110} />
        </div>
        {/* scorcard */}

        <div className="rounded-[35px]   bg-[#050A13]/30 border border-[#EAEAEA]/20 h-auto w-[90%] mx-auto mt-14 mb-6">
          <div className="lg:px-10 md:px-8 sm:px-6 px-4 py-4 flex justify-between ">
            <p className="font-medium text-white/70">ICC T20 WORLD CUP</p>
            <Image src='/images/ipl.png' alt='ipl' height={26} width={42} />
          </div>

          <div className="lg:px-10 md:px-8 sm:px-6 px-4 py-4 flex justify-between items-center border-b-2 border-b-white/20">
            <div className="fle flex-col items-center justify-center ">
              <Image src='/images/team1.png' alt='team1' height={32} width={32} />
              <p className="text-white/70 my-2 font-semibold text-[13px] text-center">IND</p>
            </div>
            <div className="">
              <p className="font-bold text-[24px]">120-0</p>
              <p className="">Over 11.2</p>
            </div>

            <div className="">
              <p className="font-bold text-[12px] px-2 py-1 tracking-wide rounded-lg bg-[#1F67FF]">LIVE</p>
            </div>


            <div className="">
              <p className="font-medium text-[13px]">Yet to bat</p>

            </div>
            <div className="fle flex-col items-center justify-center">

              <Image src='/images/team2.png' alt='team2' height={32} width={32} />
              <p className="text-white/70 my-2 font-semibold text-[13px] text-center">AUS</p>

            </div>
          </div>
          
          <div className="flex lg:px-10 md:px-8 sm:px-6 px-4 py-2 justify-between">
            <div className="w-[45%] ">
              <div className="flex justify-between">
                <p>S Gill</p>
                <p className="text-[14px]" ><span className="text-white mx-2 text-[13px]">0</span><span className="text-white/70 text-[12px]">1</span></p>
              </div>
              <div className="flex justify-between my-1">
                <p className="text-[14px]">V Kohli</p>
                <p flex ><span className="text-white mx-2 text-[13px]">52</span><span className="text-white/70 text-[12px]">38</span></p>
              </div>
            </div>
            <div className="w-[45%] ">
              <div className="flex justify-between">
                <p className="text-[14px]" >A Zampa</p>
                <p className="text-[13px]">1.2-8-1 </p>
              </div>
              <div className="flex justify-end gap-2 my-1">
                <p className="bg-[#8FDAFF] py-1 px-2 text-[13px] rounded-full text-black font-bold">W</p>
                <p className="bg-[#ffffff]/30 py-1 px-2 text-[13px] rounded-full text-white font-bold">0</p>
                
              </div>
            </div>

          </div>
        </div>

        <div className="my-4 w-[90%] mx-auto">
          <p className="text-white text-[15px]  font-extralight tracking-wider text-center">Get ready for precision prediction and thrilling wins on every ball. <span className="font-normal">Play Now!</span></p>
          <p className="text-white font-normal text-[15px] tracking-wider text-center my-4">Predict what will happen in next the ball!! and win 10 Coins.</p>

          <div className=" flex justify-around mx-auto flex-wrap my-8 gap-4">
            <p className="border border-[#c2c2c2]  rounded-[50px] w-[157px] h-[52px] flex justify-center items-center">6</p>
            <p className="border border-[#c2c2c2]  rounded-[50px] w-[157px] h-[52px] flex justify-center items-center">4</p>
            <p className="border border-[#c2c2c2] tracking-wider  rounded-[50px] w-[157px] h-[52px] flex justify-center items-center ">Wicket</p>
            <p className="border border-[#c2c2c2]  tracking-wider rounded-[50px] w-[157px] h-[52px] flex justify-center items-center">Dot ball</p>
            <p className="border border-[#c2c2c2]  rounded-[50px] w-[157px] h-[52px] flex justify-center items-center">1</p>
            
          </div>
        </div>
        <div className="text-center">

        <button className="tracking-widest bg-[#3C61DD] hover:bg-[#3C61DD]/90 text-white px-36 text-[18px] py-4 rounded-[50px] font-medium ">SUBMIT</button>
        </div>
      </div>
      <div className="bg-[#03060a] text-center h-[303px] w-screen">
<p className="text-[#484f63] font-medium pt-4">ADVERTISEMENT</p>
      </div>
      <div className="my-10 w-[90%] mx-auto">
        <div className="flex flex-wrap justify-around gap-8">
        
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
        </div>
      </div>
      <div className="bg-[#03060a] text-center h-[303px] w-screen">
<p className="text-[#484f63] font-medium pt-4">ADVERTISEMENT</p>
      </div>
      <div className="my-10 w-[90%] mx-auto">
        <div className="flex flex-wrap justify-around gap-8">
        
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
          <Image src="/images/car.png" alt="" height={154} width={154}/>
         
        </div>
      </div>

      <div className="border-t border-t-[#ffffff]/20 py-4 mx-auto font-medium">
<p className="text-center">PakkiGame.com</p>
      </div>

    </main>
  );
}
