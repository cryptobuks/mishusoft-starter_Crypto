<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <fieldset class="box-shadow box-shadow-light">
        <legend class="box-shadow box-shadow-light">File Source Editor</legend>
        <div class="row">
            <div id="message">
                {if isset($error)}<div class="box-message box-danger box-shadow-light">{$error}</div>{/if}
                {if isset($success)}<div class="box-message box-success box-shadow-light">{$success}</div>{/if}
            </div>
            <form class="flex-column" method="post" action="" enctype="multipart/form-data">
                <input type="hidden" name="security-code" value="1">
                <input type="hidden" name="page-id" id="page-id" value="{if isset($fileId)}{$fileId}{/if}">
                <label>
                    <div class="flex-group flex-row">
                        File Info: &emsp;
                        <div class="flex-row" style="width: 20%;">File : {if isset($fileName)}{$fileName}{else}{'NO FILE'}{/if}</div>
                        <div class="flex-row">URL : {if isset($fileURI)}{$fileURI}{else}{'NO URI'}{/if}</div>
                    </div>
                    <textarea name="content" id="page-content" style="height: 450px;" class="input-control">{if isset($fileSource)}{$fileSource}{else}{''}{/if}{if isset($submitted_data)}{$submitted_data.content}{else}{''}{/if}</textarea>
                </label>
                <input type="submit" id="save-button" name="save" class="button button-primary" value="Save">
            </form>
        </div>
    </fieldset>
</div>