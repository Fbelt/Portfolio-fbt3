export function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#09121f",
        paddingTop: "50px",
        paddingBottom: "40px",
        paddingLeft: "50px",
        paddingRight: "50px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2
        style={{
          fontSize: "1.6em",
          color: "white",
          marginBottom: "20px",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          textUnderlineOffset: "8px",
        }}
      >
        Formas de contato:
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h4
            style={{
              marginBottom: "6px",
              fontSize: "1.2em",
              fontFamily: "Semi-Bold",
            }}
          >
            ✉ Email pessoal
          </h4>
          <p style={{ color: "#9ca3af", fontSize: "0.9em" }}>
            felipebelfort08@gmail.com
          </p>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "6px",
              fontSize: "1.2em",
              fontFamily: "Semi-Bold",
            }}
          >
            ✉ Email do CIn
          </h4>
          <p style={{ color: "#9ca3af", fontSize: "0.9em" }}>
            fbt3@cin.ufpe.br
          </p>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "6px",
              fontSize: "1.2em",
              fontFamily: "Semi-Bold",
            }}
          >
            ✉ Email UFPE
          </h4>
          <p style={{ color: "#9ca3af", fontSize: "0.9em" }}>
            felipe.belfort@ufpe.br
          </p>
        </div>
        <div>
          <h4
            style={{
              marginBottom: "6px",
              fontSize: "1.2em",
              fontFamily: "Semi-Bold",
            }}
          >
            ✆ Celular
          </h4>
          <p style={{ color: "#9ca3af", fontSize: "0.9em" }}>(81) 00000-0000</p>
        </div>
      </div>
      <p style={{ marginTop: "50px", color: "#4d5567", fontSize: "0.8em" }}>
        © 2026 Felipe Belfort Teixeira
      </p>
    </div>
  );
}
