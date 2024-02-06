if (location.href.endsWith('.html')) {
    history.replaceState(null, null, location.href.slice(0, -5));
}