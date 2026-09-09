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
let currentStudent = { name: '', age: '', phone: '' };

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
    'R': "Eres una persona práctica, inclinada a la mecánica y la física, que prefiere trabajar con las manos, herramientas, máquinas y cosas. Destacas en campos como la ingeniería, la industria, la arquitectura, la agricultura, los servicios de transporte y de seguridad.",
    'I': "Eres una persona analítica, intelectual y científica, que disfruta trabajar con la teoría y la información. Tus campos de educación ideales incluyen las ciencias de la vida, ciencias físicas, matemáticas, estadística, informática y medicina.",
    'A': "Eres una persona original e independiente que prefiere las soluciones creativas. Tus áreas afines abarcan las bellas artes, artes del espectáculo, artes gráficas y audiovisuales, diseño, y periodismo e información.",
    'S': "Eres una persona que se enfoca en apoyar, cuidar, y está encargada de la comunicación, educación y cooperación. Podrías desarrollarte excelentemente en medicina, servicios médicos, enfermería, asistencia social, formación docente o servicios personales.",
    'E': "Eres una persona orientada a trabajar en entornos competitivos, lo que te lleva a persuadir, vender, gestionar y promocionar. Destacarás en la educación comercial y administración (como gestión financiera y ventas) o el derecho.",
    'C': "Eres una persona metódica, ordenada, precisa y que cuida con atención los detalles, enfocándote en el ámbito de la organización. Tus campos ideales también incluyen la educación comercial, administración pública o institucional, contabilidad y derecho."
};
// INICIO
formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    currentStudent.name = document.getElementById('student-name').value.trim();
    currentStudent.age = document.getElementById('student-age').value.trim();
    currentStudent.phone = document.getElementById('student-phone').value.trim() || "N/A";

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
    let winningKeys = []; // Guarda las letras para el PDF
    
    for (let key in scores) {
        if (scores[key] === maxScore) {
            dominantProfiles.push(`${fullDimensions[key]} (${key})`);
            winningKeys.push(key);
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
        winningKeys: winningKeys // Se usa exclusivamente para generar el PDF
    };

    saveRecord(record);
    
    // Alerta simplificada: SOLO muestra el nombre del perfil y el puntaje
    alert(`¡Test finalizado!\n\nVocación Dominante: ${profileString}\nPuntaje: ${maxScore}`);
    
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
            phone: record.phone,
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
    doc.text("PERFIL VOCACIONAL DOMINANTE", 105, 184, { align: "center" });
    
    // SOLUCIÓN AL DESBORDAMIENTO DE EMPATES
    doc.setTextColor(196, 168, 87);
    const profileText = `${record.profile} (Puntaje Máx: ${record.maxScore})`;
    
    // Si el texto es muy largo, reduce la fuente; si sigue siendo largo, lo divide en dos líneas
    if (profileText.length > 60) doc.setFontSize(10);
    else doc.setFontSize(14);
    
    const splitProfile = doc.splitTextToSize(profileText, 160);
    doc.text(splitProfile, 105, 192, { align: "center" });

    // CARGA DE IMAGEN DECORATIVA DESDE INTERNET
    const decorImg = new Image();
    decorImg.crossOrigin = "Anonymous"; 
    // Link de la imagen decorativa (Icono de vocación/logro)
    decorImg.src = "https://cdn-icons-png.flaticon.com/512/3135/3135810.png"; 

    // Función interna para terminar y descargar el PDF
    const finalizarPDF = () => {
        let currentY = 215;

        if (record.winningKeys) {
            record.winningKeys.forEach(key => {
                const title = `Perfil ${fullDimensions[key]}`;
                const desc = profileDescriptions[key];

                if (currentY > 260) { doc.addPage(); currentY = 20; }
                
                doc.setFont("helvetica", "bold");
                doc.setFontSize(12);
                doc.setTextColor(34, 44, 87);
                doc.text(title, 20, currentY);
                currentY += 7;

                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(50, 50, 50);
                
                const splitDesc = doc.splitTextToSize(desc, 170);
                
                if (currentY + (splitDesc.length * 5) > 275) {
                    doc.addPage();
                    currentY = 20;
                }
                
                doc.text(splitDesc, 20, currentY);
                currentY += (splitDesc.length * 5) + 10; 
            });
        }

        doc.setTextColor(150, 150, 150);
        doc.setFontSize(9);
        doc.setFont("helvetica", "italic");
        doc.text("Documento generado automáticamente por el sistema. Válido para registros internos del ISTPET.", 105, 280, { align: "center" });

        doc.save(`Resultados_Vocacionales_${record.name.replace(/\s+/g, '_')}.pdf`);
    };

    /**Intenta agregar la imagen. Si el navegador la bloquea, guarda el PDF sin ella.
    decorImg.onload = () => {
        doc.addImage(decorImg, 'PNG', 172, 177, 14, 14); // Esquina derecha de la caja
        finalizarPDF();
    };
    decorImg.onerror = () => { finalizarPDF(); };**/
}

// --- SEGURIDAD DE 5 CLICS ---
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
