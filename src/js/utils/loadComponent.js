export async function loadComponent(name) {
    // В dev-режиме берем из src, в production - из корня
    const path = import.meta.env.DEV
        ? `/src/components/${name}/${name}.html`
        : `/${name}.html`;

    try {
        const response = await fetch(path);
        return await response.text();
    } catch {
        return `<div>Ошибка загрузки ${name}</div>`;
    }
}