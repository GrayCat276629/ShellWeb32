function createSnow() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
            snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
            snowflake.style.opacity = Math.random() * 0.5 + 0.3;
            document.body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 10000);
        }

        setInterval(createSnow, 200);
const style = document.createElement("style");

style.innerHTML = ` .snowflake {
        position: fixed;
        color: white;
        font-size: 14px;
        top: -20px;
        animation: fall linear infinite;
        opacity: 0.8;
        pointer-events: none;
        z-index: 0;
    }

    @keyframes fall {
        to {
            transform: translateY(105vh) rotate(360deg);
        }
    }`;
