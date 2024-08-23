import  { useState } from "react";
import axios from "axios";
import LoginPage from "./LoginPage";

const Login = () => {
  const [activeComponent, setActiveComponent] = useState("Login");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClickSignup = () => {
    setActiveComponent("Signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://your-api-endpoint/login", {
        mobileNo,
        password
      });
      // Handle the response
      console.log(response.data);
      // Redirect or update the state as needed
    } catch (error) {
      setError("Failed to login. Please check your credentials and try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {activeComponent === "Login" && (
        <div className="w-full max-w-md p-10 space-y-6 bg-white">
          {/* User Avatar Section */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden md:w-32 md:h-32">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="User avatar"
              />
            </div>
          </div>

          {/* Input Fields Section */}
          <form className="space-y-4 mx-4 sm:mx-8" onSubmit={handleLogin}>
            <input
              type="tel"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Mobile No."
              aria-label="Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
            <input
              type="password"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="bg-pink-500 text-gray-50 p-2 rounded-full flex items-center
                 justify-center font-bold hover:text-pink-500 hover:bg-white border-2 border-pink-500 transition duration-500 ease-out"
                disabled={loading}
              >
                <span className="rounded-full bg-white text-pink-500 p-1 me-2 border-2 border-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                {loading ? "LOADING..." : "LOG IN"}
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="text-center mt-4">
            <p className="text-sm mt-2 text-black">
              Don't Have an Account?
              <a
                href="#signup"
                className="text-blue-500 mx-2 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  handleClickSignup();
                }}
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Conditionally render the Signup and ResetPassword components */}
      {activeComponent === "Signup" && <LoginPage />}
    </>
  );
};

export default Login;
