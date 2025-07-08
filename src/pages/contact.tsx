'use client';

import Image from 'next/image';

export default function ContactHero() {
  return (
    <>
    <section className="relative w-full max-w-7xl h-200 mx-auto my-8 rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <Image
        src="/Images/info1.png" // replace with your actual image path
        alt="Bakery Factory"
        width={1200}
        height={600}
        className="w-full h-200 object-cover"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-6">
        <h1 className="text-white text-3xl md:text-4xl font-bold">Contact Us</h1>
      </div>
    </section>
<section className="bg-[#fdfcf9] py-10 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
    
    {/* Harare Bread Factory */}
    <div className="bg-white p-6 rounded-lg shadow">
      <Image
        src="/Images/about.png"
        alt="Harare Factory"
        className="w-full h-52 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold text-[#3c2763] mb-2">Harare Bread Factory</h2>
      <p className="text-gray-700 mb-2">1 Shepperton Road, Graniteside, Harare</p>
      <ul className="text-gray-600 text-sm space-y-1">
        <li>+263 242 710334, +263 242 751481,</li>
        <li>+263 242 751572, +263 242 758659</li>
        <li><strong>VOIP:</strong> 08677006178</li>
        <li><strong>Econet Toll Free:</strong> 08080151, 08080152</li>
      </ul>
    </div>

    {/* Bulawayo Bread Factory */}
    <div className="bg-white p-6 rounded-lg shadow">
      <Image
        src="/Images/commitment.png"
        alt="Bulawayo Factory"
        className="w-full h-52 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold text-[#3c2763] mb-2">Bulawayo Bread Factory</h2>
      <p className="text-gray-700 mb-2">22 A Bellevue Road, Belmont, Bulawayo</p>
      <ul className="text-gray-600 text-sm space-y-1">
        <li>+263 9 78279, +263 9 68826, +263 9 68381,</li>
        <li>+263 9 68383, +263 9 69592, +263 9 76693</li>
        <li><strong>VOIP:</strong> 08677006179</li>
        <li><strong>Econet Toll Free:</strong> 08080151, 08080152</li>
      </ul>
    </div>

  </div>
</section>
<section className="bg-white py-10 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-[#261B6C] mb-8">
      List Of Bakers Inn Depots
    </h2>

    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-gray-100 text-[#261B6C] text-base">
          <tr>
            <th className="px-4 py-3 font-semibold">Depot</th>
            <th className="px-4 py-3 font-semibold">Address</th>
            <th className="px-4 py-3 font-semibold">Phone Number</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            ['Chinhoyi Depot', '94/95 Josiah Tongogara St, Industrial Site, Chinhoyi', '0772 318 309'],
            ['Bindura Depot', '461 Luton Road, Industrial Site, Bindura', '066 2107317'],
            ['Murehwa Depot', 'Stand number 351 Murehwa Growth Point', '0652 122 514'],
            ['Mutare Depot', '5-7 Glasgow Road, Industrial Site, Mutare', '020 60715'],
            ['Hwange Depot', '29 Derby Drive, Hwange Industrial Site', '0281 2820105'],
            ['Chiredzi Depot', '329 Lion Drive, Chiredzi', '0231 231 2709'],
            ['Masvingo Depot', '1310 Mineral Road, Masvingo', '039 266 333'],
            ['Gweru Depot', '1843 Main Street, Gweru', '054 2220 858'],
            ['Zvishavane Depot', 'Shabanie Mine Club, Noelville, Zvishavane', '0772 395567'],
          ].map(([depot, address, phone], i) => (
            <tr key={i}>
              <td className="px-4 py-2 font-semibold text-[#261B6C]">{depot}</td>
              <td className="px-4 py-2">{address}</td>
              <td className="px-4 py-2 font-semibold">{phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className="bg-[#fdfcf9] py-10 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="mb-6">
      <Image
        src="/Images/info2.png" 
        alt="Packaging food for donation" 
        className="w-full h-80 object-cover rounded-lg"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6 text-center text-sm md:text-base text-[#261B6C] font-semibold">
      <div>
        <p>For job enquiries , email your CV to</p>
        <a href="mailto:hr@bakersinnzim.com" className="text-[#261B6C] underline font-normal">
          hr@bakersinnzim.com
        </a>
      </div>
      <div>
        <p>For general enquiries, email</p>
        <a href="mailto:marketing@bakersinnzim.com" className="text-[#261B6C] underline font-normal">
          marketing@bakersinnzim.com
        </a>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#fdfcf9] py-12 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#261B6C] mb-2">Request A Callback</h2>
    <p className="text-gray-700 mb-8">Complete the form below and we will respond within 24 hours.</p>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md">
      <select className="bg-[#f5f3e7] p-3 rounded" defaultValue="">
        <option value="" disabled>Your Title</option>
        <option>Mr</option>
        <option>Mrs</option>
        <option>Miss</option>
        <option>Dr</option>
      </select>
      <input type="text" placeholder="Your Name" className="bg-[#f5f3e7] p-3 rounded" />
      <input type="tel" placeholder="Your Phone Number" className="bg-[#f5f3e7] p-3 rounded" />
      <input type="email" placeholder="Your E-mail" className="bg-[#f5f3e7] p-3 rounded" />
      
      <select className="bg-[#f5f3e7] p-3 rounded" defaultValue="">
        <option value="" disabled>Select Area Of Interest</option>
        <option>Bread Products</option>
        <option>Factory Tours</option>
        <option>Donations</option>
        <option>Other</option>
      </select>
      <select className="bg-[#f5f3e7] p-3 rounded" defaultValue="">
        <option value="" disabled>Nature Of Enquiry</option>
        <option>Compliment</option>
        <option>Complaint</option>
        <option>Question</option>
        <option>Other</option>
      </select>

      <select className="bg-[#f5f3e7] p-3 rounded md:col-span-2" defaultValue="">
        <option value="" disabled>Do You Want To Be Contacted By Phone</option>
        <option>Yes</option>
        <option>No</option>
      </select>

      <textarea placeholder="Your Message" className="bg-[#f5f3e7] p-3 rounded md:col-span-2 h-32 resize-none" />

      <button
        type="submit"
        className="bg-[#b2904c] text-white py-3 rounded mt-4 hover:bg-[#a58344] transition md:col-span-2"
      >
        SUBMIT
      </button>
    </form>
  </div>
</section>

    </>
  );
}
