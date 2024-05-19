import React from 'react';

function ProductDetails() {
  const product = [
    {
      imageUrl:
        "https://rukminim2.flixcart.com/image/1000/1000/kjkbv680-0/t-shirt/9/v/o/m-t285hs-as7whdngr-seven-rocks-original-imafz3wkfs8pevqc.jpeg?q=70&crop=false",
      price: "RS 380",
      originalPrice: "800",
      discount: "52% Off",
      title:"A nice half slevee t shirt"
    }
  ];

  return (
    <div
    
     className='grid grid-cols-2'>
    <div  className=" grioverflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
      <img 
      className='h-full w-full object-cover object-center p-20'
      src={product[0].imageUrl} alt="Product" />
    </div>

    <div>
    <div  className=' flex flex-center  text-bold text-3xl pt-12'>
{product[0].title}
    </div>

    
    </div>
    </div>
  );
}

export default ProductDetails;


{/* <div className="flex flex-col items-center">
<div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
  <img
    src={product.images[0].src}
    alt={product.images[0].alt}
    className="h-full w-full object-cover object-center"
  />
</div>
<div className=" flex flex-wrap space-x-5 justify-center">
  {product.images.map((item) => (
    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
      <img
        src={item.src}
        alt={item.alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  ))}
</div>
</div> */}