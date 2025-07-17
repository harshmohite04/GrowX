
const Contact = () => (
  <section id="contact" className="px-8 py-12 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4 text-green-400">Contact Us</h2>
    <form className="bg-green-400 rounded-lg p-8 w-full max-w-lg flex flex-col gap-4">
      <div className="flex gap-4">
        <input type="text" placeholder="Name" className="flex-1 px-4 py-2 rounded bg-black text-white placeholder-gray-400" />
        <input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded bg-black text-white placeholder-gray-400" />
      </div>
      <input type="text" placeholder="Subject" className="px-4 py-2 rounded bg-black text-white placeholder-gray-400" />
      <textarea placeholder="Message" className="px-4 py-2 rounded bg-black text-white placeholder-gray-400 min-h-[100px]" />
      <button type="submit" className="bg-black text-green-400 px-4 py-2 rounded font-semibold hover:bg-gray-900 transition">Send Message</button>
    </form>
  </section>
);

export default Contact; 