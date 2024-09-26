"use client";

import React, { useState } from "react";
import { Share2, Linkedin, Link } from "lucide-react";
import { SiGitter, SiFacebook } from "react-icons/si";

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
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg"
      >
        <Share2 size={24} />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2">
          <a
            href="https://twitter.com/intent/tweet?url=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-400"
          >
            <SiGitter size={20} />
            <span>Gitter</span>
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
          >
            <SiFacebook size={20} />
            <span>Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://digiload.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-700"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <button
            onClick={copyLink}
            className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
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
