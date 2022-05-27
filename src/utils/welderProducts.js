const welderProducts = [
    
    {"title" : "SWK 200", 
    "price" : 324 , 
    "image" : '../card/swk_200-img1.jpg',
    "id": 1,
    "stock" : 3
    },

    {"title" : "TWK 180", 
    "price" :  428, 
    "image" : '../card/TWK-200-imagen2.jpg',
    "id": 2,
    "stock" : 8
    },

    {"title" : "Vektor R60", 
    "price" : 100, 
    "image" : '../card/vektor_r60-img1.jpg',
    "id": 3,
    "stock" : 12,
    },

    {"title" : "WT-26", 
    "price" : 200, 
    "image" : '../card/WT26-WK.jpg',
    "id": 4,
    "stock" : 7
    },
]

const products =  {
"category" : "Soldadoras",
"title" : "SWK 200", 
"price" : 324 , 
"image" : '../card/swk_200-img1.jpg',
"id": 1,
"stock" : 3,
"description" : "Los equipos de la serie SWK están preparados para la soldadura con electrodo. Son equipos muy ligeros y con capacidad de soldadura de Tig por contacto, además están diseñados para trabajar con generadores evitando posibles fallos debidos a picos de tensión. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo. La serie SWK ofrece al soldador una perfecta regulación de los parámetros de soldeo y le permite trabajar de forma cómoda y segura gracias al reducido peso de los equipos." 
}


export default welderProducts

export { products }