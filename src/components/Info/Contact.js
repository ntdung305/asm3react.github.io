import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="info-1 contact1">
        <div className="info-1__1">LET'S BE FRIENDS!</div>
        <div className="info-1__2">nisi temppor consenquat laboris nisi</div>
      </div>
      <div className="contact2">
        <input
          className="contact2-input"
          placeholder="Enter your email address"
        />
        <button className="contact2-btn">Subcribe</button>
      </div>
    </div>
  );
};
export default Contact;
