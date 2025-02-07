<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Clínica Plus Salud</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="script.js"></script>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background-color: #002f6c;
            color: white;
            text-align: center;
            padding: 20px;
        }
        nav {
            background-color: #004080;
            padding: 10px;
        }
        nav ul {
            list-style: none;
            padding: 0;
            text-align: center;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
        section {
            padding: 20px;
            margin: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .doctor {
            display: inline-block;
            text-align: center;
            margin: 10px;
        }
        .doctor img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        #chat-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #004080;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        #chat-box {
            position: fixed;
            bottom: 60px;
            right: 20px;
            background: white;
            padding: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            display: none;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bienvenidos a La Clínica Plus Salud</h1>
        <p>Tu bienestar es nuestra prioridad.</p>
    </header>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#equipo">Equipo Médico</a></li>
            <li><a href="#horarios">Horarios</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
    <section id="servicios">
        <h2>Servicios</h2>
        <ul>
            <li>Medicina Interna: Electrocardiograma, Evaluación preoperatoria...</li>
            <li>Nutrición: Consulta nutricional, Plan alimenticio...</li>
        </ul>
    </section>
    <section id="equipo">
        <h2>Equipo Médico</h2>
        <div class="doctor"><img src="Image1.jpg" alt="Dra. Rosa Sierra"><p>Dra. Rosa Sierra</p></div>
        <div class="doctor"><img src="Image2.jpg" alt="Dr. Kevin Molina"><p>Dr. Kevin Molina</p></div>
        <div class="doctor"><img src="Image3.jpg" alt="Dra Alejandra Flores"><p>Dra Alejandra Flores</p></div>
        <div class="doctor"><img src="Image4.jpg" alt="Genesis Duron"><p>Genesis Duron</p></div>
    </section>
    <section id="horarios">
        <h2>Horarios</h2>
        <p>Lunes a Viernes: 6:30 am - 4:00 pm</p>
        <p>Sábados y Domingos: 7:00 am - 12:00 pm</p>
    </section>
    <section id="ubicacion">
        <h2>Ubicación</h2>
        <p>Col. Las Minitas, Avenida Juan Lindo, Edificio Millenium II Health Center, Piso No. 3, Clínica No. 318</p>
    </section>
    <section id="contacto">
        <h2>Contacto</h2>
        <p>Email: <a href="mailto:plusalud.info@gmail.com">plusalud.info@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/50487655578">+504-87655578</a></p>
        <p><a href="https://facebook.com/plussaludhn">Facebook</a> | <a href="https://instagram.com/plussaludhn">Instagram</a></p>
    </section>
    <button id="chat-btn">Chat en vivo</button>
    <div id="chat-box" class="hidden">
        <p>Hola, ¿cómo podemos ayudarte?</p>
        <input type="text" id="name" placeholder="Nombre">
        <input type="text" id="phone" placeholder="Celular">
        <input type="email" id="email" placeholder="Correo">
        <button id="send-btn">Enviar</button>
    </div>
    <script>
        document.getElementById("chat-btn").addEventListener("click", function() {
            document.getElementById("chat-box").classList.toggle("hidden");
        });
        document.getElementById("send-btn").addEventListener("click", function() {
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let message = `Nombre: ${name}%0D%0A Celular: ${phone}%0D%0A Correo: ${email}`;
            window.location.href = `mailto:plusalud.infomail.com?subject=Consulta desde la web&body=${message}`;
            alert("Información enviada correctamente");
            document.getElementById("chat-box").classList.add("hidden");
        });
    </script>
</body>
</html>
