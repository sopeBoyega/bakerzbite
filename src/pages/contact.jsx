import React from "react";
// import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  return (
    <div className="w-full h-auto overflow-hidden flex items-center justify-center py-10 px-5">
      <div className="bg-[#F9F9FB] w-full max-w-7xl h-auto flex flex-col items-center justify-center p-[30px] lg:p-[75px] rounded-[30px]">
        
        {/* Form Section */}
        <form className="w-full lg:w-[836px] mb-8 lg:mb-8">
          <p className="font-medium text-[#933C24] text-[34px] lg:text-[54px]">Leave Us Your Info</p>
          <div className="mt-6 flex flex-col gap-5 items-start">
            <input
              required
              type="text"
              className="w-full lg:w-[836px] px-[30px] py-[16px] rounded-[15px] border-[1.5px] border-[#D6D6D6]"
              placeholder="Your Name"
            />
            <input
              required
              type="email"
              className="w-full lg:w-[836px] px-[30px] py-[16px] rounded-[15px] border-[1.5px] border-[#D6D6D6]"
              placeholder="Your Email"
            />
            <textarea
              required
              className="w-full lg:w-[836px] px-[30px] py-[16px] text-start h-[216px] rounded-[15px] border-[1.5px] border-[#D6D6D6]"
              placeholder="Comment"
            ></textarea>
            <div className="flex items-center gap-2 mt-4">
              <input required type="checkbox" name="Privacy Policy" id="" />
              <p className="text-[#808080] text-sm lg:text-[21px]">
                You agree to our friendly
                <span className="font-semibold text-[#4A1D1f]">privacy policy</span>
              </p>
            </div>
            <button
              type="submit"
              className="mt-8 px-[24px] py-[15px] border-[1.5px] border-[#3328BF] rounded-[12px] bg-[#FBEDCD] text-[#4A1D1F] text-[14px] font-semibold"
            >
              Send Message →
            </button>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="w-full lg:w-[836px] bg-white rounded-[30px] p-[40px] flex flex-col gap-8 mt-8">
          {/* Email */}
          <div className="flex gap-8 items-start">
            <div className="w-[66px] h-[66px] rounded-full flex items-center justify-center border-[1.5px] border-[#FFA903]">
              <i className="bi bi-envelope text-[#4A1D1F] text-[30px]"></i>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#0D0D0D] text-[20px]">Send Us an Email</p>
              <p className="text-sm lg:text-[15px] mt-2">
                We'd love to hear from you! Feel free to reach out to us via mail.
              </p>
              <div className="mt-6 bg-[#FBEDCD] px-[24px] py-[15px] rounded-[12px] border-[1.5px] border-[#3328BF]">
                <p className="text-[#4A1D1F] text-[12px] font-semibold">sopeadegboyega@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-8 items-start">
            <div className="w-[66px] h-[66px] rounded-full flex items-center justify-center border-[1.5px] border-[#FFA903]">
              <i className="bi bi-telephone text-[#4A1D1F] text-[30px]"></i>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#0D0D0D] text-[20px]">Give Us a Call</p>
              <p className="text-sm lg:text-[15px] mt-2">
                We're here to help! Don't hesitate to reach out to us by phone.
              </p>
              <div className="mt-6 bg-[#FBEDCD] px-[24px] py-[15px] rounded-[12px] border-[1.5px] border-[#3328BF]">
                <p className="text-[#4A1D1F] text-[12px] font-semibold">+234 8129160417</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
