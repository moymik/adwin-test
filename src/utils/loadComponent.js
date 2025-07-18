// utils/loadComponent.js
export async function loadComponent(componentName) {
    const response = await fetch(`/src/components/${componentName}/${componentName}.html`);
    return await response.text();
}