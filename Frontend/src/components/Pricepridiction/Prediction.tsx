import { useState } from 'react';

function Prediction() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        location:'',
        size:''
    });
    const [loading, setLoading] = useState(false);
    const [predictedPrice, setPredictedPrice] = useState(null);

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setPredictedPrice(null);

        try {
            const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setPredictedPrice(data.predictedPrice);
            } else {
                // Handle server errors
                console.error('Server error:', response.status);
            }
        } catch (error) {
            // Handle network errors
            console.error('Network error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex flex-col p-4 lg:space-y-4 bg-blue-50 ">
                <p className="font-bold text-2xl sm:text-3xl underline mb-4 text-black">
                    Predict Price of your property
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0 w-full max-w-sm">
                        <label htmlFor="name" className="w-full sm:w-1/3 text-gray-700 font-bold text-sm sm:text-base">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex-1 border border-gray-300 rounded p-2 text-sm sm:text-base text-white"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0 w-full max-w-sm">
                        <label htmlFor="name" className="w-full sm:w-1/3 text-gray-700 font-bold text-sm sm:text-base">
                            Location
                        </label>
                        <input
                            required
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="flex-1 border border-gray-300 rounded p-2 text-sm sm:text-base text-white"
                            placeholder="Enter your location"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0 w-full max-w-sm">
                        <label htmlFor="name" className="w-full sm:w-1/3 text-gray-700 font-bold text-sm sm:text-base">
                            size
                        </label>
                        <input
                            required
                            type="text"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className="flex-1 border border-gray-300 rounded p-2 text-sm sm:text-base text-white"
                            placeholder="Enter your size"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0 w-full max-w-sm">
                        <label htmlFor="mobile" className="w-full sm:w-1/3 text-gray-700 font-bold text-sm sm:text-base">
                            Mobile No
                        </label>
                        <input
                            required
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="flex-1 border border-gray-300 rounded p-2 text-sm sm:text-base text-white"
                            placeholder="Enter your mobile number"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {loading && (
                    <div className="mt-4 text-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}

                {predictedPrice && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded text-green-800">
                        <p className="font-bold">Predicted Price:</p>
                        <p className="text-lg">{predictedPrice}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Prediction;
