export default function ContactUs(){
    return(
        <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif] mt-40 shadow-xl p-10">
      <h1 className="text-3xl text-violet-900 font-extrabold text-center ">Contact <span className="text-purple-900">Us</span> </h1>
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Name</label>
          <input type='text' placeholder='Name'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-violet-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Email</label>
          <input type='email' placeholder='Email'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-violet-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Subject</label>
          <input type='text' placeholder='Subject'
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-violet-500" />
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Message</label>
          <textarea placeholder='Message' rows={6}
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-violet-500"></textarea>
        </div>
        <button type='button'
          className="text-white bg-violet-800 hover:bg-violet-900 font-semibold rounded-md text-sm px-6 py-3 w-full">Send</button>
      </form>
    </div>
    )
}