{if isset($dynamic_content)}
    {eval $dynamic_content}
{else}
    <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-bottom-10">
        <div class="flex-column flex-box-center">
            <h1 style="font-size: 600%;font-weight: bold;">404</h1>
            <div class="flex-column" style="font-size: 25px;">
                Content not found!!
            </div>
        </div>
    </div>
{/if}