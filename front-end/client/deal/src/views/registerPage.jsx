import axios from "axios";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1725973319141.json";
import Toastify from "toastify-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();
    try {
      const dataUser = { username, password, role: "User" };
      const { data } = await axios.post(
        "https://project.athiflanang.site/register",
        dataUser
      );
      console.log(data);

      Toastify({
        text: "Success Add New User",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      navigate("/login");
    } catch (err) {
      Toastify({
        text: err.response.data.message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-purple-800 to-purple-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Lottie animationData={animationData} className="w-full h-full" />
      </div>
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-center text-2xl font-bold text-white mb-4">
          Login
        </h2>
        <form onSubmit={register}>
          <div className="mb-4 relative">
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              id="username"
              placeholder="Username"
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">
              👤
            </i>
          </div>
          <div className="mb-4 relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="password"
              id="password"
              placeholder="Password"
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">
              🔒
            </i>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

// export default RegisterPage;
