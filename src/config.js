// ============================================================
//  CONFIGURACIÓN DE LA INVITACIÓN
//  Todo lo que puedes querer cambiar está en este archivo.
// ============================================================

export const BODA = {
  novio: 'Oliver',
  novia: 'Beatriz',

  // Fecha del evento (zona horaria de Bolivia, UTC-04:00)
  fechaTexto: '9 de enero de 2027',
  fechaISO: '2027-01-09T13:00:00-04:00',

  // ---------- Padres ----------
  padresNovia: ['Pastor León', 'Agustina Cancejo'],
  padresNovio: ['Cesar Barrios', 'Irene Veizaga'],

  // ---------- Padrinos ----------
  padrinosReligion: ['Genuario León', 'Beatriz Condori'],
  padrinosCivil: ['Paulino Mamani', 'Elisa Noa'],

  // ---------- Ceremonia ----------
  ceremonia: {
    fecha: '9 de enero de 2027',
    hora: '13:00 h',
    lugar: 'Iglesia Evangélica Bautista ADONAI',
    ubicacion: 'Sacaba - Abra',
    // Reemplaza por el enlace real de Google Maps cuando lo tengas
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Iglesia+Evangelica+Bautista+ADONAI+Abra+Sacaba+Cochabamba',
  },

  // ---------- Recepción ----------
  recepcion: {
    lugar: 'Sede OTB La Viña',
    referencia:
      'Ubicado en la OTB La Viña, Abra Sacaba, tomar trufi 8 verde o 8 rojo, lado módulo policial.',
    // Reemplaza por el enlace real de Google Maps cuando lo tengas
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=OTB+La+Vi%C3%B1a+Abra+Sacaba+Cochabamba',
  },

  // ---------- Música ----------
  musica: {
    titulo: 'Sin principio ni final',
    artista: 'Abel Pintos',
    // Coloca tu archivo en /public/musica/ con este nombre (o cambia la ruta)
    archivo: './musica/sin-principio-ni-final.mp3',
  },

  // ---------- Confirmación de asistencia ----------
  confirmacion: {
    // Número de WhatsApp con código de país y sin "+" ni espacios. Ej.: '59170000000'
    // Si lo dejas vacío, WhatsApp abre la lista para elegir el contacto.
    whatsapp: '',
    // Alternativa: pega aquí el enlace de un Google Form y se usará en lugar de WhatsApp
    googleFormUrl: '',
  },
}

