const services = [
  {
    id: "diagnostic",
    name: "Diagnostic rapide",
    price: 35,
    duration: "25 min",
    tag: "Même jour",
    detail: "Inspection des freins, vitesses, pneus, chaîne et sécurité générale.",
  },
  {
    id: "tuneup",
    name: "Mise au point urbaine",
    price: 89,
    duration: "75 min",
    tag: "Populaire",
    detail: "Ajustement freins/vitesses, lubrification, serrage complet et pression pneus.",
  },
  {
    id: "flat",
    name: "Crevaison + déplacement",
    price: 49,
    duration: "35 min",
    tag: "Urgent",
    detail: "Remplacement ou réparation de chambre à air avec vérification du pneu.",
  },
  {
    id: "brakes",
    name: "Freins et vitesses",
    price: 68,
    duration: "55 min",
    tag: "Précision",
    detail: "Réglage des câbles, patins, disques, dérailleurs et indexation.",
  },
];

const slots = ["Mar 09:30", "Mar 14:00", "Mer 12:30", "Jeu 17:30", "Sam 10:00"];
const zones = ["Centre-ville", "Glebe", "Sandy Hill", "Hintonburg", "Vanier"];
const mechanics = ["Maya", "Thomas", "Nadia"];

const personaData = [
  {
    name: "Nahar",
    profile: "Étudiant qui se déplace à vélo entre le campus, le travail et l'épicerie.",
    goal: "Savoir si une crevaison peut être réparée rapidement sans appeler.",
  },
  {
    name: "Camille",
    profile: "Parent occupé qui utilise un vélo cargo pour les trajets courts.",
    goal: "Réserver une mise au point à domicile avec un créneau clair.",
  },
];

