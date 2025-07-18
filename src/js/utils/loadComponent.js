// utils/loadComponent.js
export async function loadComponent(componentName) {
    const response = await fetch(`src/components/${componentName}/${componentName}.html`,
        {
            mode: 'cors',
            headers: {
                'Content-Type': 'text/html'
            }
        });
    return await response.text();
}