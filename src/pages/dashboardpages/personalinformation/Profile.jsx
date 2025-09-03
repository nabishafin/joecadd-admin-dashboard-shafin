import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import flag from "../../../assets/flag.png";
import { Link } from "react-router-dom"; // ✅ Correct routing link

const Profile = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <div className="bg-[#FF6600] hover:bg-[#FF6600] text-white p-4 text-xl font-semibold rounded-md">
        Personal Information
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* Change Password Button */}
        <div className="flex justify-end mb-8">
          <Link to="/dashboard/settings/changepassword">
            <Button className="bg-[#FF6600] hover:bg-[#FF6600] text-white px-6 py-2 rounded-full flex items-center space-x-1 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Change Password</span>
            </Button>
          </Link>
        </div>

        {/* Profile Card and Information Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1  p-6 rounded-lg shadow-md flex flex-col items-center">
            <Avatar className="h-40 w-40 mb-4">
              <AvatarImage
                src="https://images.app.goo.gl/mrJyRYZVPjsik1j19"
                alt="Isabela"
              />
              <AvatarFallback>IS</AvatarFallback>
            </Avatar>
            <p className="text-lg font-medium text-gray-800">Profile</p>
            <p className="text-gray-600">Admin</p>
            <Link to="/dashboard/settings/editpersonal">
              <Button className="bg-[#FF6600] hover:bg-[#FF6600] text-white px-6 py-2 rounded-full flex items-center space-x-2 shadow-md mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.586 3.586l-4 4V17h4l4-4-4-4z" />
                </svg>
                <span>Edit Profile</span>
              </Button>
            </Link>
          </div>

          {/* Information Fields */}
          <div className="md:col-span-2 p-6 space-y-6">
            <div>
              <Label
                htmlFor="name"
                className="text-gray-700 font-medium text-base mb-2 block"
              >
                Name
              </Label>
              <Input
                id="name"
                value="Isabela"
                readOnly
                className="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#FF6600]"
              />
            </div>

            <div>
              <Label
                htmlFor="email"
                className="text-gray-700 font-medium text-base mb-2 block"
              >
                Email
              </Label>
              <Input
                id="email"
                value="Isabela@gmail.com"
                readOnly
                className="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#FF6600]"
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="text-gray-700 font-medium text-base mb-2 block"
              >
                Phone No.
              </Label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center border border-gray-200 bg-gray-50 rounded-md px-3 py-2 text-gray-800">
                  <img
                    src={flag}
                    alt="Bangladesh Flag"
                    className="h-4 w-6 mr-2"
                  />
                  <span>+880</span>
                </div>
                <Input
                  id="phone"
                  value="1234567890"
                  readOnly
                  type="tel"
                  className="bg-gray-50 border border-gray-200 text-gray-800 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#FF6600]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Edit Profile Button - Moved below profile information */}
        <div className="flex justify-center mt-8"></div>
      </div>
    </div>
  );
};

export default Profile;
