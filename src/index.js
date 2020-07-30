import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const Heading = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: blue;
`;

const Button = styled.button`
  color: ${(props) => (props.primary ? 'red' : 'green')};
  border-radius: 40px;
  background-color: transparent;
  border: 5px solid ${(props) => (props.primary ? 'red' : 'green')};
  font-size: 32px;
  padding: 5px 10px;
  font-weight: bold;
`;
const Container = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  flexDirection: props.column && 'column',
}));

const Basic = ({ className }) => (
  <div className={className}>Normal or fancy?</div>
);

const Fancy = styled(Basic)`
  color: green;
  font-weight: bold;
  font-size: 32px;
`;

const TutorialFont = styled.p`
  color: rgb(50, 50, 50);
  font-size: 18px;
  font-family: "Arial Black", Gadget, sans-serif;
`;

const Nesting = styled('p')`
  color: green;
  & > span {
    color: blue;
  }
`;

const Cover = styled.div`
  background: linear-gradient(rgb(255, 255, 255), rgb(200, 200, 200));
  border: solid 5px rgb(50, 50, 50);
`;

const App = (props) => {
  return (
    <Cover>
      <Container column>
        <Heading>Emotion Styling</Heading>
        <TutorialFont>There is no css file associated with this page, and no inline styling.</TutorialFont>
        <TutorialFont>Here are two Buttons. Passing in a primary property controls their color:</TutorialFont>
        <Container>
          <Button>Not primary...</Button>
          <Button primary>Props contains primary!</Button>
        </Container>
      </Container>
      <Container column>
        <TutorialFont>You can use the `styled` tool to style anything that accepts a className, as shown here with a div:</TutorialFont>
        <Basic />
        <Fancy />
      </Container>
      <Container column>
        <TutorialFont>You can use the `as` property to change the element that is rendered, but still get the styles from the component:</TutorialFont>
        <Button
          as="a"
          href="#"
        >
          This is rendered as a link, but gets the style of a button!
        </Button>
      </Container>
      <Container column>
        <TutorialFont>Emotion also supports nesting, as shown here:</TutorialFont>
        <Nesting>Notice how <span>this</span> is a different color? It is done with <span>nesting!</span></Nesting>
        <TutorialFont>Also, everything on this page is contained in flex boxes, which are also done with Emotion!</TutorialFont>
      </Container>
    </Cover>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
