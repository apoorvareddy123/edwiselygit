import React, { useContext } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { globalContext } from "../context/GlobalContext";

const Python = () => {
  const { name } = useContext(globalContext);
  return (
    <div>
      <Navbar bg="green" expand="lg" style={{ backgroundColor: "green" }}>
        <Container style={{ backgroundColor: "green" }}>
          <Navbar.Brand href="Java" style={{ color: "#0000FF" }}>
            {name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Java" style={{ color: "white" }} active={true}>
                Java
              </Nav.Link>
              <Nav.Link href="" style={{ color: "Yellow", fontWeight: "bold" }}>
                Python
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "white" }}>
                HTML
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "white" }}>
                Javascript
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "white" }}>
                React
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          paddingTop: "30px",
          backgroundColor: "#D3D3D3",
        }}
      >
        <Nav className="flex-column" style={{ width: "20%" }}>
          <Nav.Item>
            <Nav.Link href="#intro" active={true}>
              What is Python
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#syntax">Python Syntax</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#variables">Variables</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#datatypes">Data Types</Nav.Link>
          </Nav.Item>
        </Nav>
        <div
          style={{
            width: "78%",
            height: "95vh",
            backgroundColor: "white",
            border: "1px solid silver",
            borderRadius: "5px",
            overflowY: "scroll",
            // scrollbars:
          }}
        >
          <div id="intro" style={{ padding: "10px" }}>
            <h3>What is Python ? </h3>
            <p>
              Java is a programming language and a platform. Java is a high
              level, robust, object-oriented and secure programming language.
              Java was developed by Sun Microsystems (which is now the
              subsidiary of Oracle) in the year 1995. James Gosling is known as
              the father of Java. Before Java, its name was Oak. Since Oak was
              already a registered company, so James Gosling and his team
              changed the name from Oak to Java. Platform: Any hardware or
              software environment in which a program runs, is known as a
              platform. Since Java has a runtime environment (JRE) and API, it
              is called a platform.
            </p>
            <p>
              According to Sun, 3 billion devices run Java. There are many
              devices where Java is currently used. Some of them are as follows:
              Desktop Applications such as acrobat reader, media player,
              antivirus, etc. Web Applications such as irctc.co.in,
              javatpoint.com, etc. Enterprise Applications such as banking
              applications. Mobile Embedded System Smart Card Robotics Games,
              etc.
            </p>
            <p>
              There are mainly 4 types of applications that can be created using
              Java programming: 1) Standalone Application Standalone
              applications are also known as desktop applications or
              window-based applications. These are traditional software that we
              need to install on every machine. Examples of standalone
              application are Media player, antivirus, etc. AWT and Swing are
              used in Java for creating standalone applications. 2) Web
              Application An application that runs on the server side and
              creates a dynamic page is called a web application. Currently,
              Servlet, JSP, Struts, Spring, Hibernate, JSF, etc. technologies
              are used for creating web applications in Java. 3) Enterprise
              Application An application that is distributed in nature, such as
              banking applications, etc. is called an enterprise application. It
              has advantages like high-level security, load balancing, and
              clustering. In Java, EJB is used for creating enterprise
              applications. 4) Mobile Application An application which is
              created for mobile devices is called a mobile application.
              Currently, Android and Java ME are used for creating mobile
              applications. Java Platforms / Editions There are 4 platforms or
              editions of Java: 1) Java SE (Java Standard Edition) It is a Java
              programming platform. It includes Java programming APIs such as
              java.lang, java.io, java.net, java.util, java.sql, java.math etc.
              It includes core topics like OOPs, String, Regex, Exception, Inner
              classes, Multithreading, I/O Stream, Networking, AWT, Swing,
              Reflection, Collection, etc. 2) Java EE (Java Enterprise Edition)
              It is an enterprise platform that is mainly used to develop web
              and enterprise applications. It is built on top of the Java SE
              platform. It includes topics like Servlet, JSP, Web Services, EJB,
              JPA, etc. 3) Java ME (Java Micro Edition) It is a micro platform
              that is dedicated to mobile applications.
            </p>
          </div>
          <div id="syntax" style={{ padding: "20px" }}>
            <h3>Syntax?</h3>
            <p>
              Object means a real-world entity such as a pen, chair, table,
              computer, watch, etc. Object-Oriented Programming is a methodology
              or paradigm to design a program using classes and objects. It
              simplifies software development and maintenance by providing some
              concepts: Object Class Inheritance Polymorphism Abstraction
              Encapsulation Apart from these concepts, there are some other
              terms which are used in Object-Oriented design: Coupling Cohesion
              Association Aggregation Composition Java OOPs Concepts Object Java
              Object Any entity that has state and behavior is known as an
              object. For example, a chair, pen, table, keyboard, bike, etc. It
              can be physical or logical. An Object can be defined as an
              instance of a class. An object contains an address and takes up
              some space in memory. Objects can communicate without knowing the
              details of each other's data or code. The only necessary thing is
              the type of message accepted and the type of response returned by
              the objects. Example: A dog is an object because it has states
              like color, name, breed, etc. as well as behaviors like wagging
              the tail, barking, eating, etc. Class Collection of objects is
              called class. It is a logical entity. A class can also be defined
              as a blueprint from which you can create an individual object.
              Class doesn't consume any space. Inheritance When one object
              acquires all the properties and behaviors of a parent object, it
              is known as inheritance. It provides code reusability. It is used
              to achieve runtime polymorphism. Polymorphism in Java Polymorphism
              If one task is performed in different ways, it is known as
              polymorphism. For example: to convince the customer differently,
              to draw something, for example, shape, triangle, rectangle, etc.
              In Java, we use method overloading and method overriding to
              achieve polymorphism. Another example can be to speak something;
              for example, a cat speaks meow, dog barks woof, etc. Abstraction
              Hiding internal details and showing functionality is known as
              abstraction. For example phone call, we don't know the internal
              processing. In Java, we use abstract class and interface to
              achieve abstraction. Encapsulation in Java OOPs Concepts
              Encapsulation Binding (or wrapping) code and data together into a
              single unit are known as encapsulation. For example, a capsule, it
              is wrapped with different medicines. A java class is the example
              of encapsulation. Java bean is the fully encapsulated class
              because all the data members are private here. Coupling Coupling
              refers to the knowledge or information or dependency of another
              class. It arises when classes are aware of each other. If a class
              has the details information of another class, there is strong
              coupling. In Java, we use private, protected, and public modifiers
              to display the visibility level of a class, method, and field. You
              can use interfaces for the weaker coupling because there is no
              concrete implementation. Cohesion Cohesion refers to the level of
              a component which performs a single well-defined task. A single
              well-defined task is done by a highly cohesive method. The weakly
              cohesive method will split the task into separate parts. The
              java.io package is a highly cohesive package because it has I/O
              related classes and interface. However, the java.util package is a
              weakly cohesive package because it has unrelated classes and
              interfaces. Association Association represents the relationship
              between the objects. Here, one object can be associated with one
              object or many objects. There can be four types of association
              between the objects: One to One One to Many Many to One, and Many
              to Many Let's understand the relationship with real-time examples.
              For example, One country can have one prime minister (one to one),
              and a prime minister can have many ministers (one to many). Also,
              many MP's can have one prime minister (many to one), and many
              ministers can have many departments (many to many). Association
              can be undirectional or bidirectional. Aggregation Aggregation is
              a way to achieve Association. Aggregation represents the
              relationship where one object contains other objects as a part of
              its state. It represents the weak relationship between objects. It
              is also termed as a has-a relationship in Java. Like, inheritance
              represents the is-a relationship. It is another way to reuse
              objects.
            </p>
          </div>
          <div id="variables" style={{ padding: "20px" }}>
            <h3>Variables ?</h3>
            <p>
              Object means a real-world entity such as a pen, chair, table,
              computer, watch, etc. Object-Oriented Programming is a methodology
              or paradigm to design a program using classes and objects. It
              simplifies software development and maintenance by providing some
              concepts: Object Class Inheritance Polymorphism Abstraction
              Encapsulation Apart from these concepts, there are some other
              terms which are used in Object-Oriented design: Coupling Cohesion
              Association Aggregation Composition Java OOPs Concepts Object Java
              Object Any entity that has state and behavior is known as an
              object. For example, a chair, pen, table, keyboard, bike, etc. It
              can be physical or logical. An Object can be defined as an
              instance of a class. An object contains an address and takes up
              some space in memory. Objects can communicate without knowing the
              details of each other's data or code. The only necessary thing is
              the type of message accepted and the type of response returned by
              the objects. Example: A dog is an object because it has states
              like color, name, breed, etc. as well as behaviors like wagging
              the tail, barking, eating, etc. Class Collection of objects is
              called class. It is a logical entity. A class can also be defined
              as a blueprint from which you can create an individual object.
              Class doesn't consume any space. Inheritance When one object
              acquires all the properties and behaviors of a parent object, it
              is known as inheritance. It provides code reusability. It is used
              to achieve runtime polymorphism. Polymorphism in Java Polymorphism
              If one task is performed in different ways, it is known as
              polymorphism. For example: to convince the customer differently,
              to draw something, for example, shape, triangle, rectangle, etc.
              In Java, we use method overloading and method overriding to
              achieve polymorphism. Another example can be to speak something;
              for example, a cat speaks meow, dog barks woof, etc. Abstraction
              Hiding internal details and showing functionality is known as
              abstraction. For example phone call, we don't know the internal
              processing. In Java, we use abstract class and interface to
              achieve abstraction. Encapsulation in Java OOPs Concepts
              Encapsulation Binding (or wrapping) code and data together into a
              single unit are known as encapsulation. For example, a capsule, it
              is wrapped with different medicines. A java class is the example
              of encapsulation. Java bean is the fully encapsulated class
              because all the data members are private here. Coupling Coupling
              refers to the knowledge or information or dependency of another
              class. It arises when classes are aware of each other. If a class
              has the details information of another class, there is strong
              coupling. In Java, we use private, protected, and public modifiers
              to display the visibility level of a class, method, and field. You
              can use interfaces for the weaker coupling because there is no
              concrete implementation. Cohesion Cohesion refers to the level of
              a component which performs a single well-defined task. A single
              well-defined task is done by a highly cohesive method. The weakly
              cohesive method will split the task into separate parts. The
              java.io package is a highly cohesive package because it has I/O
              related classes and interface. However, the java.util package is a
              weakly cohesive package because it has unrelated classes and
              interfaces. Association Association represents the relationship
              between the objects. Here, one object can be associated with one
              object or many objects. There can be four types of association
              between the objects: One to One One to Many Many to One, and Many
              to Many Let's understand the relationship with real-time examples.
              For example, One country can have one prime minister (one to one),
              and a prime minister can have many ministers (one to many). Also,
              many MP's can have one prime minister (many to one), and many
              ministers can have many departments (many to many). Association
              can be undirectional or bidirectional. Aggregation Aggregation is
              a way to achieve Association. Aggregation represents the
              relationship where one object contains other objects as a part of
              its state. It represents the weak relationship between objects. It
              is also termed as a has-a relationship in Java. Like, inheritance
              represents the is-a relationship. It is another way to reuse
              objects.
            </p>
          </div>
          <div id="datatypes" style={{ padding: "20px" }}>
            <h3>Data Types ?</h3>
            <p>
              Object means a real-world entity such as a pen, chair, table,
              computer, watch, etc. Object-Oriented Programming is a methodology
              or paradigm to design a program using classes and objects. It
              simplifies software development and maintenance by providing some
              concepts: Object Class Inheritance Polymorphism Abstraction
              Encapsulation Apart from these concepts, there are some other
              terms which are used in Object-Oriented design: Coupling Cohesion
              Association Aggregation Composition Java OOPs Concepts Object Java
              Object Any entity that has state and behavior is known as an
              object. For example, a chair, pen, table, keyboard, bike, etc. It
              can be physical or logical. An Object can be defined as an
              instance of a class. An object contains an address and takes up
              some space in memory. Objects can communicate without knowing the
              details of each other's data or code. The only necessary thing is
              the type of message accepted and the type of response returned by
              the objects. Example: A dog is an object because it has states
              like color, name, breed, etc. as well as behaviors like wagging
              the tail, barking, eating, etc. Class Collection of objects is
              called class. It is a logical entity. A class can also be defined
              as a blueprint from which you can create an individual object.
              Class doesn't consume any space. Inheritance When one object
              acquires all the properties and behaviors of a parent object, it
              is known as inheritance. It provides code reusability. It is used
              to achieve runtime polymorphism. Polymorphism in Java Polymorphism
              If one task is performed in different ways, it is known as
              polymorphism. For example: to convince the customer differently,
              to draw something, for example, shape, triangle, rectangle, etc.
              In Java, we use method overloading and method overriding to
              achieve polymorphism. Another example can be to speak something;
              for example, a cat speaks meow, dog barks woof, etc. Abstraction
              Hiding internal details and showing functionality is known as
              abstraction. For example phone call, we don't know the internal
              processing. In Java, we use abstract class and interface to
              achieve abstraction. Encapsulation in Java OOPs Concepts
              Encapsulation Binding (or wrapping) code and data together into a
              single unit are known as encapsulation. For example, a capsule, it
              is wrapped with different medicines. A java class is the example
              of encapsulation. Java bean is the fully encapsulated class
              because all the data members are private here. Coupling Coupling
              refers to the knowledge or information or dependency of another
              class. It arises when classes are aware of each other. If a class
              has the details information of another class, there is strong
              coupling. In Java, we use private, protected, and public modifiers
              to display the visibility level of a class, method, and field. You
              can use interfaces for the weaker coupling because there is no
              concrete implementation. Cohesion Cohesion refers to the level of
              a component which performs a single well-defined task. A single
              well-defined task is done by a highly cohesive method. The weakly
              cohesive method will split the task into separate parts. The
              java.io package is a highly cohesive package because it has I/O
              related classes and interface. However, the java.util package is a
              weakly cohesive package because it has unrelated classes and
              interfaces. Association Association represents the relationship
              between the objects. Here, one object can be associated with one
              object or many objects. There can be four types of association
              between the objects: One to One One to Many Many to One, and Many
              to Many Let's understand the relationship with real-time examples.
              For example, One country can have one prime minister (one to one),
              and a prime minister can have many ministers (one to many). Also,
              many MP's can have one prime minister (many to one), and many
              ministers can have many departments (many to many). Association
              can be undirectional or bidirectional. Aggregation Aggregation is
              a way to achieve Association. Aggregation represents the
              relationship where one object contains other objects as a part of
              its state. It represents the weak relationship between objects. It
              is also termed as a has-a relationship in Java. Like, inheritance
              represents the is-a relationship. It is another way to reuse
              objects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Python;
