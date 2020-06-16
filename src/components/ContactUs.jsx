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
import Footer from "./Footer";


class ContactUs extends React.Component {  
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            isSubmited: false
        }
        this.onChange = this.onChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
        onChange(e) {
            this.setState({
            [e.target.name]: e.target.value,
            });
        }    
    
        handleSubmit = (e) => {
            e.preventDefault();
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contactUs", ...this.state }),
            })
            .then((res) => {
                const status = res.status;
                console.log(status);
                this.setState({isSubmited : true, name : "", email :"", message:""})
            })
            .catch((error) => {
                this.setState({ isError: true });
                console.log(error);
            });
        }
    
    render () {
        return (
            <>
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

                        <Form id="contactUs" onSubmit={this.handleSubmit}>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="email @"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select</Label>
                                <Input type="select" name="select" id="select">
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
                                    onChange={this.onChange}
                                    value={this.state.message}
                                />
                            </FormGroup>
                            <Button type="submit" className="mb-5">Go !</Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
            
            <Footer />
            </>
        );
    }
}

export default ContactUs;
