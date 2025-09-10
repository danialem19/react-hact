function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
}

// List of image sources
const images = [
    "pic-home1.png",
    "pic-home2.png",
    "pic-home3.png",
    "pic-home4.png"
];

let currentIndex = 0;
const imageElement = document.getElementById("slideshow-image");


// Open modal when a board member is clicked
function openModal(memberId) {
    // Update modal content based on member clicked
    var memberData = {
        1: {
            name: "Member Name 1",
            image: "/Fissiha-Antalew.jpg",
            description: "Dr. Fissiha Antalew, PharmD, is an Associate Director of Clinical Supply at Ultragenyx Pharmaceutical Inc. In his current role, he owns the end-to-end clinical supply chain operations, strategic demand and supply planning, inventory management, CMO management and global distribution for international clinical trials. Prior to his role at Ultragenyx, he was a Senior Manager of Clinical Supply at Gilead Sciences. During his tenure, he oversaw clinical supplies for Phase 1-3, Compassionate Use, and Late Phase trials across global programs. He also spearheaded process improvements, developed Standard Operating Procedures (SOPs), and directed IRT setup and labeling operations. This position was a promotion from his role where he managed supplies for multiple development programs, oversaw supply planning and forecasting, and led cross-functional teams to optimize supply chain operations. Fissiha Antalew recognized for his significant contributions to the pharmaceutical industry, highlighted by being named a 2025 BSMA 40 Under Forty Award Winner. He received his Bachelor of Art in Economics from Arba Minch University, an Associate Degree in Biology from the College of Western Idaho, and his Doctor of Pharmacy degree from California Northstate University."
        },
        2: {
            name: "Member Name 2",
            image: "/Eyerusalem-Befkadu.jpg",
            description: "Eyerusalem Befkadu, PharmD, BCPS is an emergency medicine clinical specialist at Medstar Georgetown University Hospital. She has worked in a wide array of clinical areas working with physician groups to practice evidence-based medicine. In her current role, she practices as a pharmacist clinician providing safe and effective care of patients, primarily in the emergency department. She participates in quality improvement initiatives through the development of institutional clinical guidelines and protocols. She has also successfully implemented a naloxone dispensing program in the emergency department as part of an initiative to improve safe access and provision of life-saving medications.\n Prior to her emergency medicine practice at Georgetown University Hospital, she practiced as an emergency medicine clinical pharmacist at Virginia Hospital Center.  During her tenure, she established new emergency department clinical pharmacy services that include expanding the role of a pharmacist to participate in medical and trauma emergencies, pioneering a medication reconciliation program, implementing quality initiatives and conducting various research projects. \n She received her Bachelor of Science degree in biology from the University of Maryland Baltimore county and her Doctor of Pharmacy degree from Touro College of Pharmacy. She completed her Post Graduate Year One(PGY-1) pharmacy practice residency training at Howard University Hospital. "
        },
        3: {
            name: "Member Name 3",
            image: "/Ermias-Tilahun.png",
            description: "Ermias Tilahun, MPH, PhD., brings over 15 years of experience in epidemiology, clinical research, and public health, academia, clinical healthcare, the pharmaceutical industry, non-profit organizations, and regulatory settings. Currently serving as an Epidemiologist at the FDA, he specializes in research methodology, clinical research management, data analysis, and public health education. \n With a Ph.D. in Pharmacoepidemiology, a Master’s in Public Health (MPH), a B.Sc. in Physician Assistant Studies, and a Diploma in Crisis Management and Post-Conflict Rehabilitation, Dr. Ermias combines a strong academic foundation with hands-on expertise in drug safety, surveillance, and health outcomes research. \n At the FDA’s Office of Pharmacovigilance and Epidemiology (OPE), he supports drug safety evaluations, assessing efficacy, nonmedical use, and reproductive health outcomes. Prior to this, as a Scientist at Pfizer, Dr. Ermias developed a manuscript and analysis plan for a claims-based study using National Inpatient Survey (NIS) data and managed a global bacterial serotype distribution database for Invasive Pneumococcal Disease (IPD) surveillance. His earlier research at Howard University focused on survey design and data analysis to evaluate Medicare beneficiaries’ awareness of pharmacist-provided Medication Therapy Management (PP-MTM) services. \n Beyond research, Dr. Ermias is actively involved in mentorship, education, and professional leadership, having served as a professor, Pharmacovigilance adviser, and association leader. With expertise in curriculum development, quantitative and qualitative research, survey design, literature review, and biostatistical analysis, he contributes valuable insights to the field of clinical research, pharmacoepidemiology, pharmacovigilance, and public health."
        },
        4: {
             name: "Member Name 4",
            image: "/Gabriel-Daniel.png",
            description: "Gabriel Daniel (aka: Aklile G. Giorgis) is a management specialist with 50 years of experience in the design and implementation of varied projects with focus on health/pharmacy and self-reliance. Gabriel had held technical and managerial positions with the Ethiopian Ministry of Health (MOH); International Rescue Committee (IRC) in Sudan; Africare in over twenty African countries; and Management Sciences for Health (MSH) globally. Gabriel represented MOH in high-level government delegations to several East European countries including the USSR and China. He has served on expert panels of the United States Pharmacopoeia (USP) and published a four-language phrase book (Amharic, Tigrinya, Arabic and English). Currently, Gabriel serves on the board of several organizations including the Ethiopian Pharmacists and Pharmaceutical Scientists Association in the Diaspora (EPPAD), and the American Ethiopian Public Affairs Committee (AEPAC). Gabriel holds a BPharm degree from the School of Pharmacy (the then Haile Selassie I University) in Addis Ababa, and a master’s degree in International Administration (MIA) from the School for International Training (SIT) in Vermont/USA"
       },
        5: {
            name: "Member Name 5",
            image: "/Fikreab-Admasu.png",
            description: "Dr. Fikreab S. Admasu, Senior Data Scientist at MSD, develops statistical and machine learning models for impact assessment and investment optimization. His work leverages advanced methodologies including bayesian inference, causal modeling, and reinforcement learning to inform strategic decisions in the pharmaceutical sector. Prior to joining Merck, he held machine learning roles at various tech startups and served as a Riley Assistant Professor of Mathematics at Binghamton University. He earned a Ph.D. in Mathematical Sciences from the Graduate Center of the City University of New York (CUNY), and was previously at the International Centre for Theoretical Physics (ICTP) and SISSA in Trieste, Italy. His academic journey began at Addis Ababa University, Ethiopia."
        },
        6: {
            name: "Member Name 6",
            image: "/Biruhalem-Bayayibign.png",
            description: "Dr. Biruhalem A Bayayibign is a seasoned expert in pharmacovigilance and clinical trials, bringing many years of rich experience in both academia and industry. Currently, leading the pharmacovigilance department at Lyomark Pharma GmbH/Bendalis GmbH and acting as EU-QPPV, Dr. Bayayibign plays a crucial role in ensuring drug safety and compliance in a rapidly evolving pharmaceutical landscape. Dr. Bayayibign has a solid medical and scientific background with a PhD in medical research, a master`s degree in biology (molecular medical biology) and a bachelor degree in Pharmacy."
        },
    };

    // Set the modal content
    var modal = document.getElementById("memberModal");
    document.getElementById("modal-image").src = memberData[memberId].image;
    document.getElementById("modal-description").innerText = memberData[memberId].description;

    // Show the modal
    modal.style.display = "block";
}

// Close modal when the close button is clicked
document.getElementsByClassName("close-btn")[0].onclick = function() {
    var modal = document.getElementById("memberModal");
    modal.style.display = "none";
}

// Close modal when clicking anywhere outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("memberModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}