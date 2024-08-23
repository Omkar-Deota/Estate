import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import axios from 'axios';

function LoginPage() {
  // State variables for form inputs
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('female');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);


    try {
      const datasend = await axios.post("https://your-api-endpoint/register", {
        firstname,
        lastname,
        mobile,
        email,
        gender
      });

      setSuccess('Registration successful!');
      console.log(datasend.data);
    } catch (error) {
      setError('Failed to register. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-3/4 p-5 mx-auto text-center rounded-lg shadow-lg">
      <h1 className="text-3xl my-4 bg-slate-500 max-w-max mx-auto">Register Yourself</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row: Firstname and Lastname */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Input
            type="text"
            label="Firstname"
            placeholder="Enter your firstname"
            fullWidth
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            type="text"
            label="Lastname"
            placeholder="Enter your lastname"
            fullWidth
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            type="number"
            label="Mobile"
            placeholder="Enter your mobile"
            fullWidth
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Gender Selection */}
        <div className="w-2/5 text-center">
          <label htmlFor="gender-select" className="block text-lg font-medium mb-2 text-black">
            Gender
          </label>
          <select
            id="gender-select"
            className="border border-gray-300 rounded-lg p-2 w-full"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
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
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
