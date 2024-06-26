const Iframe = () => {
  return (
    <>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1430.0911488976762!2d74.34511803012757!3d31.514569409565905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904596d226695%3A0xf5fb6d9420427d18!2sAl%20Hafeez%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1711208349790!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </>
  );
};

export default Iframe;
