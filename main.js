// Agrega el script del chat en vivo de Pulse dinámicamente
(function() {
    const script = document.createElement('script');
    script.src = "https://cdn.pulse.is/livechat/loader.js";
    script.setAttribute('data-live-chat-id', '673a28ba58597f3219085d3c');
    script.async = true;
    document.body.appendChild(script);
})();