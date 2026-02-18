🛒 _Carrito de Compras con Context API_

Mini proyecto desarrollado con React utilizando Context API para manejo de estado global.

Este proyecto simula el comportamiento básico de un carrito de compras como en un e-commerce real.

🚀 _Tecnologías utilizadas_

- React

- Context API

- useState

- Custom Hooks

- JavaScript (ES6+)

🎯 _Objetivo del Proyecto_

Aprender a:

- Crear y usar createContext

- Implementar un Provider

- Consumir estado global con useContext

- Evitar prop drilling

- Manejar lógica de carrito (agregar, aumentar, disminuir cantidades)

- Manipular arrays de manera inmutable

🧠 _Funcionalidades_
✅ **Agregar producto al carrito**

- Si el producto no existe → se agrega con cantidad 1

- Si ya existe → aumenta la cantidad

➕ Aumentar cantidad

Incrementa la cantidad de un producto existente.

➖ Disminuir cantidad

Reduce la cantidad.
Si la cantidad llega a 0 → se elimina automáticamente del carrito.

🗑 Eliminación automática

Cuando la cantidad es 0, el producto desaparece del carrito.

📈 _Posibles Mejoras Futuras_

- 💰 Agregar precio a productos

- 🧮 Calcular total automático del carrito

- 💾 Persistencia en localStorage

- ⚙ Migrar a useReducer

- 🎨 Mejorar diseño UI

- 🧾 Agregar sistema de checkout

👨‍💻 **Autor**

Desarrollado por **[Jose Guillermo]**

📧 Email: darlinguillermo@gmail.com
