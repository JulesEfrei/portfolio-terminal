import { command, commandComposant } from "../../utils/commandType";
import { Banner } from "../atoms";
import "./styles/History.scss";

function History({ history }: { history: command[] }) {
  const commandComponent: commandComposant = {
    banner: <Banner />,
  };

  return (
    <>
      {history.map((elm, index) => {
        return <div key={`${elm}-${index}`}>{commandComponent[elm]}</div>;
      })}
    </>
  );
}

export default History;
