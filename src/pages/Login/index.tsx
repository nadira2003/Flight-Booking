
import Footer from "../../components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Login = () => {

 


  
        
	return (
		

        
<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">تسجيل الدخول 🔐</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-xl hover:bg-blue-800 transition"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          ما عندك حساب؟{" "}
          <a href="#" className="text-blue-700 hover:underline">
            إنشاء حساب جديد
          </a>
        </p>
      </div>
    </div>





		
		
	);
}

export default Login;
