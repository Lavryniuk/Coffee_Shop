import React from "react";
import Divider from "../../components/divider/Divider";
import "./section.scss";

const Section = ({ img, info, options }) => {
  const { src, size = "default" } = img;
  const { title = "", paragraph = "", country, price } = info;

  const {
    showCountryAndPrice = false,
    layout = "default",
    showDivider = true,
  } = options;

  return (
    <div className={`content ${layout === "wide" ? "content--wide" : ""}`}>
      <img
        src={src}
        alt={title}
        className={`img ${size === "wide" ? "img--wide" : ""}`}
      />
      <div className="text">
        <h2 className="text_title">{title}</h2>
        <Divider color={"#000"} invertIcon={true} />

        {showCountryAndPrice && (
          <p className="text_country">
            Country: <span>{country}</span>
          </p>
        )}
        <p
          className="text_paragraph"
          style={{ textAlign: showCountryAndPrice ? "left" : "center" }}
        >
          {paragraph.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        {showCountryAndPrice && (
          <p className="text_price">
            Price: <span>{price}</span>
          </p>
        )}
      </div>

      {showDivider && <span className="content_divider" />}
    </div>
  );
};

export default Section;
