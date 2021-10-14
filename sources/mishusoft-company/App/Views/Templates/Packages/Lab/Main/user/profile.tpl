<style>
    .content{
        padding: 0;
    }

</style>

<div class="row">
    <div class="userProfileCover">
        <img src="{$layoutParams.publicIMG}img-lights.jpg" alt="Profile cover photo">
        <div class="userProfileCoverPhotoChanger">
            <label>
                <input type="checkbox" style="display: none"/>
                <i class="fa fa-camera" title="Change your cover photo"></i> Change cover photo
            </label>
        </div>
        {*<div class="userProfileCoverCaption">Welcome to my profile</div>*}
        <div class="userProfilePicture">
            <img alt="photo" src="{$layoutParams.publicIMG}img-avatar3.png">
        </div>
        <div class="userFullName">
            <a href="{$layoutParams.root}user/profile/{preg_replace('/msu_/is', '$1', Session::get('username'))}">{$user.f_name}
                &nbsp;{$user.l_name}</a>
        </div>
        <div class="userProfileAdvanceMenu">
            <ul class="userProfileAdvanceMenuItem">
                <li><a href="#">Edit My Profile</a></li>
                <li><a href="#">Activity Log</a></li>
            </ul>
        </div>
    </div>

    <div class="userProfileMenuBar">
        <ul class="userProfileMenu">
            <li><a href="#">Timeline</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">More</a></li>
        </ul>
    </div>
    <div class="clear-padding col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12" style="padding: 0">
        <div class="col-lg-plus-4 col-lg-4 col-md-3">
            <div class="UserAreaShadow user-describe-md">
                <ul class="userShortDescription">
                    <li>
                        <div class="describe-icon"><i class="fa fa-university"></i></div>
                        <div class="describe-title">CEO at Mishu software inc.</div>
                    </li>
                    <li>
                        <div class="describe-icon"><i class="fa fa-home"></i></div>
                        <div class="describe-title">Live in Jessore</div>
                    </li>
                    <li> <div class="describe-icon"><i class="fa fa-male"></i></div>
                        <div class="describe-title">Married</div>
                    </li>
                    <li> <div class="describe-icon"><i class="fa fa-flag"></i></div>
                        <div class="describe-title">Followed by 14M people</div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-lg-plus-8 col-lg-8 col-md-9 col-sm-12 col-xs-12 col-xs-plus-12">

            <div class="col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12 newPost UserAreaShadow">
                <div class="col-lg-plus-2 col-lg-2 col-md-2">Title</div>
                <div class="col-lg-plus-10 col-lg-10 col-md-10"><input title="Title" id="post-title" type="text" class="input-control"/></div>
                <div class="col-lg-plus-2 col-lg-2 col-md-2">Content</div>
                <div class="col-lg-plus-10 col-lg-10 col-md-10"><textarea title="Message" id="post-content" class="input-control"></textarea></div>
                <input type="submit" class="button button-primary float-right"/>
            </div>

            <div class="col-lg-plus-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xs-plus-12 OLDPost UserAreaShadow">
                <div class="postHeader">
                    <div class="postUserProfilePhoto"></div>
                </div>
                <p>Terabyte (TB) is a digital information measurement unit which is going to be extensively used in the
                    nearest future for measuring the size of computer RAM, etc., but now it is used for measuring the
                    amount of digital information in online libraries, digital archives, and so on. 1 terabyte is equal
                    to 1000 gigabytes, or 1012 bytes. However, in terms of information technology or computer science, 1
                    TB is 240 or 10244 bytes, which is equal to 1,099,511,627,776 bytes.</p>
            </div>
        </div>
    </div>
</div>
