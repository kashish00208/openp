"use client";
import { useState } from "react";
import { motion } from "motion/react";

export const SignIn = () => {
  const [name, setname]q = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPasswrod] = useState("");

 const handleSubmit = async () => {
  const res = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
  });

  const data = await res.json();
  console.log(data);
};
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center px-4 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome back
        </h2>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="hello@example.com"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              className="bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={(e) => {
                setUserPasswrod(e.target.value);
              }}
              className="bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-colors"
          >
            Sign Up
          </motion.button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Dont have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
