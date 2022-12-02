

export default function Resume() {

    return (

        <section className="col-md-8 col-lg-8 contactMeContainer">
            <h2 className="col-12 mb-4">Contact Me</h2>
            <div className="d-flex justify-content-center flex-wrap">
            <p className="col-12 text-center">You can always reach me on GitHub or LinkedIn</p>
            <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer" href="https://github.com/markgatx">
                <i
                    title="GitHub" className="devicon-github-original "></i></a>
            <a className="col-2 text-decoration-none d-flex justify-content-center" target="_blank" rel="noreferrer"
                href="https://www.linkedin.com/in/mark-gardner-ATX/"><i title="LinkedIn"
                    className="devicon-linkedin-plain "></i></a>
                    </div>
            <div class="container-fluid row d-flex justify-content-center mt-2">
                <div class="card contactCard col-8">
                    <div class="card-body">
                        <h5 class="card-title">Or send me an email...</h5>
                        <label for="Email" class="form-label">Your Email address</label>
                        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" />
                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Your message here:</label>
                            <input type="textarea" class="form-control" id="message" />
                        </div>
                        <button type="submit" class="button">Submit</button>
                    </div>
                </div>
            </div>

        </section>

    )
}