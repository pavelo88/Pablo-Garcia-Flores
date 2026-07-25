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
    // =========================================================================
    // AJUSTES DE FOTO (FOTO CIRCULAR PERFECTA Y MARCO DE BORDES)
    // =========================================================================
    const photoSize = 130;               // Ancho y alto de la foto (en puntos)
    const photoX = (sidebarWidth - photoSize) / 2;
    const photoY = 40;

    // Cálculos para el círculo
    const centerX = photoX + photoSize / 2;
    const centerY = photoY + photoSize / 2;
    const radius = photoSize / 2;

    const borderThickness = 3;           // Grosor del marco de color
    const borderColor = [56, 189, 248];  // Color RGB del marco (Cyan: #38bdf8 -> 56, 189, 248)

    // 1. Dibujar la imagen cuadrada original
    doc.addImage(photoDataUrl, 'PNG', photoX, photoY, photoSize, photoSize);

    // 2. Crear una "máscara" circular del mismo color del fondo (azul oscuro) 
    // para tapar las esquinas cuadradas de la foto sin usar doc.clip() que rompe el texto.
    doc.setDrawColor(15, 23, 42); // Color del fondo del sidebar (#0f172a)
    doc.setLineWidth(30);         // Grosor suficiente para tapar las esquinas
    doc.circle(centerX, centerY, radius + 15, 'S');

    // 3. Dibujar marco del borde cyan sobre la foto recortada
    doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    doc.setLineWidth(borderThickness);
    doc.circle(centerX, centerY, radius, 'S');

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
    '• Liderazgo y Gestión de Equipos', // Soft skill añadida
    '• Resolución Estratégica', // Soft skill añadida
    '• Experto en Inteligencia Artificial',
    '• Automatización Legal NCI 400',
    '• Control Patrimonial Estatal',
    '• Constatación Física',
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
  const contentWidth = pageWidth - rightX - 45; // Margen derecho amplio
  const centerX = rightX + (contentWidth / 2); // Centro de la columna derecha
  let rightY = 60; 

  // =========================================================================
  // AJUSTES DE TEXTO Y MÁRGENES DEL NOMBRE PRINCIPAL (CENTRADOS)
  // =========================================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26); 
  doc.setTextColor(15, 23, 42); 
  // Texto centrado usando align: 'center' respecto al centerX
  doc.text('PABLO FABRICIO', centerX, rightY, { align: 'center' });
  
  rightY += 26;
  doc.setFont('helvetica', 'normal'); 
  doc.setFontSize(26);
  doc.setTextColor(51, 65, 85); 
  doc.text('GARCÍA FLORES', centerX, rightY, { align: 'center' });

  rightY += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(2, 132, 199); 
  const subtitleText = 'INGENIERO EN ADMINISTRACIÓN DE EMPRESAS | ESPECIALISTA EN ACTIVOS FIJOS & IA';
  
  // Para centrar un texto que podría romperse, calculamos sus líneas para el salto, pero dejamos que jsPDF lo centre
  const splitSubtitle = doc.splitTextToSize(subtitleText, contentWidth);
  doc.text(subtitleText, centerX, rightY, { align: 'center', maxWidth: contentWidth });

  rightY += splitSubtitle.length * 11 + 6;
  doc.setDrawColor(226, 232, 240); 
  doc.setLineWidth(1);
  doc.line(rightX, rightY, pageWidth - 45, rightY);

  // Executive Summary
  rightY += 30;
  
  // --- Diseño de Bloque de Color Moderno ---
  doc.setFillColor(241, 245, 249); 
  doc.rect(rightX - 5, rightY - 14, contentWidth + 10, 20, 'F');
  doc.setFillColor(2, 132, 199); 
  doc.rect(rightX - 5, rightY - 14, 4, 20, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('PERFIL EJECUTIVO & INNOVACIÓN', rightX + 5, rightY + 1);

  rightY += 18;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const profileText = 'Ingeniero en Administración de Empresas con más de 15 años de trayectoria intachable en la dirección de bienes públicos, constatación física y conciliación contable patrimonial en el sector estatal ecuatoriano (Consejo de la Judicatura y Registro Civil). Experto en la aplicación práctica de Inteligencia Artificial para la interpretación y automatización de la normativa CGE (NCI 400), desarrollo de macros avanzadas e integración de sistemas de código de barras para garantizar transparencia y 0 hallazgos de auditoría.';
  const splitProfile = doc.splitTextToSize(profileText, contentWidth);
  // Texto Justificado
  doc.text(profileText, rightX, rightY, { maxWidth: contentWidth, align: 'justify', lineHeightFactor: 1.45 });

  rightY += splitProfile.length * 14 + 18;

  // Professional Experience Timeline
  // --- Diseño de Bloque de Color Moderno ---
  doc.setFillColor(241, 245, 249); 
  doc.rect(rightX - 5, rightY - 14, contentWidth + 10, 20, 'F');
  doc.setFillColor(2, 132, 199); 
  doc.rect(rightX - 5, rightY - 14, 4, 20, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('TRAYECTORIA INSTITUCIONAL (15+ AÑOS)', rightX + 5, rightY + 1);

  rightY += 20;
  // Role 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  const expTitle1 = 'Analista de Activos Fijos — Consejo de la Judicatura del Ecuador';
  const splitExpTitle1 = doc.splitTextToSize(expTitle1, contentWidth);
  doc.text(splitExpTitle1, rightX, rightY);

  rightY += splitExpTitle1.length * 13;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(2, 132, 199);
  doc.text('Duración: 8 Años | Cumplimiento Normativo NCI 400', rightX, rightY);

  rightY += 14;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const exp1 = '• Dirección técnica nacional de levantamientos físicos y conciliaciones contable-patrimoniales.\n• Inspección in situ en dependencias judiciales a nivel nacional.\n• Logro destacado: Elaboración de informes técnicos de baja, remate y custodia con 0 observaciones CGE.';
  const splitExp1 = doc.splitTextToSize(exp1, contentWidth);
  // Texto alineado a la izquierda (por defecto) para que las viñetas se vean bien
  doc.text(exp1, rightX, rightY, { maxWidth: contentWidth, lineHeightFactor: 1.4 });

  rightY += splitExp1.length * 13 + 16;

  // Role 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  const expTitle2 = 'Encargado del proceso de producción, control de especies valoradas e inventario — Registro Civil del Ecuador';
  const splitExpTitle2 = doc.splitTextToSize(expTitle2, contentWidth);
  doc.text(splitExpTitle2, rightX, rightY);

  rightY += splitExpTitle2.length * 13;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(2, 132, 199);
  doc.text('Duración: 7 Años | Cobertura Patrimonial Nacional', rightX, rightY);

  rightY += 14;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const exp2 = '• Administración operativa de inventarios masivos a nivel nacional y custodia legal de activos fijos.\n• Estandarización de actas de entrega-recepción.\n• Logro destacado: Optimización de recursos mediante catastro completamente digitalizado.';
  const splitExp2 = doc.splitTextToSize(exp2, contentWidth);
  // Texto alineado a la izquierda (por defecto) para que las viñetas se vean bien
  doc.text(exp2, rightX, rightY, { maxWidth: contentWidth, lineHeightFactor: 1.4 });

  rightY += splitExp2.length * 13 + 24;

  // Institutional References Section
  // --- Diseño de Bloque de Color Moderno ---
  doc.setFillColor(241, 245, 249); 
  doc.rect(rightX - 5, rightY - 14, contentWidth + 10, 20, 'F');
  doc.setFillColor(2, 132, 199); 
  doc.rect(rightX - 5, rightY - 14, 4, 20, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('REFERENCIAS INSTITUCIONALES VERIFICADAS', rightX + 5, rightY + 1);

  rightY += 20;

  // Reference 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('• Ing. Audelith Cárdenas', rightX, rightY);

  rightY += 13;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const refDesc1 = 'Jefa Departamental de Activos Fijos — Consejo de la Judicatura del Ecuador';
  const splitRefDesc1 = doc.splitTextToSize(refDesc1, contentWidth - 10);
  // Texto Justificado
  doc.text(refDesc1, rightX + 10, rightY, { maxWidth: contentWidth - 10, align: 'justify' });

  rightY += splitRefDesc1.length * 11 + 7;

  // Reference 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('• Johana Cruz', rightX, rightY);

  rightY += 13;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const refDesc2 = 'Supervisora de Cedulación y Pasaportes — Dirección Provincial del Registro Civil, Identificación y Cedulación';
  const splitRefDesc2 = doc.splitTextToSize(refDesc2, contentWidth - 10);
  // Texto Justificado
  doc.text(refDesc2, rightX + 10, rightY, { maxWidth: contentWidth - 10, align: 'justify' });

  // Footer Tagline
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(148, 163, 184); // Slate 400
  doc.text('Pablo García Flores — Perfil Profesional | pavelo88.github.io', rightX, pageHeight - 20);

  doc.save('CV_Pablo_Garcia_Flores.pdf');
};
