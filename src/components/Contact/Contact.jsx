const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className=" text-[26px] leading-[36px] text-center ">Contact Us</h2>
        <p className="mb-8 lg:mb-16  font-light text-center text-[16px] leading-7 mt-3">
          Got a technical issue ? went to send feedback about a beta feature ?
          Let us Know.
        </p>
        <form action="">
          <div>
            <label
              htmlFor="email"
              className=" text-[#4E545F] font-semibold leading-7 text-[16px] mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-[4E545F] cursor-pointer rounded-md mt-1"
            ></input>
          </div>

          <div>
            <label
              htmlFor="subject"
              className=" text-[#4E545F] font-semibold leading-7 text-[16px] mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-textColor cursor-pointer rounded-md mt-1"
            ></input>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className=" text-[#4E545F] font-semibold leading-7 text-[16px] mb-2"
            >
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave a comment......"
              className=" w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067FF] text-[16px] leading-7 text-[#181A1E] placeholder:text-[#4E545F] cursor-pointer rounded-md mt-1"
            />
          </div>
          <button
            type="submit"
            className=" bg-[#0067FF] py-[15px] px-[35px] rounded-[50px] text-white font-[600] mt-[38px]  sm:w-fit hover:bg-[#5b86c3] transition duration-300 ease-in-out  "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
