# \_fallback.tsx

The `_fallback.tsx` module defines fallback components rendered by [Outlets][1].

Fallback modules must `export default` an object containing these fallback components.

Outlets dynamically select components to render based on their names.
The keys in the exported object serve as component names, linking the components to the corresponding Outlets.

[1]: /docs/components/outlet
