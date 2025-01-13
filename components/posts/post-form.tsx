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
import { X, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Post {
  content: string;
  timestamp: string;
  likes_count: number;
  comment_count: number;
  comments: any[];
  shares: number;
  reactions: any[];
  poll?: {
    question: string;
    options: { id: string; text: string; votes: number }[];
    totalVotes: number;
  };
  image?: string;
}

const tabs = [
  { name: "বিষয় ভিত্তিক", icon: "/library.svg" },
  { name: "কোর্স সম্পর্কিত", icon: "/message-question.svg" },
  { name: "অন্যান্য", icon: "/saturn.svg" },
];

interface PostFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (post: Partial<Post>) => void;
}

const PostForm = ({ isOpen, onClose, onSubmit }: PostFormProps) => {
  const [selectedTab, setSelectedTab] = useState("বিষয় ভিত্তিক");
  const [curiosityLimit, setCuriosityLimit] = useState(1);
  const [isCuriosityEnabled, setIsCuriosityEnabled] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [isPollEnabled, setIsPollEnabled] = useState(false);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState<
    { id: string; text: string }[]
  >([
    { id: uuidv4(), text: "" },
    { id: uuidv4(), text: "" },
  ]);
  const [content, setContent] = useState("");

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

  const addPollOption = () => {
    if (pollOptions.length < 4) {
      setPollOptions([...pollOptions, { id: uuidv4(), text: "" }]);
    }
  };

  const removePollOption = (id: string) => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.filter((option) => option.id !== id));
    }
  };

  const updatePollOption = (id: string, text: string) => {
    setPollOptions(
      pollOptions.map((option) =>
        option.id === id ? { ...option, text } : option
      )
    );
  };

  const handleSubmit = () => {
    const post: Partial<Post> = {
      content,
      timestamp: "Just now",
      likes_count: 0,
      comment_count: 0,
      comments: [],
      shares: 0,
      reactions: [],
    };

    if (isPollEnabled && pollQuestion && pollOptions.every((opt) => opt.text)) {
      post.poll = {
        question: pollQuestion,
        options: pollOptions.map((opt) => ({ ...opt, votes: 0 })),
        totalVotes: 0,
      };
    }

    if (imagePreview) {
      post.image = imagePreview;
    }

    onSubmit?.(post);
    onClose();

    // Reset form
    setContent("");
    setPollQuestion("");
    setPollOptions([
      { id: uuidv4(), text: "" },
      { id: uuidv4(), text: "" },
    ]);
    setIsPollEnabled(false);
    setImagePreview(null);
    setVideoPreview(null);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-gray-100 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between border-b p-4">
            <button
              onClick={onClose}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="text-gray-500" />
            </button>
            <DialogTitle className="text-xl font-medium">
              নতুন পোস্ট
            </DialogTitle>
            <button className="bg-green-600 text-white border-b-4 border-green-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 font-medium px-5 py-2.5 me-2 mb-2">
              পোস্ট
            </button>
          </div>
          {/* Tabs Section */}
          <div className="p-4">
            <TabGroup>
              <TabList className="flex space-x-4">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      `flex items-center space-x-2 border rounded-full px-4 py-2 outline-none ${
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
                      width={20}
                      height={20}
                    />
                    <span>{tab.name}</span>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>

            <div className="mt-4">
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
                    <label className="block text-sm font-medium">
                      চ্যাপ্টার
                    </label>
                    <select className="w-full mt-1 border rounded p-2">
                      <option>চ্যাপ্টার ২ - মাছের...</option>
                      <option>চ্যাপ্টার ৩ - পাখির...</option>
                    </select>
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium">পোস্ট লিখ</label>
                <textarea
                  className="w-full rounded-lg border p-2 resize-none"
                  rows={3}
                  placeholder="আপনার প্রশ্ন লিখুন..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span>পোল তৈরি করুন</span>
                <Switch
                  checked={isPollEnabled}
                  onChange={setIsPollEnabled}
                  className={`${
                    isPollEnabled ? "bg-primary" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      isPollEnabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>

              {isPollEnabled && (
                <div className="space-y-4 rounded-lg border p-4">
                  <input
                    type="text"
                    placeholder="পোলের প্রশ্ন"
                    className="w-full rounded-lg border p-2"
                    value={pollQuestion}
                    onChange={(e) => setPollQuestion(e.target.value)}
                  />
                  <div className="space-y-2">
                    {pollOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="text"
                          placeholder="অপশন লিখুন"
                          className="flex-1 rounded-lg border p-2"
                          value={option.text}
                          onChange={(e) =>
                            updatePollOption(option.id, e.target.value)
                          }
                        />
                        {pollOptions.length > 2 && (
                          <button
                            onClick={() => removePollOption(option.id)}
                            className="text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    ))}
                    {pollOptions.length < 4 && (
                      <button
                        onClick={addPollOption}
                        className="flex items-center space-x-1 text-primary"
                      >
                        <Plus className="h-5 w-5" />
                        <span>অপশন যোগ করুন</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <label className="flex cursor-pointer items-center space-x-2">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <Image
                      src="/image-01.svg"
                      alt="Add media"
                      width={24}
                      height={24}
                    />
                  </label>
                  <Image
                    src="/video-02.svg"
                    alt="Record"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <Image
                    src="/Poll.svg"
                    alt="Stats"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    {curiosityLimit}/3 Left
                  </span>
                  <Switch
                    checked={isCuriosityEnabled}
                    onChange={(checked) => {
                      setIsCuriosityEnabled(checked);
                      if (checked) handleCuriosityCheck();
                    }}
                    className={`${
                      isCuriosityEnabled ? "bg-primary" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        isCuriosityEnabled ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <span>Curiosity AI</span>
                </div>
              </div>

              {(imagePreview || videoPreview) && (
                <div className="relative mt-4 h-48 w-full overflow-hidden rounded-lg">
                  {imagePreview && (
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                  {videoPreview && (
                    <video
                      src={videoPreview}
                      className="h-full w-full"
                      controls
                    />
                  )}
                  <button
                    onClick={() => {
                      setImagePreview(null);
                      setVideoPreview(null);
                    }}
                    className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end border-t p-4">
            <button
              className="rounded-lg bg-primary px-4 py-2 text-white"
              onClick={handleSubmit}
              disabled={
                !content &&
                (!isPollEnabled ||
                  !pollQuestion ||
                  !pollOptions.every((opt) => opt.text))
              }
            >
              পোস্ট করুন
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default PostForm;
