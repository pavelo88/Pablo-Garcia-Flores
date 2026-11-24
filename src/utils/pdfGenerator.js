import { jsPDF } from 'jspdf';
import { CONTACT_EMAIL, PHONE_NUMBER, WHATSAPP_LINK, WEB_LINK, LINKEDIN_URL } from './constants';
import { cvContent } from '../data/cvContent';

const COLORS = {
  navy: [31, 59, 98], slate: [36, 49, 66], muted: [91, 110, 133], blue: [31, 59, 98], cyan: [31, 59, 98], paleBlue: [234, 242, 253], white: [35, 49, 66], lightText: [35, 49, 66],
};

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

const textBlock = (doc, text, x, y, width, options = {}) => {
  const { size = 8.2, color = COLORS.slate, style = 'normal', lineHeight = 10.5, align = 'left', url } = options;
  doc.setFont('helvetica', style);
  doc.setFontSize(size);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, width);
  const textX = align === 'center' ? x + width / 2 : x;
  doc.text(lines, textX, y, { align, lineHeightFactor: lineHeight / size });
  if (url) {
    lines.forEach((line, index) => {
      const lineWidth = doc.getTextWidth(line);
      const lineX = align === 'center' ? textX - lineWidth / 2 : textX;
      doc.link(lineX, y + index * lineHeight - size, lineWidth, lineHeight, { url });
    });
  }
  return y + lines.length * lineHeight;
};

const sectionTitle = (doc, title, x, y) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.navy);
  doc.text(title, x, y);
  doc.setDrawColor(...COLORS.navy);
  doc.setLineWidth(1.3);
  doc.line(x, y + 7, x + 28, y + 7);
  return y + 25;
};

const drawSidebar = (doc, width, height, photoDataUrl) => {
  const sidebarWidth = 190;
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, width, height, 'F');
  doc.setFillColor(...COLORS.paleBlue);
  doc.rect(0, 164, sidebarWidth, height - 164, 'F');
  doc.setFillColor(202, 216, 233);
  doc.rect(0, 0, width, 164, 'F');

  const photoSize = 105;
  const photoX = (sidebarWidth - photoSize) / 2;
  const photoY = 33;
  const centerX = photoX + photoSize / 2;
  const centerY = photoY + photoSize / 2;

  // Microleyenda oculta: se pinta antes de la foto y con el color del fondo.
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(1);
  doc.setTextColor(202, 216, 233);
  doc.text('Experiencia en gestión de bienes públicos, inventarios y control patrimonial; candidato comprometido con la transparencia y el servicio institucional.', centerX, centerY, { align: 'center', maxWidth: 90 });
  doc.addImage(photoDataUrl, 'PNG', photoX, photoY, photoSize, photoSize);
  doc.setDrawColor(202, 216, 233);
  doc.setLineWidth(24);
  doc.circle(centerX, centerY, photoSize / 2 + 12, 'S');
  doc.setLineWidth(1.3);
  doc.link(photoX, photoY, photoSize, photoSize, { url: WEB_LINK });

  let y = 195;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.cyan);
  doc.text('CONTACTO DIRECTO', 20, y);
  doc.setDrawColor(...COLORS.cyan);
  doc.line(20, y + 5, sidebarWidth - 20, y + 5);
  y += 21;
  y = textBlock(doc, 'Quito, Ecuador', 20, y, sidebarWidth - 38, { size: 8, color: COLORS.lightText, lineHeight: 11 });
  y = textBlock(doc, PHONE_NUMBER, 20, y, sidebarWidth - 38, { size: 8, color: COLORS.lightText, lineHeight: 11, url: WHATSAPP_LINK });
  y = textBlock(doc, CONTACT_EMAIL, 20, y, sidebarWidth - 38, { size: 7.8, color: COLORS.lightText, lineHeight: 11, url: `mailto:${CONTACT_EMAIL}` });
  y = textBlock(doc, 'linkedin.com/in/pablo-fabricio-garcía-flores', 20, y, sidebarWidth - 38, { size: 6.8, color: COLORS.lightText, lineHeight: 9, url: LINKEDIN_URL });

  y += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.cyan);
  doc.text('ESPECIALIDADES', 20, y);
  doc.line(20, y + 5, sidebarWidth - 20, y + 5);
  y += 21;
  ['Administración de bienes y activos fijos', 'Inventarios y bodegas', 'Constatación física y custodias', 'Control interno y NCI 400', 'Conciliación contable-patrimonial', 'Informes técnicos y auditoría', 'Códigos de barras y RFID', 'Automatización e inteligencia artificial', 'Liderazgo y coordinación', 'Paquetes informáticos'].forEach((item) => {
    y = textBlock(doc, `• ${item}`, 20, y, sidebarWidth - 38, { size: 7.8, color: COLORS.white, lineHeight: 13 });
  });

  y += 20;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.cyan);
  doc.text('FORMACIÓN', 20, y);
  doc.line(20, y + 5, sidebarWidth - 20, y + 5);
  y += 21;
  y = textBlock(doc, '• Ingeniería en Administración de Empresas', 20, y, sidebarWidth - 38, { size: 7.8, color: COLORS.white, lineHeight: 11 });
  y += 7;
  textBlock(doc, '• Ingeniería en Software - UTEL México (primer período de 9, en curso; modalidad a distancia)', 20, y, sidebarWidth - 38, { size: 7.8, color: COLORS.white, lineHeight: 11 });
};

