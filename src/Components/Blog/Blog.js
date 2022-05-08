import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container p-5 pb-5'>
                <div className='col-md'>
                    <h3>What is the difference between JavaScript and Node.js?</h3>
                    <p><strong>JavaScript</strong> <br />
                        is Lightweight, interpreted, object-oriented language with first-class functions. JavaScript is most known as the scripting language for Web pages, but used in many non-browser environments as well such as node.js or Apache CouchDB. It is a prototype-based, multi-paradigm scripting language that is dynamic,and supports object-oriented, imperative, and functional programming styles.<br />
                        <strong>Node.js </strong> <br />
                        is A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                </div>

                <div className='col-md'>
                    <h3>What is the difference between SQL and NoSQL?</h3>
                    <p><strong>SQL</strong> is Structured Query Language is a language that is used to have communication between the user and the database. It is used in the databases that use some structured data. Relational databases use SQL for making changes in their databases.<br />
                        <strong>NoSQL</strong> is "Not Only SQL" or "Not SQL" is used in that type of databases where there is no requirement of a fixed or structured database. Here there is no fixed schema. It is generally used in real-time web applications. Some of the companies that are using NoSQL are Facebook, Google, etc.<br />
                    </p>
                </div>
                <div className='col-md'>
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p> A <strong>JWT</strong> is a mechanism to verify the owner of some JSON data. It’s an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.<br />
                        Using JWTs for session tokens might seem like a good idea at first because: <br/> 
                        1. You can store any kind of user details on the client<br/>
                        2. The server can trust the client because the JWT is signed, and there is no need to call the database to retrieve the information you already stored in the JWT.<br/>
                        3. You don’t need to coordinate sessions in a centralized database when you get to the eventual problem of horizontal scaling <br/>
                        Ultimately, if you already have a database for your application, just use a sessions table and use regular sessions as provided by the server-side framework of choice
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;