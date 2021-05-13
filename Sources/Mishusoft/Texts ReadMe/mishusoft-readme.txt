How to install Mishusoft Platform?

Instructions:
1. if you download Mishusoft app and extract to folder, please follow 1 method.
2. if you fetch with empty view, server internal error, mod rewrite error, please follow 2 method.
3. if you fetch with AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::bf48:7041 error, please follow 3 method.
4. if you fetch with http/www-data : user NOT in sudoers error, please follow 4 method.


1. Download and extract::
	[a] wget https://www.mishusoft.com/download/apps/mishusoft/latest/mishusoft.tar.gz
	[b] extract mishusoft.tar.gz to <YOUR_DESTINATION_DIR_ON_SERVER>
	
2. Check and set APACHE configuration::
	[a] Ensure mod_rewrite is enable on <APACHE_SERVER_CONFIG_FILE>
		* Apache configuration file
		  + ubuntu/debian based -> /etc/apache2/apache2.conf 
		  + arch based -> /etc/httpd/conf/httpd.conf
		* Site mod_rewrite configuration
		  + Add Options Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
		  + Change AllowOverride none to AllowOverride All
		* Enable mod_rewrite
		  + ubuntu/debian based: `sudo a2enmod rewrite`
		  + arch based: Uncomment, in apache configuration file, the line `LoadModule rewrite_module modules/mod_rewrite.so`
		* Restart apache
		  + ubuntu/debian based: `sudo service apache2 restart`
		  + arch based: `sudo systemctl restart httpd`

3. Check and set APACHE configuration:: [Advance]
	[a] Ensure mod_rewrite is enable on <APACHE_SERVER_CONFIG_FILE>
		* Apache configuration file
		  + ubuntu/debian based -> /etc/apache2/apache2.conf 
		  + arch based -> /etc/httpd/conf/httpd.conf
		* Site mod_rewrite configuration
		  + if commented, uncomment it #ServerName www.example.com:80 or #ServerName localhost
		* Restart apache
		  + ubuntu/debian based: `sudo service apache2 restart`
		  + arch based: `sudo systemctl restart httpd`


4. Check and set user permissions::
	[a] * All distro
		  + $ ll <YOUR_DESTINATION_DIR_ON_SERVER> [if this command not found, check is available it on ~/.bashrc]
		  + $ sudo chmod -R 777 * <mishusoft-app-dir> [set permissions for all]
		* Distro based
		  + ubuntu/debian based -> $ grep ^www-data /etc/group [output www-data:x:33:]
		  + arch based -> $ grep 'http' /etc/group [output http:x:33:]
		* add user in group
		  + ubuntu/debian based -> $sudo adduser $USER www-data
		  + arch based -> $ $sudo adduser $USER http
		* set user's group permissions
		  + ubuntu/debian based -> $ sudo chown $USER:www-data <YOUR_DESTINATION_DIR_ON_SERVER>
		  + arch based -> $ sudo chown $USER:http <YOUR_DESTINATION_DIR_ON_SERVER>
		* Restart apache
		  + ubuntu/debian based: `sudo service apache2 restart`
		  + arch based: `sudo systemctl restart httpd`