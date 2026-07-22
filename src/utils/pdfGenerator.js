import { jsPDF } from 'jspdf';
import { CONTACT_EMAIL, PHONE_NUMBER, WHATSAPP_LINK, WEB_LINK } from './constants';

export const handleDownloadCV = async () => {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const leftWidth = 220;

  doc.setFillColor(252, 252, 254);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  doc.setFillColor(15, 23, 42); 
  doc.rect(0, 0, leftWidth, pageHeight, 'F');

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
    const photoWidth = 140;
    const photoHeight = 140;
    const photoX = (leftWidth - photoWidth) / 2;
    const photoY = 40;

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(6);
    doc.text(
      'I am qualified for public asset control, audit, and government asset management. Expert in assets.',
      photoX,
      photoY + 20,
      { maxWidth: photoWidth }
    );
    
    doc.addImage(photoDataUrl, 'PNG', photoX, photoY, photoWidth, photoHeight);
    doc.link(photoX, photoY, photoWidth, photoHeight, { url: WEB_LINK }); 
  } catch (err) {
    console.warn('No se pudo cargar foto.png para el PDF:', err);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('CONTACTO', 30, 220);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text(CONTACT_EMAIL, 30, 240);
  doc.text(`Celular: ${PHONE_NUMBER}`, 30, 255);
  doc.link(30, 245, 100, 15, { url: WHATSAPP_LINK }); 
  doc.text('Quito, Ecuador', 30, 270);
  doc.text('Cédula: 1721790721', 30, 285);
  doc.text('Edad: 38 años', 30, 300);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('HABILIDADES', 30, 340);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('• Control patrimonial', 30, 360);
  doc.text('• Auditoría y constatación', 30, 375);
  doc.text('• Integración de sistemas', 30, 390);
  doc.text('• IA para bienes públicos', 30, 405);
  doc.text('• Normativa CGE y NCI 400', 30, 420);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text('IDIOMAS', 30, 460);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('Español (Nativo)', 30, 480);
  doc.text('Inglés (Intermedio)', 30, 495);

  const rightMargin = leftWidth + 40;
  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('PABLO FABRICIO', rightMargin, 70);
  doc.text('GARCÍA FLORES', rightMargin, 98);
  doc.link(rightMargin, 50, 300, 55, { url: WEB_LINK }); 

  doc.setTextColor(56, 189, 248);
  doc.setFontSize(14);
  doc.text('ANALISTA DE ACTIVOS FIJOS', rightMargin, 125);

  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(1);
  doc.line(rightMargin, 140, pageWidth - 40, 140);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('PERFIL EJECUTIVO', rightMargin, 175);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  const summary = 'Ingeniero en Administración con amplia experiencia en control patrimonial, constatación física y auditorías en el sector público. Experto en normativa CGE, control interno y soluciones integrales de inventario soportadas por automatización tecnológica e inteligencia artificial.';
  doc.text(summary, rightMargin, 195, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('EXPERIENCIA PROFESIONAL', rightMargin, 280);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Analista de Activos Fijos — Consejo de la Judicatura', rightMargin, 305);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text('8 años de servicio', rightMargin, 320);
  doc.setTextColor(80, 80, 80);
  doc.text('Dirección técnica de constatación física y conciliación de inventarios. Liderazgo en gestión patrimonial y control interno garantizando el fiel cumplimiento de la normativa CGE.', rightMargin, 335, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Gestión de Bienes — Registro Civil del Ecuador', rightMargin, 390);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text('7 años de servicio', rightMargin, 405);
  doc.setTextColor(80, 80, 80);
  doc.text('Administración patrimonial institucional, optimización de recursos mediante procesos normativos robustos, y control exhaustivo de bienes públicos a nivel nacional.', rightMargin, 420, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('FORMACIÓN ACADÉMICA', rightMargin, 490);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Ingeniería en Administración', rightMargin, 515);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text('Institución Universitaria, Ecuador', rightMargin, 530);

  doc.save('CV_Pablo_Garcia_Flores.pdf');
};
