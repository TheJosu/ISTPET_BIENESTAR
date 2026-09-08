// 60 Preguntas del IPPJ
const questions = [
    "Me gusta realizar pequeñas reparaciones de equipos electrodomésticos.", "El trabajo científico me parece muy interesante.",
    "Sé tocar un instrumento musical o me gustaría aprender.", "Me gustaría cuidar personas con enfermedades mentales.",
    "Me siento bien y me las arreglo cuando tengo que organizar el trabajo de mis compañeros y compañeras.", "Me gusta llevar mis cuadernos de manera ordenada y limpia.",
    "Me gustaría trabajar en el servicio técnico de una empresa.", "Me gustaría trabajar en un centro de investigación o en un laboratorio.",
    "En el futuro me gustaría escribir poemas, guiones de películas o de juegos de video.", "Me gusta mucho participar en organizaciones no gubernamentales como la Cruz Roja.",
    "A veces en la escuela soluciono conflictos de mis compañeros y compañeras.", "En mi puesto de trabajo me gustaría trabajar según normas estrictamente definidas.",
    "Me interesan los aspectos técnicos de la industria automotriz.", "Me interesan los descubrimientos científicos y las nuevas invenciones.",
    "Me gusta ver exposiciones de esculturas, pintura o fotografía.", "Me gusta participar en labores sociales.",
    "En las actividades de grupo fomento el liderazgo y la coordinación.", "Me gustaría tener un trabajo donde tenga que realizar tareas muy precisas.",
    "Dibujar esquemas o proyectos de equipos es una tarea interesante y agradable para mi.", "Me gusta hacer experimentos y observar cómo se hacen.",
    "Me gusta participar en clases de arte, música o de literatura.", "Me sentiría bien ayudando a las demás personas a comprenderse.",
    "Me gusta tomar la palabra en diferentes discusiones y convencer a la gente.", "Me gusta respetar y cumplir las fechas límites.",
    "En el futuro me gustaría trabajar con herramientas y equipos técnicos.", "Me gusta ver los programas de televisión dedicados a las novedades científicas.",
    "Me interesan las revistas dedicadas al arte, a los muebles y a la arquitectura.", "Con muchas ganas y gran dedicación enseñaría a jóvenes cómo evitar ciertas adicciones.",
    "Me gustaría liderar un grupo de mis compañeros para organizar una fiesta escolar.", "Me gustaría tener un trabajo tranquilo, con reglas o instrucciones claras.",
    "Conozco el diseño y el funcionamiento del computador.", "Cuando paseo en las montañas o en un bosque me detengo para ver plantas y árboles.",
    "Me gustaría tocar en un grupo musical o en una orquesta.", "En el futuro me gustaría trabajar con niños y niñas.",
    "Sé dar instrucciones y consejos claros a las demás personas.", "Por las tardes me gusta planear el trabajo que tengo que hacer al día siguiente.",
    "Me gustaría trabajar en un taller de mecánica automotriz.", "Me interesan nuevas ramas de la ciencia, como la genética o la biotecnología.",
    "Me gustaría crear o componer algún tipo de música.", "Me gustaría ayudar a la gente a resolver sus problemas sociales.",
    "Me gustaría desempeñar la presidencia de mi clase.", "En mi mesa de estudios me gusta tener todo perfectamente ordenado.",
    "Me gustaría aprender a hacer dibujos técnicos.", "Me gustaría realizar estudios y descubrir la vacuna contra una enfermedad grave.",
    "Me gustaría hacer dibujos para libros o crear carteles.", "En mi futuro trabajo me gustaría ayudar a personas con discapacidades.",
    "Me gustaría tener un trabajo donde pudiera tomar decisiones y planear acciones.", "Me gusta planificar y controlar bien mis gastos.",
    "Me gusta aprender cómo funcionan los equipos técnicos.", "Me gustaría realizar estudios sobre el funcionamiento del cerebro.",
    "En el futuro me gustaría expresarme mediante una actividad creativa.", "Me gustaría trabajar en un centro de ayuda telefónica para jóvenes.",
    "Me gustaría aprender a liderar a la gente para gestionar sus acciones.", "Me gusta tener ordenada mi habitación y mi mesa de estudios.",
    "Me gustaría diseñar o arreglar máquinas y equipos modernos.", "Me interesan nuevas ramas de la ciencia y la tecnología.",
    "Me gustaría actuar en un escenario: bailar, cantar e interpretar papeles.", "Me sentiría bien ayudando a personas nerviosas o tristes por algún motivo.",
    "Me gusta dirigir el trabajo de las demás personas.", "Me gusta organizar mi trabajo día a día y para la semana."
];

