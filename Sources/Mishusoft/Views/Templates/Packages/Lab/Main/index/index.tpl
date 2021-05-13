<div class="flex-column row col-lg-12 col-md-12 col-sm-12 col-xs-plus-12 col-xs-plus-12">
    <article class="flex-column-content box-shadow box-shadow-light">
        <header>
            <span class="font-weight-bold font-size-20" style="text-transform: uppercase"> welcome to mishusoft</span>
        </header>
        <p class="text-align-justify">
            <span class="font-weight-bold">{$layoutParams.configs.app_company}</span> is a software development company that
            is going to be established with a view to offering quality IT solutions at home and abroad.
            <!--DTCL is a Bangladesh based ISO 9001:2008 Certified , NBR enlisted and a member of BASIS and BCS .-->
            The company is keen to take the advantage of fast growing global software and data
            processing industry by offering professional service and price for support and benefit of
            the valued customers.
            <br/><br/>
            <span class="font-weight-bold">{$layoutParams.configs.app_company}</span> has started its journey to provide
            quality output and they are well linked internationally.
            <span class="font-weight-bold">{$layoutParams.configs.app_company}.  </span>
            has unique and holistic approaches toward continuous improvement through training and
            development of human resources to adapt into the market aiming to meet the demands of client
            and keep them constant touch with the latest global technological development.
            <span class="font-weight-bold">{$layoutParams.configs.app_company}.  </span> IT is striving to provide a cost
            effective and high standard services in the dynamic IT industry. The company would build
            itself with a strategy of continuous reeducation and motivation to create an innovative and
            dedicated work force in the expanding IT sector. .
            <br/><br/>

            <strong>{$layoutParams.configs.app_company}. </strong>especially aims at export oriented software development. Thus
            <strong>{$layoutParams.configs.app_company} </strong> IT industry is growing at a higher rate and opening
            opportunities of service linkage
            to professional service providers all over the world.

            <br/>
            <br/>
            We have experienced professionals who are ready with indomitable commitment to cater any IT product and
            services viewing to transform The Concept into Reality”<br>
            <br>
            We delivered number of successful, most innovative and cost-effective and efficient technical solution
            for both home and abroad for a number of global companies, SME sector, Government agencies where we have
            bank our success.<br>
        </p>
        <footer>
            <a href="{$layoutParams.root}about/aboutMishusoft" class="readmore text-shadow-button">Read More..</a>
        </footer>
    </article>
    {*<div class="col-lg-8 col-md-8"></div>*}
    {*<div class="col-lg-4 col-md-4">
        <article class="box-shadow box-shadow-light">
            <div class="pgSidebarSearchBox">
                <div class="input-group">
                    <div class="inputBox">
                        <input id="ms-qck-src" title="Search here" type="search" class="input-control" placeholder="Search Anything.."/>
                    </div>
                    <div class="buttonBox">
                        <input id="ms-qck-src-do" type="button" class="button button-outline-primary" value="Search">
                    </div>
                </div>
            </div>
        </article>
        {if is_null($layoutParams.mishusoft_session_validity)}
            <article class="box-shadow box-shadow-light">
                <header>
                    <hgroup>
                        <h5 style="text-transform: uppercase;border-bottom: 2px solid #53b5e5;">Log In</h5>
                    </hgroup>
                </header>

                <div id="messageZone" class="messageZone"></div>

                <form role="form" name="LogInForm" id="LogInForm" method="post" action="">
                    <input type="hidden" name="logged" value="1">
                    <input id="redirect" type="hidden" name="redirect" value="/">
                    <div class="pgSidebarLogInBox">
                        <div class="input-group">
                            <div class="shortElement"><label for="acc_usrnm_frnt_page">Username : </label></div>
                            <div class="largeElement">
                                <input id="username" title="Your username" type="text" class="input-control" placeholder="Your username.." required value=""/>
                            </div>
                        </div>
                        <div class="input-group">
                            <div class="shortElement"><label for="acc_psrwd_frnt_page">Password : </label></div>
                            <div class="largeElement">
                                <input id="password" title="Your password" type="password" class="input-control" placeholder="***********" autocomplete="off" required/>
                            </div>
                        </div>
                        <div class="input-group">
                            <label class="input-container">Remember me.
                                <input type="checkbox" id="RememberMe" value="RememberMe"/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="input-group">
                            <div class="shortElement">
                                <input id="login-button" type="submit" class="button button-outline-primary" value="LOGIN" style="height: 30px !important;">
                            </div>
                        </div>
                        <div class="input-group">
                            <div class="shortElement">
                                <a href="{$layoutParams.root}user/pswrdRecovery" class="link" style="color: #53b5e5;">
                                    <span class="fa fa-user-times"></span> Forget password?</a>
                                <a href="{$layoutParams.root}user/registration" class="link" style="color: #53b5e5;">
                                    <span class="fa fa-user-plus"></span> Create an account.</a>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        {/if}

        <article>
            <header>
                <hgroup>
                    <h5 style="text-transform: uppercase;border-bottom: 2px solid #53b5e5;"> WHY CHOOSE US</h5>
                </hgroup>
            </header>
            <ul class="pgSidebarItems">
                <li class="pgSidebarItemsBody">
                    <div class="pgSidebarItemsBodyTitle"> We’ll Respond Within 2 hours or Less.</div>
                    <div class="pgSidebarItemsBodyButton collapse"> +</div>
                    <div class="pgSidebarItemsBodyText">
                        When you call us with a problem in our any product, we ensure you that your phone
                        call will be either answered immediately or
                        returned within 2 hours or less by an experienced technician who can help.
                        If we fail to respond within that time frame, a reduction given on your fixed
                        monthly fee.
                    </div>
                </li>
                <li class="pgSidebarItemsBody">
                    <div class="pgSidebarItemsBodyTitle">100% Unconditional Satisfaction Guarantee</div>
                    <div class="pgSidebarItemsBodyButton collapse">+</div>
                    <div class="pgSidebarItemsBodyText">
                        You deserve complete satisfaction with our products and services. We will do
                        whatever it takes to make you happy. No hassles, no problems.
                    </div>
                </li>
                <li class="pgSidebarItemsBody">
                    <div class="pgSidebarItemsBodyTitle">Everything On Time and On Budget +</div>
                    <div class="pgSidebarItemsBodyButton collapse">+</div>
                    <div class="pgSidebarItemsBodyText">
                        You deserve complete satisfaction with our products and services. We will do
                        whatever it takes to make you happy. No hassles, no problems.
                    </div>
                </li>
                <li class="pgSidebarItemsBody">
                    <div class="pgSidebarItemsBodyTitle">When you need to be Efficient.</div>
                    <div class="pgSidebarItemsBodyButton collapse">+</div>
                    <div class="pgSidebarItemsBodyText">
                        You deserve complete satisfaction with our products and services. We will do
                        whatever it takes to make you happy. No hassles, no problems.
                    </div>
                </li>
            </ul>
            <footer><a href="{$layoutParams.root}about/whyMishusoft" class="readmore text-shadow-button">Read More..</a>
            </footer>
        </article>
    </div>*}
