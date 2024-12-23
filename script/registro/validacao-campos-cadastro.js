// Seleção de elementos e regex
const btnRegister = document.querySelector('.botao-de-cadastrar-usuario');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cpfRegex = /(\d{3})[\.\s]?(\d{3})[\.\s]?(\d{3})[-\s]?(\d{2})/gm;
const estadosBrasil = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
    "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
    "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
    "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
    "São Paulo", "Sergipe", "Tocantins"
];

// Funções de erro
function setError(index) {
    spans[index].style.display = 'block';
    spans[index].style.color = 'rgb(171, 67, 67)';
}

function removeError(index) {
    spans[index].style.display = 'none';
}

// Validações individuais
function nameValidate() {
    campos[0].value.length < 15 ? setError(0) : removeError(0);
}

function emailValidate() {
    emailRegex.test(campos[1].value) ? removeError(1) : setError(1);
}

function dateValidate() {
    const birthDate = new Date(campos[2].value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    age < 18 ? setError(2) : removeError(2);
}

function sexoValidate() {
    const sexo = document.getElementById('sexo').value;
    (sexo === "masculino" || sexo === "feminino") ? removeError(3) : setError(3);
}

function cpfValidate() {
    const cpfValue = campos[4].value.replace(/\D/g, '');
    cpfValue.length === 11 ? removeError(4) : setError(4);
}

function celValidate() {
    const numeros = document.getElementById('celular').value.replace(/\D/g, '');
    numeros.length >= 13 ? removeError(5) : setError(5);
}

function cepValidate() {
    const cep = campos[6].value.replace(/\D/g, '');
    cep.length >= 8 ? removeError(6) : setError(6);
}

function ruaValidate() {
    campos[7].value.length < 3 ? setError(7) : removeError(7);
}

function estadoValidate() {
    estadosBrasil.includes(campos[8].value.trim()) ? removeError(8) : setError(8);
}

function cidadeValidate() {
    campos[9].value.length < 3 ? setError(9) : removeError(9);
}

function numeroValidate() {
    campos[10].value < 0 ? setError(10) : removeError(10);
}

function bairroValidate() {
    campos[11].value.length < 3 ? setError(11) : removeError(11);
}

function loginValidate() {
    campos[12].value.length < 6 ? setError(12) : removeError(12);
}

function senhaValidate() {
    campos[13].value.length < 8 ? setError(13) : removeError(13);
}

function confirmarsenhaValidate() {
    campos[14].value !== campos[13].value ? setError(14) : removeError(14);
}

function userRoleValidate() {
    !campos[15].checked && !campos[16].checked ? setError(15) : removeError(15);
}

function userPrestadorRoleValidate() {
    campos[16].checked && campos[17].value === '' ? setError(16) : removeError(16);
}

function redirect() {
  
}

// Evento de submit do formulário
btnRegister.addEventListener('click', (event) => {
    // Execução de validações
    nameValidate();
    emailValidate();
    dateValidate();
    sexoValidate();
    cpfValidate();
    celValidate();
    cepValidate();
    ruaValidate();
    estadoValidate();
    cidadeValidate();
    numeroValidate();
    bairroValidate();
    loginValidate();
    senhaValidate();
    confirmarsenhaValidate();
    userRoleValidate();
    userPrestadorRoleValidate();
    // Verificação de erros
    const temErro = Array.from(spans).some(span => span.style.display === 'block');
    if (temErro) {
        event.preventDefault();
    } else {
        const userEmail = JSON.stringify(campos[1].value);
        const userPassword = JSON.stringify(campos[13].value);

        if (campos[15].checked) {
            const userRole = campos[15].checked.value = 'contratante'; 
            localStorage.setItem("userRole", userRole);
        } else {
            const userRole = campos[16].checked.value = 'prestador';
            localStorage.setItem("userRole", userRole);
        }

        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userPassword", userPassword);

        window.location.href = "../../paginas/cadastro-bem-sucedido.html";
    }
});