import "./styles/Download.scss";

function Download() {
  return (
    <>
      <div className="download-command">
        <a href="./cv.pdf" download="CV Jules Bruzeau">
          Download My CV
        </a>
      </div>
    </>
  );
}

export default Download;
