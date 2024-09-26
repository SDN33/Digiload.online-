"use client";

import React, { useState } from "react";
import { Share2, Linkedin, Link } from "lucide-react";
import { SiX, SiFacebook } from "react-icons/si";

const ShareComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShare = () => setIsOpen(!isOpen);

  const copyLink = () => {
    navigator.clipboard.writeText("https://digiload.online");
    alert("Lien copié !");
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={toggleShare}
        className="bg-[#00c4cc] hover:bg-[#007377] text-white rounded-full p-3 shadow-lg"
      >
        <Share2 size={24} />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2 bg-black rounded-lg p-2 shadow-lg">
          <a
            href="https://twitter.com/intent/tweet?url=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-[#007377]"
          >
            <SiX size={20} />
            <span>X</span>
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-[#007377]"
          >
            <SiFacebook size={20} />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-[#007377]"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={copyLink}
            className="flex items-center space-x-2 text-white hover:text-purple-300"
          >
            <Link size={20} />
            <span>Copier le lien</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareComponent;
