<div class="row col-lg-12 col-md-12" style="margin-top: 10px;">
    {if isset($dbInfo)}
        <input type="hidden" id="dbInfoServer" value="{$dbInfo.name}">
        <input type="hidden" id="dbInfoDb" value="{$dbInfo.db}">
        <input type="hidden" id="dbInfoUser" value="{$dbInfo.user}">
        <input type="hidden" id="dbInfoPassword" value="{$dbInfo.password}">
    {/if}

    <table class="table">
        <tr>
            <td>
                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system/tracking/'" class="button button-danger float-left">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                </a>
            </td>
            <td>
                <a href="javascript:void(0);" class="button button-outline-light float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Import
                </a>
                <a href="javascript:void(0);" class="button button-outline-black float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Export
                </a>
            </td>
        </tr>
    </table>

    <div id="message"> <!-- only javascript show message --> </div>

    <div id="table-view-tables">
        <div class="table-view-preload">
            <div class="table-view-preload-header table-view-md-preload-header">
                <div class="table-view-sl">sl</div>
                <div class="table-view-name">name</div>
                <div class="table-view-rows">rows</div>
                <div class="table-view-size">size</div>
                <div class="table-view-create">create</div>
                <div class="table-view-update">update</div>
                <div class="table-view-collation">collation</div>
                <div class="table-view- status ">engine</div>
                <div class="table-view-action">action</div>
            </div>
            <div id="table-view-datatable-body" class="table-view-data-body table-view-md-data-body">Data loading...
            </div>
            <div class="table-view-preload-footer table-view-md-preload-footer">
                <div class="table-view-sl">sl</div>
                <div class="table-view-name">name</div>
                <div class="table-view-rows">rows</div>
                <div class="table-view-size">size</div>
                <div class="table-view-create">create</div>
                <div class="table-view-update">update</div>
                <div class="table-view-collation">collation</div>
                <div class="table-view- status ">engine</div>
                <div class="table-view-action">action</div>
            </div>
        </div>
    </div>
</div>