</div>

<div class="flex-group flex-row row col-lg-12 col-md-12 col-sm-12 col-xs-plus-12 col-xs-plus-12">
    {if is_null($layoutParams.mishusoft_session_validity)}
        <article class="flex-column flex-column-inside box-shadow box-shadow-light col-lg-plus-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <header>
                <hgroup>
                    <h5 style="text-transform: uppercase;border-bottom: 2px solid #53b5e5;">Log In</h5>
                </hgroup>
            </header>
            <div id="messageZone" class="messageZone"></div>
            <form role="form" name="LogInForm" id="LogInForm" method="post" action="{$layoutParams.root}user/login">
                <input type="hidden" name="logged" value="1">
                <input id="redirect" type="hidden" name="redirect" value="/">
                <div class="pgSidebarLogInBox">
                    <div class="input-group">
                        <div class="shortElement"><label for="username">Username : </label></div>
                        <div class="largeElement">
                            <input type="text" id="username" name="username" class="input-control" placeholder="Your username.."
                                   pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                                   title="Must contain characters and at least 8 letters from a to z"
                                   required="required"/>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="shortElement"><label for="password">Password : </label></div>
                        <div class="largeElement">
                            <input type="password" id="password" name="password" class="input-control"  autocomplete="off"
                                   placeholder="***************" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                                   title="Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"
                                   required="required"/>
                        </div>
                    </div>
                    <div class="input-group">
                        <label class="input-container">Remember me.
                            <input type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="input-group">
                        <div class="shortElement">
                            <input id="login-button" type="submit" class="button button-outline-primary" value="Log In" style="height: 37px !important;">
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="shortElement">
                            <a href="{$layoutParams.root}user/pswrdRecovery" class="link text-blue">
                                <span class="fa fa-user-times"></span> Forget password?
                            </a>
                            <a href="{$layoutParams.root}user/registration" class="link text-blue">
                                <span class="fa fa-user-plus"></span> Create an new account.
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </article>
    {/if}
    <article class="flex-column flex-column-inside box-shadow box-shadow-light col-lg-plus-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style="{if !is_null($layoutParams.mishusoft_session_validity)}width: 100%;{/if}">
        <header>
            <hgroup>
                <h5 style="text-transform: uppercase;border-bottom: 2px solid #53b5e5;"> WHY CHOOSE US</h5>
            </hgroup>
        </header>
        <ul class="pgSidebarItems">
            <li class="pgSidebarItemsBody">
                <div class="pgSidebarItemsBodyTitle"> We’ll Respond Within 2 hours or Less.</div>
                <div class="pgSidebarItemsBodyButton collapse"> +</div>
                <div class="pgSidebarItemsBodyText">
                    When you call us with a problem in our any product, we ensure you that your phone
                    call will be either answered immediately or
                    returned within 2 hours or less by an experienced technician who can help.
                    If we fail to respond within that time frame, a reduction given on your fixed
                    monthly fee.
                </div>
            </li>
            <li class="pgSidebarItemsBody">
                <div class="pgSidebarItemsBodyTitle">100% Unconditional Satisfaction Guarantee</div>
                <div class="pgSidebarItemsBodyButton collapse">+</div>
                <div class="pgSidebarItemsBodyText">
                    You deserve complete satisfaction with our products and services. We will do
                    whatever it takes to make you happy. No hassles, no problems.
                </div>
            </li>
            <li class="pgSidebarItemsBody">
                <div class="pgSidebarItemsBodyTitle">Everything On Time and On Budget +</div>
                <div class="pgSidebarItemsBodyButton collapse">+</div>
                <div class="pgSidebarItemsBodyText">
                    You deserve complete satisfaction with our products and services. We will do
                    whatever it takes to make you happy. No hassles, no problems.
                </div>
            </li>
            <li class="pgSidebarItemsBody">
                <div class="pgSidebarItemsBodyTitle">When you need to be Efficient.</div>
                <div class="pgSidebarItemsBodyButton collapse">+</div>
                <div class="pgSidebarItemsBodyText">
                    You deserve complete satisfaction with our products and services. We will do
                    whatever it takes to make you happy. No hassles, no problems.
                </div>
            </li>
        </ul>
        <footer>
            <a href="{$layoutParams.root}about/whyMishusoft" class="readmore text-shadow-button">Read More..</a>
        </footer>
    </article>
    {*<article class="box-shadow box-shadow-light">
        <div class="pgSidebarSearchBox">
            <div class="input-group">
                <div class="inputBox">
                    <input id="ms-qck-src" title="Search here" type="search" class="input-control" placeholder="Search Anything.."/>
                </div>
                <div class="buttonBox">
                    <input id="ms-qck-src-do" type="button" class="button button-outline-primary" value="Search">
                </div>
            </div>
        </div>
    </article>*}
