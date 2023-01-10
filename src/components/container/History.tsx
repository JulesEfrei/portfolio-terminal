import { Input } from ".";
import { command, commandComposant } from "../../utils/commandType";
import { Banner, Links, Contact, About } from "../atoms";
import "./styles/History.scss";

function History({ history }: { history: command[] }) {
  const commandComponent: commandComposant = {
    banner: <Banner />,
    links: <Links />,
    contact: <Contact />,
    about: <About />,
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
