export const projetos = [
    {
        nome: "D&D",
        bannerlist: "https://placehold.co/300x150",
        registro: "",
        link: "http://linkdoprojA.com",
        categoria: ["D&D", "Aventura", "Sombrio"],
        palavraschave: ["D&D", "Aventura", "Sombrio"],
        premium: true,
        plataforma: "Web",
        sistema: "Tormenta",
        nsfw: false,
        nota: "5.0",
        criado: "2017-01-01",
    },
    {
        nome: "Pathfinder",
        bannerlist: "https://placehold.co/300x150",
        registro: "",
        link: "http://linkdoprojB.com",
        categoria: ["Pathfinder", "Aventura"],
        palavraschave: ["Pathfinder", "Aventura"],
        premium: false,
        plataforma: "Tabletop",
        sistema: "Pathfinder",
        nsfw: true,
        foundericon: "https://placehold.co/150x150",
        fundador: "Fundador B",
        plot: "Descrição do Projeto B",
        nota: "4.5",
        criado: "2019-06-15",
    },
    // Adicione mais projetos conforme necessário
];

document.addEventListener('DOMContentLoaded', () => {
    const rpgHype = document.querySelector('.rpg-hype');
    const rpgNew = document.querySelector('.rpg-new');
    const rpgExplore = document.querySelector('.rpg-explore');

    if (rpgHype && rpgNew && rpgExplore) {
        // Ordena os projetos por nota e pega os 10 primeiros
        const topRatedProjects = [...projetos]
            .sort((a, b) => b.nota - a.nota)
            .slice(0, 10);

        // Ordena os projetos por data de criação e pega os 10 primeiros
        const recentProjects = [...projetos]
            .sort((a, b) => new Date(b.criado) - new Date(a.criado))
            .slice(0, 10);

        // Pega os projetos restantes que não estão em topRatedProjects ou recentProjects
        const exploreProjects = projetos.filter(projeto => 
            !topRatedProjects.includes(projeto) && !recentProjects.includes(projeto)
        );

        // Função para criar o HTML dos projetos
        const createProjectHTML = (projeto) => `
            <div class="forum-click nsfw-${projeto.nsfw ? 'y' : 'n'} premium-${projeto.premium ? 'y' : 'n'}">
                <a href="${projeto.link}">
                    <img src="${projeto.bannerlist}" alt="${projeto.nome}" />
                    <h3>${projeto.nome}</h3>
                </a>
            </div>
        `;

        // Adiciona os projetos em suas respectivas seções
        topRatedProjects.forEach(projeto => {
            rpgHype.innerHTML += createProjectHTML(projeto);
        });

        recentProjects.forEach(projeto => {
            rpgNew.innerHTML += createProjectHTML(projeto);
        });

        exploreProjects.forEach(projeto => {
            rpgExplore.innerHTML += createProjectHTML(projeto);
        });
    }
});
