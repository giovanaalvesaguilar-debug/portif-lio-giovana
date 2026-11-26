
document.addEventListener("DOMContentLoaded", function () {

    emailjs.init({
        publicKey: "UyVZLQYIpljgZDEzL"
    });

    const formulario = document.getElementById("form-contato");

    if (!formulario) {
        console.error("Formulário não encontrado!");
        return;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        emailjs.send("service_yo3ywzg", "template_p49xxqd", {
            name: nome,
            email: email,
            message: mensagem,
            time: new Date().toLocaleString("pt-BR")
        })
        .then(function () {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        })
        .catch(function (erro) {
            console.error("Erro ao enviar:", erro);
            alert("Não foi possível enviar. Tente novamente.");
        });

    });

});

