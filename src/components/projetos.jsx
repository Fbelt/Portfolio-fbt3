import mangueboard from "../assets/Mangueboard.webp";
import findai from "../assets/findai.png";
import citi from "../assets/citi.jpg";

export function Projects() {
  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        padding: "50px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontFamily: "Semi-Bold",
          fontSize: "1.9em",
          textAlign: "left",
          paddingLeft: "90px",
          paddingRight: "90px",
          textDecoration: "underline",
        }}
      >
        Projetos e experiências profissionais:
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            gap: "50px",
            padding: "30px 50px",
            border: "2px solid #4d4866",
            borderRadius: "24px",
            marginLeft: "90px",
            marginRight: "90px",
          }}
        >
          <img
            src={mangueboard}
            alt="MangueBoard"
            style={{
              width: "45%",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              width: "450px",
              border: "5px solid #717bab",
            }}
          />
          <div style={{ flex: 1, textAlign: "left" }}>
            <h3
              style={{
                color: "#cbd2f6",
                fontWeight: "Bold",
                fontSize: "1.3em",
                marginTop: "5px",
              }}
            >
              ➞ MangueBoard
            </h3>
            <p
              style={{
                color: "#bdc4cf",
                fontSize: "0.9em",
                marginBottom: "15px",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              O MangueBoard é um projeto que desenvolvi na cadeira de Concepção
              de Artefatos Digitais (CAD) para tratar sobre a fragmentação das
              denúncias feitas via Conecta Recife. Nessa solução, eu e minha
              equipe fizemos uma refatoração na plataforma que o governo utiliza
              para monitorar essas denúncias para poder falicitar o tratamento
              destas, envolvendo muita UX e UI.
            </p>
            <a
              href="https://preview--mangueboard.lovable.app"
              target="_blank"
              style={{
                textDecoration: "Underline",
                color: "#577ec1",
                marginTop: "40px",
              }}
            >
              Ver protótipo Lovable
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            gap: "40px",
            padding: "30px 50px",
            border: "2px solid #4d4866",
            borderRadius: "24px",
            marginLeft: "90px",
            marginRight: "90px",
          }}
        >
          <img
            src={findai}
            alt="Find AI at CIN"
            style={{
              width: "45%",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              width: "450px",
              height: "250px",
              border: "5px solid #717bab",
            }}
          />
          <div style={{ flex: 1, textAlign: "left" }}>
            <h3
              style={{
                color: "#cbd2f6",
                fontWeight: "Bold",
                fontSize: "1.3em",
                marginTop: "5px",
              }}
            >
              ➞ Find AI at CIN
            </h3>
            <p
              style={{
                color: "#bdc4cf",
                fontSize: "0.9em",
                marginBottom: "15px",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              O Find AI at CIN, é um jogo de exploração, desenvolvido em python
              durante a cadeira de Introdução a Programação. Nele, o jogador
              deve explorar um labirinto (o Centro de Informática) e coletar 3
              IA's para conseguir ser aprovado na cadeira. No entanto, diversos
              monitores e professores vão estar vigiando o local para garantir
              que as IA's não sejam encontradas.
            </p>
            <a
              href="https://github.com/Fbelt/Projeto-IP"
              target="_blank"
              style={{
                textDecoration: "Underline",
                color: "#577ec1",
                marginTop: "40px",
              }}
            >
              {" "}
              Ver repositório no Github
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            gap: "40px",
            padding: "30px 50px",
            border: "2px solid #4d4866",
            borderRadius: "24px",
            marginLeft: "90px",
            marginRight: "90px",
          }}
        >
          <img
            src={citi}
            alt="CITi"
            style={{
              width: "45%",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              width: "450px",
              height: "280px",
              border: "5px solid #717bab",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            }}
          />
          <div style={{ flex: 1, textAlign: "left" }}>
            <h3
              style={{
                color: "#cbd2f6",
                fontWeight: "Bold",
                fontSize: "1.3em",
                marginTop: "5px",
              }}
            >
              ➞ CITi
            </h3>
            <p
              style={{
                color: "#bdc4cf",
                fontSize: "0.9em",
                marginBottom: "15px",
                marginTop: "10px",
                textAlign: "justify",
              }}
            >
              {" "}
              Durante o meu 1º Período na faculdade, tentei o processo seletivo
              do CITi (empresa júnior vinculada ao CIN) e felizmente fui
              aprovado. Comecei a atuar no cargo de Pessoa Desenvolvedora em
              Julho de 2026 e desenvolvi muito bem tanto hard como soft skills.
              Aprendi a me comunicar com times e a mexer com tecnologias que
              pensei que eu não seria capaz no momento, mas consegui me adaptar
              bem e continuo buscando me desenvolver mais profissionalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
