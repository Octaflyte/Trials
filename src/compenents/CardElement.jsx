import "./CardElement.css";
import { useState } from "react";

const CardElement = () => {

    const [initialHover, setInitialHover] = useState(false);

    function onHoverHandler() {
        setInitialHover(true);
    }
   return (
  
<div class="py-16">  
    <div class=" container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 box">
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 card1">
                <div class="mb-12 space-y-4">
                    <h3 class="text-center text-2xl font-semibold text-purple-900">Beta Trial Offerings</h3>
                    <ul class="mb-6 "><li> • Orthomosaic & DSM generation from 200 UAV images is free per month</li><li> • Add up to 7 seats(with editor privilege) in your organization’s account</li>

<li>• First 100 geometry objects in feature layers are free every month</li><li>• Free 1 gb storage every month</li>
<li>• Free 50 AI analytics and geo-processing request every month</li></ul>
                    <a href="#" class="text-center block font-medium text-purple-600">Know more</a>
                </div>
                
            </div>
            <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8 card2">
                <div class="mb-12 space-y-4">
                       <h3 class="text-center text-2xl font-semibold text-purple-900">Free Plan Offerings</h3>
                   
                      <ul class="mb-6"><li> •Orthomosaic & DSM generation from 100UAV images is free per month</li><li> • Add up to 3 seats(with editor privilege)  in your organization’s account</li>
                      <li> • First 50 geometry objects in feature layers are free every month</li><li> • Free 0.5 gb storage every month</li><li> • Free 20 AI analytics and geo-processing requests every month</li></ul>
                   <a href="#" class="text-center block font-medium text-purple-600">Know more</a>
                </div>
                
                 </div>
            
        </div>
    </div>
</div>

   )
}

export default CardElement;
