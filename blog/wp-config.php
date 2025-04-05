<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ddcbu7og2' );

/** Database username */
define( 'DB_USER', 'ddcbu7og2' );

/** Database password */
define( 'DB_PASSWORD', 'vc3g5qz9' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$Q5nGW$ Rqs|N_Ig-Q[S/]9;f,$3x6.Qw,.MOQX`%i54QclEvf3GY|Zoh-q?<TMI' );
define( 'SECURE_AUTH_KEY',  '[$r C$:CbKn4WzOtu:*T{UCF_6C.@L/6zC|=%EOm4-yvkmZyG%k=dP-;ae#R@a35' );
define( 'LOGGED_IN_KEY',    'wdqDL$%wY464mdyBA0c?)X:y,+?8ru$k}T9qC8_h+,OA0Vl~SOpsgZ]QqmHE4t[T' );
define( 'NONCE_KEY',        'i#X9=+lnVt^c+)|yW6uKzmtR)Sm{nL1 q}Ec,buWE,P}D9{6|q,Jfp!j0,7?%1}S' );
define( 'AUTH_SALT',        '.jy_a>DZ/w%9,^_%jwkM^wbw^(|uG2^CsQkocqyGUIs>,=%I;!e4g@x1knl)+t2-' );
define( 'SECURE_AUTH_SALT', '5[sAN}8~QQ7Klu5!($z9a4N6)#=p#[g4g?^dPfZ[B0ZE|%J<}NGva6PJ,9SeZEBS' );
define( 'LOGGED_IN_SALT',   'oF)hpRT|yT+d}b25Z]xpo=4{bn~JE~PNNd~ 9}PT(Pzw]f7mC-8c`rvKq@7Q6&{I' );
define( 'NONCE_SALT',       '[/ibr(}/?<5J+DrsV*@W,dbn?}H#7|a%$p1YM-(5TG!F7G|2j9w~@WG4XLR-6J}(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
