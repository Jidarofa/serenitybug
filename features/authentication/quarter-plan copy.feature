#language:es

Característica: [FE] - Crear compromisos en quarter plan
    Como usuario quiero poder crear nuevos compromisos en el sistema ya sea manualmente o importar masivamente compromisos 
    por medio de un template .csv propuesto por quarter-plan (compas).
      
  @automatable @ignore
  Esquema del escenario: [FE] - crear compromiso manualmente de forma exitosa datos completos
    Dado que Jimmy esta logueado en workforce
    Cuando cree un nuevo compromiso de forma manual con los datos "<iniciativa>","<compromiso>","<detalle>","<ownerCompromiso>","<estado>","<versionAsociada>","<metricaAsociada>","<estimacionImpacto>","<impacto>","<tipoEntregable>","<qAnterior>","<qSiguiente>","<linkDocumento>"
    Entonces debe listarse el compromiso creado en la grilla

    Ejemplos:
      |iniciativa              | compromiso                     | detalle                               | ownerCompromiso      | estado     | versionAsociada  | metricaAsociada            | estimacionImpacto            | impacto       |qAnterior|qSiguiente| tipoEntregable  | linkDocumento  | 
      |iniciativa QA - Compass | compromiso de prueba autoation | esto es prueba de automation qa compas| MARIA CRUZ TALIBERTI |Not Started | 1.0              | ejemplo prueba de QA compas|  ejemplo prueba de QA compas | Mantenimiento |si       |si        | Delivery        | www.google.com |
 
    # |iniciativa|compromiso                     |detalle                               |ownerCompromiso      |estado     | versionAsociada  |metricaAsociada            |estimacionImpacto            |impacto       |tipoEntregable  |linkDocumento  | 
    # |iniciativa QA - Compass | compromiso de prueba autoation |esto es prueba de automation qa compas|JUAN ANDRES FRESNEDA |Not Started |1.0              |ejemplo prueba de QA compas|ejemplo prueba de QA compas |Mantenimiento |Delivery        | www.google.com |

  @ignore
  Esquema del escenario: [FE] - crear compromiso manualmente de forma exitosa minimos requeridos

    Cuando cree un nuevo compromiso de forma manual con los datos ""
    Entonces debe listarse el compromiso creado en la grilla

    Ejemplos:
        |iniciativa     | compromiso | detalle | ownercompromiso | estado | 

  @ignore
  Esquema del escenario: [FE] - no poder crear compromiso manual sin campos requeridos

    Cuando trate de crear un nuevo compromiso de forma manual
    Y falte alguno de los campos requeridos
    Entonces debe mostrarse una alerta indicando que el campo "<campo>" es requerido con el siguiente mensaje "<mensaje>"

    Ejemplos:
        |document_path     |
        |data/example.csv  |

  @ignore
  Esquema del escenario: [FE] - importar template exitosamente

    Cuando el importe un template "<document_path>"
    Entonces el debe observar que los compromisos fueron cargados correctamente en el sistema

    Ejemplos:
        |document_path     |
        |data/example.csv  |




