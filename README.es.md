# Plugin incwo para dots y ChatGPT

[Français](README.md) · [English](README.en.md)

Este repositorio contiene un Agent Plugin portátil. Declara el [MCP oficial de incwo](https://go.incwo.com/en/agents/for-your-agents/) y tres habilidades para presupuestos, recordatorios de facturas y existencias. No contiene claves ni copias de datos de clientes.

El plugin prepara propuestas basadas en fuentes. Las acciones de crear, confirmar, enviar o pagar requieren solicitud y aprobación del usuario, además de los permisos de la plataforma y de incwo. Las habilidades conservan el idioma del usuario y los datos de origen.

## Instalar y comprobar

Publique o instale esta carpeta desde una fuente de plugins compatible con Agent Plugins. Conecte después el servidor MCP incwo con su propia cuenta mediante el flujo de autenticación del cliente. Compruebe las herramientas visibles y pruebe primero una lectura de presupuesto. Ejecute npm test para validar la estructura local.

Los [dots pueden usar plugins autorizados](https://learn.chatgpt.com/docs/dots), pero publicar este repositorio en GitHub no lo incorpora automáticamente al directorio público de OpenAI. La conexión, los permisos, el despliegue y el funcionamiento en un dot real aún deben probarse con una cuenta apta. Este repositorio no sustituye las protecciones nativas de ChatGPT o incwo.

Licencia MIT.
