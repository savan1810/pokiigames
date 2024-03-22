import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">

      <main className="hello  sm:max-w-[450px]  w-screen mx-auto h-screen  z-10" >
        <div
          className="fixed top-0 left-0 transform sm:-translate-x-1/2 sm:left-1/2 -z-10 h-screen w-screen sm:w-[450px] bg-cover bg-center"
          style={{ backgroundImage: "url('images/home.png')" }}
        ></div>
        
          <div className="flex justify-between px-6  py-6 sm:py-4 border-b border-b-white/20">
            <Image src='/images/logo.png' alt='pokigames' height={50} width={100} />
            <Image src='/images/play-now.png' alt='pokigames' height={44} width={80} />
          </div>
          {/* scorcard */}

          <div className="rounded-[35px]    border border-[#EAEAEA]/20 h-auto w-[90%] mx-auto mt-20 sm:mt-8 mb-10 sm:mb-0">
            <div className=" px-4 py-4 sm:py-2 flex justify-between ">
              <p className="font-medium text-white/70">ICC T20 WORLD CUP</p>
              <Image src='/images/ipl.png' alt='ipl' height={26} width={42} />
            </div>

            <div className="px-4 py-4 sm:py-2 flex justify-between items-center border-b-2 border-b-white/20">
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

            <div className="flex  px-4 py-1 justify-between">
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
          <div className="  text-center sm:h-[250px] h-[300px] mx-auto w-[90%] my-5 sm:my-2">
            <p className="text-[#484f63] font-medium pt-4">ADVERTISEMENT</p>
          </div>
          <div className="text-center w-[90%] mx-auto">

            <button className="tracking-widest w-full bg-[#3C61DD] hover:bg-[#3C61DD]/90 text-white  text-[18px] py-4 rounded-[50px] font-medium my-4 sm:mt-2">RELOAD SCORE</button>
          </div>
          <div className="mb-4 mt-8 w-[90%] mx-auto">
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
          <div className="text-center w-[90%] mx-auto">

            <button className="tracking-widest w-full bg-[#3C61DD] hover:bg-[#3C61DD]/90 text-white  text-[18px] py-4 rounded-[50px] font-medium my-4 ">SUBMIT</button>
          </div>
        
          <div className="  text-center h-[300px] mx-auto w-[90%] my-5">
            <p className="text-[#484f63] font-medium pt-4">ADVERTISEMENT</p>
          </div>
        <div className="my-10 w-[90%]  mx-auto">
          <div className="flex flex-wrap justify-around gap-8">

            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
          </div>
        </div>
        <div className="  text-center h-[300px] mx-auto w-[90%] my-5">
            <p className="text-[#484f63] font-medium pt-4">ADVERTISEMENT</p>
          </div>
        <div className="my-10 w-[90%] mx-auto">
          <div className="flex flex-wrap justify-around gap-8">

            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />
            <Image src="/images/car.png" alt="" height={154} width={154} />

          </div>
        </div>

        <div className="border-t border-t-[#ffffff]/20 py-4 mx-auto font-medium">
          <p className="text-center">PakkiGame.com</p>
        </div>

      </main>
    </div>
  );
}
