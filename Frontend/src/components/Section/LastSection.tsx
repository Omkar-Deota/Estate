import React from 'react';

function LastSection() {
    return (
        <div className="flex flex-col  lg:flex-row">
            {/* Text Section */}
            <div className="w-full justify-center lg:w-1/2 p-5 lg:p-24 bg-pink-700 text-white text-center ">
                <div className="mb-5 my-auto">
                    <h1 className="font-extrabold text-4xl mb-2 ">Property Investment</h1>
                    <p className="text-xl w-1/2 mx-auto">
                        Lifestyle is more frugal today to feel financial freedom in the future.
                        Investing in real estate offers a unique opportunity to build wealth through property appreciation and consistent rental income.
                    </p>
                </div>
                <div className="mb-5 my-auto">
                    <h1 className="font-extrabold text-4xl mb-2">Land Investment</h1>
                    <p className="text-xl w-1/2 mx-auto">
                        Our land investment approach focuses on acquiring strategically located parcels that promise high returns and significant future value.
                    </p>
                </div>
                <div  className="mb-5 my-auto">
                    <h1 className="font-extrabold text-4xl mb-2">Joint Investment</h1>
                    <p className="text-xl w-1/2 mx-auto">
                        Our joint investment programs foster collaboration, enabling you to invest alongside like-minded partners for mutual growth and success.
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative ">
                <img
                    className="w-full h-64 lg:h-full object-cover "
                    src="src/components/graphics/Background.jpg"
                    alt="Background"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="text-center p-4">
                        <p className="text-white  mx-auto w-3/5 text-2xl lg:text-4xl font-semibold mb-4">
                            Lifestyle is more frugal today to feel financial freedom in the future
                        </p>
                        <a
                            href="https://google.com"
                            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
                        >
                            Visit Google
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastSection;
