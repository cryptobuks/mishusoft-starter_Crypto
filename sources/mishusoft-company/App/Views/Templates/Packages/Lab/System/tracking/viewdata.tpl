<div id="table-view-datatable" class="row col-lg-12 col-md-12" style="margin-top: 10px;">
    {if isset($dbInfo)}
        {*{$dbInfo|print_r}*}
        <input type="hidden" id="dbInfoServer" value="{$dbInfo.name}">
        <input type="hidden" id="dbInfoDb" value="{$dbInfo.db}">
        <input type="hidden" id="dbInfoUser" value="{$dbInfo.user}">
        <input type="hidden" id="dbInfoPassword" value="{$dbInfo.password}">
    {/if}
    {if isset($tableName)}
        <input type="hidden" id="runtimeTableName" value="{$tableName}">
    {/if}


    {date("Y-m-d H:i:s", time())}
    <br/>
    {date("Y-m-d H:i:s", '1595346365')}
    <br/>
    {time()}
    <br/>

    //1595346365
    <br/>
    //1595345365
    <br/>
    ?v=3&active=1595431365

    <table class="table">
        <tr>
            <td>
                <a href="javascript:void(0);" onclick="window.location = _root_ + 'system/tracking/view/{$dbInfo.db}'"
                   class="button button-danger float-left">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                </a>
            </td>
            <td>
                <a id="import-table" href="javascript:void(0);" class="button button-outline-light float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Import
                </a>
                <a id="import-table" href="javascript:void(0);" class="button button-outline-black float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Export
                </a>
                <a id="rename-table" href="javascript:void(0);" class="button button-outline-info float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Rename
                </a>
                <a id="show-create-table" href="javascript:void(0);" class="button button-outline-success float-right">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i> Show Create
                </a>
            </td>
        </tr>
    </table>

    <div id="message"> <!-- only javascript show message --> </div>

    {if isset($tableName)}
        {if $tableName ==='apps'}
            <div id="table-view-apps">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-md-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-category">category</div>
                        <div class="table-view-url">url</div>
                        <div class="table-view-icon">icon</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-c-status ">currently</div>
                        <div class="table-view-quick-access">quick access</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-md-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-md-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-category">category</div>
                        <div class="table-view-url">url</div>
                        <div class="table-view-icon">icon</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-c-status">currently</div>
                        <div class="table-view-quick-access ">quick access</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='apps_status'}
            <div id="table-view-apps-status">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-md-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-platform">platform</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-last-active">last active</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-md-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-md-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-platform">platform</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-last-active">last active</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='app_databases'}
            <div id="table-view-app-databases">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-md-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">server</div>
                        <div class="table-view-db">db</div>
                        <div class="table-view-name">user</div>
                        <div class="table-view-password">password</div>
                        <div class="table-view-update">update</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-md-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-md-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">server</div>
                        <div class="table-view-db">db</div>
                        <div class="table-view-name">user</div>
                        <div class="table-view-password">password</div>
                        <div class="table-view-update">update</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='app_licences'}
            <div id="table-view-apps-licences">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-sm-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-client">client</div>
                        <div class="table-view-app">app</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-licence-type">type</div>
                        <div class="table-view-limit">limit</div>
                        <div class="table-view-limit-base">limit base</div>
                        <div class="table-view-issue">issue</div>
                        <div class="table-view-update">update</div>
                        <div class="table-view-next-update">next</div>
                        <div class="table-view-expire">expire</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-sm-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-sm-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-client">client</div>
                        <div class="table-view-app">app</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-licence-type">type</div>
                        <div class="table-view-limit">limit</div>
                        <div class="table-view-limit-base">limit base</div>
                        <div class="table-view-issue">issue</div>
                        <div class="table-view-update">update</div>
                        <div class="table-view-next-update">next</div>
                        <div class="table-view-expire">expire</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='app_licence_payment'}
            <div id="table-view-app-licence-payment">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-sm-upd-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-user">user</div>
                        <div class="table-view-app">app</div>
                        <div class="table-view-ip-address">ip address</div>
                        <div class="table-view-payment-method-id">id</div>
                        <div class="table-view-token">token</div>
                        <div class="table-view-payment-amount">amount</div>
                        <div class="table-view-currency">currency</div>
                        <div class="table-view-payment-type">type</div>
                        <div class="table-view-payment-type">method</div>
                        <div class="table-view-payment-date-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-sm-upd-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-sm-upd-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-user">user</div>
                        <div class="table-view-app">app</div>
                        <div class="table-view-ip-address">ip address</div>
                        <div class="table-view-payment-method-id">id</div>
                        <div class="table-view-token">token</div>
                        <div class="table-view-payment-amount">amount</div>
                        <div class="table-view-currency">currency</div>
                        <div class="table-view-payment-type">type</div>
                        <div class="table-view-payment-type">method</div>
                        <div class="table-view-payment-date-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='app_list_installed'}
            <div id="table-view-apps-list-installed">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-sm-md-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-platform">platform</div>
                        <div class="table-view-licence-key">licence key</div>
                        <div class="table-view-issue">issue</div>
                        <div class="table-view-expire">expire</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-sm-md-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-sm-md-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-platform">platform</div>
                        <div class="table-view-licence-key">licence key</div>
                        <div class="table-view-issue">issue</div>
                        <div class="table-view-expire">expire</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='app_social_links'}
            <div id="table-view-app-social-links">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-xl-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-profile">profile</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-xl-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-xl-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-profile">profile</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='block_list'}
            <div id="table-view-block-list">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xxl-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xxl-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xxl-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='branches'}
            <div id="table-view-branches">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-xl-upd-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-location">location</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-xl-upd-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-xl-upd-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-status">status</div>
                        <div class="table-view-location">location</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='branch_user'}
            <div id="table-view-branches-user">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-xl-upd-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">branch</div>
                        <div class="table-view-user">user</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-xl-upd-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-xl-upd-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">branch</div>
                        <div class="table-view-user">user</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='chatMessages'}
            <div id="table-view-chat-messages">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-xl-upd2-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-sender">sender</div>
                        <div class="table-view-receiver">receiver</div>
                        <div class="table-view-message">message</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-xl-upd2-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-xl-upd2-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-sender">sender</div>
                        <div class="table-view-receiver">receiver</div>
                        <div class="table-view-message">message</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='client_browser_info'}
            <div id="table-view-client-browser-info">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-sm-xl-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-browser">browser</div>
                        {*<div class="table-view-status">status</div>*}
                        {*<div class="table-view-architecture">architecture</div>*}
                        {*<div class="table-view-app-version">app version</div>*}
                        <div class="table-view-processor">processor</div>
                        {*<div class="table-view-ram">ram</div>*}
                        <div class="table-view-device-name">device name</div>
                        <div class="table-view-width">width</div>
                        <div class="table-view-height">height</div>
                        <div class="table-view-user-agent">user agent</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-sm-xl-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-sm-xl-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-browser">browser</div>
                        {*<div class="table-view-status">status</div>*}
                        {*<div class="table-view-architecture">architecture</div>*}
                        {*<div class="table-view-app-version">app version</div>*}
                        <div class="table-view-processor">processor</div>
                        {*<div class="table-view-ram">ram</div>*}
                        <div class="table-view-device-name">device name</div>
                        <div class="table-view-width">width</div>
                        <div class="table-view-height">height</div>
                        <div class="table-view-user-agent">user agent</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='client_ip_info'}
            <div id="table-view-client-ip-info">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xs-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-city">city</div>
                        <div class="table-view-country-name">country</div>
                        <div class="table-view-continent-name">continent</div>
                        <div class="table-view-architecture">L/C</div>
                        <div class="table-view-postal">postal</div>
                        <div class="table-view-calling-code">c_code</div>
                        <div class="table-view-emoji-flag">flag</div>
                        <div class="table-view-asn-asn">asn</div>
                        <div class="table-view-asn-domain">ISP</div>
                        <div class="table-view-languages">languages</div>
                        <div class="table-view-time-zone-abbr">TZ</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xs-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xs-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-ip">ip</div>
                        <div class="table-view-city">city</div>
                        <div class="table-view-country-name">country</div>
                        <div class="table-view-continent-name">continent</div>
                        <div class="table-view-architecture">L/C</div>
                        <div class="table-view-postal">postal</div>
                        <div class="table-view-calling-code">c_code</div>
                        <div class="table-view-emoji-flag">flag</div>
                        <div class="table-view-asn-asn">asn</div>
                        <div class="table-view-asn-domain">ISP</div>
                        <div class="table-view-languages">languages</div>
                        <div class="table-view-time-zone-abbr">TZ</div>
                        <div class="table-view-time">time</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {elseif $tableName ==='client_update_info'}
            <div id="table-view-client-update-info">
                <div class="table-view-preload">
                    <div class="table-view-preload-header table-view-xl-preload-header">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-message">message</div>
                        <div class="table-view-last-active">last active</div>
                        <div class="table-view-action">action</div>
                    </div>
                    <div id="table-view-datatable-body" class="table-view-data-body table-view-xl-data-body">
                        Data loading...
                    </div>
                    <div class="table-view-preload-footer table-view-xl-preload-footer">
                        <div class="table-view-sl">sl</div>
                        <div class="table-view-name">name</div>
                        <div class="table-view-version">version</div>
                        <div class="table-view-ip">ip address</div>
                        <div class="table-view-browser">browser</div>
                        <div class="table-view-message">message</div>
                        <div class="table-view-last-active">last active</div>
                        <div class="table-view-action">action</div>
                    </div>
                </div>
            </div>
        {else}
            {'UI not design for '}{$tableName}
        {/if}
    {/if}
</div>