export default function Contact() {
  return (
    <section className="p-10 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-10">
          Have questions or need help? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-2">📧 Email: <span className="text-blue-600">support@lms.com</span></p>
          <p className="text-gray-600 mb-2">📞 Phone: <span className="text-blue-600">+91 98765 43210</span></p>
          <p className="text-gray-600">📍 Address: 123 Library Street, Pune, India</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message..." 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}





// Show Available books 
// 