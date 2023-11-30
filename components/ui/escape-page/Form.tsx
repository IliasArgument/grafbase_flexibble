import React from "react";

const Form = () => {
  return (
    <form className="flexCenter pb-20">
      <input type="text" placeholder="Enter your email address" className="px-8 py-4 text-xs text-gray-steel" />
      <button type='submit' className="bg-white-haze px-8 py-4 text-xs">Submit</button>
    </form>
  );
};

export default Form;
