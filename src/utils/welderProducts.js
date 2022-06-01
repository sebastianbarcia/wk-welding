const welderProducts = [
    
    {
    "category" : "Soldadoras",
    "title" : "SWK 200", 
    "price" : 324 , 
    "image" : '../card/swk_200-img1.jpg',
    "id": 1,
    "stock" : 3,
    "description" : "Los equipos de la serie SWK están preparados para la soldadura con electrodo. Son equipos muy ligeros y con capacidad de soldadura de Tig por contacto, además están diseñados para trabajar con generadores evitando posibles fallos debidos a picos de tensión. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo. La serie SWK ofrece al soldador una perfecta regulación de los parámetros de soldeo y le permite trabajar de forma cómoda y segura gracias al reducido peso de los equipos." 
    },

    {
    "category" : "Soldadoras", 
    "title" : "TWK 180", 
    "price" :  428, 
    "image" : '../card/TWK-200-imagen2.jpg',
    "id": 2,
    "stock" : 8,
    "description" : "La serie TWK son equipos preparados para la soldadura TIG. Poseen un cebado de arco por alta frecuencia y posibilidad de selección de modo Up/Down. Modalidad de soldadura en 2T/4T. Poseen capacidad de soldadura con Electrodo, TIG Lift y TIG HF. Son generadores inverter con una superior dinámica de arco y unas prestaciones de soldadura elevadas. Con posibilidad de ser conectados a generadores de corriente gracias a los sensores de protección del equipo que evitan posibles fallos derivados de picos de tensión." 
    },

    {
    "category" : "Proteccion", 
    "title" : "Vektor R60", 
    "price" : 100, 
    "image" : '../card/vektor_r60-img1.jpg',
    "id": 3,
    "stock" : 12,
    "description": "La pantalla con filtro automático Vektor R60 utiliza la última tecnología de filtro de auto-oscurecimiento (ADF). Con 4 sensores de arco y una pantalla de 100×60 proporciona al soldador un área de visión óptima."
    },

    {
    "category" : "Antorchas",
    "title" : "WT-26", 
    "price" : 200, 
    "image" : '../card/WT26-WK.jpg',
    "id": 4,
    "stock" : 7,
    "description":"La serie WT de antorchas TIG ofrecen una dinámica de soldadura excelente gracias a la flexibilidad del cable y a su empuñadura ergonómica. Existen versiones con pulsador, válvula así como versiones refrigeradas para trabajos de alta exigencia."
    },
    {
    "category" : "Antorchas",
    "title" : "WT-18", 
    "price" : 186, 
    "image" : '../card/WT-18-WK.jpg',
    "id": 5,
    "stock" : 52,
    "description":"La serie WT de antorchas TIG ofrecen una dinámica de soldadura excelente gracias a la flexibilidad del cable y a su empuñadura ergonómica. Existen versiones con pulsador, válvula así como versiones refrigeradas para trabajos de alta exigencia."
    },
    {
    "category" : "Antorchas",
    "title" : "WT-17", 
    "price" : 170, 
    "image" : '../card/PISTOLA-WT-17.jpg',
    "id": 6,
    "stock" : 35,
    "description":"La serie WT de antorchas TIG ofrecen una dinámica de soldadura excelente gracias a la flexibilidad del cable y a su empuñadura ergonómica. Existen versiones con pulsador, válvula así como versiones refrigeradas para trabajos de alta exigencia."
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 160", 
    "price" : 264 , 
    "image" : '../card/SWK-160-LADO.jpg',
    "id": 7,
    "stock" : 23,
    "description" : "Los equipos de la serie SWK están especialmente diseñados para la soldadura con electrodo. Son equipos muy ligeros y con capacidad de soldadura de Tig por contacto, además están preparados para trabajar con generadores evitando posibles fallos debidos a picos de tensión. Poseen funciones como ARC Force, Anti-Sticking y Hot Start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo. La serie SWK ofrece al soldador una perfecta regulación de los parámetros de soldeo y le permite trabajar de forma cómoda y segura gracias al reducido peso de los equipos" 
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 200 CSO", 
    "price" : 295 , 
    "image" : '../card/SWK-200-CSO-WK-1.jpg',
    "id": 8,
    "stock" : 13,
    "description" : "La serie SWK CSO es una serie de equipos inverter de peso reducido y con capacidad de soldadura con electrodo y de TIG por contacto. Están diseñados para trabajar con generadores evitando fallos derivados de picos de tensión. Su elevada tensión de vació les permite trabajar con electrodo celulósico y conseguir un perfecto cebado del electrodo en cualquier condición de trabajo. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo." 
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 250", 
    "price" : 495 , 
    "image" : '../card/SWK-250-WK.jpg',
    "id": 9,
    "stock" : 32,
    "description" : "Los equipos de la serie SWK están especialmente diseñados para la soldadura con electrodo. Son equipos muy ligeros y con capacidad de soldadura de Tig por contacto, además están diseñados para trabajar con generadores evitando posibles fallos debidos a picos de tensiónLos equipos de la serie SWK están especialmente diseñados para la soldadura con electrodo. Son equipos muy ligeros y con capacidad de soldadura de Tig por contacto, además están diseñados para trabajar con generadores evitando posibles fallos debidos a picos de tensión." 
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 320", 
    "price" : 535 , 
    "image" : '../card/SWK-320-WK.jpg',
    "id": 10,
    "stock" : 3,
    "description" : "La serie SWK es una serie de equipos inverter de peso reducido y con capacidad de soldadura con electrodo y de TIG por contacto. Están diseñados para trabajar con generadores evitando fallos derivados de picos de tensión. Su elevada tensión de vació les permite trabajar con electrodo celulósico y conseguir un perfecto cebado del electrodo en cualquier condición de trabajo. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo." 
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 400 CSO", 
    "price" : 610 , 
    "image" : '../card/SWK-400-CSO-WK.jpg',
    "id": 11,
    "stock" : 4,
    "description" : "La serie SWK CSO es una serie de equipos inverter de peso reducido y con capacidad de soldadura con electrodo y de TIG por contacto. Están diseñados para trabajar con generadores evitando fallos derivados de picos de tensión. Su elevada tensión de vació les permite trabajar con electrodo celulósico y conseguir un perfecto cebado del electrodo en cualquier condición de trabajo. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo." 
    },
    {
    "category" : "Soldadoras",
    "title" : "SWK 400 CSO", 
    "price" : 610 , 
    "image" : '../card/SWK-400-CSO-WK.jpg',
    "id": 11,
    "stock" : 4,
    "description" : "La serie SWK CSO es una serie de equipos inverter de peso reducido y con capacidad de soldadura con electrodo y de TIG por contacto. Están diseñados para trabajar con generadores evitando fallos derivados de picos de tensión. Su elevada tensión de vació les permite trabajar con electrodo celulósico y conseguir un perfecto cebado del electrodo en cualquier condición de trabajo. Poseen funciones como ARC Force, Anti-sticking y Hot start y están equipados con sensores de voltaje, corriente y temperatura para la autoprotección del equipo." 
    },
    {
    "category" : "Soldadoras",
    "title" : "TWK 250", 
    "price" : 810 , 
    "image" : '../card/TWK-200-PULSE-WK.jpg',
    "id": 12,
    "stock" : 5,
    "description" : "La serie TWK Pulse confiere al soldador todas las ventajas de la tecnología TIG de WK incluyendo la modalidad de corriente pulsada que permite realizar soldadura en materiales de poco espesor con poca o nula deformación al tiempo que proporciona una perfecta estética del cordón de soldadura." 
    },
    {
    "category" : "Soldadoras",
    "title" : "TWK 320", 
    "price" : 780 , 
    "image" : '../card/TWK-320-PULSE-WK.jpg',
    "id": 13,
    "stock" : 6,
    "description" : "La serie TWK Pulse confiere al soldador todas las ventajas de la tecnología TIG de WK incluyendo la modalidad de corriente pulsada que permite realizar soldadura en materiales de poco espesor con poca o nula deformación al tiempo que proporciona una perfecta estética del cordón de soldadura." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 31 R22P", 
    "price" : 50 , 
    "image" : '../card/WK-31-R22P.jpg',
    "id": 14,
    "stock" : 65,
    "description" : "Cuando se requiere dar multi-pasada en rincón, el WK 31 R22P es la mejor opción ya que dispone de un sistema de doble antorcha en tándem que posibilita dar dos cordones por una sola cara del refuerzo de forma simultánea." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 471 R13", 
    "price" : 50 , 
    "image" : '../card/WK-471-R13.jpg',
    "id": 15,
    "stock" : 54,
    "description" : "El WK 471 R13 es un autómata magnético para soldadura en rincón. Se trata de un equipo compacto y de poco peso que además permite un rango de regulación total en la inclinación de la antorcha, esto posibilita al operador a realizar soldaduras en zonas donde el acceso de la antorcha es más limitado gracias a que se puede obtener prácticamente cualquier ángulo de incidencia debido a la triple regulación de la que dispone." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 51B R22V", 
    "price" : 30 , 
    "image" : '../card/WK-51B-R22V.jpg',
    "id": 16,
    "stock" : 37,
    "description" : "El WK 51B R22V es un autómata diseñado para la soldadura en rincón por ambas caras de forma simultánea. Posee un brazo soporte de la segunda antorcha que puede ser ajustado en altura y anchura lo que posibilita su adaptación a varias medidas de refuerzo de forma sencilla." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 61 GFD", 
    "price" : 40 , 
    "image" : '../card/WK-61-GFD.jpg',
    "id": 17,
    "stock" : 39,
    "description" : "El WK 61 GFD es una versión digital del WK 7 W GFA, posee las mismas características del WK 7 W GFA, pero su control se realiza mediante un panel digital lo que permite una reducción de tamaño y peso del autómata. Dispone de una guía flexible que puede adaptarse perfectamente a cualquier contorno de la pieza de trabajo. La fijación de esta guía se realiza mediante imanes con dispositivo ON/OFF lo que facilita enormemente la labor de montaje y desmontaje de las guías. El autómata dispone de oscilador con múltiples modos ajustables." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 71 R12", 
    "price" : 60 , 
    "image" : '../card/WK-71-R12.jpg',
    "id": 18,
    "stock" : 54,
    "description" : "El WK 71 R12 es un autómata de soldadura magnético para soldadura en rincón a plano. Sus principales ventajas son su tamaño y peso reducidos que lo convierten en un equipo muy versátil, además su manejo es sencillo e intuitivo para el soldador." 
    },
    {
    "category" : "Automatización",
    "title" : "WK 7W GFA", 
    "price" : 100 , 
    "image" : '../card/WK-7W-GFA.jpg',
    "id": 19,
    "stock" : 23,
    "description" : "Para cada tipología de unión soldada, WK ofrece una solución automatizada y el WK 7W GFA es un buen ejemplo de ello. Se trata de un autómata magnético que sin embargo dispone de una guía flexible que puede adaptarse perfectamente a cualquier contorno de la pieza de trabajo. La fijación de esta guía se realiza mediante imanes con dispositivo ON/OFF lo que facilita enormemente la labor de montaje y desmontaje de las guías. El autómata dispone de oscilador con múltiples modos ajustables." 
    },
    {
    "category" : "Automatización",
    "title" : "WK B71W", 
    "price" : 143 , 
    "image" : '../card/WK-B71W-R120B.jpg',
    "id": 20,
    "stock" : 54,
    "description" : "Se trata de un autómata magnético para soldadura en rincón y seguimiento por palpadores. El WK B71W R120B dispone de un oscilador pendular con múltiples modos de regulación para un perfecto control de la soldadura. En el WK B71W R120B se pueden ajustar tiempos de parada en extremos, velocidades de oscilación, tipos de oscilación, amplitud, etc. El WK B71W R120B dispone de alimentación por batería recargable con una autonomía de 8h lo que elimina la necesidad de cables de alimentación en la zona de trabajo." 
    },
    {
    "category" : "Proteccion",
    "title" : "INFINITY V98", 
    "price" : 92 , 
    "image" : '../card/infinity-v-98.jpg',
    "id": 21,
    "stock" : 32,
    "description" : "La pantalla con filtro automático Infinity V98 utiliza la nueva tecnología de filtro de auto-oscurecimiento (ADF 9100) True Color, que proporciona al soldador una visión de color real de los elementos. Con 4 sensores de arco y una pantalla de 100×90 proporciona al soldador un área de visión óptima." 
    },
    {
    "category" : "Consumibles",
    "title" : "SFA 1", 
    "price" : 14, 
    "image" : '../card/SFA-1-WK.jpg',
    "id": 22,
    "stock" : 33,
    "description" : "Hilo macizo SG2 indicado para la soldadura MIG/MAG para construcciones mecánico soldadas en general. Para soldadura de aceros de hasta 530N/mm2 de carga de rotura mínima. Bobinado capa a capa. Utiliza CO2 o mezclas de Argón/CO2 como gases de protección. La corriente de soldadura para soldar será siempre corriente continua CC(+)." 
    },
    {
    "category" : "Consumibles",
    "title" : "SFA 100", 
    "price" : 16, 
    "image" : '../card/SFA-100-WK.jpg',
    "id": 23,
    "stock" : 81,
    "description" : "Es un hilo de acero de baja aleación, revestido de cobre, para el soldeo MIG/MAG (GMAW) de aceros de alta resistencia mecánica que requieren, para aplicaciones críticas, de un metal de soldadura tenaz. También es adecuado para el soldeo de aceros a los que se exige una elevada resistencia al impacto a bajas temperaturas. El SFA-100 utiliza normalmente gas mezcla M21 – M33 y CO2 como gas de protección." 
    },
    
    {
    "category" : "Consumibles",
    "title" : "SFA T-50", 
    "price" : 20, 
    "image" : '../card/SFA-T-50-ok-2-300x300.jpg',
    "id": 24,
    "stock" : 73,
    "description" : "Hilo tubular rutilo para toda posición con excelentes características de soldabilidad. El SFA-T50 deja un cordón de soldadura perfectamente plano y sin apenas proyecciones. Diseñado para pasada simple o multi-pasada, la escoria se elimina de forma sencilla y está preparado para su uso con gas mezcla Ar/CO2 (20-25%) o CO2. Posee excelentes resultados en pruebas de impacto a baja temperatura. Es un hilo tubular de gran eficiencia gracias a su elevada tasa de deposición. Extremadamente versátil para una gran variedad de aplicaciones, tales como construcción naval, tanques de almacenamiento, puentes y fabricación en general de aceros estructurales." 
    },
    {
    "category" : "Respaldo",
    "title" : "CBW 1045-45", 
    "price" : 6, 
    "image" : '../card/BACKING-CBW-1045-45.jpg',
    "id": 25,
    "stock" : 443,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    },
    {
    "category" : "Respaldo",
    "title" : "CBW 1100-06", 
    "price" : 4, 
    "image" : '../card/BACKING-CBW-1100-06.jpg',
    "id": 26,
    "stock" : 322,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    },
    {
    "category" : "Respaldo",
    "title" : "CBW 1100-09", 
    "price" : 6, 
    "image" : '../card/BACKING-CBW-1100-09.jpg',
    "id": 27,
    "stock" : 555,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    },  
    {
    "category" : "Respaldo",
    "title" : "CBW 1100-12", 
    "price" : 7, 
    "image" : '../card/BACKING-CBW-1100-12.jpg',
    "id": 28,
    "stock" : 415,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    },
    {
    "category" : "Respaldo",
    "title" : "CBW 1100-15", 
    "price" : 8, 
    "image" : '../card/BACKING-CBW-1100-15.jpg',
    "id": 29,
    "stock" : 562,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    },
    {
    "category" : "Respaldo",
    "title" : "CBW 1100-20", 
    "price" : 9, 
    "image" : '../card/BACKING-CBW-1100-20.jpg',
    "id": 30,
    "stock" : 521,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500 09F", 
    "price" : 4, 
    "image" : '../card/BACKING-CBW-1500-09-PLANO.jpg',
    "id": 31,
    "stock" : 543,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500 13F", 
    "price" : 6, 
    "image" : '../card/BACKING-CBW-1500-13-PLANO.jpg',
    "id": 32,
    "stock" : 243,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500-06", 
    "price" : 2, 
    "image" : '../card/BACKING-CBW-1500-06.jpg',
    "id": 33,
    "stock" : 673,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500-09", 
    "price" : 6, 
    "image" : '../card/BACKING-CBW-1500-09.jpg',
    "id": 34,
    "stock" : 679,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500-13", 
    "price" : 7, 
    "image" : '../card/BACKING-CBW-1500-13.jpg',
    "id": 35,
    "stock" : 62,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500-27", 
    "price" : 9, 
    "image" : '../card/BACKING-CBW-1500-27.jpg',
    "id": 36,
    "stock" : 665,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW 1500-50", 
    "price" : 13, 
    "image" : '../card/BACKING-CBW-1500-50.jpg',
    "id": 37,
    "stock" : 545,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
    {
    "category" : "Respaldo",
    "title" : "CBW R150", 
    "price" : 12, 
    "image" : '../card/BACKING-CBW-R150-scaled.jpg',
    "id": 38,
    "stock" : 895,
    "description" : "WK dispone de una amplia línea de soportes cerámicos de aplicación rápida y sencilla con banda de aluminio auto-adhesiva. Los soportes cerámicos CBW facilitan y aseguran el pase de raíz que es sin duda una parte crítica en los procesos de soldeo. Dado su alto poder refractario pueden utilizarse corrientes de soldadura más elevadas y están preparados para ofrecer soldadura de alta calidad sin porosidad y sin alteraciones en la composición química del cordón." 
    }, 
]

export default  welderProducts 
  
