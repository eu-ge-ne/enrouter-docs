# \_fallback.tsx

The `\_fallback.tsx` module defines **fallback components** that are rendered by
[Outlets](/docs/components/outlet).

Fallback modules must `export default` an object containing the fallback components.

Outlets dynamically select components for rendering based on their names.
The keys in the exported object serve as component names, creating a connection
between the components and the corresponding Outlets.
