import React from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";


function ContactUs() {  
    
    return (
        <Container>
            <Row>
                <Breadcrumb listTag="div" className="breadcrumb">
                    <BreadcrumbItem tag={Link} to={"/"}>
                        KALE BORROKA RECORDS
                    </BreadcrumbItem>
                    <BreadcrumbItem active tag="span">
                        Contactez Nous
                    </BreadcrumbItem>
                </Breadcrumb>
            </Row>
            <Row>
                <Col>
                    <Form id="contactMe" onSubmit={(e) =>{
                                e.preventDefault()}}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="email @"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                            >
                                <option>Commande</option>
                                <option>Groupe</option>
                                <option>Autre</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="exampleText"
                            />
                        </FormGroup>
                        <Button type="submit">Go !</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
