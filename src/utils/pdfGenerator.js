import { jsPDF } from 'jspdf';
import { CONTACT_EMAIL, PHONE_NUMBER, WHATSAPP_LINK, WEB_LINK, LINKEDIN_URL } from './constants';

export const handleDownloadCV = async () => {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const sidebarWidth = 230;

  // Background Left Sidebar (Executive Dark Slate)
  doc.setFillColor(15, 23, 42); // #0f172a
  doc.rect(0, 0, sidebarWidth, pageHeight, 'F');

  // Background Main Body (Clean Crisp Slate Light)
  doc.setFillColor(248, 250, 252); // #f8fafc
  doc.rect(sidebarWidth, 0, pageWidth - sidebarWidth, pageHeight, 'F');

  // Load Executive Avatar Image
  const loadImage = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  try {
    const photoDataUrl = await loadImage('/foto.png');
    const photoSize = 130;
    const photoX = (sidebarWidth - photoSize) / 2;
    const photoY = 40;

    // Draw Cyan Outer Ring Frame around Photo
    doc.setDrawColor(56, 189, 248);
    doc.setLineWidth(3);
    doc.circle(photoX + photoSize / 2, photoY + photoSize / 2, photoSize / 2 + 3);

    doc.addImage(photoDataUrl, 'PNG', photoX, photoY, photoSize, photoSize);
    doc.link(photoX, photoY, photoSize, photoSize, { url: WEB_LINK });
  } catch (err) {
    console.warn('No se pudo cargar la imagen de perfil para el PDF:', err);
  }

  // --- LEFT SIDEBAR CONTENT ---
  let leftY = 200;

  // Contact Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(56, 189, 248); // Cyan accent
  doc.text('CONTACTO DIRECTO', 25, leftY);

  doc.setDrawColor(56, 189, 248);
  doc.setLineWidth(1);
  doc.line(25, leftY + 6, sidebarWidth - 25, leftY + 6);

  leftY += 24;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(226, 232, 240);
  doc.text(`Ubicación: Quito, Ecuador`, 25, leftY);
  leftY += 16;
  doc.text(`Celular / WA: ${PHONE_NUMBER}`, 25, leftY);
  doc.link(25, leftY - 10, 160, 14, { url: WHATSAPP_LINK });
  leftY += 16;
  doc.text(`Email: ${CONTACT_EMAIL}`, 25, leftY);
  leftY += 16;
  doc.text(`LinkedIn: perfil-profesional`, 25, leftY);
  doc.link(25, leftY - 10, 160, 14, { url: LINKEDIN_URL });
  leftY += 16;
  doc.text(`Portafolio: pavelo88.github.io`, 25, leftY);
  doc.link(25, leftY - 10, 160, 14, { url: WEB_LINK });

  // Expertise & AI Skill Badges
  leftY += 35;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(56, 189, 248);
  doc.text('ESPECIALIDADES & IA', 25, leftY);
  doc.line(25, leftY + 6, sidebarWidth - 25, leftY + 6);

  leftY += 24;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  
  const skills = [
    '• Experto en Inteligencia Artificial',
    '• Automatización Legal NCI 400',
    '• Control Patrimonial Estatal',
    '• Constatación Física al 100%',
    '• Conciliación Contable SAP/ERP',
    '• Sistemas Códigos de Barra/RFID',
    '• Informes de Auditoría CGE'
  ];

  skills.forEach(skill => {
    doc.text(skill, 25, leftY);
    leftY += 17;
  });

  // Languages
  leftY += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(56, 189, 248);
  doc.text('IDIOMAS & FORMACIÓN', 25, leftY);
  doc.line(25, leftY + 6, sidebarWidth - 25, leftY + 6);

  leftY += 24;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(226, 232, 240);
  doc.text('• Ing. Administración de Empresas', 25, leftY);
  leftY += 16;
  doc.text('• Español (Nativo)', 25, leftY);
  leftY += 16;
  doc.text('• Inglés (Intermedio Técnico)', 25, leftY);


  // --- RIGHT MAIN COLUMN CONTENT ---
  const rightX = sidebarWidth + 35;
  const contentWidth = pageWidth - rightX - 35;
  let rightY = 55;

  // Title / Name Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(15, 23, 42); // Dark slate
  doc.text('PABLO FABRICIO GARCÍA FLORES', rightX, rightY);

  rightY += 20;
  doc.setFontSize(12);
  doc.setTextColor(2, 132, 199); // Sky blue
  doc.text('INGENIERO EN ADMINISTRACIÓN | ESPECIALISTA EN ACTIVOS FIJOS & IA', rightX, rightY);

  rightY += 15;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1);
  doc.line(rightX, rightY, pageWidth - 35, rightY);

  // Executive Summary
  rightY += 28;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('PERFIL EJECUTIVO & INNOVACIÓN', rightX, rightY);

  rightY += 16;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const profileText = 'Ingeniero en Administración de Empresas con más de 15 años de trayectoria intachable en la dirección de bienes públicos, constatación física y conciliación contable patrimonial en el sector estatal ecuatoriano (Consejo de la Judicatura y Registro Civil). Experto en la aplicación práctica de Inteligencia Artificial para la interpretación y automatización de la normativa CGE (NCI 400), desarrollo de macros avanzadas e integración de sistemas de código de barras para garantizar transparencia y 0 hallazgos de auditoría.';
  const splitProfile = doc.splitTextToSize(profileText, contentWidth);
  doc.text(splitProfile, rightX, rightY, { lineHeightFactor: 1.45 });

  rightY += splitProfile.length * 14 + 18;

  // Professional Experience Timeline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('TRAYECTORIA INSTITUCIONAL (15+ AÑOS)', rightX, rightY);

  rightY += 18;
  // Role 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Analista de Activos Fijos — Consejo de la Judicatura del Ecuador', rightX, rightY);
  
  rightY += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(2, 132, 199);
  doc.text('Duración: 8 Años | Cumplimiento Normativo NCI 400', rightX, rightY);

  rightY += 14;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const exp1 = 'Dirección técnica nacional de levantamientos físicos, conciliaciones contable-patrimoniales e inspección in situ en dependencias judiciales. Elaboración de informes técnicos de baja, remate y custodia con 0 observaciones CGE.';
  const splitExp1 = doc.splitTextToSize(exp1, contentWidth);
  doc.text(splitExp1, rightX, rightY, { lineHeightFactor: 1.4 });

  rightY += splitExp1.length * 13 + 16;

  // Role 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Especialista de Gestión de Bienes — Registro Civil del Ecuador', rightX, rightY);

  rightY += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(2, 132, 199);
  doc.text('Duración: 7 Años | Cobertura Patrimonial Nacional', rightX, rightY);

  rightY += 14;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const exp2 = 'Administración operativa de inventarios masivos a nivel nacional, custodia legal de activos fijos, estandarización de actas de entrega-recepción y optimización de recursos mediante catastro digitalizado.';
  const splitExp2 = doc.splitTextToSize(exp2, contentWidth);
  doc.text(splitExp2, rightX, rightY, { lineHeightFactor: 1.4 });

  rightY += splitExp2.length * 13 + 22;

  // Institutional References Section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('REFERENCIAS INSTITUCIONALES VERIFICADAS', rightX, rightY);

  rightY += 18;

  // Reference 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('• Ing. Audelith Cárdenas', rightX, rightY);
  
  rightY += 13;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Jefa Departamental de Activos Fijos — Consejo de la Judicatura del Ecuador', rightX + 10, rightY);

  rightY += 18;

  // Reference 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('• Johana Cruz', rightX, rightY);

  rightY += 13;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Supervisora de Cedulación y Pasaportes — Dirección Provincial del Registro Civil', rightX + 10, rightY);

  // Footer Tagline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Hoja de Vida Oficial — Generada desde pavelo88.github.io', rightX, pageHeight - 30);

  doc.save('CV_Pablo_Garcia_Flores.pdf');
};
