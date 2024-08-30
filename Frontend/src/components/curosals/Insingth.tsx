
import Slider from "react-slick";
import { Card, CardBody, Image } from "@nextui-org/react";

const list = [
    {title: "Read Latest News",img:"src/components/graphics/Screenshot 2024-08-10 193221.png" },
    {title: "Read Articals", img:"src/components/graphics/Screenshot 2024-08-10 193229.png" },
    {title: "EMI calcutaror",img:"src/components/graphics/Screenshot 2024-08-10 193519.png"},
    {title: "Area calcutaror",img:"src/components/graphics/Screenshot 2024-08-10 193519.png"},
    {title: "Loan calcutaror",img:"src/components/graphics/Screenshot 2024-08-10 193519.png"},
  ];

function Insingth() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll:1,
        slidesToShow: 3
    };

    return (
        <div className="bg-slate-300 w-4/5 p-8">
         
            <text className='text-start'>
                <p className='text-4xl text-black font-extrabold  ml-6 mb-2'>Insigth & Tools</p>
                <p className='text-yellow-500 text-xl mb-8'>Get another important imformation </p>
            </text>

            <div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                {list.map((item, index) => (
        <Card
          isPressable
          className="card-hover h-60 w-40 bg-slate-100"
          key={index}
          shadow="sm"
          
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 mx-5">
            <Image
              className="object-cover h-36 w-36 rounded-full"
              src={item.img}
            />
          </CardBody>
           <b className="text-black">{item.title}</b>
         
        </Card>
      ))}
                </Slider>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Insingth