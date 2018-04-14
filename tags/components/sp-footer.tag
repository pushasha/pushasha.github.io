<sp-footer>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 social-widget">
                    <div class="single-footer-widget">
                        <h6>Follow Me</h6>
                        <p>Let's be social</p>
                        <div class="footer-social d-flex align-items-center">
                            <a href="https://www.linkedin.com/in/splotkin"><i class="fa fa-linkedin"></i></a>
                            <a href="https://twitter.com/pushasha"><i class="fa fa-twitter"></i></a>
                            <a href="https://github.com/pushasha"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="single-footer-widget">
                        <h6>Contact Me</h6>
                        <form class="form-area text-right" id="myForm" action="https://formspree.io/splotkin@gmail.com" method="post">
                            <div class="row">
                                <div class="col-lg-6 form-group">
                                    <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text">

                                    <input name="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email">

                                    <input name="subject" placeholder="Enter your subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your subject'" class="common-input mb-20 form-control" required="" type="text">
                                </div>
                                <div class="col-lg-6 form-group">
                                    <textarea class="common-textarea mt-10 form-control" name="message" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required=""></textarea>
                                    <button class="primary-btn mt-20">Send Message<span class="lnr lnr-arrow-right"></span></button>
                                    <div class="alert-msg">
                                    </div>
                                </div></div>
                        </form>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="copyright-text">Sarah Plotkin &copy; { currentYear } | All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <script>
        this.currentYear = new Date().getFullYear();
    </script>

</sp-footer>