import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function SkillBox({ data }) {
  const { title, image } = data;
  return (
    <a href={title.href}>
      <Card className="d-inline-block mx-2" style={{ width: '130px' }}>
        <Card.Img className="p-3 w-100 h-auto" width="1" height="1" variant="top" src={image} />
        <Card.Header className="text-center text-truncate p-1">
          <strong>{title.text}</strong>
        </Card.Header>
      </Card>
    </a>
  );
}

SkillBox.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillBox;
