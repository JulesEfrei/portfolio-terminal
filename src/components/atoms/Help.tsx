import "./styles/Help.scss";

function Help() {
  const data: { name: string; description: string }[] = [
    { name: "about", description: "Short description about me." },
    { name: "banner", description: "Banner" },
    { name: "clasic", description: "Redirection to classic portfolio" },
    { name: "contact", description: "How to contact me" },
    { name: "download", description: "Download my CV" },
    { name: "links", description: "My social network links" },
    {
      name: "projects",
      description: "Some of my project with their link & description",
    },
    { name: "secret", description: "Surprise!" },
    { name: "skills", description: "What I'm abble to do" },
  ];

  return (
    <>
      <div className="help-container">
        <h4>You need help?</h4>
        <br />
        {data.map((elm, index) => {
          return (
            <>
              <div className="grid-container" key={Math.random()}>
                <div className="name-container">
                  <p>{elm.name}</p>
                </div>
                <div className="description-container">
                  <p>{elm.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Help;