</div>

<div class="flex-column row col-lg-12 col-md-12 col-sm-11 col-xs-plus-12 col-xs-plus-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light" style="text-transform: uppercase"><span class="font-weight-bold font-size-20">Treading Products</span></legend>
        <div class="flex-column">
            <h2 style="margin-left: 15px;">
                We have wide network of offices in all major locations to help you with the services we offer
            </h2>
        </div>
        <div class="flex-column">
            <div class="flex-group flex-row row" id="treading-product-home-page">
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Ip Info</div>
                        <div class="simple-card2-text-status">
                            View details about any ip
                        </div>
                        <div class="simple-card2-link">
                            <a href="{$layoutParams.root}addons/ipinfo" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft ERP</div>
                        <div class="simple-card2-text-status">
                            Every organization needs the solution to adopt according to their business.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft HRM</div>
                        <div class="simple-card2-text-status">
                            Human Resource Management (HRM) is the function within an organization…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">VAT Management Software</div>
                        <div class="simple-card2-text-status">
                            VAT Management Software is a business solution approved and enlisted by National.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <a href="{$layoutParams.root}products" class="readmore float-right text-shadow-button">
                Read More..
            </a>
        </footer>
    </fieldset>
</div>


<div class="flex-column row col-lg-12 col-md-12 col-sm-12 col-xs-plus-12 col-xs-plus-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light" style="text-transform: uppercase"><span class="font-weight-bold font-size-20"> OUR SERVICES</span></legend>
        <div class="flex-column">
            <h2 style="margin-left: 15px;">
                We have wide network of offices in all major locations to help you with the services we offer
            </h2>
        </div>
        <div class="flex-column">
            <div class="flex-group flex-row row" id="our-services-home-page">
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft ERP</div>
                        <div class="simple-card2-text-status">
                            Every organization needs the solution to adopt according to their business.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft HRM</div>
                        <div class="simple-card2-text-status">
                            Human Resource Management (HRM) is the function within an organization…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">VAT Management Software</div>
                        <div class="simple-card2-text-status">
                            VAT Management Software is a business solution approved and enlisted by National.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <!--                                    <div class="simple-card2 box-shadow-light">
                                                        <div class="simple-card2-logo">
                                                            <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                                                        </div>
                                                        <div class="simple-card2-text">
                                                            <div class="simple-card2-text-title">School Automation Software</div>
                                                            <div class="simple-card2-text-status">
                                                                School Automation Software is a true web based school solution.…
                                                            </div>
                                                            <div class="simple-card2-link">
                                                                <a href="#" class="simple-card2-link-text link">Preview</a>
                                                            </div>
                                                        </div>
                                                    </div>-->

            </div>
        </div>
        <footer>
            <a href="{$layoutParams.root}services" class="readmore float-right text-shadow-button">Read
                More..</a>
        </footer>
    </fieldset>