let currentQuestionIndex = 0;
let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
let currentStudent = { name: '', age: '' };

const screenRegister = document.getElementById('screen-register');
const screenTest = document.getElementById('screen-test');
const screenAdmin = document.getElementById('screen-admin');
const formRegister = document.getElementById('form-register');
const questionText = document.getElementById('question-text');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const btnNext = document.getElementById('btn-next');
const radioInputs = document.querySelectorAll('input[name="answer"]');

const dimensionsNames = ['R', 'I', 'A', 'S', 'E', 'C'];
const fullDimensions = {
    'R': 'Realista', 'I': 'Investigador', 'A': 'Artístico',
    'S': 'Social', 'E': 'Emprendedor', 'C': 'Convencional'
};
const profileDescriptions = {
    'R': "La personalidad realista hace referencia a aquel patrón de conducta y pensamiento que tiende a ver el mundo como un todo objetivo y concreto. Se toman el mundo como les viene. Suelen ser realistas, dinámicos, materiales y aunque no son asociales el contacto con los demás no es para ellos lo más prioritario. También suelen ser pacientes y constantes.\n\nEste tipo de personalidades tienden a sentirse más a gusto desempeñando trabajos directos, con fuertes componentes prácticos y que exijan cierta motricidad y uso sistematizado de elementos. Suelen destacar en el uso de instrumentos mecánicos y con necesidad de precisión manual. Campos como la agricultura y la ganadería, la arquitectura o la ingeniería serían propicios para este tipo de personalidad.",
    'I': "Este tipo de personalidad tiende más a la observación y al análisis del mundo, a menudo de una manera abstracta e intentando realizar asociaciones y encontrar relaciones entre los fenómenos que en él ocurren. Se trata de personalidades curiosas, analíticas, con tendencia a la introspección y al uso de la razón por encima de la emoción. No son especialmente sociables y suelen tener un enfoque del mundo más bien teórico, no interesándoles tanto la práctica.\n\nEsta personalidad se corresponde con tareas principalmente basadas en la investigación. Física, química, economía o biología son algunos de los ámbitos en que suelen observarse más este tipo de personalidades.",
    'A': "La creatividad y el uso de materiales en búsqueda de la expresión son algunos de los principales elementos que caracterizan la personalidad artística. No es raro que se trate de personas impulsivas, idealistas y altamente emotivas e intuitivas. La estética y poder proyectar hacia el mundo sus sensaciones es importante para ellos, y suelen ser personas independientes. Si bien también intentan ver el mundo desde la abstracción, suelen focalizarse más en la emoción y tiende a disgustarles lo meramente intelectual, poseyendo la necesidad de elaborar y crear.\n\nPintores, escultores o músicos son algunos de los profesionales que tienden a este tipo de personalidad. También bailarines y actores, escritores y periodistas.",
    'S': "El aspecto más destacable de las personas con este tipo de personalidad es la necesidad o deseo de ayudar a otros a través del trato con ellos, y su elevada necesidad de interacción humana. Suele tratarse de personas muy empáticas e idealistas, altamente comunicativas y tener cierta facilidad o gusto para las relaciones y la cooperación.\n\nEl tipo de tareas en las que suele encontrarse este tipo de personalidad son todas aquellas que supongan un trato directo con otras personas y en que dicha interacción exista como objetivo la idea de dar apoyo al otro. Psicólogos, médicos, enfermeros, profesores o trabajadores sociales suelen tener características de este tipo de personalidad. Tareas más mecánicas no suelen ser de su agrado.",
    'E': "La capacidad de persuasión y la habilidad comunicativa son aspectos típicos de la personalidad emprendedora. Cierto nivel de dominancia y búsqueda de logro y poder son usuales en este tipo de personas, así como valor y capacidad de riesgo. Generalmente son personas con habilidades sociales y altamente extravertidos, con capacidad de liderazgo y un elevado nivel de energía.\n\nProfesiones en que prevalecen este tipo de personas son el mundo de la banca y de los negocios. Comerciales y empresarios suelen también tener rasgos de este tipo de personalidad.",
    'C': "Estamos ante un tipo de personalidad que se caracteriza por el gusto por el orden sin necesidad de introducir grandes cambios en él. Tampoco precisan de un gran contacto social a nivel laboral. Suelen ser personas altamente organizadas, ordenadas, disciplinadas y formales. No es rara cierta tendencia al conformismo, dado que se identifican con la organización ya establecida. Suelen ser ágiles y lógicos.\n\nDentro de este tipo de personalidades encontramos a personas con vocación por aspectos como la contabilidad, el trabajo en oficina, el secretariado, bibliotecarias/os… en general con tendencia a buscar el orden."
};
// INICIO
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    currentStudent.name = document.getElementById('student-name').value.trim();
    currentStudent.age = document.getElementById('student-age').value.trim();
    if (currentStudent.name && currentStudent.age) startTest();
});

