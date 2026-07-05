import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";

import logo from "../assests/img/logo.png";
import appstoreiOSImage from "../assests/img/appstoreiOS.png";
import appstoreAndroidImage from "../assests/img/appstoreAndroid.png";

const Footer = () => {
  return (
    <footer className="hidden sm:block bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Starbucks Logo"
              className="w-16 hover:scale-105 transition duration-300"
            />
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              About Us
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="" className="hover:text-green-400 transition">
                Our Heritage
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Our Company
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Coffeehouse
              </Link>
            </div>
          </div>

          {/* Responsibility */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Responsibility
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="" className="hover:text-green-400 transition">
                Community
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Ethical Sourcing
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Environment
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Diversity
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link to="" className="hover:text-green-400 transition">
                Delivery
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Seasonal Gifting
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Careers
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                Customer Service
              </Link>

              <Link to="" className="hover:text-green-400 transition">
                FAQs
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://www.instagram.com/starbucksindia/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 hover:scale-125 transition"
              >
                <BsInstagram />
              </a>

              <a
                href="https://www.facebook.com/starbucksindia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 hover:scale-125 transition"
              >
                <CgFacebook />
              </a>

              <a
                href="https://twitter.com/starbucksindia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-400 hover:scale-125 transition"
              >
                <BsTwitter />
              </a>
            </div>
          </div>

          {/* Store Buttons */}
          <div className="flex flex-col gap-4">
            <a
              href="https://apps.apple.com/in/app/starbucks-india/id1210203958"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={appstoreiOSImage}
                alt="Download on App Store"
                className="hover:scale-105 transition duration-300"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.starbucks.in"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={appstoreAndroidImage}
                alt="Get it on Google Play"
                className="hover:scale-105 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="" className="hover:text-green-400 transition">
              Web Accessibility
            </Link>

            <Link to="" className="hover:text-green-400 transition">
              Privacy Statement
            </Link>

            <Link to="" className="hover:text-green-400 transition">
              Terms of Use
            </Link>

            <Link to="" className="hover:text-green-400 transition">
              Contact Us
            </Link>
          </div>

          <p className="text-xs text-gray-500 text-center">
            © 2026 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;