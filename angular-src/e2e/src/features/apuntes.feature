# language: es
# encoding: utf-8

Característica: API REST de apuntes

Escenario: Al acceder al dashboard se carga la lista de apuntes 
    Dado Estoy autentificado
    Cuando Carga el dashboard
    Entonces Debería mostrarse la lista de apuntes