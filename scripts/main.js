import { projetos } from './foruns.js';

document.addEventListener('DOMContentLoaded', () => {
    const rpgList = document.getElementById('rpg-list');

    if (rpgList) {
        projetos.forEach(projeto => {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <h3>${projeto.nome}</h3>
                <p><a href="${projeto.link}" target="_blank">Link</a></p>
                <p>Categorias: ${projeto.categoria.join(", ")}</p>
                <p>Plataforma: ${projeto.plataforma}</p>
                <p>NSFW: ${projeto.nsfw ? 'Sim' : 'Não'}</p>
                <p>Fundador: ${projeto.fundador}</p>
                <p>Plot: ${projeto.plot}</p>
                <p>Sistema: ${projeto.sistema}</p>
            `;
            rpgList.appendChild(listItem);
        });
    }
});
