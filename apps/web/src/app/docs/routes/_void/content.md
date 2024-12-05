# \_void.tsx

The `\_void.tsx` module defines **void components** that are rendered by
[Outlets](/docs/components/outlet).

Void modules must `export default` an object containing the void components.

Outlets dynamically select components for rendering based on their names.
The keys in the exported object serve as component names, creating a connection
between the components and the corresponding Outlets.
