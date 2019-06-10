# Cifrado César 

## Consideraciones generales

  ### Instalación
   - ¿Cómo visualizo el producto final?

      Dar click a la liga de GitHub Pages, disponible en la cabecera de este repositorio y/o [_aquí_](https://vianeylararangel.github.io/MEX-008-Cipher/src).

### Introducción (Pendiente)
_Aquí nombre del producto_ es una encriptador de 2 vías (cifra & descifra).

Funciona utlizando una "llave" númerica que sólo conoce *Quién cifra* el mensaje y que transmite a *Quién descifra*. Al introducir los textos en los apartados designados y una vez colocada la "llave" númerica, podremos visualizar el resultado y así comenzar a crear invitaciones, juegos, organizar eventos y muchas cosas más.

#### Detalles del proyecto

- Metodología:
  Este proyecto se resolvió de manera individual, bajo metodología Ágile con tablero KanBan y en 2 sprints, con entrega para demo c/Viernes.

- Herramientas:
  GitHub y GitHub Pages.

- Front-End:
  
  * La lógica del proyecto está implementada completamente en JavaScript (ES6)

  * En este proyecto **NO** se usaron librerías o frameworks, unícamente
  [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e), CSS3 y HTML5.

  * No fué utilizada la _pseudo-variable_ `this`.
  * Con respecto a las reglas/guías de estilo, se usaron las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint` que proporcionó **LABORATORIA** cómo _estandar_.


# Definición del producto

#### Acerca del diseño de experiencia de usuario (User Experience Design):

Cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.
Los ejes del desarrollo UX utilizados serían USER CENTRICITY y DESIGN THINKING, por lo tanto considero que es muy importante responder a los cuestionamientos siguientes:

- ¿Quiénes son los principales usuarios de producto?.

- ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?.

- ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?.

#### El proceso
- Ideación
  
[Lluvia de ideas(![Lluvia de ideas](Crear documento))]

- Prototipado (sketching)
  * Sketch 1.0
    - Demo con [MARVEL](https://marvelapp.com/7487ga3)

    - Feedback 
    
      * Una compañera de squad, Mariela, probó el sketch inicial en papel a los 5 minutos de creado y su aportación fué que necesitaba más resolución y un botón para regresar y volver a comenzar, platicando la función de "ese" botón sería limpiar la pantalla.

      Conclusión: Agregar un botón que limpie la pantalla, tal vez que refresque el navegador.

     ![Mariela](src/img/DSC_0043.JPG)
    
      * Luis Ruiz probó el sketch mientras los entrevistaba, puedes escuchar el [audio](src/img/entrevistaSketch1.mp3), no logró completar el flujo de la aplicación y el explica que es porque no entiende dónde debe introducir el texto, que sería más entendible que diga "¿Que quieres escribir? porque no sabe si, entonces debe cifrar o descifrar.

      Conclusión: Cambiar el texto del input para cifrar a ¿Que quieres escribir? o literal, ¿Que quieres cifrar?.

      
        
  * Sketch 2.0
- Pruebas con usuarios (User Testing) e Iteración


## Objetivos del proyecto

Para crear la primera aplicación web del _bootcamp_ en **LABORATORIA**, crearemos un producto que servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

###Creación de una marca para el producto
- Mensajería secreta para amigxs, parejas enfocada a la logística de eventos sorpresa.

NOTA DE VIANEY: Aquí hay que justificar porqué se eligió esta opción.

# CIERRA UX

# ABRE FED
#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Pruebas nitarias (Unit test)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

# CIERRA FED

## Objetivos de aprendizaje

NOTA DE VIANEY: Verifica que estás aplicando lo aprendido de acuerdo a estos objetivos.

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

#### NOTA DE VIANEY: AQUÍ ESTA QUE DEBE CONTENER C/ARCHIVO DEL BOILERPLATE

* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
  
#### NOTA DE VIANEY: SI ME SOBRA TIEMPO, AVIÉNTATE.
## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El **boilerplate** incluye algunos tests (comentados al principio del archivo `cipher.spec.js`) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también este caso por tu cuenta.

#### NOTA DE VIANEY: VE TRAS ELLO!!

Por otra parte, complementando la definición de tu producto, puedes plantear un modelo de negocio para tu aplicación, en el que se explique y justifique cómo podrías obtener ingresos a través de ella.

***

## Agradecimiento a los recursos y temas relacionados que fueron proporcionados por *LABORATORIA*.

Video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)

- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

Rubrica de evaluación

## Checklist
Esta sección fué creada por *LABORATORIA* para ayudarme a llevar un control de las partes obligatorias que debia cumplir.

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
* [ ] Modelo de negocio.

