import { useState } from 'react';
import { Button, Input } from "@nextui-org/react";


function LoginPage() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    gender: ""
  });
  const [submitted, setSubmitted] = useState(false);
  // Handle input changes
  function handle(e: any) {
    const { id, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [id]: value
    }));
  }

  // Handle form submission
  function handleSubmit(e: any) {
    // Implement form submission logic
    e.preventDefault();
      setSubmitted(true); // Change button text to "Submitted"
      console.log(data);
      setData({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        gender: ""
      });
    
  }

  return (
    <div className="w-3/4 p-5 mx-auto text-center rounded-lg shadow-lg">
      <h1 className="text-3xl my-4 bg-slate-500 max-w-max mx-auto">Register Yourself</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row: Firstname and Lastname */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Input
            id='firstname'
            type="text"
            label="Firstname"
            placeholder="Enter your firstname"
            fullWidth
            value={data.firstname}
            onChange={handle}
          />
          <Input
            id='lastname'
            type="text"
            label="Lastname"
            placeholder="Enter your lastname"
            fullWidth
            value={data.lastname}
            onChange={handle}
          />
          <Input
            id='mobile'
            type="number"
            label="Mobile"
            placeholder="Enter your mobile"
            fullWidth
            value={data.mobile}
            onChange={handle}
          />
          <Input
            id='email'
            type="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            value={data.email}
            onChange={handle}
          />
        </div>

        {/* Gender Selection */}
        <div className="w-2/5 text-center">
          <label htmlFor="gender" className="block text-lg font-medium mb-2 text-black">
            Gender
          </label>
          <select
            id="gender"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={data.gender}
            onChange={handle}
          >
            <option value="">Select your gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="shadow"
          className="w-full hover:bg-gray-500 text-md text-black font-bold"
        >
           {submitted ? "Submitted" : "Submit"}
        </Button>
        
      </form>
    </div>
  );
}

export default LoginPage;



// import { useState } from 'react';
// import { Button, Input } from "@nextui-org/react";
// import axios from 'axios';

// function LoginPage() {
//   const [data, setData] = useState({
//     firstname: "",
//     lastname: "",
//     mobile: "",
//     email: "",
//     gender: ""
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   // Handle input changes
//   function handle(e) {
//     const { id, value } = e.target;
//     setData(prevData => ({
//       ...prevData,
//       [id]: value
//     }));
//   }

//   // Handle form submission

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log('Form Data:', data); // Log form data before submission

//     axios.post('http://localhost:5000/api/register', data)
//       .then(response => {
//     
//         setData({
//           firstname: "",
//           lastname: "",
//           mobile: "",
//           email: "",
//           gender: ""
//         });
//         setSubmitted(true);
//         setError(""); // Clear any previous errors
//       })
//       .catch(error => {
//         console.error(error);
//         setError("Failed to register user. Please try again.");
//       });
//   }

//   return (
//     <div className="w-3/4 p-5 mx-auto text-center rounded-lg shadow-lg">
//       <h1 className="text-3xl my-4 bg-slate-500 max-w-max mx-auto">Register Yourself</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="flex flex-wrap gap-4 justify-center mb-6">
//           <Input
//             id='firstname'
//             type="text"
//             label="Firstname"
//             placeholder="Enter your firstname"
//             fullWidth
//             value={data.firstname}
//             onChange={handle}
//           />
//           <Input
//             id='lastname'
//             type="text"
//             label="Lastname"
//             placeholder="Enter your lastname"
//             fullWidth
//             value={data.lastname}
//             onChange={handle}
//           />
//           <Input
//             id='mobile'
//             type="number"
//             label="Mobile"
//             placeholder="Enter your mobile"
//             fullWidth
//             value={data.mobile}
//             onChange={handle}
//           />
//           <Input
//             id='email'
//             type="email"
//             label="Email"
//             placeholder="Enter your email"
//             fullWidth
//             value={data.email}
//             onChange={handle}
//           />
//         </div>

//         <div className="w-2/5 text-center">
//           <label htmlFor="gender" className="block text-lg font-medium mb-2 text-black">
//             Gender
//           </label>
//           <select
//             id="gender"
//             className="border border-gray-300 rounded-lg p-2 w-full"
//             value={data.gender}
//             onChange={handle}
//           >
//             <option value="">Select your gender</option>
//             <option value="female">Female</option>
//             <option value="male">Male</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <Button
//           type="submit"
//           variant="shadow"
//           className="w-full hover:bg-gray-500 text-md text-black font-bold"
//         >
//           {submitted ? "Submitted" : "Submit"}
//         </Button>

//         {error && <p className="text-red-500 mt-4">{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default LoginPage;
