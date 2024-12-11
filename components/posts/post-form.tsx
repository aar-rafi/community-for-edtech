import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";

const tabs = [
  { name: "বিষয় ভিত্তিক", icon: "library.svg" },
  { name: "কোর্স সম্পর্কিত", icon: "message-question.svg" },
  { name: "অন্যান্য", icon: "saturn.svg" },
];

interface PostFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostForm = ({ isOpen, onClose }: PostFormProps) => {
  const [selectedTab, setSelectedTab] = useState("বিষয় ভিত্তিক");
  const [curiosityLimit, setCuriosityLimit] = useState(1); // Assume 2/3 for demo
  const [isCuriosityEnabled, setIsCuriosityEnabled] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      if (file.type.startsWith("image")) setImagePreview(url);
      if (file.type.startsWith("video")) setVideoPreview(url);
    }
  };

  const handleCuriosityCheck = () => {
    if (curiosityLimit >= 3) {
      alert("You have crossed your curiosity AI limit!");
    } else {
      setCuriosityLimit((prev) => prev + 1);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <DialogPanel className="bg-gray-100 rounded-lg w-full max-w-2xl p-4 max-h-[80vh] overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={onClose}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="text-gray-500" />
            </button>
            <DialogTitle className="text-lg font-medium flex-1 text-center">
              নতুন পোস্ট
            </DialogTitle>
            <button className="bg-green-600 text-white border-b-4 border-green-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 font-medium px-5 py-2.5 me-2 mb-2">
              পোস্ট
            </button>
          </div>
          {/* Tabs Section */}
          <TabGroup>
            <TabList className="flex space-x-4">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `flex items-center px-4 py-2 rounded-full focus:outline-none border ${
                      selected
                        ? "border-green-600 text-black"
                        : "border-gray-300 text-gray-600"
                    }`
                  }
                  onClick={() => setSelectedTab(tab.name)}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.name}
                    width={24}
                    height={24}
                    className="mr-1"
                  />
                  {tab.name}
                </Tab>
              ))}
            </TabList>
          </TabGroup>

          {/* Form */}
          <form className="mt-6 space-y-4">
            {/* Subject & Chapter */}
            {selectedTab === "বিষয় ভিত্তিক" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">বিষয়</label>
                  <select className="w-full mt-1 border rounded p-2">
                    <option>বাংলা</option>
                    <option>ইংরেজি</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">চ্যাপ্টার</label>
                  <select className="w-full mt-1 border rounded p-2">
                    <option>চ্যাপ্টার ২ - মাছের...</option>
                    <option>চ্যাপ্টার ৩ - পাখির...</option>
                  </select>
                </div>
              </div>
            )}

            {/* Post Content */}
            <div>
              <label className="block text-sm font-medium">পোস্ট লিখ</label>
              <textarea
                rows={4}
                className="w-full mt-1 border rounded-xl p-2 resize-none"
                placeholder="তোমার পোস্ট লিখ"
              ></textarea>
            </div>

            {/* Preview */}
            {imagePreview && (
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={458}
                  height={217}
                  className="w-full h-64 object-cover mt-4"
                />
              </div>
            )}
            {videoPreview && (
              <video
                controls
                className="w-full h-64 mt-4"
                src={videoPreview}
              ></video>
            )}

            {/* File Upload */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4">
                <label className="block text-sm font-medium">
                  Upload Image/Video
                </label>
                <input
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleFileUpload}
                  className="w-full mt-1"
                />
              </div>

              {/* Curiosity Switch */}
              <div className="flex items-center gap-2">
                <span className="ml-2 text-sm">{curiosityLimit}/3 Left</span>
                <Switch
                  checked={isCuriosityEnabled}
                  onChange={setIsCuriosityEnabled}
                  className={`${
                    isCuriosityEnabled
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      : "bg-gray-500"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span className="sr-only">Enable Curiosity AI</span>
                  <span
                    className={`${
                      isCuriosityEnabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <span className="text-sm text-gray-600">Curiosity AI</span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mt-4"
            >
              Post
            </button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostForm;
