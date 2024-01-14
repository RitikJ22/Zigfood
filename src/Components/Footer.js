import { Link } from "react-router-dom";
const Footer = () => {
  return (


    <div className="bg-gray-800 text-white absolute w-full">
  <div className="max-w-screen-xl mx-auto p-8 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* <!-- Footer Section 1 --> */}
      <div>
        <h4 className="text-lg font-semibold mb-4">About Us</h4>
        <ul>
          <li><Link href="#" className="hover:text-gray-300">Our Story</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Blog</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Careers</Link></li>
        </ul>
      </div>

      {/* <!-- Footer Section 2 --> */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
        <ul>
          <li><Link href="#" className="hover:text-gray-300">Contact Us</Link></li>
          <li><Link href="#" className="hover:text-gray-300">FAQs</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Terms & Conditions</Link></li>
        </ul>
      </div>

      {/* <!-- Footer Section 3 --> */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <ul>
          <li><Link href="#" className="hover:text-gray-300">Facebook</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Twitter</Link></li>
          <li><Link href="#" className="hover:text-gray-300">Instagram</Link></li>
        </ul>
      </div>

      {/* <!-- Footer Section 4 --> */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Download Our App</h4>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15c-1.428 0-2.79-.47-3.944-1.358-.202-.16-.408-.312-.617-.448-1.205-.796-2.566-1.194-4.039-1.194-1.473 0-2.834.398-4.039 1.194-.21.136-.415.288-.617.448C5.79 14.53 4.428 15 3 15v2c0 1.104.896 2 2 2h1v1a2 2 0 002 2h10a2 2 0 002-2v-1h1a2 2 0 002-2v-2zm-14-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 2h2v2H7v-2zm4 0h2v2h-2v-2zm-4 2h2v2H7v-2zm4 0h2v2h-2v-2zm2.858-13.82a1 1 0 00-1.716-1.116l-7 12a1 1 0 001.716 1.116l7-12z"/>
            </svg>
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h3m0 0H3m3 0a9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>

    {/* <!-- Additional Footer Content --> */}
    <div className="mt-8 text-center text-gray-500">
      <p>&copy; ZIGFOOD. All rights reserved.</p>
    </div>
  </div>
</div>

  );
};

export default Footer;
