function DarkMode() {
    const edit = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const email = document.getElementById('email');
    const botaoEnviarLink = document.querySelectorAll('.botao-enviar-link');
    const acessibilityPanel = document.querySelector('.acessibility-panel');

    edit.classList.toggle('dark-mode');
    edit.style.backgroundColor = '#121212';
    acessibilityPanel.style.backgroundColor = 'rgba(199, 200, 202, 0.090)';
    iconeDm.style.display = 'none';
    iconeLtm.style.display = 'block';
    logomarcaLt.style.display = 'none';
    logomarcaDm.style.display = 'block';
    email.style.color = 'white';
    email.style.background = "url('../imagens/icones-pagina-registro/icone-email-dm.svg') no-repeat left";
    email.style.backgroundPosition = '10px';
    email.style.backgroundSize = '14px';
    botaoEnviarLink[0].style.backgroundImage = 'url(../imagens/icone-botoes/paper-plane-solid-dm.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'none';
    botaoAbaixarZoom.style.display =  'none';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'block';
    botaoAbaixarZoomDm.style.display = 'block';

}

function LightMode() {
    const edit = document.body;
    const iconeLtm = document.getElementById('btnLightMode');
    const iconeDm = document.getElementById('btnDarkMode');
    const logomarcaLt = document.getElementById('logomarca');
    const logomarcaDm = document.getElementById('logomarca-dark-mode');
    const botoesAumentarZoom = document.querySelectorAll('.acessibilidade-mais');
    const botoesAbaixarZoom = document.querySelectorAll('.acessibilidade-menos');
    const email = document.getElementById('email');
    const botaoEnviarLink = document.querySelectorAll('.botao-enviar-link');
    const acessibilityPanel = document.querySelector('.acessibility-panel');

    edit.classList.toggle('dark-mode');
    edit.style.backgroundColor = 'white';
    acessibilityPanel.style.backgroundColor = 'rgba(23, 50, 118, 0.11)';
    iconeDm.style.display = 'block';
    iconeLtm.style.display = 'none';
    logomarcaLt.style.display = 'block';
    logomarcaDm.style.display = 'none';
    email.style.color = 'black';
    email.style.background = "url('../imagens/icones-pagina-registro/icone-email.svg') no-repeat left";
    email.style.backgroundPosition = '10px';
    email.style.backgroundSize = '14px';
    botaoEnviarLink[0].style.backgroundImage = 'url(../imagens/icone-botoes/paper-plane-solid.svg)';
    

    const botaoAumentarZoom = botoesAumentarZoom[0];
    const botaoAbaixarZoom = botoesAbaixarZoom[0];

    botaoAumentarZoom.style.display = 'block';
    botaoAbaixarZoom.style.display =  'block';

    const botaoAumentarZoomLt = botoesAumentarZoom[1];
    const botaoAbaixarZoomDm = botoesAbaixarZoom[1];

    botaoAumentarZoomLt.style.display = 'none';
    botaoAbaixarZoomDm.style.display = 'none';

}