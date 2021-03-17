import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Project({ data, mode }) {
  const {
    title, badges, image, description, buttons,
  } = data;
  return (
    <Row className="mb-5">
      <Col>
        {mode.startsWith('list') && (
          <div className={`col-6 col-md-3 ${mode.endsWith('left') ? 'float-left pl-0 pr-3' : 'float-right pr-0 pl-3'}`}>
            <Image className="w-100 h-auto" width="1" height="1" src={image} rounded />
          </div>
        )}
        <h5>
          {(title.href
            && <a className="mr-2" href={title.href}>{title.text}</a>)
            || <span className="mr-2">{title.text}</span>}
          {badges.map((badge) => (
            <img key={badge.alt} className="mr-2 mt-n1" src={badge.src} alt={badge.alt} />
          ))}
        </h5>
        {description}
        {buttons.map((button) => (
          <Button className="mr-2" href={button.href} variant={button.variant}>
            {button.text}
            {React.cloneElement(button.icon, { className: 'ml-2 mt-n1' })}
          </Button>
        ))}
      </Col>
    </Row>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
    badges: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })),
    image: PropTypes.string.isRequired,
    description: PropTypes.element.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.element,
      href: PropTypes.string.isRequired,
    })),
  }).isRequired,
  mode: PropTypes.string,
};

Project.defaultProps = {
  mode: 'list right',
};

export default Project;
