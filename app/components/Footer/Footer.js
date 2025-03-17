import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#002243] text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-start md:items-center space-y-4">
                        <img  
                            src="https://aadrivingacademy.net/wp-content/uploads/2021/10/logo-footer-02.png"
                            alt="AADriving Academy Logo"
                            className="w-62 h-auto hover:opacity-80 transition-opacity"
                        />
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-envelope fa-fw text-white text-lg"></i>
                            <Link href="mailto:info@aadrivingacademy.net" className="hover:text-blue-400">
                                info@aadrivingacademy.net
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-phone fa-fw text-white text-lg"></i>
                            <Link href="tel:7034784780" className="hover:text-blue-400">
                                (703) 478-4780
                            </Link>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-phone fa-fw text-white text-lg"></i>
                            <Link href="tel:7034679747" className="block hover:text-blue-400">
                                (703) 467-9747
                            </Link>
                        </div>
                        <div className="flex items-start space-x-2">
                            <i className="fas fa-map-marker-alt fa-fw text-white text-lg mt-1"></i>
                            <address className="not-italic">
                                1043 Sterling Rd #101<br />
                                Herndon, VA 20170
                            </address>
                        </div>
                    </div>

                    {/* Hours Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                        <div className="space-y-2">
                            {[
                                ['Mon', '10:00 am - 7:30 pm'],
                                ['Tues', '3:00 pm - 7:30 pm'],
                                ['Wed', '10:00 am - 7:30 pm'],
                                ['Thurs', '3:00 pm - 7:30 pm'],
                                ['Fri', '10:00 am - 3:00 pm'],
                                ['Sat', '9:00 am - 2:00 pm'],
                                ['Sun', 'Closed'],
                            ].map(([day, hours]) => (
                                <div key={day} className="flex justify-start  ">
                                    <span className="font-medium">{day}:</span>
                                    <span className="text-right">{hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                    <p>
                        © {new Date().getFullYear()} AR Driving Academy, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;