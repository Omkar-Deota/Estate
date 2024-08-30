import Slider from "react-slick";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const list = [
    { title: "Read Latest News", img: "https://cdn-icons-png.flaticon.com/128/2965/2965879.png", url: "https://realty.economictimes.indiatimes.com/" },
    { title: "Read Articles", img: "https://cdn-icons-png.flaticon.com/128/11693/11693377.png", url: "https://www.lexisnexis.in/blogs/property-law-in-india/" },
    { title: "EMI Calculator", img: "https://cdn-icons-png.flaticon.com/128/8236/8236106.png", url: "https://emicalculator.net/#google_vignette" },
    { title: "Area Calculator", img: "https://cdn-icons-png.flaticon.com/128/5442/5442154.png", url: "https://www.thecalculatorsite.com/conversions/area.php" },
    { title: "Loan Eligibility", img: "https://cdn-icons-png.flaticon.com/128/4599/4599311.png", url: "https://homeloans.sbi/calculators" },
];

function Insingth() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "20px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10px",
                },
            },
        ],
    };

    return (
        <div className="bg-slate-300 w-full p-8">
            <div className="text-start mb-8">
                <p className="text-4xl text-black font-extrabold ml-6 mb-2">Insight & Tools</p>
                <p className="text-yellow-500 text-xl mb-8">Get other important information</p>
            </div>

            <div className="slider-container">
                <Slider {...settings}>
                    {list.map((item, index) => (
                        <Card
                            isPressable
                            className="card-hover h-72 w-60 bg-slate-100 mx-2 md:mx-6 lg:mx-12"
                            key={index}
                            shadow="sm"
                        >
                            <CardBody className="overflow-visible p-0 flex justify-center items-center">
                                <Image
                                    className="h-40 w-40 object-cover"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </CardBody>
                            <div className="p-4 text-center">
                                <b className="text-black block">{item.title}</b>
                                <Link
                                    className="flex justify-center mt-2"
                                    color="foreground"
                                    href={item.url}
                                >
                                    <button className="bg-pink-600 border-none p-2 text-white rounded-2xl hover:bg-pink-800 transition-colors">
                                        Learn more
                                    </button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Insingth;
