import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
// import img1 from "./graphics/Screenshot 2024-08-10 193221.png";
// import img2 from "./graphics/Screenshot 2024-08-10 193229.png";
// import img3 from "./graphics/Screenshot 2024-08-10 193241.png";
// import img4 from "./graphics/Screenshot 2024-08-10 193319.png";
// import img5 from "./graphics/Screenshot 2024-08-10 193352.png";
// import img6 from "./graphics/Screenshot 2024-08-10 193415.png";
// import img7 from "./graphics/Screenshot 2024-08-10 193415.png";
// import img8 from "./graphics/Screenshot 2024-08-10 193547.png";

  const list = [
    { title: "Villa", img:"src/components/graphics/Screenshot 2024-08-10 193221.png", price: "$100k" },
    { title: "Tangi",img:"src/components/graphics/Screenshot 2024-08-10 193229.png", price: "$120k" },
    { title: "Raspberry",img:"src/components/graphics/Screenshot 2024-08-10 193241.png", price: "$130k" },
    { title: "Liverpool",img:"src/components/graphics/Screenshot 2024-08-10 193319.png", price: "$90k" },
    { title: "Avodo",img:"src/components/graphics/Screenshot 2024-08-10 193334.png", price: "$76k" },
    { title: "Limon",img:"src/components/graphics/Screenshot 2024-08-10 193352.png", price: "$130k" },
    { title: "Mannat",img:"src/components/graphics/Screenshot 2024-08-10 193415.png", price: "$140k" },
    { title: "Klassy",img:"src/components/graphics/Screenshot 2024-08-10 193519.png", price: "$135k" },
  ];

function CardCourasal() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
  return (
<div className="slider-container flex justify-center w-11/12 mx-auto">
  <div className="flex items-center w-full max-w-full">
    <Slider {...settings} className="w-full">
      {list.map((item, index) => (
        <Card
          isPressable
          className="card-hover h-60 bg-slate-100"
          key={index}
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0 mx-5">
            <Image
              shadow="sm"
              radius="lg"
              alt={item.title}
              className="object-cover h-44 w-96"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small flex justify-between ">
            <b className="text-black">{item.title}</b>
            <p className="text-black">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </Slider>
  </div>
</div>

  
  )
}

export default CardCourasal