function App() {
  const [selectedService, setSelectedService] = React.useState(services[1]);
  const [selectedSlot, setSelectedSlot] = React.useState(slots[2]);
  const [selectedZone, setSelectedZone] = React.useState(zones[0]);
  const [selectedMechanic, setSelectedMechanic] = React.useState(mechanics[0]);
  const [bikeType, setBikeType] = React.useState("Vélo hybride");
  const [confirmed, setConfirmed] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState("coverage");

  const total = selectedService.price + (selectedZone === "Vanier" ? 8 : 0);

  return (
    <>
      <header className="site-nav">
        <a className="brand" href="#top">
          <span className="brand-mark">AN</span>
          <span>Atelier Nomade</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#reservation">Réserver</a>
          <a href="#infos">Infos</a>
        </nav>
        <a className="nav-action" href="#reservation">Prendre rendez-vous</a>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="kicker">Service mobile / Ottawa</p>
            <h1>Réparation vélo qui vient à vous.</h1>
            <p className="lead">
              Atelier Nomade aide les cyclistes urbains à régler les problèmes courants sans perdre une demi-journée à se déplacer en atelier.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#reservation">Réserver un créneau</a>
              <a className="button secondary" href="#services">Voir les prix</a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Résumé du service">
            <div className="image-card">
              <img
                alt="Vélo urbain près d'un atelier de réparation"
                src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1100&q=80"
              />
            </div>
            <div className="status-strip">
              <div>
                <span>Prochain créneau</span>
                <strong>Mer 12:30</strong>
              </div>
              <div>
                <span>Zone</span>
                <strong>5 quartiers</strong>
              </div>
              <div>
                <span>À partir de</span>
                <strong>35 $</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="shell meta-grid" aria-label="Coordonnées de l'entreprise">
          <Info label="Nom" value="Atelier Nomade" />
          <Info label="Type" value="Réparation vélo mobile" />
          <Info label="Téléphone" value="613-555-0184" />
          <Info label="Heures" value="Mar-Sam / 9h-18h" />
        </section>

        <section id="services" className="shell section split">
          <div>
            <p className="kicker">01 / Services</p>
            <h2>Choisir vite, comprendre le prix avant de réserver.</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-row ${selectedService.id === service.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedService(service);
                  setConfirmed(false);
                }}
              >
                <span>{service.tag}</span>
                <strong>{service.name}</strong>
                <em>{service.duration}</em>
                <b>{service.price} $</b>
              </button>
            ))}
          </div>
        </section>

        <section className="shell detail-band">
          <div>
            <p className="kicker">Service sélectionné</p>
            <h3>{selectedService.name}</h3>
            <p>{selectedService.detail}</p>
          </div>
          <div className="price-lockup">
            <span>Estimation</span>
            <strong>{selectedService.price} $</strong>
            <small>Pièces non incluses si remplacement nécessaire.</small>
          </div>
        </section>

        <section id="reservation" className="shell section booking-layout">
          <div className="booking-copy">
            <p className="kicker">02 / Réservation</p>
            <h2>Un rendez-vous clair avant de sortir le vélo.</h2>
            <p>
              Le prototype combine les deux objectifs utilisateurs: trouver rapidement l'information utile et réserver un service avec un créneau précis.
            </p>
            <div className="persona-stack">
              {personaData.map((persona) => (
                <article key={persona.name}>
                  <span>{persona.name}</span>
                  <p>{persona.profile}</p>
                  <strong>{persona.goal}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="booking-card">
            <div className="field-group">
              <label>Service</label>
              <select
                value={selectedService.id}
                onChange={(event) => {
                  setSelectedService(services.find((service) => service.id === event.target.value));
                  setConfirmed(false);
                }}
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label>Type de vélo</label>
              <select value={bikeType} onChange={(event) => setBikeType(event.target.value)}>
                <option>Vélo hybride</option>
                <option>Vélo de route</option>
                <option>Vélo cargo</option>
                <option>Vélo électrique</option>
              </select>
            </div>

            <div className="choice-block">
              <label>Créneau</label>
              <div className="chip-grid">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    className={slot === selectedSlot ? "chip active" : "chip"}
                    onClick={() => {
                      setSelectedSlot(slot);
                      setConfirmed(false);
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-block">
              <label>Quartier</label>
              <div className="chip-grid">
                {zones.map((zone) => (
                  <button
                    key={zone}
                    className={zone === selectedZone ? "chip active" : "chip"}
                    onClick={() => {
                      setSelectedZone(zone);
                      setConfirmed(false);
                    }}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-block">
              <label>Mécanicien</label>
              <div className="chip-grid three">
                {mechanics.map((mechanic) => (
                  <button
                    key={mechanic}
                    className={mechanic === selectedMechanic ? "chip active" : "chip"}
                    onClick={() => {
                      setSelectedMechanic(mechanic);
                      setConfirmed(false);
                    }}
                  >
                    {mechanic}
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-summary">
              <div>
                <span>Total estimé</span>
                <strong>{total} $</strong>
              </div>
              <p>
                {selectedService.name}, {bikeType.toLowerCase()}, {selectedZone}, {selectedSlot} avec {selectedMechanic}.
              </p>
            </div>

            <button className="button primary full" onClick={() => setConfirmed(true)}>
              Confirmer la demande
            </button>

            {confirmed && (
              <div className="confirmation" role="status">
                Demande préparée. Un courriel de confirmation serait envoyé dans la version réelle.
              </div>
            )}
          </div>
        </section>

        <section id="infos" className="shell section info-layout">
          <div>
            <p className="kicker">03 / Infos pratiques</p>
            <h2>Les questions importantes restent visibles.</h2>
            <div className="faq-list">
              <Faq
                id="coverage"
                title="Est-ce un atelier physique?"
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              >
                Non. Le service est mobile sur rendez-vous. Les zones couvertes sont affichées avant la réservation.
              </Faq>
              <Faq id="parts" title="Les pièces sont-elles incluses?" openFaq={openFaq} setOpenFaq={setOpenFaq}>
                La main-d'oeuvre est estimée dans le prix. Les pièces sont confirmées avant l'intervention.
              </Faq>
              <Faq id="rain" title="Que se passe-t-il s'il pleut?" openFaq={openFaq} setOpenFaq={setOpenFaq}>
                Le rendez-vous peut être déplacé sans frais si la météo empêche une réparation sécuritaire.
              </Faq>
            </div>
          </div>

          <div className="coverage-card">
            <div className="coverage-photo">
              <img
                alt="Mécanicien qui répare un vélo"
                src="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?auto=format&fit=crop&w=1100&q=80"
              />
            </div>
            <div className="coverage-content">
              <p className="kicker">Zone couverte</p>
              <h3>Centre-ville, Glebe, Sandy Hill, Hintonburg, Vanier.</h3>
              <p>Adresse de contact: 120 Laurier Ave W, Ottawa, ON. Service conçu pour les rendez-vous, pas les arrivées sans préavis.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Conçu par Marc Tchetchenigbo</span>
        <span>Prototype SEG3525 - Devoir 2</span>
      </footer>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="info-cell">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Faq({ id, title, children, openFaq, setOpenFaq }) {
  const isOpen = openFaq === id;
  return (
    <article className={isOpen ? "faq open" : "faq"}>
      <button onClick={() => setOpenFaq(isOpen ? "" : id)}>
        <span>{title}</span>
        <b>{isOpen ? "-" : "+"}</b>
      </button>
      {isOpen && <p>{children}</p>}
    </article>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
