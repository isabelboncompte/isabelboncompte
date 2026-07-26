// Minimal i18n: no dependencies, three languages, Catalan is the default
// and the source of truth. Usage: import { t, locale } and call t('key').
import { ref } from 'vue'

const messages = {
  ca: {
    'nav.home': 'Home',
    'nav.botiga': 'Botiga',
    'nav.obra': 'Obra',
    'nav.biografia': 'Biografia',
    'home.quisoc': 'Qui sóc',
    'home.intro': "Estic interessada a practicar la pintura i la ceràmica per continuar aprenent, i per deixar testimoni d'allò que m'interessa.",
    'home.linies': 'Les dues línies de treball actuals són:',
    'home.linia1': 'En pintura, el retrat i la natura.',
    'home.linia2': "En ceràmica, l'experimentació al torn.",
    'shop.title': 'Ceràmica',
    'shop.note': 'Les peces es venen exclusivament a la botiga.',
    'shop.contact': 'Per a consultes:',
    'shop.priceAtShop': 'Preu a la botiga',
    'shop.sold': 'Venuda',
    'shop.esmalt': 'Esmalt',
    'shop.close': 'Tancar',
    'shop.prev': 'Anterior',
    'shop.next': 'Següent',
    'cat.Bols': 'Bols',
    'cat.Gerros i càntirs': 'Gerros i càntirs',
    'cat.Plats i plàteres': 'Plats i plàteres',
    'cat.Pots i gots': 'Pots i gots',
    'footer.sub': 'Pintura i ceràmica',
    'footer.contacte': 'Contacte',
    'footer.botiga': 'Botiga',
    'footer.botigaNote': 'Les peces de ceràmica es venen exclusivament a la botiga.',
    'footer.rights': 'Tots els drets reservats.',
    'bio.title': 'Biografia',
    'gallery.viewToggle': 'Canvia entre vista de graella i de llista',
    'gallery.any': 'Any',
    'gallery.tecnica': 'Tècnica',
    'gallery.mida': 'Mida',
    'viewer.back': 'Tornar enrere',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.botiga': 'Tienda',
    'nav.obra': 'Obra',
    'nav.biografia': 'Biografía',
    'home.quisoc': 'Quién soy',
    'home.intro': 'Me interesa practicar la pintura y la cerámica para seguir aprendiendo, y para dejar testimonio de aquello que me interesa.',
    'home.linies': 'Las dos líneas de trabajo actuales son:',
    'home.linia1': 'En pintura, el retrato y la naturaleza.',
    'home.linia2': 'En cerámica, la experimentación en el torno.',
    'shop.title': 'Cerámica',
    'shop.note': 'Las piezas se venden exclusivamente en la tienda.',
    'shop.contact': 'Para consultas:',
    'shop.priceAtShop': 'Precio en la tienda',
    'shop.sold': 'Vendida',
    'shop.esmalt': 'Esmalte',
    'shop.close': 'Cerrar',
    'shop.prev': 'Anterior',
    'shop.next': 'Siguiente',
    'cat.Bols': 'Cuencos',
    'cat.Gerros i càntirs': 'Jarrones y botijos',
    'cat.Plats i plàteres': 'Platos y fuentes',
    'cat.Pots i gots': 'Tarros y vasos',
    'footer.sub': 'Pintura y cerámica',
    'footer.contacte': 'Contacto',
    'footer.botiga': 'Tienda',
    'footer.botigaNote': 'Las piezas de cerámica se venden exclusivamente en la tienda.',
    'footer.rights': 'Todos los derechos reservados.',
    'bio.title': 'Biografía',
    'gallery.viewToggle': 'Cambia entre vista de cuadrícula y de lista',
    'gallery.any': 'Año',
    'gallery.tecnica': 'Técnica',
    'gallery.mida': 'Medidas',
    'viewer.back': 'Volver atrás',
  },
  en: {
    'nav.home': 'Home',
    'nav.botiga': 'Shop',
    'nav.obra': 'Work',
    'nav.biografia': 'Biography',
    'home.quisoc': 'About me',
    'home.intro': 'I am interested in practising painting and ceramics as a way to keep learning, and to leave a record of what interests me.',
    'home.linies': 'My two current lines of work are:',
    'home.linia1': 'In painting, portraiture and nature.',
    'home.linia2': 'In ceramics, experimentation on the wheel.',
    'shop.title': 'Ceramics',
    'shop.note': 'Pieces are sold exclusively at the shop.',
    'shop.contact': 'For enquiries:',
    'shop.priceAtShop': 'Price at the shop',
    'shop.sold': 'Sold',
    'shop.esmalt': 'Glaze',
    'shop.close': 'Close',
    'shop.prev': 'Previous',
    'shop.next': 'Next',
    'cat.Bols': 'Bowls',
    'cat.Gerros i càntirs': 'Vases and jugs',
    'cat.Plats i plàteres': 'Plates and platters',
    'cat.Pots i gots': 'Jars and tumblers',
    'footer.sub': 'Painting and ceramics',
    'footer.contacte': 'Contact',
    'footer.botiga': 'Shop',
    'footer.botigaNote': 'Ceramic pieces are sold exclusively at the shop.',
    'footer.rights': 'All rights reserved.',
    'bio.title': 'Biography',
    'gallery.viewToggle': 'Switch between grid and list view',
    'gallery.any': 'Year',
    'gallery.tecnica': 'Medium',
    'gallery.mida': 'Size',
    'viewer.back': 'Go back',
  },
}

export const LOCALES = ['ca', 'es', 'en']

function initialLocale() {
  const saved = localStorage.getItem('lang')
  if (saved && LOCALES.includes(saved)) return saved
  const nav = (navigator.language || 'ca').slice(0, 2)
  if (nav === 'es') return 'es'
  if (nav === 'en') return 'en'
  return 'ca'
}

export const locale = ref(initialLocale())

export function setLocale(l) {
  if (!LOCALES.includes(l)) return
  locale.value = l
  localStorage.setItem('lang', l)
  document.documentElement.lang = l
}

export function t(key) {
  return messages[locale.value]?.[key] ?? messages.ca[key] ?? key
}

document.documentElement.lang = locale.value
