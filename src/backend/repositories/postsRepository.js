// postsRepository.js — versión 100% local (mocked “server”)

const posts = [
  {
    id: '1',
    titulo: 'Cuando Vue y React coincidieron en la máquina de café',
    contenido: 'Vue dijo que su sintaxis era más amable, React contestó que él al menos tenía empleo fijo. Angular llegó tarde, con TypeScript en mano, y nadie entendió nada.',
    likes: 8,
  },
  {
    id: '2',
    titulo: 'La triste historia de un fetch que olvidó su await',
    contenido: 'Era joven, prometedor, pero acabó devolviendo una promesa vacía y un warning en consola. Moraleja: el async sin await solo trae lágrimas.',
    likes: 3,
  },
  {
    id: '3',
    titulo: 'TanStack Query y el arte zen de invalidar',
    contenido: 'Dicen los monjes de la montaña que quien domina invalidateQueries alcanza el nirvana del server state. El resto seguimos peleando con staleTime.',
    likes: 12,
  },
  {
    id: '4',
    titulo: 'El alumno que quiso hacer un SSR en el portátil del aula',
    contenido: 'Encendió el ventilador, lanzó “npm run dev:ssr”, y desapareció tras una nube de humo. Desde entonces se rumorea que renderiza en otra dimensión.',
    likes: 6,
  },
  {
    id: '5',
    titulo: 'El bug cuántico',
    contenido: 'Solo existe cuando lo miras. Cuando abres el debugger, desaparece.',
    likes: 4,
  },
  {
  id: '6',
  titulo: 'Cuando el JSON se volvió filosófico',
  contenido: 'Dijo que era más que un simple objeto. Que tenía profundidad. Luego alguien lo stringifyeó y se acabó la discusión.',
  likes: 5,
},
{
  id: '7',
  titulo: 'El estudiante que descubrió el infinite loop emocional',
  contenido: 'Amaba programar, odiaba los bugs, pero programaba para olvidarse de los bugs que amaba odiar. Nunca salió del while(true).',
  likes: 7,
},
{
  id: '8',
  titulo: 'Importar sin usar: un acto de rebeldía',
  contenido: '“No me uses, pero existo”, decía el módulo. Y el compilador respondía con un warning pasivo-agresivo.',
  likes: 9,
},
{
  id: '9',
  titulo: 'CSS y el misterio del margin que no era',
  contenido: 'Quitó todos los márgenes, pero el espacio seguía ahí. Algunos dicen que era padding disfrazado.',
  likes: 11,
},
{
  id: '10',
  titulo: 'Git y el commit que rompió la confianza',
  contenido: 'Prometió que solo era un cambio pequeño. Main nunca volvió a ser el mismo.',
  likes: 14,
},
{
  id: '11',
  titulo: 'El día que un linter perdió el control',
  contenido: 'Empezó corrigiendo comillas simples. Terminó juzgando las decisiones vitales del programador.',
  likes: 8,
},
{
  id: '12',
  titulo: 'Node_modules y el agujero negro del disco duro',
  contenido: 'Entraron 12 KB de código y salieron 450 MB de dependencias. Nadie supo explicar por qué.',
  likes: 17,
},
{
  id: '13',
  titulo: 'El componente que se renderizó a sí mismo',
  contenido: 'Y así nació el bug infinito. React aún está intentando reconciliarlo.',
  likes: 6,
},
{
  id: '14',
  titulo: 'El alumno que actualizó npm en plena práctica',
  contenido: 'Solo quería instalar un paquete. Terminó aprendiendo sobre lockfiles, versiones y el significado de la vida.',
  likes: 10,
},
{
  id: '15',
  titulo: 'Debugger sin breakpoints: meditación avanzada',
  contenido: 'Observa el flujo. Sé el flujo. Entiende sin pausar. Y si falla, añade un console.log zen.',
  likes: 4,
},
{
  id: '16',
  titulo: '404, el estado emocional del desarrollador moderno',
  contenido: 'Buscaba motivación y encontró un recurso no disponible.',
  likes: 13,
},
{
  id: '17',
  titulo: 'Promise.all y las expectativas rotas',
  contenido: 'Todas resolvieron menos una, pero esa bastó para romperlo todo. Moraleja: nunca dependas de todos a la vez.',
  likes: 9,
},
{
  id: '18',
  titulo: 'El día que el front y el back se reconciliaron',
  contenido: 'Solo hizo falta un buen contrato de API y mucha terapia de CORS.',
  likes: 15,
},
{
  id: '19',
  titulo: 'La app que solo funcionaba en mi máquina',
  contenido: 'Un clásico de laboratorio. Patrimonio inmaterial del desarrollador.',
  likes: 16,
},
{
  id: '20',
  titulo: 'El alumno que creyó haber entendido staleTime',
  contenido: 'Pero cuando volvió a enfocar la ventana, todo se recargó. No estaba preparado para tanta reactividad.',
  likes: 7,
},
{
  id: '21',
  titulo: 'Cuando el await se fue sin async',
  contenido: 'La función nunca volvió. Nadie sabe si sigue esperando.',
  likes: 5,
},
{
  id: '22',
  titulo: 'Frontend, backend y el fullstack que los soñó a ambos',
  contenido: 'Dicen que aún compila en la nube.',
  likes: 12,
},
{
  id: '23',
  titulo: 'Cuando el profesor explicó staleTime por cuarta vez',
  contenido: 'Y alguien preguntó si servía para el localStorage. Hubo silencio.',
  likes: 18,
},
{
  id: '24',
  titulo: 'El div que quería ser botón (redux)',
  contenido: 'Consiguió role="button", pero nunca foco. RIP accesibilidad 2.0.',
  likes: 8,
},
{
  id: '25',
  titulo: 'El estudiante que metió un console.log en producción',
  contenido: 'Ahora trabaja en observabilidad. Karma profesional.',
  likes: 11,
}

]

