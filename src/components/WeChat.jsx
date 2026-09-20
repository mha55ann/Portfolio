import React from "react";
import { motion } from "framer-motion";
import { FaWeixin } from "react-icons/fa";
import wechatQr from "../images/wechat-qr.png";

function WeChat() {
  return (
    <main className="min-h-screen bg-[#11071f] text-white px-4 pt-32 pb-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/15 text-green-300 mb-6">
          <FaWeixin className="text-4xl" aria-hidden="true" />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">Connect with me</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">My WeChat QR Code</h1>
        <p className="text-white/70 max-w-xl mx-auto mb-10">
          Scan the code below to add me on WeChat. The code is displayed at a comfortable size for both desktop and mobile screens.
        </p>

        <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white p-5 shadow-2xl shadow-purple-950/40">
          <img
            src={wechatQr}
            alt="Muhammad Hassan's WeChat QR code"
            className="w-full aspect-square object-contain rounded-2xl"
          />
        </div>

        <p className="mt-6 text-sm text-white/50">Open WeChat and use Scan QR Code to connect.</p>
      </motion.section>
    </main>
  );
}

export default WeChat;
