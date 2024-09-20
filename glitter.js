document.querySelectorAll('.glitterButton').forEach(button => {
    button.addEventListener('click', () => {
        const container = document.getElementById('glitterContainer');
        
        // Remove glitter antigo
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Adiciona novos efeitos de glitter
        for (let i = 0; i < 100; i++) {
            const glitter = document.createElement('div');
            glitter.className = 'glitter';
            glitter.style.left = `${Math.random() * 100}vw`;
            glitter.style.top = `${Math.random() * 100}vh`;
            glitter.style.width = `${Math.random() * 10 + 5}px`;
            glitter.style.height = glitter.style.width;
            glitter.style.backgroundColor = `rgba(255, 255, 255, ${Math.random()})`;
            container.appendChild(glitter);

            // Remove glitter depois de um tempo
            setTimeout(() => {
                glitter.remove();
            }, 1000);
        }
    });
});

