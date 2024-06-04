import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Whatsapp = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <Container>
        <Row>
          <Col className="">
            <div className="elfsight-app-0b609548-15a1-4296-a5bf-32397bc4877a" data-elfsight-app-lazy></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whatsapp;
