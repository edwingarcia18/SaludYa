// Agrega el script del chat en vivo de Pulse dinámicamente
(function() {
    const script = document.createElement('script');
    script.src = "https://cdn.pulse.is/livechat/loader.js";
    script.setAttribute('data-live-chat-id', '673d68560a38b32196066027');
    script.async = true;
    document.body.appendChild(script);
})();
