'use client'

import React, { useEffect } from 'react'
import './intel.css'

const TimeLineFinal = () => {

    useEffect(()=>{

        var items = document.querySelectorAll(".timeline li");
    
    function isElementInViewport(el){
        var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function callbackFunc() {
        for(var i = 0; i < items.length; i++){
            if (isElementInViewport(items[i])){
                if(!items[i].classList.contains("in-view")){
                    items[i].classList.add("in-view");
                }
            } else if(items[i].classList.contains("in-view")){
                items[i].classList.remove("in-view");
            }
        }
    }
    
     window .addEventListener("load", callbackFunc);
     window.addEventListener("scroll", callbackFunc);
    },[])





  return (
    <div>
        <section className="timeline">
           <ul>
            <li>
                <div>
                    <h1 className='title text-xl absolute top-0 bottom-0'>BLOGS</h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, saepe facilis illum veritatis adipisci odio. Omnis nesciunt repellat quod, odio maxime, ex quisquam illo nulla reprehenderit velit est minima id?
                    </p> 
                </div>
            </li>
            <li>
                <div>
                    <h1 className='title text-xl absolute top-0 bottom-0'>PODCASTS</h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati amet iusto tempora ipsum et dolorum, labore inventore mollitia libero voluptatibus consequuntur necessitatibus laudantium incidunt minus quas eos dolor similique.
                    </p> 
                </div>
            </li>
            <li>
                <div>
                <h1 className='title text-xl absolute top-0 bottom-0'>STARTER STORIES</h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, alias aut, rerum, obcaecati voluptatibus totam dolorem nam illo aliquid quasi delectus sequi hic illum nostrum beatae quia. Cumque, numquam necessitatibus?
                    </p> 
                </div>
            </li>
            <li>
                <div>
                <h1 className='title text-xl absolute top-0 bottom-0'>TESTOMONIALS</h1>
                   <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum pariatur iure libero doloribus qui veniam possimus illum itaque! Quidem tempore dolor error odit ex minima maiores fuga magnam eos?
                    </p> 
                </div>
            </li>
           </ul>
       </section>
    </div>
  )
}

export default TimeLineFinal
