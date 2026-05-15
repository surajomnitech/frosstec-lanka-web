'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function MobileFloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-[9999] pb-[env(safe-area-inset-bottom)]">
      <div className="bg-white rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.16)] border border-gray-200/60 p-2 flex items-center gap-2">
        {/* Call Button */}
        <a
          href="tel:0777399999"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3.5 px-4 rounded-full font-bold text-[0.9rem] transition-all duration-200 active:scale-95 touch-manipulation"
        >
          <Phone className="w-4.5 h-4.5" strokeWidth={2.5} />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/94777399999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-4 rounded-full font-bold text-[0.9rem] transition-all duration-200 active:scale-95 touch-manipulation"
        >
          <MessageCircle className="w-4.5 h-4.5" strokeWidth={2.5} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
