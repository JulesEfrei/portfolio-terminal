import data from "../../utils/data.json";
import "./styles/Contact.scss";

function Contact() {
  return (
    <>
      <div className="contact-component">
        <h4>Contact me!</h4>
        {data.contact.map((elm, index) => {
          return (
            <p key={`${elm.name}-${index}`}>
              {elm.name}: <span>{elm.content}</span>;
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Contact;
