import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfoBox({ data, mode }) {
  const {
    title, badges, image, description, buttons,
  } = data;

  const renderListBox = () => (
    <Row className="mb-5">
      <Col>
        <div className={`col-6 col-md-3 ${mode.endsWith('left') ? 'float-left pl-0 pr-3' : 'float-right pr-0 pl-3'}`}>
          <Image className="w-100 h-auto" width="1" height="1" src={image} rounded />
        </div>
        <h5 className="d-flex flex-wrap align-items-baseline" style={{ gap: '.5rem' }}>
          {(title.href
            && <a href={title.href}>{title.text}</a>)
            || <span>{title.text}</span>}
          {badges.map((badge) => (
            <img key={badge.alt} className="mt-n1" src={badge.src} alt={badge.alt} />
          ))}
        </h5>
        {description}
        <div className="d-flex flex-wrap" style={{ gap: '.5rem' }}>
          {buttons.map((button) => (
            <Button key={button.text} href={button.href} variant={button.variant}>
              {button.text}
              {React.cloneElement(button.icon, { className: 'ml-2 mt-n1' })}
            </Button>
          ))}
        </div>
      </Col>
    </Row>
  );

  const renderIconBox = () => (
    <Col className="mb-4" xs={12} md={6} lg={4}>
      <Card>
        <Image className="w-50 h-auto mt-3 mx-auto" width="1" height="1" variant="top" src={image} rounded />
        <Card.Body className="mb-n2">
          <Card.Title className="text-center mb-1"><a href={title.href}>{title.text}</a></Card.Title>
          <div className="overflow-auto mb-2" style={{ maxHeight: '185px' }}>
            <div className="d-flex flex-wrap justify-content-center mb-1" style={{ gap: '.5rem' }}>
              {badges.map((badge) => (
                <img key={badge.alt} src={badge.src} alt={badge.alt} />
              ))}
            </div>
            {description}
          </div>
          <div className="d-flex flex-wrap justify-content-center" style={{ gap: '.5rem' }}>
            {buttons.map((button) => (
              <Button key={button.text} href={button.href} variant={button.variant}>
                {button.text}
                {React.cloneElement(button.icon, { className: 'ml-2 mt-n1' })}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );

  return (mode.startsWith('list') && renderListBox()) || renderIconBox();
}

InfoBox.propTypes = {
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

InfoBox.defaultProps = {
  mode: 'list right',
};

export default InfoBox;
