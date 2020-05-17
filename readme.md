<h3> Como fazer o build do server: </h3>

<h5> Instale as dependencias: </h5>

<p>Comando make install_packages</p>

<h5> Rodar o servidor </h5>

<p>Pode usar no modo normal: make run_server <br /> ou no modo dev: make run_server_dev </p>

<h3> Fazer as requisições: </h3>

<p> A url do server é localhost:4000. </br></p>
<p>Temos as seguintes rotas: </p>
<ul>
    <li> Requisição post: /login - Realizar o login(parâmetros do corpo: user e pass)
    <li> Requisição post: /register - Cria um novo usuário(parametros do corpo: username, email, password, address)
    </li>
    <li> Requisição delete : /:username - Deleta um usuário do array de usuários (parametros de params: username)
</ul>