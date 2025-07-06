"use client";

import { memo } from "react";
import { User, GraduationCap, Check } from "lucide-react";
import { motion } from "framer-motion";
import FloatingTechIcons from "./FloatingTechIcons";

const ProfileCard = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-[380px] sm:max-w-[400px] md:max-w-[420px] lg:max-w-[380px] xl:max-w-[400px] mx-auto hidden lg:block invisible lg:visible"
    >
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative group overflow-visible"
      >
        {/* Floating Tech Icons */}
        <FloatingTechIcons />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#875DF4] to-[#6366f1] rounded-3xl sm:rounded-4xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>

        {/* Main card */}
        <div className="relative bg-[#000000] backdrop-blur-xl rounded-3xl sm:rounded-4xl border border-white/10 group-hover:border-white/15 transition-all duration-300 overflow-hidden h-[460px] sm:h-[480px] md:h-[500px] lg:h-[480px]">
          {/* Profile Image - Normal State */}
          <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px] lg:h-[260px] overflow-hidden rounded-t-3xl sm:rounded-t-4xl group-hover:h-full group-hover:rounded-3xl sm:group-hover:rounded-4xl transition-all duration-500">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <img
                src="/profile_card_image.jpg"
                alt="Sebastian Augusto"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </motion.div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500"></div>
          </div>

          {/* Card Content - Normal State */}
          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-7 py-4 sm:py-5 group-hover:inset-0 group-hover:flex group-hover:flex-col group-hover:justify-end group-hover:bg-transparent transition-all duration-500">
            {/* Content Container with Background on Hover */}
            <div className="group-hover:bg-black/85 group-hover:backdrop-blur-sm group-hover:rounded-2xl sm:group-hover:rounded-3xl group-hover:p-5 sm:group-hover:p-6 group-hover:mx-3 sm:group-hover:mx-4 group-hover:mb-4 sm:group-hover:mb-5 transition-all duration-500">
              {/* Name and Verification */}
              <div className="flex items-center gap-3 mb-3 mt-12 sm:mt-14 group-hover:mt-0 transition-all duration-300">
                <h3 className="text-white font-semibold text-xl sm:text-[22px] md:text-2xl lg:text-[22px] leading-tight">
                  Sebastian Augusto
                </h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-2"
                >
                  <div className="flex items-center justify-center w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] bg-[#875DF4] rounded-full">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white stroke-[2.5]" />
                  </div>
                </motion.div>
              </div>

              {/* Tagline */}
              <p className="text-gray-400 text-sm sm:text-[15px] md:text-base lg:text-[15px] leading-[1.4] mb-5 sm:mb-6 font-normal group-hover:text-gray-300 transition-colors duration-300">
                Transformando ideias em interfaces elegantes e modernas.
              </p>

              {/* Bottom Section - Layout único sem duplicação */}
              <div className="group-hover:space-y-5">
                {/* Layout Normal - Horizontal para desktop, vertical para mobile */}
                <div className="group-hover:hidden">
                  {/* Mobile/Tablet Layout - Vertical */}
                  <div className="flex flex-col space-y-4 lg:hidden">
                    <div className="flex items-center justify-center gap-5 sm:gap-7">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 sm:w-[16px] sm:h-[16px] text-gray-500" />
                        <span className="text-gray-300 text-sm sm:text-[15px] font-medium whitespace-nowrap">
                          19 anos
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 sm:w-[16px] sm:h-[16px] text-gray-500" />
                        <span className="text-gray-300 text-sm sm:text-[15px] font-medium whitespace-nowrap">
                          EBAC
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <motion.a
                        href="https://github.com/sebastianaugustolopes" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button className="group/btn relative">
                          <div className="absolute -inset-0.5 bg-[#875DF4] rounded-full opacity-40 blur-sm group-hover/btn:opacity-60 transition duration-300"></div>
                          <div className="relative bg-[#875DF4] hover:bg-[#7c54e8] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-300 whitespace-nowrap">
                            Seguir +
                          </div>
                        </button>
                      </motion.a>
                    </div>
                  </div>

                  {/* Desktop Layout - Horizontal */} 
                  <div className="hidden lg:flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <User className="w-[16px] h-[16px] text-gray-500" />
                        <span className="text-gray-300 text-[15px] font-medium">
                          19 anos
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-[16px] h-[16px] text-gray-500" />
                        <span className="text-gray-300 text-[15px] font-medium">
                          EBAC
                        </span>
                      </div>
                    </div>
                    <motion.a
                      href="https://github.com/sebastianaugustolopes"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button className="group/btn relative">
                        <div className="absolute -inset-0.5 bg-[#875DF4] rounded-full opacity-40 blur-sm group-hover/btn:opacity-60 transition duration-300"></div>
                        <div className="relative bg-[#875DF4] hover:bg-[#7c54e8] text-white px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 whitespace-nowrap">
                          Seguir +
                        </div>
                      </button>
                    </motion.a>
                  </div>
                </div>

                {/* Layout Hover - Sempre vertical e centralizado */}
                <div className="hidden group-hover:block space-y-5">
                  <div className="flex items-center justify-center gap-5 sm:gap-7">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 sm:w-[16px] sm:h-[16px] text-gray-400 transition-colors duration-300" />
                      <span className="text-white text-sm sm:text-[15px] font-medium transition-colors duration-300 whitespace-nowrap">
                        19 anos
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 sm:w-[16px] sm:h-[16px] text-gray-400 transition-colors duration-300" />
                      <span className="text-white text-sm sm:text-[15px] font-medium transition-colors duration-300 whitespace-nowrap">
                        EBAC
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <motion.a
                      href="https://github.com/sebastianaugustolopes"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button className="group/btn relative">
                        <div className="absolute -inset-0.5 bg-[#875DF4] rounded-full opacity-40 blur-sm group-hover/btn:opacity-60 transition duration-300"></div>
                        <div className="relative bg-[#875DF4] hover:bg-[#7c54e8] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-[15px] md:text-base font-medium transition-all duration-300 whitespace-nowrap">
                          Seguir +
                        </div>
                      </button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProfileCard.displayName = "ProfileCard";

export default ProfileCard;
