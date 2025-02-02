# Cifrado César (Encriptador de palabras)

## El reto

Para crear la primera aplicación web del _bootcamp_ de la 8va generación en **LABORATORIA**, diseñé un producto que servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_) a la cuál llamo "llave".

## Introducción

_DECOTIP_ es una encriptador de 2 vías (cifra/descifra).

Funciona utlizando una "_llave_" númerica que sólo conoce **_Quién cifra_** el mensaje y que transmite a **_Quién descifra_**.

Esta llave numérica permitirá que el texto "_se mueva_" en el alfabeto para obtener un nuevo texto difícil de leer para quien **no tenga** la "_llave_" de cifrado.

 Los usuarios que **si tengan** una "llave" y que reciben el texto difícil de leer, podrán obtener el texto original cómo resultado y así comenzar a crear invitaciones, juegos, organizar eventos y muchas cosas más.

#
## Consideraciones generales

  ### Instalación
   - ¿Cómo visualizo el producto final?

   La demo del producto está disponible gracias al host de GitHub Pages.
   
  Puedes acceder dando click al enlace que se encuentra en la cabecera de este repositorio y/o dando click [aquí DEMO](https://vianeylararangel.github.io/MEX-008-Cipher/src).

  ### Detalles del proyecto

- Metodología:
  
  Fué usado el método **Ágile** por medio de tablero **Kanban en papel** para ser usado por el  _SQUAD_ de trabajo y con _TRELLO_ para el tablero **Kanban digital** que usé personalmente en el desarrollo del proyecto.
  
  Todo fué resuelto de manera individual, durante **2 sprints** c/u con duración de 1 semana y con entrega para demo cada Viernes.

- Herramientas:

  * GitHub y GitHub Pages: Control de versiones y hosting.
  * Trello: Organización y gestión de tareas.
  * Figma: Prototipo de alta fidelidad.
  * Marvel: Demo de prototipos de baja fidelidad (sketch).
  * Editor de texto: Visual Studio Code.

- Consideraciones del Front-End development:
  
  * La lógica del proyecto está implementada completamente en JavaScript (ES6).

  * En este proyecto **NO** se usaron librerías o frameworks, unícamente
  [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e), CSS3 y HTML5.

  * No fué utilizada la _pseudo-variable_ `this`.

  * Con respecto a las reglas/guías de estilo, se usaron las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint` que proporcionó **LABORATORIA** cómo _estandar_.

- Consideraciones del User Experience Design:

  * Los ejes temáticos que se utilizaron principalmente:

    * User centricity.
    * Design Thinking.


# Definición del producto

#### Resumen

DECOTIP es un página web intuitiva y simple.
Se basa en un modelo de negocio ...

#### Acerca del "User Experience Design"

1. **Planteamiento del problema**

Al observar que las generaciones nativas de la tecnología **ya NO quieren** realizar actividades al aire libre o tareas del hogar, porque no están relacionadas a los gadgets y al internet, nos damos cuenta que mientras el router del wi-fi en nuestras casas está prendido, es proveedor de potenciales distracciones.

 Al mismo tiempo es indispensable para la realización de actividades y servicios cómo la alarma del hogar, entre otras.
 
¿Cómo podríamos limitar a los niñxs o adolescentes en el uso de internet sin tener que apagar el router?

##### La respuesta que propongo es, cambiando la clave del wi-fi.

2. **¿Quiénes son los principales usuarios del producto?.**

        Personas adultas de cualquier generación, que tienen niñxs o adolescentes en casa y que quieren involucrarlos en las tareas del hogar. 

  3. **¿Cuáles son los objetivos de estos usuarios en relación con tu producto?.**

          Cifrar la clave del wi-fi cómo "un mecanismo eficiente de recompensa/castigo" y entregarla al cumplimiento de las tareas asignadas a los niñxs o adolescentes para promover el bienestar de la familia.


 Teniendo la solución al problema, después se encontrarán muchas otras aplicaciones al producto.

4. **¿Cómo crees que el producto que estás creando está resolviendo sus problemas?.**

- El uso moderado del **internet** en dispositivos móviles en niñxs y adolescentes, les permitirá aprovecharlo y valorar cada momento de conexión.

- Proporcionar posibilidades **DIARIAS** de cifrado, mientras que la comunicación y complicidad de la parejx se vé favorecida, permitiendo que sus intenciones estén ocultas.

        Favorecer que los niñxs "conecten con el mundo" y que las familias cumplan con sus responsabilidades.

#### El proceso

1. Ideación:

    Se llevo a cabo una **_"Lluvia de ideas"_** para generar la temática del producto.
     - Logística secreta para una fiesta de compromiso o cumpleaños.
     - Cifrado de localizaciones y mensajes para la seguridad de periodistas.
     - **Comunicación de parejas con hijos para cifrar la clave del wi-fi cuándo los hijos no han realizado sus labores y mensajes en tableros que sólo ellos pueden leer.** _`(¡Elegido!)`_
     - Eventos exclusivos con localizaciones secretas para verdaderos fans de grupos de rock.
     - Un diario personal encriptado para no permitir que nadie lea tus secretos.
    - Seguimiento de compras, encriptar una referencia para que la persona correcta reciba lo que compró.

Determiné que iba a usar la tercer idea (en negritas) ya que resuelve un problema concreto que se podría escalar a más. Pensé en que el concepto ayudaría a formar el nombre de la marca.

**DECOTIP** = DECO: En referencia a encriptar/descifrar && TIP: de nota (como los post-it).

La idea es transmitir "Cifra/descifra notitas".

2.  Prototipado (sketching)
    * Primer sprint
      - Sketch 1.0
      - Demo con [MARVEL](https://marvelapp.com/7487ga3)
      - Feedback 
      
       1. Una compañera de squad, Mariela, probó el sketch inicial en papel a los 5 minutos de creado y su aportación fué que necesitaba más resolución y un botón para regresar y volver a comenzar, platicando la función de "ese" botón sería limpiar la pantalla.

      **Conclusión**: Agregar un botón que limpie la pantalla, tal vez que refresque el navegador.

        ![Mariela](src/img/DSC_0043.JPG)
    
      2. Luis Ruiz probó el sketch mientras lo entrevistaba, puedes escuchar el [audio](src/img/entrevistaSketch1.mp3). No logró completar el flujo de la aplicación y me explica que es porque no entiende dónde debe introducir el texto, que sería más entendible que diga "¿Que quieres escribir? porque no sabe si, entonces debe cifrar o descifrar.

      **Conclusión**: Cambiar el texto del input para cifrar a ¿Que quieres escribir? o literal, ¿Que quieres cifrar?.

      - Sketch 2.0
      - Pruebas con usuarios (User Testing) e Iteración

### Creación de una marca para el producto

- Mensajería para adultos que tengan a su cargo niñxs y adolescentes que usan demasiadas horas al día para navegar por interne

#

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#

## Agradecimiento a los recursos y temas relacionados que fueron proporcionados por *LABORATORIA*.

Video de Michelle que me llevó a través de la fórmula
matemática del Cifrado César y un par de cosas más que debía saber para
resolver este proyecto.

![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)

- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Rubrica de evaluación

#### Referencias

https://www.eff.org/deeplinks/2018/03/secure-messaging-more-secure-mess

## Checklist
Esta sección fué creada por *LABORATORIA* para ayudarme a llevar un control de las partes obligatorias que debia cumplir.
### Parte Obligatoria
* [x] README.md incluye info sobre proceso y decisiones de diseño.
* [x] README.md explica claramente quiénes son los usuarios y su relación con el producto.
* [x] README.md explica claramente cómo el producto soluciona los problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza this.
* [x] Implementa cipher.encode.
* [x] Implementa cipher.decode.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de statements, functions y lines, y un mínimo del 50% de branches.
* [x] Interfaz permite elegir el offset o desplazamiento a usar en el cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
* [ ] Modelo de negocio.

