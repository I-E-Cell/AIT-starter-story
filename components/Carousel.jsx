import React from 'react'

function Carousel() {
  return (
    <div>
        <div className="wrapper1 flex items-center justify-center h-[95vh]">
            <div className="slider h-[200px] overflow-hidden relative w-[1000%] m-auto">
                <div className="slide-track animate-[scroll_10s_linear_infinite] flex w-[calc(250px_*_14)] -webkit-animation: scroll 3s linear infinite">
                    <div class="slide">
                        <img src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='name' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img  className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]' src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                    <div class="slide h-[100px] w-[250px]">
                        <img className='w-4/5 h-[100px] rounded-[10px] border-2 border-solid border-[#bbbbbb] hover:cursor-pointer hover:animate-[ease-in-out] hover:scale-[2]'  src="public\prac-img\img1.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel
