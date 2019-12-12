# language: es
# encoding: utf-8

Característica: Mostrar la información de un contenido concreto

  Escenario: El usuario accede a la vista por defecto de contenidos
    Dado que he ingresado en la página "~/content"
    Y estoy autenticado
    Y estoy intentando acceder de forma manual (sin parámetro) o con un id inexistente
    Cuando carga la página
    Entonces debería mostrarse una vista de error de contenido inexistente

  Escenario: El usuario accede a la información de un contenido desde el listado de contenidos
    Dado que soy redirigido desde el listado de contenidos
    Y acabo por ingresar en la página "~/content"
    Y estoy autenticado
    Y le estoy dando un parámetro "id" tal que "~/content?id=$id_content"
    Cuando carga la página
    Entonces debería volcarse la información del contenido dado el parámetro id
