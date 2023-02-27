function Pokemon(props) {
  const colorPicket = (type) => {
    switch (type) {
      case "fire":
        return "#f59622";
      case "water":
        return "#256d9b";
      case "electric":
        return "#eed535";
      case "air":
      default:
        return "#f5eff5";
    }
  };

  return (
    <>
      <div
        style={{
          border: `1px solid ${colorPicket(props.type)}`,
          boxShadow: `2px 1px 15px 2px${colorPicket(props.type)}`,
          width: "250px",
          color: "#242424",
          borderRadius: "15px",
          textAlign: "center",
        }}
      >
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "24px",
          color: colorPicket(props.type),

        }}>{props.name.toUpperCase()}</p>
        <img src={props.avatar} alt={props.name} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            backgroundColor: colorPicket(props.type),
            color: "#242424",
            borderRadius: "5px",
            margin: "15px",
          }}
        >
          <p style={{ fontFamily: "sans-serif", fontSize: "16px" }}>Power level: {props.powerLevel} Type:{props.type}</p>
        </div>
      </div>
    </>
  );
}

export default Pokemon;