// comentarios divertidos por post
export const comments = {
  '1': [
    { id: 'c1', autor: 'Karma', texto: 'Vue siempre lleva el café más caliente ☕.' },
    { id: 'c2', autor: 'Pepsi', texto: 'React necesita tres hooks solo para remover la espuma.' },
  ],
  '2': [
    { id: 'c3', autor: 'Luis', texto: 'Yo también olvidé un await y colapsó mi existencia.' },
    { id: 'c4', autor: 'Otto', texto: 'Promesas vacías: la metáfora perfecta del TFG.' },
  ],
  '3': [
    { id: 'c5', autor: 'Eva', texto: 'Dominar invalidateQueries es mi nuevo propósito vital.' },
    { id: 'c6', autor: 'Juana', texto: 'Cuando el staleTime caduca, también caduca mi motivación.' },
  ],
  '4': [
    { id: 'c7', autor: 'Pepsi', texto: 'npm run dev:ssr suena a conjuro prohibido.' },
    { id: 'c8', autor: 'Karma', texto: 'Yo lo ejecuté una vez y abrí un portal al Node 8.' },
  ],
  '5': [
    { id: 'c9', autor: 'Otto', texto: 'El bug cuántico me mira mientras yo lo miro. Estamos empatados.' },
    { id: 'c10', autor: 'Luis', texto: 'He aprendido a no mirar el bug. Así nunca existe.' },
  ],
  '6': [
    { id: 'c11', autor: 'Luisa', texto: 'El JSON me dijo que tenía sentimientos... y luego un coma de más.' },
  ],
  '7': [
    { id: 'c12', autor: 'Maxi', texto: 'while(true) pero make it emocional.' },
    { id: 'c13', autor: 'Pepsi', texto: 'break; y a terapia.' },
  ],
  '8': [
    { id: 'c14', autor: 'Karma', texto: 'Importé algo solo para sentirme importante.' },
  ],
  '9': [
    { id: 'c15', autor: 'Otto', texto: 'El margin que no era: un thriller de CSS.' },
    { id: 'c16', autor: 'Juana', texto: 'Padding: el impostor silencioso.' },
  ],
  '10': [
    { id: 'c17', autor: 'Eva', texto: '“Solo cambio un par de cosas” — famoso último commit.' },
  ],
  '11': [
    { id: 'c18', autor: 'Karma', texto: 'Mi linter me juzga cada mañana antes del café.' },
    { id: 'c19', autor: 'Pepsi', texto: 'eslint me mira y sé que he fallado.' },
  ],
  '12': [
    { id: 'c20', autor: 'Otto', texto: 'Entraron 12 KB y salieron 450 MB: npm black magic.' },
    { id: 'c21', autor: 'Luis', texto: 'node_modules pesa más que mi autoestima.' },
  ],
  '13': [
    { id: 'c22', autor: 'Juana', texto: 'Yo también me renderizo a mí misma en situaciones sociales.' },
  ],
  '14': [
    { id: 'c23', autor: 'Luisa', texto: 'npm update es mi ruleta rusa favorita.' },
  ],
  '15': [
    { id: 'c24', autor: 'Karma', texto: 'console.log(zen);' },
  ],
  '16': [
    { id: 'c25', autor: 'Pepsi', texto: 'Buscaba motivación y encontró undefined.' },
  ],
  '17': [
    { id: 'c26', autor: 'Luis', texto: 'Promise.all, el grupo de WhatsApp que nunca se coordina.' },
  ],
  '18': [
    { id: 'c27', autor: 'Otto', texto: 'Terapia de CORS, sesión 1: aceptar las cabeceras ajenas.' },
  ],
  '19': [
    { id: 'c28', autor: 'Juana', texto: 'Funciona en mi máquina, mi frase más honesta.' },
  ],
  '20': [
    { id: 'c29', autor: 'Eva', texto: 'Yo también creí entender staleTime y luego perdí la fe.' },
  ],
  '21': [
    { id: 'c30', autor: 'Luisa', texto: 'await sin async: amor no correspondido.' },
  ],
  '22': [
    { id: 'c31', autor: 'Karma', texto: 'Fullstack: el unicornio multitarea que nunca duerme.' },
  ],
  '23': [
    { id: 'c32', autor: 'Pepsi', texto: 'No pregunté lo del localStorage, lo juro.' },
  ],
  '24': [
    { id: 'c33', autor: 'Otto', texto: 'El div nunca tuvo foco, pero sí propósito.' },
  ],
  '25': [
    { id: 'c34', autor: 'Luis', texto: 'console.log en producción: manifestación artística.' },
  ],
}


// simula latencia de red
const delay = (ms) => new Promise((r) => setTimeout(r, ms))

export async function getPostsPage(page = 1, perPage = 5) {
  await delay(600)
  const start = (page - 1) * perPage
  const end = start + perPage
  const slice = posts.slice(start, end)
  return { page, totalPages: Math.ceil(posts.length / perPage), items: slice }
}

export async function getComments(postId) {
  await delay(400)
  return comments[postId] ?? []
}

export async function likePost(id) {
  await delay(400)
  const post = posts.find((p) => p.id === id)
  if (post) post.likes++
  return { ...post }
}
