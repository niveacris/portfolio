import React, { useState, useId } from 'react';
import {
  MessageSquare,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Shield,
  Clock,
  AlertCircle,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface ContactProps {
  emailAddress: string;
  whatsappNumber: string;
  onOpenWhatsApp: (message?: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  emailAddress,
  whatsappNumber,
  onOpenWhatsApp
}) => {
  const formId = useId();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'logos-branding',
    timeline: '1-2-meses',
    message: '',
    // Honeypot field for bot protection (should always be empty)
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Quick WhatsApp message trigger with customized text
  const handleDirectWhatsApp = () => {
    onOpenWhatsApp(
      'Olá, Nívea Oliveira! Conheci seu portfólio e gostaria de agendar uma conversa sobre um projeto de design, logotipo e estratégia de marca.'
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  // Sanitize inputs
  const sanitize = (text: string) => {
    return text.replace(/[<>]/g, '').trim();
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Por favor, detalhe sua mensagem (mínimo de 10 caracteres).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Security check 1: Honeypot trap for bots
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    // Security check 2: Rate-limiting / anti-spam cooldown
    if (cooldown) {
      setErrors({
        form: 'Por favor, aguarde alguns instantes antes de enviar uma nova mensagem.'
      });
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 30000);
    }, 1200);
  };

  // Generate mailto fallback link with prefilled values
  const mailtoSubject = encodeURIComponent(
    `[Consulta Nívea Oliveira] ${formData.name || 'Nova Mensagem'} — ${formData.service}`
  );
  const mailtoBody = encodeURIComponent(
    `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone/WhatsApp: ${formData.phone}\nServiço: ${formData.service}\nPrazo estimado: ${formData.timeline}\n\nDetalhes do Projeto / Logos:\n${formData.message}`
  );
  const mailtoUrl = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contato" className="py-20 lg:py-32 relative bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C9A646] font-semibold mb-3">
            Iniciar um Diálogo
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-normal leading-tight">
            Vamos desenhar o próximo capítulo da sua marca?
          </h2>
          <p className="mt-4 text-[#4A4A4A] text-base sm:text-lg font-light">
            Entre em contato para avaliar a criação ou evolução de logotipos, identidade visual completa,
            agendar uma reunião de briefing ou solicitar uma proposta sob medida.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Channels (WhatsApp & Direct Email) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="bg-[#F5F5F5] p-8 rounded-xl border border-[#E8E8E8] hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden group shadow-xs">
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#C9A646] font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Canal Ágil & Direto</span>
              </div>

              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2 font-normal">
                WhatsApp Executivo
              </h3>
              <p className="text-sm text-[#4A4A4A] font-light leading-relaxed mb-6">
                Para alinhamento inicial com Nívea Oliveira, esclarecimento de
                cronogramas, envio de referências ou agendamento de chamada.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/20 active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Iniciar conversa no WhatsApp</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#757575] px-1 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C9A646]" />
                    <span>Resposta em até 2 horas (dias úteis)</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="hover:text-[#1A1A1A] transition-colors underline underline-offset-4 flex items-center gap-1"
                    title="Copiar número de telefone"
                  >
                    {copiedPhone ? 'Copiado!' : 'Copiar número'}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Email & Location Card */}
            <div className="bg-[#FFFFFF] p-8 rounded-xl border border-[#E8E8E8] space-y-6 shadow-xs">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#757575] mb-1">
                  Endereço Oficial de E-mail
                </div>
                <div className="flex items-center justify-between gap-2 mt-2">
                  <span className="font-mono text-sm sm:text-base text-[#1A1A1A] select-all font-medium">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#757575] hover:text-[#C9A646] rounded hover:bg-[#F5F5F5] transition-colors"
                    title="Copiar e-mail"
                    aria-label="Copiar e-mail de Nívea Oliveira"
                  >
                    {copiedEmail ? (
                      <CheckCircle className="w-4 h-4 text-[#C9A646]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between text-xs text-[#757575]">
                <div>
                  <span className="text-[#1A1A1A] font-medium">Localização:</span> São Paulo, SP — Atendimento Global
                </div>
                <div>
                  <span className="text-[#C9A646] font-semibold">Disponibilidade:</span> Ativa
                </div>
              </div>

              {/* Confidentiality & Security guarantee */}
              <div className="pt-4 border-t border-[#F0F0F0] flex items-start gap-2.5 text-xs text-[#757575]">
                <Shield className="w-4 h-4 text-[#C9A646] shrink-0 mt-0.5" />
                <span>
                  Acordo de confidencialidade (NDA) disponível para todas as consultas prévias e projetos em andamento.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Email Contact Form (Campos Minimalistas em Branco/Cinza, Botão em Rosê) */}
          <div className="lg:col-span-7 bg-[#F5F5F5] p-8 sm:p-10 rounded-xl border border-[#E8E8E8] shadow-xs">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E8E8]">
              <div className="text-xs uppercase tracking-wider text-[#C9A646] font-semibold">
                Formulário de Proposta & Contato
              </div>
              <span className="text-[11px] text-[#757575]">Campos seguros protegidos</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#E8C7C8]/40 border border-[#D4AF37] flex items-center justify-center text-[#C9A646] mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">
                  Mensagem Recebida com Sucesso
                </h3>
                <p className="text-sm text-[#4A4A4A] max-w-md mx-auto font-light leading-relaxed">
                  Obrigada pelo interesse, <span className="font-medium text-[#1A1A1A]">{formData.name}</span>.
                  Seu briefing preliminar foi registrado. Entrarei em contato pelo e-mail informado
                  ({formData.email}) nas próximas horas.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#1A1A1A] bg-[#FFFFFF] hover:bg-[#E8C7C8] border border-[#E8E8E8] rounded transition-colors"
                  >
                    <span>Salvar cópia no seu e-mail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'logos-branding',
                        timeline: '1-2-meses',
                        message: '',
                        honeypot: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#757575] hover:text-[#1A1A1A] transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Enviar nova mensagem</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field (hidden from legitimate users, traps bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor={`${formId}-website`}>Website</label>
                  <input
                    id={`${formId}-website`}
                    type="text"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errors.form && (
                  <div className="p-3 rounded bg-red-50 border border-red-300 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor={`${formId}-name`}
                      className="block text-xs uppercase tracking-wider text-[#4A4A4A] mb-2 font-medium"
                    >
                      Nome Completo <span className="text-[#C9A646]">*</span>
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: sanitize(e.target.value) });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Ex: Heloísa Silveira"
                      className="w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#C9A646] focus:ring-1 focus:ring-[#C9A646] focus:outline-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9E9E9E] rounded-md transition-colors shadow-2xs"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-email`}
                      className="block text-xs uppercase tracking-wider text-[#4A4A4A] mb-2 font-medium"
                    >
                      E-mail Profissional <span className="text-[#C9A646]">*</span>
                    </label>
                    <input
                      id={`${formId}-email`}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: sanitize(e.target.value) });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="nome@suaempresa.com"
                      className="w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#C9A646] focus:ring-1 focus:ring-[#C9A646] focus:outline-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9E9E9E] rounded-md transition-colors shadow-2xs"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor={`${formId}-phone`}
                      className="block text-xs uppercase tracking-wider text-[#4A4A4A] mb-2 font-medium"
                    >
                      Telefone / WhatsApp (Opcional)
                    </label>
                    <input
                      id={`${formId}-phone`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: sanitize(e.target.value) })
                      }
                      placeholder="(11) 98765-4321"
                      className="w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#C9A646] focus:ring-1 focus:ring-[#C9A646] focus:outline-none px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9E9E9E] rounded-md transition-colors shadow-2xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`${formId}-service`}
                      className="block text-xs uppercase tracking-wider text-[#4A4A4A] mb-2 font-medium"
                    >
                      Serviço Pretendido
                    </label>
                    <select
                      id={`${formId}-service`}
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#C9A646] focus:ring-1 focus:ring-[#C9A646] focus:outline-none px-4 py-3 text-sm text-[#1A1A1A] rounded-md transition-colors shadow-2xs"
                    >
                      <option value="logos-branding">Criação / Redesign de Logotipo & Monograma</option>
                      <option value="identidade-completa">Identidade Visual Completa & Branding</option>
                      <option value="editorial">Design Editorial & Livro de Mesa</option>
                      <option value="digital">Plataforma Web / UI/UX</option>
                      <option value="packaging">Packaging & Embalagem de Luxo</option>
                      <option value="consultoria">Direção Criativa & Consultoria</option>
                      <option value="outro">Outro Projeto Exclusivo</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor={`${formId}-message`}
                      className="block text-xs uppercase tracking-wider text-[#4A4A4A] font-medium"
                    >
                      Sobre o Projeto ou seus Logos <span className="text-[#C9A646]">*</span>
                    </label>
                    <span className="text-[11px] text-[#757575]">
                      Objetivos, ideias ou prazos desejados
                    </span>
                  </div>
                  <textarea
                    id={`${formId}-message`}
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: sanitize(e.target.value) });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Conte sobre sua marca, se já possui logotipo ou referências visuais que admira..."
                    className="w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#C9A646] focus:ring-1 focus:ring-[#C9A646] focus:outline-none p-4 text-sm text-[#1A1A1A] placeholder-[#9E9E9E] rounded-md transition-colors resize-y min-h-[120px] shadow-2xs"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Form Actions: Botão de envio em Rosê com hover em Dourado */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#E8C7C8] hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white disabled:opacity-50 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#D4AF37]/25 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitindo...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação</span>
                      </>
                    )}
                  </button>

                  <a
                    href={mailtoUrl}
                    className="text-xs text-[#4A4A4A] hover:text-[#C9A646] underline underline-offset-4 transition-colors flex items-center gap-1.5"
                    title="Abrir diretamente no seu software de e-mail"
                  >
                    <span>Ou abrir no seu aplicativo de e-mail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
