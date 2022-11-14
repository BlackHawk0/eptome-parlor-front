import React, { useState } from "react";
import './ReviewCard.css'

export default function ReviewCard({ review:{name, body }}) {

    // const [likeActive, setLikeActive] = useState(false)

    // function liked () {
    //     if(likeActive) {
    //         setLikeActive(false)
    //     } else{
    //         setLikeActive(true)
    //     }
    // }

    return(
        <div className="card bg-slate-100 w-136 rounded-xl p-9 dark:bg-slate-800">
            <figure class="bg-slate-100 w-136 rounded-lg p-9 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://img.freepik.com/free-photo/photo-surprised-two-women-keep-lips-folded-apply-green-nourishing-masks-take-care-complexion-skin-stand-each-other-isolated-pink-background-beauty-wellness-concept_273609-59292.jpg?size=626&ext=jpg&ga=GA1.2.790298598.1667807727" alt="" width="384" height="512" />
  <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {name}
      </div>
      <div class="text-slate-400 dark:text-slate-400">
        Happy Client
      </div>
    </figcaption>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        {body}
      </p>
    </blockquote>
  </div>
  <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
</figure>
        </div>


        // <div className="card">
            
        //     <h3>My Name is {name}</h3>
        //     <p>{body}</p>
        //     <div className="upvotes">
        //     <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} > &#x21E7;</button> <br />
        //     {/* <button onClick={liked} className={[likeActive ? 'activated-heart': null, 'btn'].join(' ')} > &#x21E9;</button> */}
        //     </div>
        // </div>
    )
}


{/* <figure class="mdbg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It is easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}