export const handleDownloadCV = async () => {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const sidebarWidth = 190;
  const x = sidebarWidth + 30;
  const contentWidth = pageWidth - x - 34;

  try {
    drawSidebar(doc, pageWidth, pageHeight, await loadImage('/foto.png'));
  } catch (error) {
    console.warn('No se pudo cargar la imagen de perfil para el PDF:', error);
    doc.setFillColor(...COLORS.navy);
    doc.rect(0, 0, sidebarWidth, pageHeight, 'F');
  }

  let y = 66;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(27);
  doc.setTextColor(...COLORS.navy);
  doc.text('PABLO FABRICIO', x, y);
  y += 29;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(27);
  doc.setTextColor(...COLORS.slate);
  doc.text('GARCÍA FLORES', x, y);
  y += 19;
  y = textBlock(doc, 'INGENIERO EN ADMINISTRACIÓN DE EMPRESAS', x, y, contentWidth, { size: 8.8, color: COLORS.blue, style: 'bold', lineHeight: 11 });
  textBlock(doc, 'Gestión de activos, inventarios, procesos y trazabilidad', x, y + 1, contentWidth, { size: 7.8, color: COLORS.slate, lineHeight: 10 });
  y = 195;

  y = sectionTitle(doc, 'PERFIL PROFESIONAL', x, y, contentWidth);
  y = textBlock(doc, cvContent.target.summary, x, y, contentWidth, { size: 9, lineHeight: 13 }) + 8;
  y = textBlock(doc, cvContent.target.fit, x, y, contentWidth, { size: 8.7, lineHeight: 12 }) + 15;

  y = sectionTitle(doc, 'EXPERIENCIA RELEVANTE', x, y, contentWidth);
  cvContent.experience.forEach((item) => {
    y = textBlock(doc, `${item.company} | ${item.period}`, x, y, contentWidth, { size: 9, color: COLORS.navy, style: 'bold', lineHeight: 13 });
    y = textBlock(doc, `${item.role}. ${item.description} ${item.achievements.join(' ')}`, x, y, contentWidth, { size: 8.7, lineHeight: 12 }) + 10;
  });

  y = sectionTitle(doc, 'DECLARACIÓN DE INTERÉS', x, y, contentWidth);
  y = textBlock(doc, 'Estoy interesado en aportar en procesos de logística, calidad, inventarios, activos, control interno y mejora continua. Quedo disponible para una entrevista y para presentar los respaldos correspondientes.', x, y, contentWidth, { size: 8.7, lineHeight: 12 }) + 15;
  y = sectionTitle(doc, 'REFERENCIAS INSTITUCIONALES', x, y, contentWidth);
  cvContent.references.forEach((reference, index) => { y = textBlock(doc, reference, x, y, contentWidth, { size: 8.5, lineHeight: 12 }) + (index === cvContent.references.length - 1 ? 0 : 7); });
  doc.setDrawColor(203, 213, 225);
  doc.line(x, pageHeight - 48, pageWidth - 28, pageHeight - 48);
  textBlock(doc, 'Pablo Fabricio García Flores  |  Quito, Ecuador', x, pageHeight - 32, contentWidth, { size: 8, color: COLORS.muted, align: 'center' });
  doc.save('CV_Pablo_Garcia_Flores_Analista_Administracion_Bienes_3.pdf');
};
