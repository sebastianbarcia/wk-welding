// Header NavBar 
const navBarOptions = 
[{category : 'Soldadoras' , link: '/category/Soldadoras', id: 1 },
{category: 'Antorchas', link: '/category/Antorchas', id:2  },
{category:'Automatización',  link: '/category/Automatización', id:3 },
{category: 'Proteccion', link: '/category/Proteccion', id:4 },
{category: 'Consumibles', link: '/category/Consumibles', id:5},
{category: 'Respaldo', link: '/category/Respaldo', id:6}
]

const pages = [
    {title: 'Productos', link : '', id : 1 },
    {title: 'Nosotros', link : '/us', id : 2 }, 
    {title: 'Contacto' , link: '/contact' , id : 3 }
    ];

//footer Navbar
const footer = [
    {"title": "Productos", "link" : "/product", "id":1}, 
    {"title": "Nosotros", "link" : "/us" , "id":2},
    {"title": "Contacto", "link" : "/contact" , "id":3}, 
    {"title": "Correo: wkwelding@wkwelding.es" , "link" : "https://outlook.live.com/owa/", "id": 4 },
    ]
export default navBarOptions
export { footer , pages }