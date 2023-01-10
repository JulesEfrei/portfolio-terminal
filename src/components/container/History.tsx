import { Input } from ".";
import { command, commandComposant } from "../../utils/commandType";
import { Banner } from "../atoms";
import Links from "../atoms/Links";
import "./styles/History.scss";

function History({ history }: { history: command[] }) {
  const commandComponent: commandComposant = {
    banner: <Banner />,
    links: <Links />,
  };

  return (
    <>
      <Banner />
      {history.map((elm, index) => {
        return (
          <div key={`${elm}-${index}`} style={{ marginBottom: "1rem" }}>
            <Input inputValue={elm} />
            {commandComponent[elm]}
          </div>
        );
      })}
    </>
  );
}

export default History;
