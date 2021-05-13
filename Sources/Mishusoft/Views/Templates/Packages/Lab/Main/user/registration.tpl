<div id="flex-center" class="flex-center">
    <div class="registrationBox box-shadow box-shadow-light" data-height="690">
        <img alt="logo" src="{$layoutParams.publicIMG}img-avatar3.png" class="userIconImage">
        <h2>Create a new account</h2>
        <hr/>
        <div id="messageZone" class="userarea messageZone">
            {if isset($notify) }
                <div class="box-message box-notify box-shadow-light">{$notify}</div>
            {/if}
            {if isset($error) }
                <div class="box-message box-danger box-shadow-light">{$error}</div>
                <noscript>
                    <style>
                        .flex-center {
                            height: 760px !important;
                        }
                    </style>
                </noscript>
            {/if}
            {if isset($success) }
                <div class="box-message box-danger box-shadow-light">{$success}</div>
                <noscript>
                    <style>
                        .flex-center {
                            height: 850px !important;
                        }
                    </style>
                </noscript>
            {/if}
        </div>
        <form id="registrationForm" role="form" name="registrationForm" method="post" action="{$layoutParams.root}user/registration">
            <input type="hidden" id="regs" name="regs" value="1">
            <input type="hidden" id="time" name="time" value="{time()}">
            <table class="table text-align-left">
                <tr>
                    <td style="width: 50%;padding-right: 5px;">
                        <label for="first-name">First name (<span class="text-danger">*</span>)</label>
                        <input type="text" id="first-name" name="first-name" class="input-control" placeholder="First name.."
                               pattern="{literal}[a-zA-Z]{4,}${/literal}" autocomplete="off"
                               title="Must contain characters and at least 4 letters from a to z"
                               required="required" value="{if isset($submitted_data)}{$submitted_data['first-name']}{/if}"/>
                    </td>
                    <td style="width: 50%; padding-left:5px;">
                        <label for="last-name">Last name (<span class="text-danger">*</span>)</label>
                        <input type="text" id="last-name" name="last-name" class="input-control" placeholder="Last name.."
                               pattern="{literal}[a-zA-Z]{4,}${/literal}" autocomplete="off"
                               title="Must contain characters and at least 4 letters from a to z"
                               required="required" value="{if isset($submitted_data)}{$submitted_data['last-name']}{/if}"/>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;" colspan="2">
                        <label for="email">Email address (<span class="text-danger">*</span>)</label>
                        <input type="email" id="email" name="email" class="input-control" placeholder="Email address.."
                               pattern="{literal}[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}${/literal}" autocomplete="off"
                               title="Must contain at characters@characters.domain (characters followed by an @ sign, followed by more characters, and then a '.'. After the '.' sign, add at least 2 letters from a to z"
                               required="required" value="{if isset($submitted_data)}{$submitted_data.email}{/if}"/>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%;" colspan="2">
                        <label for="username">Username (<span class="text-danger">*</span>)</label>
                        <input type="text" id="username" name="username" class="input-control" placeholder="Your username.."
                               pattern="{literal}[a-z0-9]{8,}${/literal}" autocomplete="off"
                               title="Must contain characters and at least 8 letters from a to z"
                               required="required" value="{if isset($submitted_data)}{$submitted_data.username}{/if}"/>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; padding-right:5px;">
                        <label for="password">Password (<span class="text-danger">*</span>)</label>
                        <input type="password" id="password" name="password" class="input-control"  autocomplete="off"
                               placeholder="New password" pattern="{literal}(?=.*\d)(?=.*[@_])(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                               title="Must contain at least one  number and one uppercase and lowercase letter and at least 6 or more characters"
                               required="required" value="{if isset($submitted_data)}{$submitted_data.password}{/if}"/>
                    </td>
                    <td style="width: 50%; padding-left:5px;">
                        <label for="c_password">Confirm Password (<span class="text-danger">*</span>)</label>
                        <input type="password" id="c_password" name="c_password" class="input-control"  autocomplete="off"
                               placeholder="Confirm password" pattern="{literal}(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}{/literal}"
                               title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                               required="required" value="{if isset($submitted_data)}{$submitted_data.c_password}{/if}"/>
                    </td>
                </tr>
                <tr>
                    <td style="width: 50%; padding-right:5px;">
                        <label for="gender">Gender (<span class="text-danger">*</span>)</label>
                        <select title="Select gender" id="gender" name="gender" class="input-control" required="required">
                            <option value=""> -- select one --</option>
                            <option value="female"> Female </option>
                            <option value="male"> Male </option>
                            <option value="both"> Both </option>
                            <option value="others"> Others </option>
                        </select>
                    </td>
                    <td style="width: 50%; padding-left: 5px;">
                        <label for="dateOfBirth">Date of birth (<span class="text-danger">*</span>)</label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" class="input-control" required="required"
                               value="{if isset($submitted_data)}{$submitted_data.dateOfBirth}{/if}"/>
                    </td>
                </tr>
            </table>
            <div class="row">
                <div class="float-left text-left">
                    <label class="input-container">I agree with all <a href="{$layoutParams.root}about/terms" class="link">Terms and Conditions</a>,  <a href="{$layoutParams.root}about/policy" class="link">Privacy Policy</a>.
                        <input id="agree" name="agree" type="checkbox" value="1" required="required">
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div class="float-right text-right">
                    <input type="submit" id="signup-button" name="signup" class="button button-primary" value="Sign Up"/>
                </div>
            </div>
            <div class="row" style="margin-top: 10px">
                <a href="{$layoutParams.root}user/login" class="link"><span class="fa fa-user"></span> Log In</a> ||
                <a href="{$layoutParams.root}user/pswrdRecovery" class="link">
                    <span class="fa fa-user-times"></span>
                    Forget password?
                </a>
                <br/> <br/>
                <a href="{$layoutParams.root}" class="link">
                    <span class="fa fa-arrow-left"></span> Go back home.
                </a>
            </div>
        </form>
    </div>
</div>
