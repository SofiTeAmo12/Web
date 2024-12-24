var eventos = [
    {
        imagen: 'imagenes/sofi y yo en quebrada.png',
        descripcion: 'Aquel día en la quebrada nos conocimos mucho más, hablamos de nuestras vidas y de lo que queriamos hacer en el futuro, cada vez me enamoraba más de ti porque teniamos muchas cosas en común para aquellos tiempos. Fuera de la quebrada tuvimos una conversación super chevere acerca de la vida y la evolución, es una de las conversaciones más cheveres que hemos tenido y de las que recuerdo perfectamente por lo especial que fue.'
    },
    {
        imagen: 'imagenes/sofi en caballo.jpg',
        descripcion: 'Despues de bañarnos en la quebrada nos pusimos a montar en caballo y nos tomaron varias fotos con mi celular, afortunadamente tengo esta y otra que siempre voy a atesorar con mucho amor. '
    },
    {
        imagen: 'imagenes/collage notas.png',
        descripcion: 'Noteit fue la mejor aplicación que tuvimos juntos, nos haciamos muchisimas notas incluso tuvimos una racha de como de 2 meses, yo amaba cada nota que me hacias e igualmente me esforzaba demasidao haciendote cada nota. En esas notitas está reflejado todo el amor que siento por ti mi cielo.'
    },
    {
        imagen: 'imagenes/sofi desfile.jpg',
        descripcion: 'Quizás para ti no es tan importante este momento, pero para mi lo fue bastante porque te volví a ver despues de muchisimo tiempo y pude estar cerca de ti, respirar el mismo aire mvd. Fue muy emotivo para mi volver a verte y justo verte haciendo lo que a ti más te gusta, bailar.'
    },
    {
        imagen: 'imagenes/collage niños.png',
        descripcion: 'Quiero formar mi familia contigo sofi y obviamente uno piensa en los genes antes de pensar en familia ajajsj, pero dejame decirte que tu eres la mujer perfecta para ser la futura madre de mis hijos. Juntos tendríamos los niños mas hermosos e inteligentes, y pues la simple idea de formar algo así contigo me toca el corazón y de verdad que lo quiero dar todo por ti mi sofi. '
    },
    {
        imagen: 'imagenes/mensaje cumpleaños.png',
        descripcion: 'Este recuerdito no es solo por el mensaje de cumpleaños, juntos nos hemos enviado demasidos mensajes lindos y ojalá pudiera volver a leerlos todos, porque tus palabras son las más lindas que he recibido en toda mi vida mi sofi, cada frase, palabra y cada letra tuya me llega al corazón mi cielo. '
    },
    {
        imagen: 'imagenes/mensaje aniversario 3.jpg',
        descripcion: 'Creo que con este untimo recuerdo lindo termino, me haz dado los mejores 3 años de mi vida sofi, 3 años de las mejores y las peores emociones pero que siempre atesoraré con mi corazón.  '
    },
];
// Abrir el modal
function openModal(index) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalCaption = document.getElementById('modalCaption');
    modalImage.src = eventos[index].imagen;
    modalCaption.textContent = eventos[index].descripcion;
    modal.style.display = 'flex';
}
// Cerrar el modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
// Abrir el modal del collage
document.getElementById('openCollageModal').addEventListener('click', function() {
    var collageModal = document.getElementById('collageModal');
    collageModal.style.display = 'flex';
});
// Cerrar el modal del collage
function closeCollageModal() {
    var collageModal = document.getElementById('collageModal');
    collageModal.style.display = 'none';
}