function startTest() {
    currentQuestionIndex = 0;
    scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    switchScreen(screenRegister, screenTest);
    loadQuestion();
}

function loadQuestion() {
    radioInputs.forEach(radio => radio.checked = false);
    questionText.textContent = questions[currentQuestionIndex];
    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
}

btnNext.addEventListener('click', () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) { alert("Por favor, selecciona una opción del 1 al 5."); return; }

    const value = parseInt(selected.value);
    const dimIndex = currentQuestionIndex % 6;
    scores[dimensionsNames[dimIndex]] += value;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishTest();
    }
});

function finishTest() {
    progressBar.style.width = `100%`;
    let maxScore = 0;
    for (let key in scores) if (scores[key] > maxScore) maxScore = scores[key];
    
    let dominantProfiles = [];
    let winningKeys = []; // Guarda las letras para usarlas en el PDF
    let alertDescriptions = []; // Textos para la alerta web
    
    for (let key in scores) {
        if (scores[key] === maxScore) {
            dominantProfiles.push(`${fullDimensions[key]} (${key})`);
            winningKeys.push(key);
            alertDescriptions.push(`--- ${fullDimensions[key]} ---\n${profileDescriptions[key]}`);
        }
    }
    
    const profileString = dominantProfiles.join(' / ');

    const record = {
        id: Date.now(),
        date: new Date().toLocaleDateString('es-ES'),
        name: currentStudent.name,
        age: currentStudent.age,
        scores: { ...scores },
        maxScore: maxScore,
        profile: profileString,
        winningKeys: winningKeys // Se añade al registro local, no al Excel
    };

    saveRecord(record);
    
    // Alerta con los textos incluidos
    alert(`¡Test finalizado!\n\nVocación Dominante: ${profileString}\nPuntaje: ${maxScore}\n\nDETALLE:\n${alertDescriptions.join('\n\n')}`);
    
    document.getElementById('form-register').reset();
    switchScreen(screenTest, screenRegister);
}

/// URL generada al implementar la Aplicación Web en Google Apps Script
const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwGalzPmXer3pYC7yqpBY23WivzszgML-l3e65nK_h6kEfGn2ahJXWIXkyR_l9NcrI-/exec";

