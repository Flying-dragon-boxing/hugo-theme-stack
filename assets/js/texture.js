/* Configurable material with an optional comparison preview. */
(() => {
    const script = document.currentScript;
    const requested = new URLSearchParams(location.search).get('texture-demo');
    const modes = ['paper', 'glass', 'original'];
    const preview = modes.includes(requested);
    const initial = preview ? requested : script.dataset.default;
    if (!modes.includes(initial) || (initial === 'original' && !preview)) return;
    const root = document.documentElement;
    root.dataset.texture = initial;
    if (preview) root.dataset.texturePreview = 'true';
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = script.dataset.stylesheet;
    document.head.appendChild(css);

    document.addEventListener('DOMContentLoaded', () => {
        if (!preview) return;
        const panel = document.createElement('nav');
        panel.className = 'texture-demo-controls';
        panel.setAttribute('aria-label', '材质预览切换');
        const label = document.createElement('span');
        label.textContent = '材质预览';
        panel.appendChild(label);
        const buttons = [];
        const select = (mode) => {
            root.dataset.texture = mode;
            buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
            const url = new URL(location.href);
            url.searchParams.set('texture-demo', mode);
            history.replaceState(null, '', url);
        };
        modes.forEach((mode, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.dataset.mode = mode;
            button.textContent = ['暖纸', '毛玻璃', '原版'][index];
            button.addEventListener('click', () => select(mode));
            buttons.push(button);
            panel.appendChild(button);
        });
        document.body.appendChild(panel);
        select(initial);
        // Carry the chosen material into articles, archives, and search results.
        document.addEventListener('click', event => {
            const anchor = event.target.closest('a[href]');
            if (!anchor || anchor.hasAttribute('download')) return;
            const url = new URL(anchor.href, location.href);
            if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return;
            if (url.pathname === location.pathname && url.hash) return;
            url.searchParams.set('texture-demo', root.dataset.texture);
            anchor.href = url.href;
        });
        document.addEventListener('submit', event => {
            const form = event.target;
            if (!(form instanceof HTMLFormElement) || form.method.toLowerCase() !== 'get') return;
            const url = new URL(form.action, location.href);
            if (url.origin !== location.origin) return;
            let input = form.querySelector('input[name="texture-demo"]');
            if (!input) {
                input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'texture-demo';
                form.appendChild(input);
            }
            input.value = root.dataset.texture;
        });
    });
})();
