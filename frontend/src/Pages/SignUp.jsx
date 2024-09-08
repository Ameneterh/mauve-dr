import React, { useState } from "react";
import signuppix from "/signupImage.svg";
import MainLayout from "../layout/MainLayout";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { FaEye, FaEyeSlash, FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.email || !formData.password) {
      return setErrorMsg("Please, fill out all fields!");
    }
    try {
      setLoading(true);
      setErrorMsg(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMsg(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/log-in");
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-40 min-h-screen max-w-6xl mx-auto mt-4 lg:mt-10 px-2 lg:px-0 text-[#9E5998] mb-24">
        <div>
          <img src={signuppix} className="w-[501px]" />
        </div>
        <div className="flex-1 flex flex-col justify-between gap-5 lg:gap-8 w-full">
          <div>
            <h1 className="text-4xl font-bold">Join Us</h1>
            <p className="text-sm text-[#999BA1] mt-2">
              Enjoy the benefit of Mauve Driver Recruit
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="fullname"
                value="Full Name"
                className="font-bold text-[#9E5998]"
              />
              <TextInput
                id="fullname"
                type="text"
                placeholder="Ex: Eliza Maguire"
                required
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="email"
                value="Your Email"
                className="font-bold text-[#9E5998]"
              />
              <TextInput
                id="email"
                type="email"
                placeholder="Ex: Maguire@FlexUI.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Label
                htmlFor="email"
                value="Password:"
                className="font-bold text-[#9E5998]"
              />
              <div className="flex items-center w-full relative">
                <TextInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  // rightIcon={FaEye}
                  placeholder="Enter Password"
                  className="w-full"
                  required
                  onChange={handleChange}
                />
                <span
                  className="absolute right-2 text-[#999BA1] text-xl cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-[#9E5998] hover:opacity-85 cursor-pointer flex items-center flex-row gap-10 mt-10 py-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="md" />
                  <span className="pl-3">Creating Account ...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
          {errorMsg && (
            <Alert className="mt-5" color="failure">
              {errorMsg}
            </Alert>
          )}
          <p className="flex flex-col lg:flex-row items-center gap-1 text-[#999BA1]">
            By creating an account, you agree to our
            <Link to="/tnc" className="text-[#6236F5] font-semibold">
              Terms & Conditions
            </Link>
          </p>

          <div className="w-full flex flex-col gap-4 ">
            <div className="w-full flex items-center justify-between gap-2 text-[#999BA1]">
              <div className="flex-1 border-b-[1px] border-[#999BA1]"></div>
              <p className="text-sm font-bold">OR</p>
              <div className="flex-1 border-b-[1px] border-[#999BA1]"></div>
            </div>

            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FaApple className="pr-2 h-6 w-6" />
              Continue with Apple
            </Button>
            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FcGoogle className="pr-2 h-6 w-6" />
              Continue with Google
            </Button>
            <Button
              as="div"
              className="bg-[#F8F8F8] text-[#19191B] hover:opacity-85 cursor-pointer flex items-center flex-row"
            >
              <FaFacebook className="pr-2 h-6 w-6 text-blue-700" />
              Continue with Facebook
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