// STORAGE (Local y en la Nube)
function saveRecord(record) {
    // 1. Guardado local en el navegador
    let records = JSON.parse(localStorage.getItem('istpet_records')) || [];
    records.push(record);
    localStorage.setItem('istpet_records', JSON.stringify(records));

    // 2. Envío automático a la hoja de cálculo
    if (WEBHOOK_URL && WEBHOOK_URL.trim() !== "") {
        const payload = {
            date: record.date,
            name: record.name,
            age: record.age.toString(),
            R: record.scores.R,
            I: record.scores.I,
            A: record.scores.A,
            S: record.scores.S,
            E: record.scores.E,
            C: record.scores.C,
            maxScore: record.maxScore,
            profile: record.profile
        };

        fetch(WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        .then(() => console.log("Datos enviados a la nube exitosamente"))
        .catch(error => console.error("Error al enviar datos:", error));
    }
}

function getRecords() { 
    return JSON.parse(localStorage.getItem('istpet_records')) || []; 
}

function deleteRecord(id) {
    if (confirm("¿Eliminar este registro?")) {
        let records = getRecords().filter(r => r.id !== id);
        localStorage.setItem('istpet_records', JSON.stringify(records));
        renderTable();
    }
}

// ADMIN PANEL
document.getElementById('btn-view-admin').addEventListener('click', () => { renderTable(); switchScreen(screenRegister, screenAdmin); });
document.getElementById('btn-back-home').addEventListener('click', () => { switchScreen(screenAdmin, screenRegister); });

function renderTable() {
    const tbody = document.getElementById('results-body');
    tbody.innerHTML = '';
    const records = getRecords();
    
    if (records.length === 0) {
        tbody.innerHTML = '<tr><td colspan="11" style="text-align:center;">No hay registros disponibles.</td></tr>';
        return;
    }

    records.reverse().forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${r.date}</td>
            <td><strong>${r.name}</strong></td>
            <td>${r.age}</td>
            <td>${r.scores.R}</td><td>${r.scores.I}</td><td>${r.scores.A}</td>
            <td>${r.scores.S}</td><td>${r.scores.E}</td><td>${r.scores.C}</td>
            <td style="color:var(--istpet-blue); font-weight:bold;">${r.profile}</td>
            <td class="action-buttons">
                <button class="btn btn-pdf" onclick="generatePDF(${r.id})">Descargar PDF</button>
                <button class="delete-row" onclick="deleteRecord(${r.id})" title="Borrar"></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('btn-clear-all').addEventListener('click', () => {
    if(confirm("ADVERTENCIA: ¿Borrar TODOS los datos de los estudiantes?")) {
        localStorage.removeItem('istpet_records'); renderTable();
    }
});

function switchScreen(hideElement, showElement) {
    hideElement.classList.remove('active'); hideElement.classList.add('hidden');
    showElement.classList.remove('hidden'); showElement.classList.add('active');
}

// --- GENERADOR DE PDF ---
window.jsPDF = window.jspdf.jsPDF;

function generatePDF(id) {
    const record = getRecords().find(r => r.id === id);
    if (!record) return;

    const doc = new jsPDF();
    
    // Franja Superior Azul 
    doc.setFillColor(34, 44, 87);
    doc.rect(0, 0, 210, 35, 'F');
    
    // Títulos en Blanco
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("ISTPET TECNOLÓGICO TRAVERSARI", 105, 16, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Unidad de Bienestar Institucional (UBI)", 105, 24, { align: "center" });
    
    // --- INSERCIÓN DEL LOGO ---
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        // Posición: Izquierda (X:15), Debajo de la franja (Y:40), Ancho 45, Alto 18
        doc.addImage(logoImg, 'PNG', 15, 38, 45, 18);
    }
    
    // Título del Documento (Desplazado hacia abajo a Y=65)
    doc.setTextColor(34, 44, 87);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Reporte de Evaluación Vocacional - IPPJ", 105, 65, { align: "center" });
    
    // Línea separadora Dorada
    doc.setDrawColor(196, 168, 87);
    doc.setLineWidth(1);
    doc.line(20, 70, 190, 70);

    // Datos del Estudiante
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.setFont("helvetica", "bold");
    doc.text("Datos del Estudiante:", 20, 85);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Nombre Completo: ${record.name}`, 25, 95);
    doc.text(`Edad: ${record.age} años`, 25, 103);
    doc.text(`Fecha de Aplicación: ${record.date}`, 25, 111);

    // Resultados Detallados
    doc.setFont("helvetica", "bold");
    doc.text("Resultados:", 20, 130);
    
    const yStart = 140;
    doc.setFont("helvetica", "normal");
    doc.text(`Realista (R):`, 35, yStart); doc.text(`${record.scores.R} pts`, 75, yStart);
    doc.text(`Investigador (I):`, 35, yStart + 10); doc.text(`${record.scores.I} pts`, 75, yStart + 10);
    doc.text(`Artístico (A):`, 35, yStart + 20); doc.text(`${record.scores.A} pts`, 75, yStart + 20);
    
    doc.text(`Social (S):`, 120, yStart); doc.text(`${record.scores.S} pts`, 160, yStart);
    doc.text(`Emprendedor (E):`, 120, yStart + 10); doc.text(`${record.scores.E} pts`, 160, yStart + 10);
    doc.text(`Convencional (C):`, 120, yStart + 20); doc.text(`${record.scores.C} pts`, 160, yStart + 20);

    
    // Caja de Perfil Dominante
    doc.setFillColor(245, 247, 250);
    doc.setDrawColor(196, 168, 87);
    doc.rect(20, 175, 170, 30, 'FD');
    
    doc.setTextColor(34, 44, 87);
    doc.setFont("helvetica", "bold");
    doc.text("PERFIL VOCACIONAL DOMINANTE", 105, 187, { align: "center" });
    
    doc.setTextColor(196, 168, 87);
    doc.setFontSize(14);
    doc.text(`${record.profile} (Puntaje Máx: ${record.maxScore})`, 105, 197, { align: "center" });

    // --- INYECCIÓN DE TEXTOS DESCRIPTIVOS ---
    let currentY = 215; // Empezar justo debajo de la caja dorada

    if (record.winningKeys) {
        record.winningKeys.forEach(key => {
            const title = `Perfil ${fullDimensions[key]}`;
            const desc = profileDescriptions[key];

            // Salto de página si el título no cabe
            if (currentY > 260) { doc.addPage(); currentY = 20; }
            
            doc.setFont("helvetica", "bold");
            doc.setFontSize(12);
            doc.setTextColor(34, 44, 87);
            doc.text(title, 20, currentY);
            currentY += 7;

            // Procesado del párrafo para respetar los márgenes (170 de ancho)
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.setTextColor(50, 50, 50);
            
            const splitDesc = doc.splitTextToSize(desc, 170);
            
            // Si el texto es muy largo para la página actual, crea una hoja nueva
            if (currentY + (splitDesc.length * 5) > 275) {
                doc.addPage();
                currentY = 20;
            }
            
            doc.text(splitDesc, 20, currentY);
            currentY += (splitDesc.length * 5) + 10; // Espaciado final entre perfiles
        });
    }

    // Pie de página (siempre en la última hoja activa)
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("Documento generado automáticamente por el sistema. Válido para registros internos del ISTPET.", 105, 280, { align: "center" });

    doc.save(`Resultados_Vocacionales_${record.name.replace(/\s+/g, '_')}.pdf`);
}

// --- ADMIN PANEL CON SEGURIDAD DE 5 CLICS ---
let adminClickCount = 0;
let adminClickTimer;
const btnViewAdmin = document.getElementById('btn-view-admin');

btnViewAdmin.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página recargue
    adminClickCount++;
    
    // Si el usuario tarda más de 2.5 segundos entre clics, el contador se reinicia
    clearTimeout(adminClickTimer);
    adminClickTimer = setTimeout(() => { 
        adminClickCount = 0; 
    }, 2500);

    // Si alcanza los 5 clics rápidos, se abre el panel
    if (adminClickCount >= 5) {
        renderTable(); 
        switchScreen(screenRegister, screenAdmin); 
        adminClickCount = 0; // Reinicia para la próxima vez
    }
});