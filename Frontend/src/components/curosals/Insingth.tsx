
import Slider from "react-slick";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const list = [
    {title: "Read Latest News",img:"src/components/graphics/Screenshot 2024-08-10 193221.png",url:"https://realty.economictimes.indiatimes.com/" },
    {title: "Read Articals",img:"src/components/graphics/Screenshot 2024-08-10 193229.png" ,url:"https://www.lexisnexis.in/blogs/property-law-in-india/"},
    {title: "EMI calcutaror",img:"src/components/graphics/Screenshot 2024-08-10 193519.png",url:"https://emicalculator.net/#google_vignette"},
    {title: "Area calcutaror",img:"src/components/graphics/Screenshot 2024-08-10 193519.png",url:"https://www.thecalculatorsite.com/conversions/area.php"},
    {title: "Loan eligibility",img:"src/components/graphics/Screenshot 2024-08-10 193519.png",url:"https://homeloans.sbi/calculators"},
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
        >
          <CardBody className="overflow-visible p-0 mx-5">
            <Image
              className="object-cover h-36 w-36 rounded-full"
              src={item.img}
            />
          </CardBody>
           <b className="text-black">{item.title}</b>

           <Link
            className="flex  items-center gap-1 "
            color="foreground"
            href={item.url}
           >
                <button className="bg-pink-600 border-none p-2 text-white rounded-2xl 
                 hover:bg-pink-800 transition-colors mx-auto">
          Learn more
        </button>
           </Link>
         
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