</div>

<div class="flex-column row col-lg-12 col-md-12 col-sm-12 col-xs-plus-12 col-xs-plus-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light" style="text-transform: uppercase"><span class="font-weight-bold font-size-20"> OUR Clients</span></legend>
        {*<div class="flex-column">
            <h2 style="margin-left: 15px;">
                We have wide network of offices in all major locations to help you with the
                services we offer
            </h2>
        </div>
        <div class="flex-column">
            <div class="flex-group flex-row row" id="ContentBodyProductCard">
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft ERP</div>
                        <div class="simple-card2-text-status">
                            Every organization needs the solution to adopt according to their business.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">Mishusoft HRM</div>
                        <div class="simple-card2-text-status">
                            Human Resource Management (HRM) is the function within an organization…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <div class="simple-card2 box-shadow box-shadow-light">
                    <div class="simple-card2-logo">
                        <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                    </div>
                    <div class="simple-card2-text">
                        <div class="simple-card2-text-title">VAT Management Software</div>
                        <div class="simple-card2-text-status">
                            VAT Management Software is a business solution approved and enlisted by National.…
                        </div>
                        <div class="simple-card2-link">
                            <a href="#" class="simple-card2-link-text">Preview</a>
                        </div>
                    </div>
                </div>
                <!--                                    <div class="simple-card2 box-shadow-light">
                                                        <div class="simple-card2-logo">
                                                            <span class="simple-card2-logo-image-alt"><i class="fab fa-app-store"></i></span>
                                                        </div>
                                                        <div class="simple-card2-text">
                                                            <div class="simple-card2-text-title">School Automation Software</div>
                                                            <div class="simple-card2-text-status">
                                                                School Automation Software is a true web based school solution.…
                                                            </div>
                                                            <div class="simple-card2-link">
                                                                <a href="#" class="simple-card2-link-text link">Preview</a>
                                                            </div>
                                                        </div>
                                                    </div>-->

            </div>
        </div>*}
        <footer>
            <a href="{$layoutParams.root}clients" class="readmore float-right text-shadow-button">
                Read More..
            </a>
        </footer>
    </fieldset>
</div>
