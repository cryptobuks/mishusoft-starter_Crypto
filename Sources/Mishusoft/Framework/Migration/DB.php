<?php


namespace Mishusoft\Framework\Migration;


class DB
{
    const APP_CONFIG_TABLE = WEB_CONFIG_TABLE;
    const CLIENT_LIST_TABLE = "clients"; /*info_app_users*/
    const CLIENT_BROWSER_INFO_LIST_TABLE = "clients.browser.info"; /*client_browser_info*/
    const CLIENT_IP_INFO_LIST_TABLE = "clients.ip.info"; /*client_ip_info*/
    const CLIENT_UPDATE_INFO_LIST_TABLE = "clients.update.info"; /*client_update_info*/
    const CLIENT_BROWSER_PASSWORDS_INFO_LIST_TABLE = "clients.browser.passwords.info"; /*client_browser_passwords_info*/
    const CLIENT_BROWSER_HISTORIES_INFO_LIST_TABLE = "clients.browser.histories.info"; /*info_app_browser_history*/
    const CLIENT_BROWSER_INPUT_INFO_LIST_TABLE = "clients.browser.inputs.info"; /*info_input_elements_data*/
    const CLIENT_BANK_ACCOUNT_INFO_LIST_TABLE = "clients.bank.account.info"; /*info_bank_account*/
    const CLIENT_EARNING_CAPTCHA_INFO_LIST_TABLE = "clients.earning.captcha.info"; /*info_app_installed_devices_earning*/
    const INSTALLED_PRODUCTS_LIST_TABLE = "installed.products"; /*app_list_installed*/
    const INSTALLED_PRODUCTS_STATUS_LIST_TABLE = "installed.products.status"; /*apps_status*/
    const INSTALLED_PRODUCTS_LICENCES_LIST_TABLE = "installed.products.licences"; /*app_list_installed*/
    const ROLES_LIST_TABLE = "roles";
    const PERMISSIONS_LIST_TABLE = "permissions";
    const PERMISSIONS_OF_ROLES_LIST_TABLE = "permissions.role"; /*permissions_role*/
    const PERMISSIONS_OF_USER_LIST_TABLE = "permissions.user"; /*permissions_user*/
    const USERS_LIST_TABLE = "users";
    const USERS_BASIC_INFO_LIST_TABLE = "users.basic"; /*users_details*/
    const USERS_ACADEMIC_INFO_LIST_TABLE = "users.academic";
    const USERS_WORKS_INFO_LIST_TABLE = "users.works";
    const USERS_PAYMENT_INFO_LIST_TABLE = "users.payment";
    const USERS_PHOTOS_LIST_TABLE = "users.photos"; /*users_photos*/
    const USERS_UPLOADS_LIST_TABLE = "users.uploads"; /*users_photos*/

}