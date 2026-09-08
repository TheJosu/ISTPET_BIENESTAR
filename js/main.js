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
    for (let key in scores) if (scores[key] === maxScore) dominantProfiles.push(`${fullDimensions[key]} (${key})`);
    
    const profileString = dominantProfiles.join(' / ');

    const record = {
        id: Date.now(),
        date: new Date().toLocaleDateString('es-ES'),
        name: currentStudent.name,
        age: currentStudent.age,
        scores: { ...scores },
        maxScore: maxScore,
        profile: profileString
    };

    saveRecord(record);
    alert(`¡Test finalizado!\n\nVocación Dominante: ${profileString}\nPuntaje: ${maxScore}`);
    
    document.getElementById('form-register').reset();
    switchScreen(screenTest, screenRegister);
}

// STORAGE
function saveRecord(record) {
    let records = JSON.parse(localStorage.getItem('istpet_records')) || [];
    records.push(record);
    localStorage.setItem('istpet_records', JSON.stringify(records));
}
function getRecords() { return JSON.parse(localStorage.getItem('istpet_records')) || []; }
function deleteRecord(id) {
    if(confirm("¿Eliminar este registro?")) {
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
    
    // Franja Superior Azul (ISTPET)
    doc.setFillColor(34, 44, 87); // rgb(34, 44, 87)
    doc.rect(0, 0, 210, 35, 'F');
    
    // Títulos en Blanco
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("ISTPET TECNOLÓGICO TRAVERSARI", 105, 16, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Unidad de Bienestar Institucional (UBI)", 105, 24, { align: "center" });
    
    // Título del Documento
    doc.setTextColor(34, 44, 87);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Reporte de Evaluación Vocacional - IPPJ", 105, 50, { align: "center" });
    
    // Línea separadora Dorada
    doc.setDrawColor(196, 168, 87); // Dorado
    doc.setLineWidth(1);
    doc.line(20, 55, 190, 55);

    // Datos del Estudiante
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.setFont("helvetica", "bold");
    doc.text("Datos del Estudiante:", 20, 70);
    
    doc.setFont("helvetica", "normal");
    doc.text(`Nombre Completo: ${record.name}`, 25, 80);
    doc.text(`Edad: ${record.age} años`, 25, 88);
    doc.text(`Fecha de Aplicación: ${record.date}`, 25, 96);

    // Resultados Detallados
    doc.setFont("helvetica", "bold");
    doc.text("Resultados por Dimensión (Modelo Holland):", 20, 115);
    
    // Crear una tabla visual simple
    const yStart = 125;
    doc.setFont("helvetica", "normal");
    doc.text(`Realista (R):`, 35, yStart); doc.text(`${record.scores.R} pts`, 75, yStart);
    doc.text(`Investigador (I):`, 35, yStart + 10); doc.text(`${record.scores.I} pts`, 75, yStart + 10);
    doc.text(`Artístico (A):`, 35, yStart + 20); doc.text(`${record.scores.A} pts`, 75, yStart + 20);
    
    doc.text(`Social (S):`, 120, yStart); doc.text(`${record.scores.S} pts`, 160, yStart);
    doc.text(`Emprendedor (E):`, 120, yStart + 10); doc.text(`${record.scores.E} pts`, 160, yStart + 10);
    doc.text(`Convencional (C):`, 120, yStart + 20); doc.text(`${record.scores.C} pts`, 160, yStart + 20);

    // Caja de Perfil Dominante
    doc.setFillColor(245, 247, 250);
    doc.setDrawColor(196, 168, 87); // Borde Dorado
    doc.rect(20, 160, 170, 30, 'FD'); // Fill y Draw
    
    doc.setTextColor(34, 44, 87);
    doc.setFont("helvetica", "bold");
    doc.text("PERFIL VOCACIONAL DOMINANTE", 105, 172, { align: "center" });
    
    doc.setTextColor(196, 168, 87); // Dorado oscuro para el resultado
    doc.setFontSize(14);
    doc.text(`${record.profile} (Puntaje Máx: ${record.maxScore})`, 105, 182, { align: "center" });

    // Pie de página
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("Documento generado automáticamente por el sistema. Válido para registros internos del ISTPET.", 105, 280, { align: "center" });

    // Descargar Archivo
    doc.save(`Resultados_Vocacionales_${record.name.replace(/\s+/g, '_')}.pdf`);
    
  // --- ACCESO SECRETO ADMIN ---
let secretClickCount = 0;
let clickTimer;

// Selecciona el contenedor o la imagen directamente
const triggerElement = document.querySelector('.logo-container') || document.querySelector('.logo-img');

if (triggerElement) {
    triggerElement.style.cursor = 'pointer'; // Cambia el cursor a manito para saber dónde hacer clic
    
    triggerElement.addEventListener('click', () => {
        secretClickCount++;
        
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { 
            secretClickCount = 0; 
        }, 2500); // 2.5 segundos de tolerancia para los 5 clics

        if (secretClickCount >= 5) {
            const adminBtn = document.getElementById('btn-view-admin');
            if (adminBtn) {
                adminBtn.style.setProperty('display', 'block', 'important');
                alert("Acceso UBI desbloqueado.");
            }
            secretClickCount = 0;
        }
    });
}