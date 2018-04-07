<sp-navbar>
    <header class="default-header">
        <nav class="navbar navbar-expand-lg  navbar-light">
            <div class="container">
                <a class="navbar-brand" href="#">Sarah Plotkin</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="text-white lnr lnr-menu"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end align-items-center"
                     id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#home">Home</a></li>
                        <li class="nav-item"><a href="#about">About</a></li>
                        <li class="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>


</sp-navbar>

<script>
    $(document).ready(function () {
        $("header").sticky({topSpacing: 0, zIndex: 1020});
    });

    $(".nav-item a").on("click", function () {
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
</script>