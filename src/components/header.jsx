export function Header() {
  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        color: "white",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        border: "10px solid #fcfdff",
      }}
    >
      <h1
        style={{
          fontSize: "3em",
          fontFamily: "Bold",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        Felipe Belfort Teixeira
      </h1>
      <p
        style={{
          marginBottom: "20px",
          fontFamily: "Semi-Bold",
          fontSize: "1.1em",
          borderBottom: "2px solid #8f9cdd",
        }}
      >
        Sistemas da Informação | Universidade Federal de Pernambuco
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gridGap: "20px",
          padding: "50px 240px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="src/assets/Foto.jpg"
            alt="Profile"
            style={{
              width: "250px",
              height: "300px",
              borderRadius: "32px",
              border: "5px solid #8f9cdd",
              boxShadow: "0px 0px 10px black",
            }}
          />
          <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
            <a href="https://github.com/Fbelt" target="_blank">
              <img
                src="src/assets/Github.webp"
                alt="GitHub"
                style={{
                  width: "32px",
                  height: "32px",
                  background: "white",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-belfort-340095406/"
              target="_blank"
            >
              <img
                src="src/assets/Linkedin.png"
                alt="LinkedIn"
                style={{
                  width: "32px",
                  height: "32px",
                  background: "white",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/felipebelfortteixeira/"
              target="_blank"
            >
              <img
                src="src/assets/insta.webp"
                alt="Instagram"
                style={{
                  width: "48px",
                  height: "48px",
                  background: "white",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            </a>
          </div>{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: "70px",
          }}
        >
          <h2
            style={{
              marginTop: "50px",
              textAlign: "left",
              textDecoration: "underline",
              color: "white",
              fontFamily: "Semi-Bold",
              fontSize: "1.6em",
            }}
          >
            Sobre Mim:
          </h2>
          <p
            style={{
              textAlign: "left",
              fontFamily: "Regular",
              fontSize: "0.95em",
              lineHeight: "1.7",
              color: "#ffffff",
              marginTop: "20px",
            }}
          >
            Me chamo Felipe Belfort Teixeira, tenho 18 anos e estou cursando o
            2º período de Sistemas de Informação na Universidade Federal de
            Pernambuco. Busco aprender como funcionam as tecnologias e como
            aplicá-las no mundo real de forma eficiente. Tenho muito interesse
            nas áreas de cybersegurança e inteligência artificial, tendo em
            mente o objetivo de me profissionalizar nessas áreas futuramente.
          </p>
        </div>
      </div>
      <h3
        style={{
          marginTop: "20px",
          textAlign: "center",
          textDecoration: "underline",
          marginBottom: "5px",
        }}
      >
        Formas de contato:
      </h3>
      <h4 style={{ textAlign: "center" }}>Email: fbt3@cin.ufpe.br </h4>
    </div>
  );
}
