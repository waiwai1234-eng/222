document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let canvasRect;

    function resizeCanvas() {
        const container = document.getElementById('gameContainer');
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        canvasRect = canvas.getBoundingClientRect();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let state = {
        player: { x: canvas.width / 2, y: canvas.height / 2, size: 30 },
        timeBalance: 30,
        debt: 0,
        isTimeStop: false,
        level: 1
    };

    document.addEventListener("touchmove", (e) => {
        if (!gameStarted) return;
        const touch = e.touches[0];
        state.player.x = touch.clientX - canvasRect.left;
        state.player.y = touch.clientY - canvasRect.top;

        state.player.x = Math.max(15, Math.min(canvas.width - 15, state.player.x));
        state.player.y = Math.max(15, Math.min(canvas.height - 15, state.player.y));

        e.preventDefault();
    }, { passive: false });
});
