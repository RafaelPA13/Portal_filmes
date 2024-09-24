import "./CardContainer.css"

export default function CardContainer({ titulo, children }) {
  return (
    <div className="section">
      <h1>{titulo}</h1>
      <div className="card-container">{children}</div>
    </div>
  );
}
