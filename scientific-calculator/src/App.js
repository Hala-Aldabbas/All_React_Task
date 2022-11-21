import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { MyContext } from "./MyContext";
import Input from "./components/input/Input";
import {
  Button,
  ClearButton,
  DeleteButton,
} from "./components/buttons/Buttons";
import Operator from "./components/operator/Operator";
import EqualButton from "./components/equal-button/EqualButton";
import * as Icons from "./components/icons";

function App() {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [removed, setRemoved] = useState([]);




  return (
    <MyContext.Provider
      value={{ userInput, setUserInput, stack, setStack, removed, setRemoved }}
    >
      <Container className="App">
        <Row className="App-header">
         
        </Row>
        <Row className="calculator">
          <Col>
            <Row>
              <Input />
            </Row>
            <Row>
              <Col>
                <Row >
                  <Col> <Button name={<Icons.Pi />} type="pi" /></Col>
                  <Col> <Button name="log" type="func" /> </Col>
                  <Col> <Button name="%" type="func" />   </Col>
                  <Col> <ClearButton name="AC" /></Col>
                  <Col className="delete"><DeleteButton name={<Icons.Backspace />} />  </Col>
                  <Col><EqualButton name={<Icons.Equal />} /></Col>
                </Row>
                <Row>
                  <Col> <Button name={<Icons.XDegreeCube />} type="degreecube" /> </Col>
                  
                  <Col> <Button name={<Icons.XDegreeSquare />} type="degreesqr" /></Col>
                  <Col> <Button name="7" className="number" /> </Col>
                  <Col><Button name="8" className="number" /></Col>
                  <Col> <Button name="9" className="number" /> </Col>
                  <Col><Operator name={<Icons.Divide />} type="divide" /></Col>
                </Row>
                <Row>
               
                  <Col><Button name="sin" type="func" /></Col>
                  <Col><Button name={<Icons.SquareRoot />} type="sqrt" /> </Col>
                  <Col><Button name="4" className="number" /> </Col>
                  <Col>
                    <Button name="5" className="number" />
                  </Col>
                  <Col>
                    <Button name="6" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Multiplication />} type="mul" />
                  </Col>
                </Row>
                <Row>       
                  <Col>
                  <Button name="cos" type="func" />
                  </Col>
                  <Col>
                    <Button name={<Icons.CubeRoot />} type="cbrt" />
                  </Col>
           
                  <Col>
                    <Button name="1" className="number" />
                  </Col>
                  <Col>
                    <Button name="2" className="number" />
                  </Col>
                  <Col>
                    <Button name="3" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Minus />} type="minus" />
                  </Col>
                </Row>
                <Row>
            
                  <Col>
                  <Button name="tan" type="func" />
                  </Col>
                  <Col>
                   <Button name="(" />
                  </Col>
                  <Col>
                 <Button name=")" />
                  </Col>
                  <Col>
                    <Button name="0" className="number" />
                  </Col>
                  <Col>
                    <Button name="." />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Plus />} type="plus" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </MyContext.Provider>
  );
}

export default App;
