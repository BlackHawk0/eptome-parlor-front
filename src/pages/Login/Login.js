import React from 'react';


const  Login = () => {
    // bg-gray-900
  return (
        <div className='flex align-items-center h-full w-full justify-center mt-28'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#a5b4fc]p-8 px-8 rounded-sm'> 
                <h2 className='text-4xl dark:text-white font-bold text-center'>LOG IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGN IN</button>
                
            </form>
        </div>
  );
}

export default Login;