import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const list = [
    { title: "Villa", img: "src/components/graphics/Screenshot 2024-08-10 193221.png", price: "$100k" },
    { title: "Tangi", img: "src/components/graphics/Screenshot 2024-08-10 193229.png", price: "$120k" },
    { title: "Raspberry", img: "src/components/graphics/Screenshot 2024-08-10 193241.png", price: "$130k" },
    { title: "Liverpool", img: "src/components/graphics/Screenshot 2024-08-10 193319.png", price: "$90k" },
    { title: "Avodo", img: "src/components/graphics/Screenshot 2024-08-10 193334.png", price: "$76k" },
    { title: "Limon", img: "src/components/graphics/Screenshot 2024-08-10 193352.png", price: "$130k" },
    { title: "Mannat", img: "src/components/graphics/Screenshot 2024-08-10 193415.png", price: "$140k" },
    { title: "Klassy", img: "src/components/graphics/Screenshot 2024-08-10 193519.png", price: "$135k" },
];

function CardCourasal() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 800,
        responsive: [
            {
                breakpoint: 1024, // For tablets and small laptops
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 768, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <div className="slider-container flex justify-center w-full p-8">
            <div className="flex items-center w-full max-w-full">
                <Slider {...settings} className="w-full">
                    {list.map((item, index) => (
                        <Card
                            isPressable
                            className="card-hover bg-slate-100 mx-2 md:mx-6 lg:mx-12"
                            key={index}
                            shadow="sm"
                            onPress={() => console.log("item pressed")}
                        >
                            <CardBody className="overflow-visible p-0 flex justify-center items-center">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    alt={item.title}
                                    className="object-cover w-full md:w-80 lg:w-80 h-44"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex justify-between px-4 py-2">
                                <b className="text-black">{item.title}</b>
                                <p className="text-black">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CardCourasal;
