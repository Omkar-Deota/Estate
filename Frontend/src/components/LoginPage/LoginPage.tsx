import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

function LoginPage() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    gender: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  function handle(e: any) {
    const { id, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  // Handle form submission
  function handleSubmit(e: any) {
    // Implement form submission logic
    e.preventDefault(),
      setSubmitted(true),
      // eslint-disable-next-line no-console
      console.log(data),
      setData({
        firstname: "",
        lastname: "",
        mobile: "",
        email: "",
        gender: "",
      });
  }

  return (
    <div className="w-3/4 p-5 mx-auto text-center rounded-lg shadow-lg">
      <h1 className="text-3xl my-4 bg-slate-500 max-w-max mx-auto">
        Register Yourself
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* First Row: Firstname and Lastname */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Input
            fullWidth
            id="firstname"
            label="Firstname"
            placeholder="Enter your firstname"
            type="text"
            value={data.firstname}
            onChange={handle}
          />
          <Input
            fullWidth
            id="lastname"
            label="Lastname"
            placeholder="Enter your lastname"
            type="text"
            value={data.lastname}
            onChange={handle}
          />
          <Input
            fullWidth
            id="mobile"
            label="Mobile"
            placeholder="Enter your mobile"
            type="number"
            value={data.mobile}
            onChange={handle}
          />
          <Input
            fullWidth
            id="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={data.email}
            onChange={handle}
          />
        </div>

        {/* Gender Selection */}
        <div className="w-2/5 text-center">
          <label
            className="block text-lg font-medium mb-2 text-black"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="border border-gray-300 rounded-lg p-2 w-full"
            id="gender"
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
          className="w-full hover:bg-gray-500 text-md text-black font-bold"
          type="submit"
          variant="shadow"
        >
          {submitted ? "Submitted" : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
