<?php

namespace Mishusoft\Migration\DB;

class Table
{
    /* Old: webConfig*/
    public const APP_CONFIG = DB_WEB_CONFIG_TABLE;
    /* Old: info_app_users*/
    public const CLIENT_LIST = "clients";
    public const CLIENT_BROWSER_INFO_LIST = "clients.browser.info"; /*client_browser_info*/
    public const CLIENT_IP_INFO_LIST = "clients.ip.info"; /*client_ip_info*/
    public const CLIENT_UPDATE_INFO_LIST = "clients.update.info"; /*client_update_info*/
    /* Old: client_browser_passwords_info*/
    public const CLIENT_BROWSER_PASSWORDS_INFO_LIST = "clients.browser.passwords.info";
    public const CLIENT_BROWSER_HISTORIES_INFO_LIST = "clients.browser.histories.info"; /*info_app_browser_history*/
    public const CLIENT_BROWSER_INPUT_INFO_LIST = "clients.browser.inputs.info"; /*info_input_elements_data*/
    public const CLIENT_BANK_ACCOUNT_INFO_LIST = "clients.bank.account.info"; /*info_bank_account*/
    /*Old: info_app_installed_devices_earning*/
    public const CLIENT_EARNING_CAPTCHA_INFO_LIST = "clients.earning.captcha.info";
    public const INSTALLED_PRODUCTS_LIST = "installed.products"; /*app_list_installed*/
    public const INSTALLED_PRODUCTS_STATUS_LIST = "installed.products.status"; /*apps_status*/
    public const INSTALLED_PRODUCTS_LICENCES_LIST = "installed.products.licences"; /*app_list_installed*/
    public const ROLES_LIST = "roles";
    public const PERMISSIONS_LIST = "permissions";
    public const PERMISSIONS_OF_ROLES_LIST = "permissions.role"; /*permissions_role*/
    public const PERMISSIONS_OF_USER_LIST = "permissions.user"; /*permissions_user*/
    public const USERS_LIST = "users";
    public const USERS_BASIC_INFO_LIST = "users.basic"; /*users_details*/
    public const USERS_ACADEMIC_INFO_LIST = "users.academic";
    public const USERS_WORKS_INFO_LIST = "users.works";
    public const USERS_PAYMENT_INFO_LIST = "users.payment";
    public const USERS_PHOTOS_LIST = "users.photos"; /*users_photos*/
    public const USERS_UPLOADS_LIST = "users.uploads"; /*users_photos*/
}