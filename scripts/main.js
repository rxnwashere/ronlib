let english = true;
let spanish = false;
let catalan = false;

function updateLanguage(selectedLanguage) {

    english = selectedLanguage === "english";
    spanish = selectedLanguage === "spanish";
    catalan = selectedLanguage === "catalan";

    if (spanish) {
        document.getElementById('subtitle').innerText = 'Mi portfolio en un repositorio de GitHub :)';
        document.getElementById('disclaimer').innerHTML = '<a href="https://github.com/rxnwashere/ronlib/blob/main/README.md">ADVERTENCIA</a>';
        document.getElementById('title1').innerText = '¿Qué es Ron Lib?';
        document.getElementById('title2').innerText = 'Sobre mí';
        document.getElementById('p1').innerHTML = '<p>Ron Lib es un repositorio de GitHub donde publico mis proyectos personales <br> y permitir a otros usuarios descargarlos y utilizarlos de acuerdo con la advertencia en <br> <a href="README.md">README.md</a>, así que por favor, utilizad correctamente mi trabajo, <br> si publicas una modificación de mi proyecto por favor, dame créditos.</p>';
        document.getElementById('p2').innerHTML = 'Soy Aaron Cano (conocido como rxnwashere en internet), un joven español <br> técnico informático y estudiante de desarrollo web.';
        document.getElementById('p3').innerHTML = 'Estudié formación profesional de grado medio en sistemas microinformáticos y redes <br> durante 2 años para ser técnico informático.';
        document.getElementById('p4').innerHTML = 'En estos 2 años aprendí todas las nociones básicas sobre hardware, software, sistemas operativos, <br> software de oficina, redes, dominios y diferentes servicios de red, <br> programación y diseño y desarrollo web.';
        document.getElementById('p5').innerHTML = 'Debido a que soy una persona autodidacta, en mi tiempo libre creo diferentes proyectos pequeños <br> que me ayudan a mejorar mis habilidades como técnico informático, programador <br> y desarrollador web.';
        document.getElementById('p6').innerHTML = 'Esa es la razón detrás de la creación de Ron Lib, un lugar donde publicar <br> mis proyectos de clase y los mios propios, y permitir que cualquiera los descargue, <br> siempre dándome créditos.';
        document.getElementById('langtitle').innerText = 'Selecciona el idioma';
    }

    else if (catalan) {
        document.getElementById('subtitle').innerText = 'El meu portfoli en un repositori de GitHub :)';
        document.getElementById('disclaimer').innerHTML = '<a href="https://github.com/rxnwashere/ronlib/blob/main/README.md">AVÍS</a>';
        document.getElementById('title1').innerText = 'Què és Ron Lib?';
        document.getElementById('title2').innerText = 'Sobre mi';
        document.getElementById('p1').innerHTML = '<p>Ron Lib és un repositori de GitHub on publico els meus projectes personals <br> i permeto que altres usuaris els descarreguin i els utilitzin d\'acord amb l\'avís a <br> <a href="README.md">README.md</a>, així que, si us plau, utilitzeu correctament la meva feina, <br> si publiques una modificació del meu projecte, dona\'m crèdit.</p>';
        document.getElementById('p2').innerHTML = 'Soc l\'Aaron Cano (conegut com rxnwashere a internet), un jove espanyol <br> tècnic informàtic i estudiant de desenvolupament web.';
        document.getElementById('p3').innerHTML = 'Vaig estudiar formació professional de grau mitjà en sistemes microinformàtics i xarxes <br> durant 2 anys per ser tècnic informàtic.';
        document.getElementById('p4').innerHTML = 'En aquests 2 anys vaig aprendre totes les nocions bàsiques sobre maquinari, programari, sistemes operatius, <br> programari d\'oficina, xarxes, dominis i diferents serveis de xarxa, <br> programació i disseny i desenvolupament web.';
        document.getElementById('p5').innerHTML = 'Com que soc una persona autodidacta, en el meu temps lliure creo diferents petits projectes <br> que m\'ajuden a millorar les meves habilitats com a tècnic informàtic, programador <br> i desenvolupador web.';
        document.getElementById('p6').innerHTML = 'Aquesta és la raó darrere de la creació de Ron Lib, un lloc on publicar <br> els meus projectes de classe i els meus propis, i permetre que qualsevol els descarregui, <br> sempre donant-me crèdit.';
        document.getElementById('langtitle').innerText = 'Selecciona l\'idioma';
    }

    else {
        document.getElementById('subtitle').innerText = 'My portfolio in a GitHub repository :)';
        document.getElementById('disclaimer').innerHTML = '<a href="https://github.com/rxnwashere/ronlib/blob/main/README.md">DISCLAIMER</a>';
        document.getElementById('title1').innerText = 'What is Ron Lib?';
        document.getElementById('title2').innerText = 'About me';
        document.getElementById('p1').innerHTML = 'Ron Lib is a GitHub repository where I post my personal projects <br> and allow other users to download them and use them according to <br> the disclaimer in <a href="README.md">README.md</a>, so please, <br> use appropriately my work, if you post a modification of my project <br> please give me credits.';
        document.getElementById('p2').innerHTML = 'I\'m Aaron Cano (known as rxnwashere on the internet), a young Spanish <br> computer technician and web development student.';
        document.getElementById('p3').innerHTML = 'I studied Microinformatic Systems and Networks Vocational Course <br> for 2 years to become a computer technician.';
        document.getElementById('p4').innerHTML = 'In these 2 years I learnt all the basic notions about hardware, software, OS\'s, <br> office software, networks, domain and different network services, coding and <br> web design and development.';
        document.getElementById('p5').innerHTML = 'Due to being an autodidact, in my free time I make different little projects <br> that help me improve my skills as a computer technician and as a programmer <br> and web developer.';
        document.getElementById('p6').innerHTML = 'That\'s the reason behind the creation of Ron Lib, a place where I can upload <br> my class projects and my own ones, and allow everyone to download them, <br> always giving credits to me.';
        document.getElementById('langtitle').innerText = 'Select language';
    }
}
