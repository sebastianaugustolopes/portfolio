import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Enviando Mensagem...",
      html: "Por favor, aguarde enquanto enviamos sua mensagem",
      allowOutsideClick: false,
      showConfirmButton: false,
      background:
        "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
      color: "#ffffff",
      backdrop: "rgba(0, 0, 0, 0.8)",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        htmlContainer: "custom-swal-text",
      },
      didOpen: () => {
        Swal.showLoading();
        // Personalizar o loader
        const loader = document.querySelector(".swal2-loader");
        if (loader) {
          loader.style.borderColor = "#6366f1 transparent #6366f1 transparent";
          loader.style.borderWidth = "3px";
        }
      },
    });

    try {
      // Prepare form data for FormSubmit
      const formSubmitUrl =
        "https://formsubmit.co/sebastianaugustolopescamargo@gmail.com";

      // Prepare form data for FormSubmit
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      submitData.append("_subject", "Nova Mensagem do Website Portfolio");
      submitData.append("_captcha", "false"); // Desativar captcha
      submitData.append("_template", "table"); // Email format as table

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "🎉 Sucesso!",
        html: "<p style='font-size: 16px; margin-top: 10px;'>Sua mensagem foi enviada com sucesso!</p><p style='font-size: 14px; color: #94a3b8; margin-top: 8px;'>Retornarei o contato em breve.</p>",
        icon: "success",
        iconColor: "#10b981",
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
        color: "#ffffff",
        backdrop: "rgba(0, 0, 0, 0.8)",
        confirmButtonText: "Perfeito!",
        confirmButtonColor: "linear-gradient(45deg, #6366f1, #a855f7)",
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: "custom-swal-popup success-popup",
          title: "custom-swal-title-success",
          htmlContainer: "custom-swal-text",
          confirmButton: "custom-swal-confirm-btn",
          timerProgressBar: "custom-timer-bar",
        },
        showClass: {
          popup: "animate__animated animate__bounceIn animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOut animate__faster",
        },
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        title: "❌ Oops! Algo deu errado",
        html: "<p style='font-size: 16px; margin-top: 10px;'>Ocorreu um erro ao enviar sua mensagem.</p><p style='font-size: 14px; color: #94a3b8; margin-top: 8px;'>Por favor, tente novamente ou entre em contato via redes sociais.</p>",
        icon: "error",
        iconColor: "#ef4444",
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
        color: "#ffffff",
        backdrop: "rgba(0, 0, 0, 0.8)",
        confirmButtonText: "Tentar Novamente",
        confirmButtonColor: "linear-gradient(45deg, #ef4444, #dc2626)",
        customClass: {
          popup: "custom-swal-popup error-popup",
          title: "custom-swal-title-error",
          htmlContainer: "custom-swal-text",
          confirmButton: "custom-swal-confirm-btn-error",
        },
        showClass: {
          popup: "animate__animated animate__shakeX animate__faster",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .custom-swal-popup {
          border-radius: 20px !important;
          border: 1px solid rgba(99, 102, 241, 0.2) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(99, 102, 241, 0.1),
            0 4px 20px rgba(99, 102, 241, 0.2) !important;
          backdrop-filter: blur(20px) !important;
        }

        .success-popup {
          border: 1px solid rgba(16, 185, 129, 0.3) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(16, 185, 129, 0.2),
            0 4px 20px rgba(16, 185, 129, 0.3) !important;
        }

        .error-popup {
          border: 1px solid rgba(239, 68, 68, 0.3) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(239, 68, 68, 0.2), 0 4px 20px rgba(239, 68, 68, 0.3) !important;
        }

        .custom-swal-title {
          font-size: 24px !important;
          font-weight: 700 !important;
          background: linear-gradient(45deg, #6366f1, #a855f7) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          margin-bottom: 15px !important;
        }

        .custom-swal-title-success {
          font-size: 24px !important;
          font-weight: 700 !important;
          background: linear-gradient(45deg, #10b981, #059669) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          margin-bottom: 15px !important;
        }

        .custom-swal-title-error {
          font-size: 24px !important;
          font-weight: 700 !important;
          background: linear-gradient(45deg, #ef4444, #dc2626) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          margin-bottom: 15px !important;
        }

        .custom-swal-text {
          font-size: 16px !important;
          line-height: 1.5 !important;
          color: #e2e8f0 !important;
        }

        .custom-swal-confirm-btn {
          background: linear-gradient(45deg, #6366f1, #a855f7) !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 12px 24px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3) !important;
        }

        .custom-swal-confirm-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4) !important;
        }

        .custom-swal-confirm-btn-error {
          background: linear-gradient(45deg, #ef4444, #dc2626) !important;
          border: none !important;
          border-radius: 12px !important;
          padding: 12px 24px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3) !important;
        }

        .custom-swal-confirm-btn-error:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4) !important;
        }

        .custom-timer-bar {
          background: linear-gradient(45deg, #6366f1, #a855f7) !important;
          height: 4px !important;
        }

        .swal2-icon.swal2-success {
          border-color: #10b981 !important;
        }

        .swal2-icon.swal2-success .swal2-success-ring {
          border-color: rgba(16, 185, 129, 0.3) !important;
        }

        .swal2-icon.swal2-success .swal2-success-fix {
          background-color: rgba(15, 23, 42, 0.95) !important;
        }

        .swal2-icon.swal2-error {
          border-color: #ef4444 !important;
        }
      `}</style>

      <div className="px-[5%] sm:px-[5%] lg:px-[10%] ">
        <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          >
            <span
              style={{
                color: "#6366f1",
                backgroundImage:
                  "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Entre em contato
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
          >
            Se você gostou do meu trabalho ou tem alguma oportunidade, dúvida ou
            projeto para conversar, fique à vontade para me enviar uma mensagem.
          </p>
        </div>

        <div
          className="h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%]  md:px-0"
          id="Contact"
        >
          <div className="container px-[1%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_55%] 2xl:grid-cols-[35%_65%] gap-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                    E-mail
                  </h2>
                  <p className="text-gray-400">
                    Fique à vontade para entrar em contato comigo via e-mail ou
                    redes sociais.
                  </p>
                </div>
                <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="relative group"
                >
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome e sobrenome"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="relative group"
                >
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 disabled:opacity-50"
                    required
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative group"
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-[#6366f1]/30 h-[9.9rem] disabled:opacity-50"
                    required
                  />
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>

              <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
                <SocialLinks />
              </div>
            </div>

            <div className="  bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-500 hover:shadow-[#6366f1]/10">
              <Komentar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
