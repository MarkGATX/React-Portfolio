import "./Contact.css";

export default function Contact() {

 return (
<div className="container-fluid row mt-5">

<section id="contactDiv" className=" container d-flex justify-content-center flex-wrap p-5">
    <p id="contactJump"></p>
    <h2 className="col-12 text-center">Get in touch!</h2>
    <p className="col-12 text-center">You can reach me on GitHub or LinkedIn</p>
    <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer" href="https://github.com/markgatx">
        <i
            title="GitHub" className="devicon-github-original "></i></a>
    <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer"
        href="https://www.linkedin.com/in/mark-gardner-ATX/"><i title="LinkedIn"
            className="devicon-linkedin-plain "></i></a>

</section>
</div>
 )}