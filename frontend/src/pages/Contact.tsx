import banner from "../assets/contact-banner.jpg";

export default function Contact() {
  return (
    <div className="pt-24">

      {/* Banner */}
      <div className="h-[55vh] w-full">
        <img src={banner} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-16">

        {/* Left Menu */}
        <div className="bg-gray-100 rounded-lg p-4 space-y-3">
          <div className="bg-white shadow px-4 py-3 rounded text-blue-700 font-semibold">
            Contact Us
          </div>
          <div className="px-4 py-3 text-gray-700 hover:bg-white rounded cursor-pointer">
            Location Map
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3 bg-white rounded-xl shadow p-8 space-y-8">

          <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Main Campus */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Postal Address</h3>
              <p>
                <b>Indus Public School</b><br/>
                Delhi Road, Rohtak - 124001<br/>
                Haryana (India)
              </p>

              <p><b>Phone:</b><br/>+91-99929-00573<br/>+91-99929-00574</p>

              <p><b>Email:</b><br/>info@induspublicschool.com</p>
            </div>

            {/* Nursery Wing */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Postal Address</h3>
              <p>
                <b>Indus Public School (Nursery Wing)</b><br/>
                96-A, Sindhu Bhawan, Subhash Nagar,<br/>
                Rohtak - 124001
              </p>

              <p><b>Phone:</b><br/>9992900573, 9992900574</p>

              <p><b>Website:</b><br/>www.induspublicschool.com</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
