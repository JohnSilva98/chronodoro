export function loadBeep() {
    // Usar caminho da pasta public para evitar erro de módulo
    const beep = new Audio('/audios/gravitational_beep.mp3');
    beep.load();

    return () => {
        beep.currentTime = 0;
        beep.play();
    }
}
